"use client";

import React, { useState } from "react";

export default function Home() {
	const [quantity, setQuantity] = useState("");
	const [size, setSize] = useState("");
	const [base, setBase] = useState([]);
	const [meat, setMeat] = useState([]);
	const [flavour, setFlavour] = useState("");
	const [veg, setVeg] = useState([]);
	const [dressing, setDressing] = useState("");
	const [configQuantity, setConfigQuantity] = useState(1);
	const [configurations, setConfigurations] = useState([]);

	const handleBaseClick = (option) => {
		setBase((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			} else if (prev.length < 2) {
				return [...prev, option];
			}
			return prev;
		});
	};

	const handleMeatClick = (option) => {
		setMeat((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			} else if (prev.length < 2) {
				return [...prev, option];
			}
			return prev;
		});
	};

	const handleVegClick = (option) => {
		setVeg((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			} else if (prev.length < 3) {
				return [...prev, option];
			}
			return prev;
		});
	};

	const handleQuantityClick = (option) => {
		setQuantity((prev) => (prev === option ? "" : option));
	};

	const handleSizeClick = (option) => {
		setSize((prev) => (prev === option ? "" : option));
	};

	const handleFlavourClick = (option) => {
		setFlavour((prev) => (prev === option ? "" : option));
	};

	const handleDressingClick = (option) => {
		setDressing((prev) => (prev === option ? "" : option));
	};

	const totalConfigured = configurations.reduce(
		(sum, config) => sum + Number(config.configQuantity),
		0
	);

	const addConfiguration = () => {
		if (!quantity || !configQuantity) return;
		const config = {
			size,
			base,
			meat,
			flavour,
			veg,
			dressing,
			configQuantity,
		};
		setConfigurations((prev) => [...prev, config]);
		setSize("");
		setBase([]);
		setMeat([]);
		setFlavour("");
		setVeg([]);
		setDressing("");
		setConfigQuantity(1);
	};

	const updateConfigQuantity = (index, delta) => {
		setConfigurations((prev) => {
			const totalWithout = prev.reduce(
				(sum, config, i) =>
					i === index ? sum : sum + Number(config.configQuantity),
				0
			);
			const newQty = prev[index].configQuantity + delta;
			if (newQty < 1 || totalWithout + newQty > Number(quantity))
				return prev;
			const newConfigs = [...prev];
			newConfigs[index] = {
				...newConfigs[index],
				configQuantity: newQty,
			};
			return newConfigs;
		});
	};

	const removeConfiguration = (index) => {
		setConfigurations((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-6 font-futura">
			<h1 className="text-4xl font-bold my-4">
				FFK Chef&apos;s Calculator
			</h1>
			<div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
				{/* Meal Quantity */}
				<h2 className="text-2xl font-medium mb-3 text-gray-200">
					Total Meals
				</h2>
				<div className="flex flex-wrap gap-4">
					{["10", "15", "21"].map((option) => (
						<button
							key={option}
							onClick={() => handleQuantityClick(option)}
							className={`px-4 py-2 rounded-md font-medium transition 
                  ${
						quantity === option
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			<div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl mt-8">
				{/* Meal Size */}
				<div className="mb-6">
					<h2 className="text-2xl font-medium mb-3 text-gray-200">
						Size
					</h2>
					<div className="flex flex-wrap gap-4">
						{["Loss", "Balance", "Gain"].map((option) => (
							<button
								key={option}
								onClick={() => handleSizeClick(option)}
								className={`px-4 py-2 rounded-md font-medium transition 
                  ${
						size === option
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
							>
								{option}
							</button>
						))}
					</div>
				</div>

				{/* Base */}
				<div className="mb-6">
					<div className="flex justify-between items-end mb-3">
						<h2 className="text-2xl font-medium text-gray-200">
							Base
						</h2>
						<h3 className="text-md font-medium text-gray-400">
							Up to 2
						</h3>
					</div>
					<div className="flex flex-wrap gap-4">
						{[
							"Rice",
							"Pasta",
							"Sweet Mash",
							"Jungle Salad",
							"Wrap",
							"Sub",
							"Burrito",
						].map((option) => (
							<button
								key={option}
								onClick={() => handleBaseClick(option)}
								className={`px-4 py-2 rounded-md font-medium transition 
                  ${
						base.includes(option)
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
							>
								{option}
							</button>
						))}
					</div>
					{base.length > 0 && (
						<div className="mt-4 p-3 bg-gray-700 rounded-md">
							<h3 className="text-lg font-medium mb-1">
								Selection
							</h3>
							<p className="font-medium">{base.join(", ")}</p>
						</div>
					)}
				</div>

				{/* Protein */}
				<div className="mb-6">
					<div className="flex justify-between items-end mb-3">
						<h2 className="text-2xl font-medium text-gray-200">
							Protein
						</h2>
						<h3 className="text-md font-medium text-gray-400">
							Up to 2
						</h3>
					</div>
					<div className="flex flex-wrap gap-4">
						{["Steak", "Beef Chilli", "Chicken", "Tuna"].map(
							(option) => (
								<button
									key={option}
									onClick={() => handleMeatClick(option)}
									className={`px-4 py-2 rounded-md font-medium transition 
                    ${
						meat.includes(option)
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
								>
									{option}
								</button>
							)
						)}
					</div>
					{meat.length > 0 && (
						<div className="mt-4 p-3 bg-gray-700 rounded-md">
							<h3 className="text-lg font-medium mb-1">
								Selection
							</h3>
							<p className="font-medium">{meat.join(", ")}</p>
						</div>
					)}
				</div>

				{/* Chicken Flavours */}
				{meat.includes("Chicken") && (
					<div className="mb-6">
						<h2 className="text-2xl font-medium text-gray-200 mb-3">
							Flavours (chicken)
						</h2>
						<div className="flex flex-wrap gap-4">
							{[
								"Peri",
								"Tandoori",
								"Jerk",
								"Mango & Lime",
								"Lemon & Herb",
							].map((option) => (
								<button
									key={option}
									onClick={() => handleFlavourClick(option)}
									className={`px-4 py-2 rounded-md font-medium transition 
                    ${
						flavour === option
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
								>
									{option}
								</button>
							))}
						</div>
					</div>
				)}

				{/* Vegetables */}
				<div className="mb-6">
					<div className="flex justify-between items-end mb-3">
						<h2 className="text-2xl font-medium text-gray-200">
							Vegetables
						</h2>
						<h3 className="text-md font-medium text-gray-400">
							Up to 3
						</h3>
					</div>
					<div className="flex flex-wrap gap-4">
						{[
							"Broccoli",
							"Carrots",
							"Asparagus",
							"Green beans",
							"Spinach",
							"Kale",
						].map((option) => (
							<button
								key={option}
								onClick={() => handleVegClick(option)}
								className={`px-4 py-2 rounded-md font-medium transition 
                    ${
						veg.includes(option)
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
							>
								{option}
							</button>
						))}
					</div>
					{veg.length > 0 && (
						<div className="mt-4 p-3 bg-gray-700 rounded-md">
							<h3 className="text-lg font-medium mb-1">
								Selection
							</h3>
							<p className="font-medium">{veg.join(", ")}</p>
						</div>
					)}
				</div>

				{/* Dressing */}
				<div className="mb-6">
					<h2 className="text-2xl font-medium text-gray-200 mb-3">
						Dressing
					</h2>
					<div className="flex flex-wrap gap-4">
						{[
							"House Mayo",
							"Sriracha Chilli",
							"Sweet Chilli",
							"Mint Yoghurt",
							"Mayo",
							"Ketchup",
						].map((option) => (
							<button
								key={option}
								onClick={() => handleDressingClick(option)}
								className={`px-4 py-2 rounded-md font-medium transition 
                    ${
						dressing === option
							? "bg-blue-600 border border-blue-600"
							: "bg-gray-700 border border-gray-600 hover:bg-gray-600"
					}`}
							>
								{option}
							</button>
						))}
					</div>
				</div>

				<div className="mb-6">
					<h2 className="text-2xl font-medium mb-3 text-gray-200">
						Quantity
					</h2>
					<div className="flex items-center">
						<button
							onClick={() =>
								setConfigQuantity((prev) =>
									Math.max(1, prev - 1)
								)
							}
							disabled={configQuantity <= 1}
							className="p-2 bg-gray-700 rounded-l disabled:opacity-50"
						>
							-
						</button>
						<span className="px-4 py-2 bg-gray-600">
							{configQuantity ? configQuantity : 1}
						</span>
						<button
							onClick={() =>
								setConfigQuantity((prev) => prev + 1)
							}
							disabled={
								Number(quantity) <= configQuantity ||
								configurations.reduce(
									(sum, config) =>
										sum + Number(config.configQuantity),
									0
								) +
									configQuantity ===
									Number(quantity)
							}
							className="p-2 bg-gray-700 rounded-r disabled:opacity-50"
						>
							+
						</button>
					</div>
				</div>

				<div>
					<button
						onClick={addConfiguration}
						disabled={
							!quantity ||
							totalConfigured === Number(quantity) ||
							totalConfigured + configQuantity > Number(quantity)
						}
						className="px-4 py-2 rounded-md font-medium transition bg-green-600 hover:bg-green-500 disabled:opacity-50"
					>
						Add Meals
					</button>
				</div>
			</div>

			{/* Meal Configurations Summary */}
			<div className="w-full max-w-3xl bg-gray-800 rounded-lg p-6 shadow-md mt-8">
				<h2 className="text-2xl font-medium text-gray-200">Summary</h2>
				<div className="flex justify-between items-end mb-3">
					<h3 className="text-md font-medium text-gray-400">
						Meals Configured: {totalConfigured}
					</h3>
					<h3 className="text-md font-medium text-gray-400">
						Total Meals: {quantity}
					</h3>
				</div>
				{configurations.length === 0 ? (
					<p className="font-medium">No meals added.</p>
				) : (
					configurations.map((config, index) => {
						const totalWithout =
							totalConfigured - config.configQuantity;
						const plusDisabled =
							totalWithout + (config.configQuantity + 1) >
							Number(quantity);
						return (
							<div
								key={index}
								className="relative bg-gray-700 p-4 rounded-md mt-4"
							>
								<div className="grid grid-cols-2 gap-4 m-auto">
									<p className="font-medium text-gray-300">
										Size:
									</p>
									<p className="font-medium">
										{config.size || "None"}
									</p>
									<p className="font-medium text-gray-300">
										Base:
									</p>
									<p className="font-medium">
										{config.base.length > 0
											? config.base.join(", ")
											: "None"}
									</p>
									<p className="font-medium text-gray-300">
										Protein:
									</p>
									<p className="font-medium">
										{config.meat.length > 0
											? config.meat
													.map((m) =>
														m === "Chicken"
															? `${
																	config.flavour
																		? config.flavour
																		: "Plain"
															  } Chicken`
															: m
													)
													.join(", ")
											: "None"}
									</p>
									<p className="font-medium text-gray-300">
										Vegetables:
									</p>
									<p className="font-medium">
										{config.veg.length > 0
											? config.veg.join(", ")
											: "None"}
									</p>
									<p className="font-medium text-gray-300">
										Dressing:
									</p>
									<p className="font-medium">
										{config.dressing || "None"}
									</p>
								</div>
								<div className="flex justify-between mt-4">
									<div className="flex">
										<button
											onClick={() =>
												updateConfigQuantity(index, -1)
											}
											disabled={
												config.configQuantity <= 1
											}
											className="pb-1 px-2 bg-gray-600 rounded-l disabled:opacity-50"
										>
											-
										</button>
										<span className="py-2 px-4 bg-blue-600 border-2 border-blue-600 text-white text-sm">
											{config.configQuantity}
										</span>
										<button
											onClick={() =>
												updateConfigQuantity(index, 1)
											}
											disabled={plusDisabled}
											className="py-1 px-2 bg-gray-600 rounded-r disabled:opacity-50"
										>
											+
										</button>
									</div>
									<button
										onClick={() =>
											removeConfiguration(index)
										}
										className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md text-white font-medium"
									>
										Remove
									</button>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
