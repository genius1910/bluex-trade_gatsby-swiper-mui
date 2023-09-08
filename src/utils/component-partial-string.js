import React from "react"

export const ComponentPartialString = (originalString, targetString, Component) => {
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
          <Component key={match + index}>
            {match}
          </Component>
        ) : (
          <React.Fragment key={match + index}>{match}</React.Fragment>
        )
      )}
    </>
  );
}
