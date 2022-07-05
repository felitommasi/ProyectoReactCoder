import React, { useEffect, useState } from "react";
//import { Text } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getData } from "../../mocks/fakeapi";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData
			.then((result) => setProduct(result))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	const getProduct = async () => {
		try {
			const result = await getData;
			setProduct(result);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			{loading ? <p>Cargando...</p> : <ItemDetail product={product} />}
		</>
	);
};


export default ItemDetailContainer;