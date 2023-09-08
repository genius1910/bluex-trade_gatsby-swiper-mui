/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import ReduxProviderWrapper from "./src/redux/redux-provider-wrapper";
// import * as React from "react";

export const wrapRootElement = ReduxProviderWrapper;

// export const onRenderBody = ({ setPostBodyComponents }) => {
//   setPostBodyComponents([
//     <script
//       type="text/javascript"
//       key="post-body-linkedin-script-1"
//       dangerouslySetInnerHTML={{
//         __html: `_linkedin_partner_id = "764243"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
//       }}
//     />,
//     <script
//       type="text/javascript"
//       key="post-body-linkedin-script-2"
//       dangerouslySetInnerHTML={{
//         __html: `(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk); `,
//       }}
//     />,
//     <noscript
//       key="post-body-linkedin-script-3"
//       dangerouslySetInnerHTML={{
//         __html: `<img
//             height="1"
//             width="1"
//             style="display:none;"
//             alt=""
//             src="https://px.ads.linkedin.com/collect/?pid=764243&fmt=gif"
//           />`,
//       }}
//     />,
//   ]);
// };
