import React from "react";
import {
	Skeleton,
	SkeletonText,
	Box,
	SimpleGrid,
	Center,
} from "@chakra-ui/react";

const SkeletonCard = () => {
	return (
		<Box p={[6, 8, 10, 12]}>
			<SimpleGrid minChildWidth="230px" spacing="45px">
				<Box
					boxShadow="md"
					minW="270px"
					maxW="280px"
					rounded="4px"
					h="auto"
					overflow="hidden"
					bg="gray.100"
				>
					<Skeleton w="300px" h="300px" />

					<Box maxH="80px" pt="5" px="5">
						<SkeletonText noOfLines={2} spacing="4" />
					</Box>
					<Box h="100px" px={5} py={3} overflow="hidden">
						<SkeletonText noOfLines={5} spacing="4" />
					</Box>
					<Center h="90px">
						<Skeleton h="40px" w="80px"/>
					</Center>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default SkeletonCard;
