import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import SkeletonCard from "../Skeletons/SkeletonCard";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const productsCollection = collection(db, "productos");
		const refDoc = doc(productsCollection, id);
		getDoc(refDoc).then(result => { 
			setProduct({ 
				id: result.id,
				...result.data(), 
			})
		})
		.catch(error => console.log(error))
		.finally(() => setLoading(false));
	}, [id]); 

	return <>{loading ? <SkeletonCard /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
