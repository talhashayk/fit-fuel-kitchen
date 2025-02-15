"use client";

import React, { useState } from "react";

export default function Home() {
	const [mealSize, setMealSize] = useState("");
	const [base, setBase] = useState([]);
	const [meat, setMeat] = useState([]);
	const [flavour, setFlavour] = useState("");
	const [veg, setVeg] = useState([]);
	const [dressing, setDressing] = useState("");

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

	const handleMealSizeClick = (option) => {
		setMealSize((prev) => (prev === option ? "" : option));
	};

	const handleFlavourClick = (option) => {
		setFlavour((prev) => (prev === option ? "" : option));
	};

	const handleDressingClick = (option) => {
		setDressing((prev) => (prev === option ? "" : option));
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-6 font-futura">
			<h1 className="text-4xl font-bold my-4">
				FFK Chef&apos;s Calculator
			</h1>

			<div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
				{/* Meal Size */}
				<div className="mb-6">
					<h2 className="text-2xl font-medium mb-3 text-gray-200">
						Size
					</h2>
					<div className="flex flex-wrap gap-4">
						{["Loss", "Balance", "Gain"].map((option) => (
							<button
								key={option}
								onClick={() => handleMealSizeClick(option)}
								className={`px-4 py-2 rounded-md font-medium transition 
                  ${
						mealSize === option
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
							Choose 2
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
							Choose 2
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
							Choose 3
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
			</div>

			{/* Selected Meal Summary */}
			<div className="w-full max-w-3xl bg-gray-800 rounded-lg p-6 shadow-md mt-8">
				<h3 className="text-2xl font-medium mb-4">Summary</h3>
				<div className="grid grid-cols-2 gap-4">
					<p className="font-medium text-gray-300">Size:</p>
					<p className="font-medium">{mealSize || "none"}</p>

					<p className="font-medium text-gray-300">Base:</p>
					<p className="font-medium">
						{base.length > 0 ? base.join(", ") : "none"}
					</p>

					<p className="font-medium text-gray-300">Protein:</p>
					<p className="font-medium">
						{meat.length > 0
							? meat
									.map((m) =>
										m === "chicken"
											? `${
													flavour ? flavour : "plain"
											  } chicken`
											: m
									)
									.join(", ")
							: "none"}
					</p>

					<p className="font-medium text-gray-300">Vegetables:</p>
					<p className="font-medium">
						{veg.length > 0 ? veg.join(", ") : "none"}
					</p>

					<p className="font-medium text-gray-300">Dressing:</p>
					<p className="font-medium">{dressing || "none"}</p>
				</div>
			</div>
		</div>
	);
}
