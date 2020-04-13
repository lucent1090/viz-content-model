[@react.component]
let make = () => {
  let route = Router.useRoute();

  switch(route){
    | Home => <Home />
    | ContentModel => <ContentModel />
    | NotFound => <NotFound />
  };
};