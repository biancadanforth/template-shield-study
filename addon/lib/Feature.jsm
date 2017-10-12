"use strict";

/* global studyUtils */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "(EXPORTED_SYMBOLS|Feature)" }]*/

const { utils: Cu } = Components;
Cu.import("resource://gre/modules/Console.jsm");
Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

const EXPORTED_SYMBOLS = this.EXPORTED_SYMBOLS = ["Feature"];

XPCOMUtils.defineLazyModuleGetter(this, "RecentWindow",
  "resource:///modules/RecentWindow.jsm");

const BASERESOURCE = "template-shield-study@mozilla.com";
// XPCOMUtils.defineLazyModuleGetter(this, "studyUtils",
//   `resource://${BASERESOURCE}/StudyUtils.jsm`);

// window utilities
function getMostRecentBrowserWindow() {
  return RecentWindow.getMostRecentBrowserWindow({
    private: false,
    allowPopups: false,
  });
}

class Feature {
  constructor(config) {
    this.config = config;
    this.page = new Page();
  }

  start() {
    const recentWindow = getMostRecentBrowserWindow();
    if (recentWindow && recentWindow.gBrowser) {
      this.page.show(
        recentWindow,
        this.config,
      );
    }
    // the 'else' here could kill the study, NOT IMPLEMENTED
  }
}

class Page {
  constructor() {
  }

  show(recentWindow, config) {
    console.log('hi', config);
  }
}
