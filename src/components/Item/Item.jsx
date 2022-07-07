import React from "react";
import { Link } from 'react-router-dom';
import { Box, Text, Image, Button, Center, Spacer } from "@chakra-ui/react";


const Item = ({ product }) => {
	const { title, description, image, id } = product;

	return (
		<Box display="flex" flexDirection="column" boxShadow="md" minW="270px" maxW="280px" rounded="4px" h="auto" overflow="hidden" bg="gray.100">
			<Box h="300" w={"100%"} align={"center"} overflow="hidden">
				<Image src={image} fallbackSrc="https://via.placeholder.com/300" />
			</Box>
			<Spacer />
			<Box maxH="80px">
				<Text pt={5} px={5} fontSize="lg" fontWeight="semibold">
					{title}
				</Text>
			</Box>
			<Spacer />
			<Box h="100px" overflow="hidden">
				<Text px={5} py={3} fontSize="sm">
					{description}
				</Text>
			</Box>
			<Spacer />
			<Center h="90px">
				<Link to={`/detail/${id}`}>
					<Button colorScheme="teal" my={4}>	
						Ver Detalle
					</Button>
				</Link>
			</Center>
		</Box>
	);
};

export default Item;
