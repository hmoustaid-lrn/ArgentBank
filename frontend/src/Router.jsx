import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import PrivateRoutes from "./utils/PrivateRoutes"

import Error from "./pages/Error";

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route element={<PrivateRoutes />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path="*" element={<Error />} />

				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
