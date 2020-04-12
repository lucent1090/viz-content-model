'use strict';

var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function useRoute(param) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  if (match) {
    if (match[0] === "contentmodel" && !match[1]) {
      return /* ContentModel */1;
    } else {
      return /* NotFound */2;
    }
  } else {
    return /* Home */0;
  }
}

exports.useRoute = useRoute;
/* ReasonReactRouter Not a pure module */
