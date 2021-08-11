import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Admin from "layouts/Admin.js";
import Landing from "views/Landing.js";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthWrapper } from "components/AuthWrapper/AuthWrapper";

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/orgs-sample-app">
          {isAuthenticated ? (
            <Redirect to="/orgs-sample-app/admin" component={Admin} />
          ) : (
            <Route path="/orgs-sample-app" component={Landing} />
          )}
        </Route>
        <Route path="/orgs-sample-app/admin" component={Admin} />
        <Redirect from="*" to="/orgs-sample-app" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <AuthWrapper>
    <App />
  </AuthWrapper>,
  document.getElementById("root")
);
