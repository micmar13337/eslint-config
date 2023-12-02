module.exports = {
  extends: [
    "@creazy231",
  ],
  rules: {
    "no-undef": "off",
    "curly": "off",
    "antfu/if-newline": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "vue/max-attributes-per-line": "off",
    "max-statements-per-line": "off",
    "camelcase": [ "error" ],
    "vue/singleline-html-element-content-newline": [ "error", {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [ "td", "th", "a", "label", "option", "input", "div" ],
    } ],
  },
};
