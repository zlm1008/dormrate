import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { API, Amplify } from "aws-amplify";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const client = new ApolloClient({
  uri: "https://kizzemz3p5bcdmurlahjummtti.appsync-api.us-east-2.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
