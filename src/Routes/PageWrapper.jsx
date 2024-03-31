function PageWrapper(props) {
  const { route } = props;
  const { component } = route;
  
  console.log("component", component);
  console.log("props", props);
  // add your logic here for your protected routes

  return component;
}

export default PageWrapper;
