import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import {
	FormLabel,
	FormControl,
	Input,
	Button,
	Box,
} from "@chakra-ui/react";
import { db } from "../../firebase/firebase";
import Swal from "sweetalert2";

function Checkout() {
	const { products, totalPrice } = useContext(CartContext);
	const [order, setOrder] = useState(); //order
	const [orderId, setOrderId] = useState(); //id

	async function onSubmit(e) {
		e.preventDefault();

		let newOrder = {
			buyer: {
				name: e.target[0].value,
				email: e.target[1].value,
				phone: e.target[2].value,
			},
			items: products,
			total: totalPrice(),
		};
		setOrder(newOrder);

		try {
			if (
				newOrder.buyer.name !== "" &&
				newOrder.buyer.email !== "" &&
				newOrder.buyer.phone !== ""
			) {
				const queryCollection = collection(db, "orders");
				const docRef = await addDoc(queryCollection, order);
				const docRefId = docRef.id;
				setOrderId(docRefId);
			} else {
				Swal.fire({
					icon: "warning",
					text: "Please complete all the form fields",
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	const buySuccess = () => {
		setTimeout(() => {
			Swal.fire({
				icon: "success",
				title: "Your purchase is on the way! Tracking number:",
				text: orderId,
			});
		}, 1000);

		return (
			<>
				{orderId ? (
					buySuccess()
				) : (
					<Box p={[6, 8, 10, 12]}>
						<form onSubmit={onSubmit}>
							<FormControl>
								<FormLabel htmlFor="name">First name</FormLabel>
								<Input
									mb={5}
									id="name"
									placeholder="Juan"
								/>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="lastName">Last name</FormLabel>
								<Input
									mb={5}
									id="lastName"
									placeholder="Perez"
								/>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="email">E-mail</FormLabel>
								<Input
									mb={5}
									id="email"
									placeholder="juanperez@gmail.com"
								/>
							</FormControl>
							<Button
								mt={4}
								colorScheme="teal"
								type="submit"
							>
								Place order
							</Button>
						</form>
					</Box>
				)}
				;
			</>
		);
	};
}

export default Checkout;
