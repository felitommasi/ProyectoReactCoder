import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import SkeletonScreen from "../Skeletons/SkeletonScreen";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		const q = categoryId
			? query(collection(db, "productos"), where("category", "==", categoryId))
			: collection(db, "productos");

		getDocs(q)
			.then((result) => {
				const list = result.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				});
				setProductList(list);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [categoryId]);

	return (
		<>{loading ? <SkeletonScreen /> : <ItemList productList={productList} />}</>
	);
};

export default ItemListContainer;
