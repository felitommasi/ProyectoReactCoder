import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import SkeletonScreen from "../Skeletons/SkeletonScreen";
import { getProds } from "../../mocks/fakeapi";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(true);

	const {categoryId} = useParams();

	useEffect(() => {
		getProds(categoryId)
			.then((result) => setProductList(result))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [categoryId]);

	return (
		<>
			{loading 
			? <SkeletonScreen /> 
			: <ItemList productList={productList} />}
		</>
	);
};

export default ItemListContainer;


