import React from "react";
import Helmet from "react-helmet";

const CookieHubBanner = () => {
  return (
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML: `
              var cpm = {};
              (function(h,u,b){
              var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
              e.async=true;e.src='https://cookiehub.net/c2/${process.env.GATSBY_COOKIEHUB_KEY}.js';
              e.onload=function(){u.cookiehub.load(b);};
              d.parentNode.insertBefore(e,d);
              })(document,window,cpm);
            `,
        },
      ]}
    />
  );
};

export default CookieHubBanner;
