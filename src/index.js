import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./context/ChatProvider";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChatProvider>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorPrimary: "#00b96b",
                colorIcon: "#00b96b",
                algorithm: true,
              },
            },
            token: {
              colorPrimary: "#00b96b",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </ChatProvider>
  </React.StrictMode>
);
