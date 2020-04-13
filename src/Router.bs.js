'use strict';

var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var API$ReasonReactExamples = require("./API.bs.js");

function useRoute(param) {
  var match = ReasonReactRouter.useUrl(undefined, /* () */0);
  var search = match.search;
  var path = match.path;
  if (path) {
    if (path[0] === "contentmodel" && !path[1]) {
      if (search !== "") {
        return API$ReasonReactExamples.queryContentModel(search);
      } else {
        return /* ContentModel */1;
      }
    } else {
      return /* NotFound */2;
    }
  } else {
    return /* Home */0;
  }
}

exports.useRoute = useRoute;
/* ReasonReactRouter Not a pure module */
