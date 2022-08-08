import React from "react";
import { useForm } from "react-hook-form";
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
    Box,  
} from "@chakra-ui/react";
import Swal from 'sweetalert2'


export default function Checkout() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();


	function onSubmit(data) {
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Your purchase was successfully sent',
                datos: data,
                })
        },1000);
	}

	return (
        <Box p={[6, 8, 10, 12]}>
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={errors.name}>
				<FormLabel htmlFor="name">First name</FormLabel>
				<Input
                    mb={5}
					id="name"
					placeholder="Juan"
					{...register("name", {
						required: "This field is required",
						minLength: { value: 4, message: "Minimum length should be 4" },
					})}
				/>
				<FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={errors.lastName}>
				<FormLabel htmlFor="lastName">Last name</FormLabel>
				<Input
                    mb={5}
					id="lastName"
					placeholder="Perez"
					{...register("lastName", {
						required: "This field is required",
						minLength: { value: 4,
                        message: "Minimum length should be 4" },
					})}
				/>
				<FormErrorMessage>
					{errors.lastName && errors.lastName.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={errors.email}>
				<FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                    mb={5}
                    id="email" 
                    placeholder="asdf@gmail.com" 
                    {...register("email", { 
                        required: "This field is required", 
                        pattern: { value: /^\S+@\S+$/i , message: "Please enter a valid email" },
                    })} 
				/>
				<FormErrorMessage>
					{errors.email && errors.email.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={errors.phone}>
				<FormLabel htmlFor="phone">Phone</FormLabel>
				<Input
                    mb={5}
					id="phone"
					placeholder="11-5983-0283"
					{...register("phone", {
                        required: "This field is required", 
                        minLength: { value: 6, message: "Minimum length should be 6" },
                        maxLength: { value: 12, message: "Max length should be 12" },
                        pattern:  { value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$/g , message: "please enter a valid phone number" } 
                    })}
				/>
				<FormErrorMessage>
					{errors.phone && errors.phone.message}
				</FormErrorMessage>
			</FormControl>
			<Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
				Submit
			</Button>
		</form>
        </Box>
	);
}
