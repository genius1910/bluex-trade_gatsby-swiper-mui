import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const MarkDownTranslator = origin => {
  const imgDeUrl = "/uploads/";
  const content = origin?.replaceAll(
    imgDeUrl,
    `${process.env.GATSBY_STRAPI_URL}${imgDeUrl}`
  );

  return (
    <ReactMarkdown
      parserOptions={{ commonmark: true }}
      rehypePlugins={[rehypeRaw]}
      linkTarget="_blank"
    >
      {content}
    </ReactMarkdown>
  );
};
