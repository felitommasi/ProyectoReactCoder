import React from "react";
import { Link } from 'react-router-dom';
import { Box, Text, Image, Button, Center } from "@chakra-ui/react";


const Item = ({ product }) => {
	const { title, description, image, id } = product;

	return (
		<Box boxShadow="md" minW="270px" maxW="400px" rounded="4px" h="auto" overflow="hidden" bg="gray.100">
			<Box h="300" w={"100%"} align={"center"} overflow="hidden">
				<Image src={image} fallbackSrc="https://via.placeholder.com/230" />
			</Box>
			<Box>
				<Text p={5} fontSize="lg" fontWeight="semibold">
					{title}
				</Text>
			</Box>
			<Box>
				<Text p={5} fontSize="sm">
					{description}
				</Text>
			</Box>
			<Center>
				<Link to={`/detail/${id}`}>
					<Button colorScheme="twitter" mb={4}>	
						Ver Detalle
					</Button>
				</Link>
			</Center>

		</Box>
	);
};

export default Item;
