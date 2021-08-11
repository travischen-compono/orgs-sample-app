import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const AuthWrapper = ({ children }) => {
  const curOrganization = localStorage.getItem("organization_id");
  const options = {
    domain: "travis-demo.au.auth0.com",
    clientId: "SwW0iZgbyAjWJCWEzhxVjSKBx8Nr4Q24",
    redirectUri: window.location.origin,
    ...(curOrganization ? { organization: curOrganization } : null)
  };
  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};
