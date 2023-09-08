import React from "react"

export const StylePartialString = (originalString, targetString, styleObject) => {
  targetString = targetString.trim();
  if (!targetString) {
    return (<>{originalString}</>);
  }

  const targetEscapeString = targetString.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  const regString = new RegExp(`(${targetEscapeString})`, "gi");
  const matches = originalString.split(regString);

  return (
    <>
      {matches.map((match, index) =>
        match.match(regString) ? (
          <span style={styleObject} key={match + index}>
            {match}
          </span>
        ) : (
          <React.Fragment key={match + index}>{match}</React.Fragment>
        )
      )}
    </>
  );
}

export const StyleKeepWordSlash = (target) => {
  return target.replaceAll('-', String.fromCharCode(8209));
}