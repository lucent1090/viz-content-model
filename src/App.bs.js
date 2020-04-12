'use strict';

var React = require("react");
var Home$ReasonReactExamples = require("./Home.bs.js");
var Routes$ReasonReactExamples = require("./Routes.bs.js");
var NotFound$ReasonReactExamples = require("./NotFound.bs.js");
var ContentModel$ReasonReactExamples = require("./ContentModel.bs.js");

function App(Props) {
  var route = Routes$ReasonReactExamples.useRoute(/* () */0);
  switch (route) {
    case /* Home */0 :
        return React.createElement(Home$ReasonReactExamples.make, { });
    case /* ContentModel */1 :
        return React.createElement(ContentModel$ReasonReactExamples.make, { });
    case /* NotFound */2 :
        return React.createElement(NotFound$ReasonReactExamples.make, { });
    
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
