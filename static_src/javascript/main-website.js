import $ from 'jquery';
import 'babel-polyfill';
import 'select2';

import MobileMenu from './components/mobile-menu';
import MobileSubMenu from './components/mobile-sub-menu';
import CookieWarning from './components/cookie-message--website';
import Accordion from './components/accordion';
import Carousel from './components/carousel';
import GoogleMap from './components/map';
import Modal from './components/modal';
import ProgressBar from './components/progress-bar';
import StickyCTA from './components/sticky-cta';
import Tabccordion from './components/tabccordion';
import Toggle from './components/toggle';
import HeaderMenu from './components/header-menu';
import Gallery from './components/gallery';
import SelectAllCheckboxToggle from './components/select-all-checkbox-toggle';
import sendTagManagerEvents from './components/tag-manager';
import './components/browser-polyfills';
import './components/smooth-scroll';
import './components/branch-finder';

document.addEventListener('DOMContentLoaded', function() {
    new CookieWarning();

    for (const accordion of document.querySelectorAll(Accordion.selector())) {
        new Accordion(accordion);
    }

    for (const carousel of document.querySelectorAll(Carousel.selector())) {
        new Carousel(carousel);
    }

    for (const googlemap of document.querySelectorAll(GoogleMap.selector())) {
        new GoogleMap(googlemap);
    }

    for (const mobilemenu of document.querySelectorAll(MobileMenu.selector())) {
        new MobileMenu(mobilemenu);
    }

    for (const modal of document.querySelectorAll(Modal.selector())) {
        new Modal(modal);
    }

    for (const mobilesubmenu of document.querySelectorAll(MobileSubMenu.selector())) {
        new MobileSubMenu(mobilesubmenu);
    }

    for (const progressbar of document.querySelectorAll(ProgressBar.selector())) {
        new ProgressBar(progressbar);
    }

    for (const stickycta of document.querySelectorAll(StickyCTA.selector())) {
        new StickyCTA(stickycta);
    }

    for (const tabccordion of document.querySelectorAll(Tabccordion.selector())) {
        new Tabccordion(tabccordion);
    }

    for (const toggle of document.querySelectorAll(Toggle.selector())) {
        new Toggle(toggle);
    }

    for (const headermenu of document.querySelectorAll(HeaderMenu.selector())) {
        new HeaderMenu(headermenu);
    }

    for (const gallery of document.querySelectorAll(Gallery.selector())) {
        new Gallery(gallery);
    }

    for (const inputblock of document.querySelectorAll(SelectAllCheckboxToggle.selector())) {
        new SelectAllCheckboxToggle(inputblock);
    }

    $('.form-item--autocomplete_select').find('select').select2({
        minimumInputLength: 3,
        language: {
            inputTooShort: function () { return ''; }
        },
        tags: true
    });

    sendTagManagerEvents();
});
