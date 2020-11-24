const {override, addBabelPreset} = require("customize-cra");

module.exports = override(
    // Allows the emotion "css" property to be used in any component.
    addBabelPreset("@emotion/babel-preset-css-prop"),
)
