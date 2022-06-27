import { Box, Image } from "@chakra-ui/react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Card = () => {
	return (
		<Box boxShadow="md" rounded="4px" w="230px" overflow="hidden" bg="gray.100">
			{/*  reemplazar imagen */}
			<Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/230" />

			<Box p={5} mb={2}>
				<ItemListContainer />
			</Box>
		</Box>
	);
};

export default Card;
