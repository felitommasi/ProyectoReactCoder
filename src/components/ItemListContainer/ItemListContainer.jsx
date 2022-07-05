import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import SkeletonScreen from "../SkeletonScreen/SkeletonScreen";
import { Text } from "@chakra-ui/react";
import { getData } from "../../mocks/fakeapi";

const ItemListContainer = ({ greeting }) => {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData
			.then((result) => setProductList(result))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

/* 	const getProducts = async () => {
		try {
			const result = await getData;
			setProductList(result);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, []); */

	return (
		<>
			<Text fontSize="2rem">{greeting}</Text>
			{loading ? <SkeletonScreen /> : <ItemList productList={productList} />}
		</>
	);
};

export default ItemListContainer;
