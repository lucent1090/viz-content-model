let useRoute = (): Type.Route.t => {
  open ReasonReactRouter;
  let { path, search } = useUrl();

  switch(path) {
    /** Add route: /contentmodel/?id=xxx&token=yyy for directly querying */
    | ["contentmodel"] when search !== "" => API.queryContentModel(search)
    | ["contentmodel"] => ContentModel
    | [] => Home
    | _ => NotFound
  }
};