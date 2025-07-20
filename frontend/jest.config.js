
import '@testing-library/jest-dom';
module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|scss|sass|less)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };
  