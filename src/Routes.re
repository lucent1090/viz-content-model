type t = 
  | Home
  | ContentModel
  | NotFound;

let useRoute = (): t => {
  let url = ReasonReactRouter.useUrl();

  switch(url.path) {
    | ["contentmodel"] => ContentModel
    | [] => Home
    | _ => NotFound
  }
};