export default class ScrollIntoViewObserver {

  constructor(classesToModify, classBEMModifier = '--in-view', addOnInView = true, removeOnOutOfView = true, intercectionObserverOptions) {
    this.classesToModify = classesToModify;
    this.classModifier = classBEMModifier;
    this.addOnInView = addOnInView;
    this.removeOnOutOfView = removeOnOutOfView;
    this.observer = null;
    this.intercectionObserverOptions = intercectionObserverOptions;
  }

  handleOnScroll(entry) {
    if(entry.isIntersecting && this.addOnInView) {
      this.addAnimationClasses();
    }
    else if(this.removeOnOutOfView) {
      this.removeAnimationClasses();
    }
  }

  addAnimationClasses() {
    this.classesToModify.forEach(className => {
      document.getElementsByClassName(className).forEach(element => element.classList.add(className+this.classModifier));
    });
  }

  removeAnimationClasses() {
    this.classesToModify.forEach(className => {
      document.getElementsByClassName(className).forEach(element => element.classList.remove(className+this.classModifier));
    });
  }

  destroy() {
    this.observer.disconnect();
  }

  get observer() {
    if(!this.isIntersectionObserverAvailable) {
      throw 'Intersection Observer is not available in this browers.';
    }

    if(this.observer === null) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => this.handleOnScroll(entry))
      },this.intercectionObserverOptions);
    }
    return this.observer;
  }

  get isIntersectionObserverAvailable() {
    return "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype;
  }
  
  get interSectionObserverOptions() {
    return this.interSectionObserverOptions;
  }

  set intercectionObserverOptions(intercectionObserverOptions) {
    if(typeof this.intercectionObserverOptions  !== 'object') {
      throw 'intercectionObserverOptions must be an object'
    }
    else {
      this.intercectionObserverOptions = intercectionObserverOptions;
    }
  }

}