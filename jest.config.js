module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  setupFiles: [`<rootDir>/loadershim.js`],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "src"],
  globals: {
    __PATH_PREFIX__: ``,
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testURL: `http://localhost`,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "swiper/react": `swiper/react/swiper-react.js`,
    "swiper/css": `swiper/swiper.min.css`,
    "react-markdown": `<rootDir>/node_modules/react-markdown/react-markdown.min.js`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`,
    "^gatsby-core-utils/(.*)$": `gatsby-core-utils/dist/$1`,
    "^gatsby-plugin-utils/(.*)$": [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ],
  },
  transform: {
    "^.+\\.js$": [`babel-jest`, { configFile: './config/babel.config.js' }],
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    "^.+\\.css$": `jest-transform-css`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"`,
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby|swiper|ssr-window|dom7)/)`,
  ],
};
