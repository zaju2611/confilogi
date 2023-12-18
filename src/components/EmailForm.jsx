import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				className="input"
				type="email"
				placeholder="Enter your email address"
				{...register("Email", {
					required: "Email is required",
					min: 1,
					pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				})}
			/>
			<button className="newsBtn" type="submit">
				Contact Us
			</button>
		</form>
	);
}
