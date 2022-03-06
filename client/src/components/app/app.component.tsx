import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import "./app.css";

import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";

import "../../common/styles";
import client from "../../common/apollo-client";
import CreateShipment from "../../pages/shipment.ts/createShipment";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipment/:id" element={<About />} />
        <Route path="/shipment/add" element={<CreateShipment />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
