/**
 * @brief This class is envolopes the IntersectionObserver for the project which primarily uses this tool to animate imtems once a root has come into view
 */
export default class ScrollIntoViewObserver {

  constructor(classesToModify, classBEMModifier = '--in-view', addOnInView = true, removeOnOutOfView = true, intersectionObserverOptions = {}) {
    this._classesToModify = classesToModify;
    this._classModifier = classBEMModifier;
    this._addOnInView = addOnInView;
    this._removeOnOutOfView = removeOnOutOfView;
    this._observer = null;
    this._intersectionObserverOptions = intersectionObserverOptions;
    this._createObserver();
  }

  _createObserver() {
    if(!this.isIntersectionObserverAvailable) {
      throw 'Intersection Observer is not available in this browers.';
    }

    if(this._observer === null) {
      this._observer = new IntersectionObserver(entries => {
        entries.forEach(entry => this.handleOnScroll(entry))
      },this._intersectionObserverOptions);
    }
    return this._observer;
  }

  _handleOnScroll(entry) {
    if(entry.isIntersecting && this._addOnInView) {
      this.addAnimationClasses();
    }
    else if(this._removeOnOutOfView) {
      this.removeAnimationClasses();
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

  observe(querySelector) {
    if(this._observer === null) {
      throw 'Observer has not been initiated';
    }
    this._observer.observe(document.querySelector(querySelector));
  }

  destroy() {
    this._observer.disconnect();
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