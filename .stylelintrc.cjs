/** @type {import("stylelint").Config} */
module.exports = {
  rules: {
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "%", "s", "px"],
    "alpha-value-notation": ["percentage", { exceptProperties: ["opacity"] }],
    "color-function-notation": ["modern", { disableFix: true }],
  },
};
