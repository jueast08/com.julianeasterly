/**
 * @brief This class is envolopes the IntersectionObserver for the project which primarily uses this tool to animate imtems once a root has come into view
 */
export default class IntersectObserverHelpers {
  /**
   * @param {Array} elements : an array of DOM elements. you should be passing document.querySelector('[query]')
   * @param {String} _classToAdd: String representing the animation class to add
   * @param {Object} intersectionObserverOptions: Objet representing options as described here : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  constructor(elements, modifierClass, intersectionObserverOptions = {}) {
    this._elements = elements;
    this._modifierClass = modifierClass;
    this._intersectionObserverOptions = intersectionObserverOptions;
    this._observer = null;
    this._actionArray = [];
    this._triggerCritera = null;
    this._createObserver();
  }

  /**
   *
   * @param {Array, Element} elements : an array of DOM elements or a Single Element. you should be passing document.querySelectoror document.querySelctorAll
   * @param {Boolean} addOnInView : determines whether the class modifier should be added when the querySelector comes into view
   * @param {Boolean} removeOnOutOfView : determines whether the class modifier should be removed when the querySelector leaves view
   */
  observe(elements, addOnInView = true, removeOnOutOfView = true) {
    if (this._observer === null) {
      throw "Observer has not been initiated";
    }
    this._observer.observe(elements);
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
    if (this._elements instanceof NodeList) {
      this._elements.forEach((element) => {
        element.classList.add(this._modifierClass);
      });
    } else {
      this._elements.classList.add(this._modifierClass);
    }
  }

  _removeAnimationClasses() {
    if (this._elements instanceof NodeList) {
      this._elements.forEach((element) => {
        element.classList.remove(this._modifierClass);
      });
    } else {
      this._elements.classList.remove(this._modifierClass);
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

export class IntersectObserverHelpersIterator {
  /**
   *
   * @param {Array, NodeList, DomElement} elements : This must either be a DomElement resulting from document.querySelector or a similar funciton, a NodeList resulting from document.querySelectorAll or a Array of Dom Elements and NodeLists
   * @param {*} modifierBEM : the BEM Modifier (--modifier) that will be appended to the first class name of each element when an intersection is detected
   * @param {Object} intersectionObserverOptions: Objet representing options as described here : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   * @param {Boolean} addOnInView : determines whether the class modifier should be added when the querySelector comes into view
   * @param {Boolean} removeOnOutOfView : determines whether the class modifier should be removed when the querySelector leaves view
   * @param {*} addModifierOnFail : Determines if the BEM modifier should be added automatically if the observer fails to be created for a reason or another
   */
  constructor(
    elements,
    modifierBEM,
    intersectionObserverOptions = {},
    addOnInView = true,
    removeOnOutOfView = false,
    addModifierOnFail = true
  ) {
    this._elements = elements;
    this._modifierBEM = modifierBEM;
    this._options = intersectionObserverOptions;
    this._addOnInView = addOnInView;
    this._removeOnOutOfView = removeOnOutOfView;
    this._addModifierOnFail = addModifierOnFail;
    this._observers = [];
    this._currentIndex = 0;
    this._createObservers();
  }

  _createObservers() {
    if (this._elements instanceof Array) {
      this._elements.forEach((elements) =>
        this._checkAndHandleNodeList(elements)
      );
    } else {
      this._checkAndHandleNodeList(this._elements);
    }
  }

  _checkAndHandleNodeList(elements) {
    if (elements instanceof NodeList) {
      elements.forEach((element) => this._createSingleObserver(element));
    } else {
      this._createSingleObserver(elements);
    }
  }

  _createSingleObserver(element) {
    let observer = null;
    let scrollClass = element.classList[0] + this._modifierBEM;
    try {
      observer = new IntersectObserverHelpers(element, scrollClass);
      observer.observe(element, this._addOnInView, this._removeOnOutOfView);
      this._observers.push(observer);
    } catch (error) {
      console.error(error);

      element.classList.add(scrollClass);
      if (observer) {
        observer.disconnect();
      }
    }
  }

  getAll() {
    return this._observers;
  }

  next() {
    let observer = this.observers[this._currentIndex];
    this._currentIndex++ % this._observers.length;
    return observer;
  }

  previous() {
    if (this._currentIndex === 0) {
      this._currentIndex = this._observers.length - 1;
    }
    let observer = this.observers[this._currentIndex];
    return observer;
  }

  disconectAll() {
    this._observers.forEach((observer) => observer.disconnect());
  }
}
