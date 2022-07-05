import React from "react";
import { Skeleton, SkeletonText, Box, SimpleGrid } from "@chakra-ui/react";

const SkeletonScreen = () => {
	return (
		<Box p={[6, 8, 10, 12]}>
			<SimpleGrid minChildWidth="230px" spacing="45px">
				<Box padding="6" boxShadow="lg" bg="white" minW="270px" maxW="400px">
					<Skeleton h="200px" w={"100%"} align={"center"} />
					<Box>
						<SkeletonText mt="4" mb="6" noOfLines={2} />
					</Box>
					<Box>
						<SkeletonText mt="4" noOfLines={5} />
					</Box>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default SkeletonScreen;
