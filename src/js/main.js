'use strict';

// Utilities
import Toggle from '@nycopportunity/patterns-framework/src/utilities/toggle/toggle';
import Copy from '@nycopportunity/patterns-framework/src/utilities/copy/copy';
import Icons from '@nycopportunity/patterns-framework/src/utilities/icons/icons';
import Forms from '@nycopportunity/patterns-framework/src/utilities/forms/forms';
import Newsletter from '@nycopportunity/patterns-framework/src/utilities/newsletter/newsletter';
// import Tooltips from '@nycopportunity/patterns-framework/src/utilities/tooltips/tooltips';
import Track from '@nycopportunity/patterns-framework/src/utilities/track/track';
import WebShare from '@nycopportunity/patterns-framework/src/utilities/web-share/web-share';

// Elements
// import ... from '../elements/...';

// Components
import Accordion from '../components/accordion/accordion';
import Dropdown from '../components/dropdown/dropdown';
// import ... from '../components/...';

// Objects
import MobileMenu from '../objects/mobile-menu/mobile-menu';
import Search from '../objects/search/search';
// import ... from '../objects/...';
/** import modules here as they are written. */

/**
 * The Main module
 * @class
 */
class main {
  /**
   * An API for the Icons Utility
   *
   * @param   {String}  path  The path of the icon file
   *
   * @return  {Object}        Instance of Icons
   */
  icons(path = 'svg/icons.svg') {
    return new Icons(path);
  }

  /**
   * An API for the Toggle Utility
   *
   * @param   {Object}  settings  Settings for the Toggle Class
   *
   * @return  {Object}            Instance of toggle
   */
  toggle(settings = false) {
    return (settings) ? new Toggle(settings) : new Toggle();
  }

  /**
   * API for validating a form.
   *
   * @param  {string}    selector
   * @param  {function}  submit
   */
  valid(selector, submit = false) {
    if (document.querySelector(selector)) {
      let form = new Forms(document.querySelector(selector));

      form.submit = (submit) ? submit : (event) => {
        event.target.submit();
      };

      form.selectors.ERROR_MESSAGE_PARENT = '.c-question__container';

      form.watch();
    }
  }

  /**
   * An API for the Accordion Component
   *
   * @return  {Object}  Instance of Accordion
   */
  accordion() {
    return new Accordion();
  }

  /**
   * An API for the Dropdown Component
   *
   * @return  {Object}  Instance of Dropdown
   */
  dropdown() {
    return new Dropdown();
  }

  /**
   * An API for the Copy Utility
   *
   * @return  {Object}  Instance of Copy
   */
  copy() {
    return new Copy();
  }

  /**
   * An API for the Track Object
   *
   * @return  {Object}  Instance of Track
   */
  track() {
    return new Track();
  }

  // /**
  //  * An API for the Tooltips element
  //  * @param  {Object}   settings Settings for the Tooltips Class
  //  * @return {nodelist}          Tooltip elements
  //  */
  // tooltips(elements = document.querySelectorAll(Tooltips.selector)) {
  //   elements.forEach(element => {
  //     new Tooltips(element);
  //   });

  //   return (elements.length) ? elements : null;
  // }

  // /**
  //  * An API for the Filter Component
  //  * @return {Object} Instance of Filter
  //  */
  // filter() {
  //   return new Filter();
  // }

  // /**
  //  * An API for the Nearby Stops Component
  //  * @return {Object} Instance of NearbyStops
  //  */
  // nearbyStops() {
  //   return new NearbyStops();
  // }

  /**
   * An API for the Newsletter Object
   *
   * @return  {Object}  Instance of Newsletter
   */
  newsletter(endpoint = '') {
    let element = document.querySelector(Newsletter.selector);

    if (element) {
      let newsletter = new Newsletter(element);

      newsletter.form.selectors.ERROR_MESSAGE_PARENT = '.c-question__container';

      window[newsletter.callback] = data => {
        data.response = true;

        data.email = element.querySelector('input[name="EMAIL"]').value;

        window.location = `${endpoint}?` + Object.keys(data)
          .map(k => `${k}=${encodeURI(data[k])}`).join('&');
      };

      return newsletter;
    }
  }

  /**
   * An API for the Newsletter Object
   *
   * @return  {Object}  Instance of Newsletter
   */
  newsletterForm(element = document.querySelector('[data-js="newsletter-form"]')) {
    let params = new URLSearchParams(window.location.search);
    let response = params.get('response');
    let newsletter = null;

    if (element) {
      newsletter = new Newsletter(element);
      newsletter.form.selectors.ERROR_MESSAGE_PARENT = '.c-question__container';
    }

    if (response && newsletter) {
      let email = params.get('email');
      let input = element.querySelector('input[name="EMAIL"]');

      input.value = email;

      newsletter._data = {
        'result': params.get('result'),
        'msg': params.get('msg'),
        'EMAIL': email
      };

      newsletter._callback(newsletter._data);
    }

    return newsletter;
  }

  // /**
  //  * An API for the AlertBanner Component
  //  *
  //  * @return  {Object}  Instance of AlertBanner
  //  */
  // alertBanner(element = document.querySelector(AlertBanner.selector)) {
  //   return (element) ? new AlertBanner(element) : null;
  // }

  // /**
  //  * An API for the ShareForm Component
  //  *
  //  * @return  {Object}  Instance of ShareForm
  //  */
  // shareForm(elements = document.querySelectorAll(ShareForm.selector)) {
  //   elements.forEach(element => {
  //     new ShareForm(element);
  //   });

  //   return (elements.length) ? elements : null;
  // }

  // /**
  //  * An API for the Disclaimer Component
  //  * @return  {Object}  Instance of Disclaimer
  //  */
  // disclaimer() {
  //   return new Disclaimer();
  // }

  // /**
  //  * An API for the TextController Object
  //  *
  //  * @return  {Object}  Instance of TextController
  //  */
  // textController(element = document.querySelector(TextController.selector)) {
  //   return (element) ? new TextController(element) : null;
  // }

  /**
   * An API for the Mobile Nav
   *
   * @return  {Object}  Instance of MobileMenu
   */
  mobileMenu() {
    return new MobileMenu();
  }

  /**
   * An API for the Search Box
   *
   * @return  {Object}  Instance of Search
   */
  search() {
    return new Search();
  }

  /**
   * An API for Web Share
   *
   * @return  {Object}  Instance of WebShare
   */
  webShare() {
    return new WebShare({
      fallback: () => {
        new Toggle({
          selector: WebShare.selector
        });
      }
    });
  }
}

export default main;
