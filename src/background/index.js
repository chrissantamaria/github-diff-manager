import browser from 'webextension-polyfill';
import checkFiles from './checkFiles';

const listener = (details) => {
  browser.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    return browser.tabs.executeScript(tab.id, {
      code: `(${checkFiles})()`,
    });
  });
};

const filter = {
  url: [
    {
      urlMatches:
        // example valid string: https://github.com/chrissantamaria/github-diff-manager/pull/1/files
        '^https://github.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+/pull/[0-9]+/files$',
    },
  ],
};

// TODO: refine this listener, sometimes fires multiple times for a single page transition
browser.webNavigation.onHistoryStateUpdated.addListener(listener, filter);
