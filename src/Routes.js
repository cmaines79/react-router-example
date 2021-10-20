import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import About from './About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

// Route = our routes with a path, which equals the url path, and a component that should be rendered.
  // exact keyword = specifices that the routes path as to match the URL exactly, as opposed to finding the first character (or string of characters) in the routes list.
// BrowserRouter = is a router, which used the history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL
// Switch = Renderst he firtst child Route that matches the location.
// don't forget to update your index.js file; which calls the App.js file first and we need to call our Routes.js file first.
// & update the index.js file to import the App.js file.


export default Routes;