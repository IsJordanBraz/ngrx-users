"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _image = _interopRequireDefault(require("next/image"));

var __jsx = _react["default"].createElement;

var Header = function Header() {
  return __jsx("div", null, __jsx("h3", null, "Minha Library NextJs"), __jsx(_image["default"], {
    src: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    alt: "Picture of the author",
    width: 500,
    height: 500
  }));
};

var _default = Header;
exports["default"] = _default;