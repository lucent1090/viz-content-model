[@bs.val] external document: Js.t({..}) = "document";

ReactDOMRe.render(
  <App />,
  document##getElementById("root")
);