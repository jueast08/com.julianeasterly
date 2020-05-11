/**
 * @brief This class is envolopes the IntersectionObserver for the project which primarily uses this tool to animate imtems once a root has come into view
 */
export default class ScrollIntoViewObserver {
  /**
   * @param {Array} querySelectorResults : an array of DOM elements. you should be passing document.querySelector('[query]')
   * @param {String} _classToAdd: String representing the animation class to add
   * @param {Object} intersectionObserverOptions: Objet representing options as described here : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  constructor(
    querySelectorResults,
    modifierClass,
    intersectionObserverOptions = {}
  ) {
    this._querySelectorResults = querySelectorResults;
    this._modifierClass = modifierClass;
    this._intersectionObserverOptions = intersectionObserverOptions;
    this._observer = null;
    this._actionArray = [];
    this._triggerCritera = null;
    this._createObserver();
  }

  /**
   *
   * @param {Array} querySelectorResults : an array of DOM elements. you should be passing document.querySelector('[query]')
   * @param {Boolean} addOnInView : determines whether the class modifier should be added when the querySelector comes into view
   * @param {*} removeOnOutOfView : determines whether the class modifier should be removed when the querySelector leaves view
   */
  observe(querySelectorResults, addOnInView = true, removeOnOutOfView = true) {
    if (this._observer === null) {
      throw "Observer has not been initiated";
    }
    this._observer.observe(querySelectorResults);
    this._actionArray.push({
      addOnInView: addOnInView,
      removeOnOutOfView: removeOnOutOfView,
    });
  }

  /**
   * Destroy the observer. This should be done in the destroy section of the component
   */
  disconnect() {
    this._observer.disconnect();
  }

  _createObserver() {
    if (!this.isIntersectionObserverAvailable) {
      throw "Intersection Observer is not available in this browers.";
    }

    if (this._observer === null) {
      this._observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => this._handleOnScroll(entry, index));
      }, this._intersectionObserverOptions);
    }
    return this._observer;
  }

  _handleOnScroll(entry, index) {
    console.log(entry);
    console.log(this._querySelectorResults);
    console.log(this._modifierClass);

    if (this._triggerEvent(entry) && this._actionArray[index].addOnInView) {
      this._addAnimationClasses();
    } else if (this._actionArray[index].removeOnOutOfView) {
      this._removeAnimationClasses();
    }
  }

  _triggerEvent(entry) {
    if (this._triggerCritera !== null) {
      return this._triggerCritera(entry);
    } else {
      return entry.isIntersecting;
    }
  }

  _addAnimationClasses() {
    if (typeof this._querySelectorResults === Array) {
      this._querySelectorResults.forEach((element) => {
        element.classList.add(this._modifierClass);
      });
    } else {
      this._querySelectorResults.classList.add(this._modifierClass);
    }
  }

  _removeAnimationClasses() {
    if (typeof this._querySelectorResults === Array) {
      this._querySelectorResults.forEach((element) => {
        element.classList.remove(this._modifierClass);
      });
    } else {
      this._querySelectorResults.classList.remove(this._modifierClass);
    }
  }

  get isIntersectionObserverAvailable() {
    return (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    );
  }

  get interSectionObserverOptions() {
    return this._interSectionObserverOptions;
  }

  set intersectionObserverOptions(intersectionObserverOptions) {
    if (typeof this._intersectionObserverOptions !== "object") {
      throw "intersectionObserverOptions must be an object";
    } else {
      this._intersectionObserverOptions = intersectionObserverOptions;
    }
  }

  /**
   * This sets the condition that will trigger the modification of classes.
   * By default, this is entries[0].isIntersecting function from the Intersection Observer API
   * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   * @param {Function} booleanTriggerFunction : A boolean function that will be tested entry value. The parameter entry[n] from the Intersection Observer API
   */
  set triggerCritera(booleanTriggerFunction) {
    if (typeof booleanTriggerFunction !== "function") {
      throw "booleanTriggerFunction must be a function that takes a entry and returns a boolean";
    }
    this._triggerCritera = booleanTriggerFunction;
  }
}
