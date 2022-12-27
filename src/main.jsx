import React from "react";
import ReactDOM from "react-dom/client";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import App from "./App";
import "./main.css";

const HASHNODE_CLIENT = new GraphQLClient({
    url: "https://api.hashnode.com",
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ClientContext.Provider value={HASHNODE_CLIENT}>
            <App />
        </ClientContext.Provider>
    </React.StrictMode>
);
