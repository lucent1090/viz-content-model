[@react.component]
let make = () => {
  let route = Routes.useRoute();

  switch(route){
    | Home => <Home />
    | ContentModel => <ContentModel />
    | NotFound => <NotFound />
  };
};