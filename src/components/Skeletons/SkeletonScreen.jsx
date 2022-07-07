import React from "react";
import SkeletonCard from "../Skeletons/SkeletonCard";
import { SimpleGrid } from "@chakra-ui/react";

const SkeletonScreen = ( productList ) => {
	return (
		<>
			<SimpleGrid minChildWidth="230px" spacing="40px">
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
			</SimpleGrid>
			;
		</>
	);
};

export default SkeletonScreen;
