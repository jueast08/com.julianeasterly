/**
 * Observes obects in relation to the viewport (document). As soon as a pixel of an observed element is triggered,
 * all the registered callbacks linked to the object are triggered.
 * Only one of these can exist in the application. If you need to change the root or the thresholds,
 * use a regular IntersectionObserver.
 */
export class InViewportObserver {
  static #intersectionObserver = null;
  static #observedElements = new Map();
  static #observedContexts = new Map();

  /**
   * @private
   */
  static createObserver() {
    if (this.#intersectionObserver) {
      return;
    }
    this.#intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let callbacks = this.#observedElements.get(entry.target);
        callbacks.forEach((callback) => callback(entry));
      });
    });
  }

  /**
   * Adds the --in-view BEM modifier to the entries.target's first class name
   * @param {IntersectionObserverEntry} entry : an entry provided by the IntersectionObserver
   */
  static addAnimationModifierOnEntry(entry) {
    //@TODO rename
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.classList[0] + "--in-view");
    } else {
      entry.target.classList.remove(entry.target.classList[0] + "--in-view");
    }
  }

  /**
   * Observe an element, an Array of Elements and/or NodeLists, or NodeList with the IntersectionObserver //
   * @param {Array[HTMLElement|NodeList], HTMLElement, NodeList} observables : an element, an Array of Elements and/or NodeLists, or NodeList
   * @param {Function} callback : a funciton that takes entry as a parameter (ex. entry => {})
   * @param {*} context : the Vue Component context
   */
  static observe(observables, callback, context) {
    if (!this.#intersectionObserver) {
      this.createObserver();
    }
    if (observables instanceof Array) {
      observables.forEach((observable) =>
        this.observeNodeListAndSingleElements(observable, callback, context)
      );
    } else {
      this.observeNodeListAndSingleElements(observables, callback, context);
    }
  }

  static observeNodeListAndSingleElements(observables, callback, context) {
    if (observables instanceof NodeList) {
      observables.forEach((observable) =>
        this.observeElement(observable, callback, context)
      );
    } else if (observables instanceof HTMLElement) {
      this.observeElement(observables, callback, context);
    }
  }

  static observeElement(observable, callback, context) {
    let element = observable;
    if (!this.#observedElements.get(element)) {
      this.#observedElements.set(element, []);
    }

    let position = this.#observedElements.get(element).length;
    this.#observedElements.get(element).push(callback);

    if (!this.#observedContexts.get(context)) {
      this.#observedContexts.set(context, []);
    }
    this.#observedContexts.get(context).push({
      element,
      index: position,
    });

    this.#intersectionObserver.observe(observable);
  }

  /**
   *
   * @param {*} uniqueId
   */
  static disconnect(context) {
    this.#observedContexts.get(context).forEach((object) => {
      if (this.#observedElements.get(object.element).length === 1) {
        delete this.#observedElements.delete(object.element);
      } else {
        this.#observedElements.get(object.element).splice(object.index, 1);
      }
    });
    delete this.#observedContexts.delete(context);

    if (this.#observedContexts.size === 0) {
      this.#intersectionObserver.disconnect();
    }
  }
}

/**
 * @deprecated
 * @brief This class is envolopes the IntersectionObserver for the project which primarily uses this tool to animate imtems once a root has come into view
 */
export class ScrollIntoViewObserver {
  /**
   * @param {Array} element : an DOM element. You should be passing document.querySelector('[query]')
   * @param {String} classToAdd: String representing the animation class to add
   * @param {Object} intersectionObserverOptions: Objet representing options as described here : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  constructor(elements, classToAdd, intersectionObserverOptions = {}) {
    this._elements = elements;
    this._modifierClass = classToAdd;
    this._intersectionObserverOptions = intersectionObserverOptions;
    this._observer = null;
    this._actions = null;
    this._triggerCritera = null;
    this._temp;
    this._createObserver();
  }

  /**
   *@TODo the elements parameter is incorrect
   * @param {DOMElement} element : a Single DOMElement. you should be passing document.querySelector
   * @param {Boolean} addOnInView : determines whether the class modifier should be added when the querySelector comes into view
   * @param {Boolean} removeOnOutOfView : determines whether the class modifier should be removed when the querySelector leaves view
   * @param {Boolean} addOnOutOfView : determines whether the class modifier should be added when the querySelector leaves view
   * @param {Boolean} removeOnInView : determines whether the class modifier should be removed when the querySelector enters view

   */
  observe(
    element,
    addOnInView = true,
    removeOnOutOfView = true,
    removeOnInView = false,
    addOnOutOfView = false
  ) {
    if (this._observer === null) {
      throw "Observer has not been initiated";
    }
    this._observer.observe(element);
    this._actions = {
      addOnInView,
      removeOnOutOfView,
      addOnOutOfView,
      removeOnInView,
    };
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
        this._temp = entries;
        entries.forEach((entry) => this._handleOnScroll(entry));
      }, this._intersectionObserverOptions);
    }
    return this._observer;
  }

  _handleOnScroll(entry) {
    if (this._triggerEvent(entry)) {
      if (this._actions.addOnInView) {
        this._addAnimationClasses();
      }

      if (this._actions.removeOnInView) {
        this._removeAnimationClasses();
      }
    } else {
      if (this._actions.removeOnOutOfView) {
        this._removeAnimationClasses();
      }

      if (this._actions.addOnOutOfView) {
        this._addAnimationClasses();
      }
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

/**
 * @@deprecated
 */
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
    addModifierOnFail = true,
    removeOnInView = false,
    addOnOutOfView = false
  ) {
    this._elements = elements;
    this._modifierBEM = modifierBEM;
    this._options = intersectionObserverOptions;
    this._addOnInView = addOnInView;
    this._removeOnOutOfView = removeOnOutOfView;
    this._addModifierOnFail = addModifierOnFail;
    this._removeOnInView = removeOnInView;
    this._addOnOutOfView = addOnOutOfView;
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
      observer = new ScrollIntoViewObserver(element, scrollClass);
      observer.observe(
        element,
        this._addOnInView,
        this._removeOnOutOfView,
        this._addOnOutOfView,
        this._removeOnOutOfView
      );
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

  disconnectAll() {
    this._observers.forEach((observer) => observer.disconnect());
  }
}
