import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [qtyProducts, setQtyProducts] = useState(0);

	const getQtyProducts = () => {
		let qty = 0;
		products.forEach((product) => (qty += product.qty));
		setQtyProducts(qty);
	};

	useEffect(() => {
		getQtyProducts();
	}, [products]);

	const addProduct = (product) => {
		if (isInCart(product.id)) {
			const found = products.find((p) => p.id === product.id);
			const index = products.indexOf(found);
			const copy = [...products];
			copy[index].qty += product.qty;
			setProducts(copy);
		} else {
			setProducts([...products, product]);
		}
	};

	const removeProduct = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	const isInCart = (id) => {
		return products.some((products) => products.id === id);
	};
	
	const clearCart = () => {
		setProducts([]);
	};

	console.log(products);

	const totalPrice = () =>{
		return products.reduce((prev, actual) => prev + actual.qty * actual.price, 0);
	}

	return (
		<Provider
			value={{
				products,
				getQtyProducts,
				addProduct,
				removeProduct,
				isInCart,
				clearCart,
				qtyProducts,
				totalPrice
			}}
		>
			{children}
		</Provider>
	);
};

export default CartCustomProvider;
