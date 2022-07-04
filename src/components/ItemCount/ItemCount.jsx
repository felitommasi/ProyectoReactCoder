import React, { useState, /* useEffect */ } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";

const ItemCount = ({ stock, onAdd }) => {
	const [count, setCount] = useState(0);

	const decreaseCount = () => {
		setCount(count - 1);
	};

	const increaseCount = () => {
		setCount(count + 1);
	};

/*  	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);  */


	return (
		<VStack>
			<HStack spacing="40px" mb="16px" bg="white" rounded="8px" p={1}>
				<Button
					disabled={count <= 0}
					onClick={decreaseCount}
					colorScheme="gray"
					boxShadow="sm"
				>
					-
				</Button>
				<span>{count}</span>
				<Button
					disabled={count >= stock}
					onClick={increaseCount}
					colorScheme="gray"
					boxShadow="sm"
				>
					+
				</Button>
			</HStack>

			<Button
				rightIcon={<MdShoppingCart />}
				disabled={stock <= 0}
				onClick={() => onAdd(count)}
				colorScheme="blue"
			>
				Agregar al carrito
			</Button>
		</VStack>
	);
};

export default ItemCount;
