'use strict';

var React = require("react");

function NotFound(Props) {
  return React.createElement("div", undefined, "Page Not Found");
}

var make = NotFound;

exports.make = make;
/* react Not a pure module */
