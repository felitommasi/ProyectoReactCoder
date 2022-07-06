import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import SkeletonCard from "../Skeletons/SkeletonCard";
import { getProd } from "../../mocks/fakeapi";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		getProd(id)
			.then((result) => setProduct(result))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [id]);

	return <>{loading ? <SkeletonCard /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
