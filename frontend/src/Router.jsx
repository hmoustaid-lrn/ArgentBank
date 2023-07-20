import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Login from "./pages/Login";



function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
