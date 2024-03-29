import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartCustomProvider from "./context/CartContext";

function App() {
	return (
		<BrowserRouter>
			<CartCustomProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/detail/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</CartCustomProvider>
		</BrowserRouter>
	);
}

export default App;
