import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Authenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const client = new ApolloClient({
  uri: "https://qmn4h6l7tfeilbjeov3tdh33oi.appsync-api.us-east-1.amazonaws.com/graphql",
  headers: { 
    "X-API-KEY": "da2-ku5ukku4yzbkjp3fahii22huha",
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Authenticator>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Authenticator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
