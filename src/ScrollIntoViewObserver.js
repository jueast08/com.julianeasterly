/**
 * @brief This class is envolopes the IntersectionObserver for the project which primarily uses this tool to animate imtems once a root has come into view
 */
export default class ScrollIntoViewObserver {

  /**
   * @param {Array} classesToModify : Array of classes (strings) that need to be modified
   * @param {String} classBEMModifier: String representing the BEM modifier that will be added to each classToModify item. Defaults to --in-view
   * @param {Object} intersectionObserverOptions: Objet representing options as described here : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  constructor(classesToModify, classBEMModifier = '--in-view', intersectionObserverOptions = {}) {
    this._classesToModify = classesToModify;
    this._classModifier = classBEMModifier;
    this._intersectionObserverOptions = intersectionObserverOptions;
    this._observer = null;
    this._actionArray = [];
    this._createObserver();
  }

 
  /**
   * 
   * @param {Array} querySelector : an array of DOM elements. you should be passing document.querySelector('[query]')
   * @param {Boolean} addOnInView : determines whether the class modifier should be added when the querySelector comes into view
   * @param {*} removeOnOutOfView : determines whether the class modifier should be removed when the querySelector leaves view
   */
  observe(querySelector, addOnInView = true, removeOnOutOfView = true) {
    if(this._observer === null) {
      throw 'Observer has not been initiated';
    }
    this._observer.observe(querySelector);
    this._actionArray.push({addOnInView: addOnInView, removeOnOutOfView: removeOnOutOfView});
  }

  /**
   * Destroy the observer. This should be done in the destroy section of the component
   */
  destroy() {
    this._observer.disconnect();
  }


  _createObserver() {
    if(!this.isIntersectionObserverAvailable) {
      throw 'Intersection Observer is not available in this browers.';
    }

    if(this._observer === null) {
      this._observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => this._handleOnScroll(entry, index))
      },this._intersectionObserverOptions);
    }
    return this._observer;
  }

  _handleOnScroll(entry, index) {
    if(entry.isIntersecting && this._actionArray[index].addOnInView) {
      this._addAnimationClasses();
    }
    else if(this._actionArray[index].removeOnOutOfView) {
      this._removeAnimationClasses();
    }
  }

  _addAnimationClasses() {
    this._classesToModify.forEach(className => {
      document.getElementsByClassName(className).forEach(element => element.classList.add(className+this._classModifier));
    });
  }

  _removeAnimationClasses() {
    this._classesToModify.forEach(className => {
      document.getElementsByClassName(className).forEach(element => element.classList.remove(className+this._classModifier));
    });
  }

  get isIntersectionObserverAvailable() {
    return "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype;
  }
  
  get interSectionObserverOptions() {
    return this._interSectionObserverOptions;
  }

  set intersectionObserverOptions(intersectionObserverOptions) {
    if(typeof this._intersectionObserverOptions  !== 'object') {
      throw 'intersectionObserverOptions must be an object'
    }
    else {
      this._intersectionObserverOptions = intersectionObserverOptions;
    }
  }

}