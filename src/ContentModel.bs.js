'use strict';

var React = require("react");

function ContentModel(Props) {
  return React.createElement("div", undefined, "Content Model");
}

var make = ContentModel;

exports.make = make;
/* react Not a pure module */
