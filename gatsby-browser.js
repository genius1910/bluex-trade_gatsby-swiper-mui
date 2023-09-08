/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import ReactDOM from "react-dom";
import "@fontsource/roboto";
import "@fontsource/inter";
import "@fontsource/lato";
import "@fontsource/roboto-condensed";
import "./src/static/fonts/fonts.css";
import ReduxProviderWrapper from "./src/redux/redux-provider-wrapper";

export const wrapRootElement = ReduxProviderWrapper;

const loadableReady = require("@loadable/component").loadableReady;

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback);
    });
  };
};

const loadedScripts = "loadedScripts";
const appendHeaderScript = ({
  element = "script",
  type = "text/javascript",
  src,
  innerHTML,
}) => {
  const scriptElement = document.createElement(element);
  if (type) {
    scriptElement.type = type;
  }
  if (src) {
    scriptElement.src = src;
  }
  scriptElement.innerHTML = innerHTML ? innerHTML : null;
  document.head.appendChild(scriptElement);
};

function createSingleEventListener(eventNames) {
  const eventsTriggered = {};

  function eventListenerFunction(event) {
    if (!eventsTriggered[event.type]) {
      appendHeaderScript({
        src: "https://cdn.bluextrade.com/assets/bxt/bxt-1.0.1.min.js",
      });
      appendHeaderScript({
        src: "https://js-na1.hs-scripts.com/21919598.js",
      });
      // appendHeaderScript({
      //   innerHTML: `_linkedin_partner_id = "764243"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
      // });
      // appendHeaderScript({
      //   innerHTML: `(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk); `,
      // });
      // appendHeaderScript({
      //   innerHTML: `window.lintrk('track', { conversion_id: 12559612 });`,
      // });
      // appendHeaderScript({
      //   element: "noscript",
      //   innerHTML: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=764243&fmt=gif"/>`,
      // });

      sessionStorage.setItem(loadedScripts, "true");
      eventsTriggered[event.type] = true;

      // Remove all event listeners
      eventNames.forEach(eventName => {
        window.removeEventListener(eventName, eventListenerFunction);
      });
    }
  }

  eventNames.forEach(eventName => {
    window.addEventListener(eventName, eventListenerFunction);
  });

  return function removeEventListeners() {
    eventNames.forEach(eventName => {
      window.removeEventListener(eventName, eventListenerFunction);
    });
  };
}

export const onInitialClientRender = () => {
  createSingleEventListener(["scroll", "click"]);
  // window.addEventListener("scroll", appendHeaderScripts, { once: true });
  // window.addEventListener("click", appendHeaderScripts, { once: true });
};
