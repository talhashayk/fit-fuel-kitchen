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
		<div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 font-futura">
			<h1 className="text-3xl font-semibold my-3">
				FFK Chef&apos;s Calculator
			</h1>

			<div className="bg-white p-5 pb-0 mb-5 rounded-xl">
				{/* Meal Size */}
				<div className="mb-6 w-full max-w-lg">
					<h2 className="text-xl text-black font-semibold mb-2">
						Size
					</h2>
					<div className="flex flex-wrap justify-start gap-4">
						{["loss", "balance", "gain"].map((option) => (
							<button
								key={option}
								onClick={() => handleMealSizeClick(option)}
								className={`px-3 py-1 rounded-md text-white font-semibold ${
									mealSize === option
										? "bg-rose-600 bg-black border-2 border-rose-600"
										: "bg-black border-2 border-rose-600"
								}`}
							>
								{option}
							</button>
						))}
					</div>
				</div>

				{/* Base */}
				<div className="mb-6 w-full max-w-lg">
					<div className="flex justify-between items-end mb-2">
						<h2 className="text-xl text-black font-semibold">
							Base
						</h2>
						<h3 className="text-m text-black font-semibold">
							Choose 2
						</h3>
					</div>
					<div className="flex flex-wrap justify-start gap-4">
						{[
							"rice",
							"pasta",
							"sweet mash",
							"jungle salad",
							"wrap",
							"sub",
							"burrito",
						].map((option) => (
							<button
								key={option}
								onClick={() => handleBaseClick(option)}
								className={`px-3 py-1 rounded-md text-white font-semibold ${
									base.includes(option)
										? "bg-rose-600 bg-black border-2 border-rose-600"
										: "bg-black border-2 border-rose-600"
								}`}
							>
								{option}
							</button>
						))}
					</div>

					{base.length > 0 && (
						<div className="mt-4 p-2 bg-gray-800 rounded-md bg-black border-2 border-rose-600">
							<h3 className="text-md font-semibold">Selection</h3>
							<p className="font-semibold">{base.join(", ")}</p>
						</div>
					)}
				</div>

				{/* Meat */}
				<div className="mb-6 w-full max-w-lg">
					<div className="flex justify-between items-end mb-2">
						<h2 className="text-xl text-black font-semibold">
							Protein
						</h2>
						<h3 className="text-m text-black font-semibold">
							Choose 2
						</h3>
					</div>
					<div className="flex flex-wrap justify-start gap-4">
						{["steak", "beef chilli", "chicken", "tuna"].map(
							(option) => (
								<button
									key={option}
									onClick={() => handleMeatClick(option)}
									className={`px-3 py-1 rounded-md text-white font-semibold ${
										meat.includes(option)
											? "bg-rose-600 bg-black border-2 border-rose-600"
											: "bg-black border-2 border-rose-600"
									}`}
								>
									{option}
								</button>
							)
						)}
					</div>

					{/* Display selected meats below */}
					{meat.length > 0 && (
						<div className="mt-4 p-2 bg-gray-800 rounded-md bg-black border-2 border-rose-600">
							<h3 className="text-md font-semibold">Selection</h3>
							<p className="font-semibold">{meat.join(", ")}</p>
						</div>
					)}
				</div>

				{/* Chicken flavours */}
				{meat.includes("chicken") && (
					<div className="mb-6 w-full max-w-lg">
						<h2 className="text-xl text-black font-semibold mb-2">
							Flavours (chicken)
						</h2>
						<div className="flex flex-wrap justify-start gap-4">
							{[
								"peri",
								"tandoori",
								"jerk",
								"mango & lime",
								"lemon & herb",
							].map((option) => (
								<button
									key={option}
									onClick={() => handleFlavourClick(option)}
									className={`px-3 py-1 rounded-md text-white font-semibold ${
										flavour === option
											? "bg-rose-600 bg-black border-2 border-rose-600"
											: "bg-black border-2 border-rose-600"
									}`}
								>
									{option}
								</button>
							))}
						</div>
					</div>
				)}

				{/* Veg */}
				<div className="mb-6 w-full max-w-lg">
					<div className="flex justify-between items-end mb-2">
						<h2 className="text-xl text-black font-semibold">
							Vegetables
						</h2>
						<h3 className="text-m text-black font-semibold">
							Choose 3
						</h3>
					</div>
					<div className="flex flex-wrap justify-start gap-4">
						{[
							"broccoli",
							"carrots",
							"asparagus",
							"green beans",
							"spinach",
							"kale",
						].map((option) => (
							<button
								key={option}
								onClick={() => handleVegClick(option)}
								className={`px-3 py-1 rounded-md text-white font-semibold ${
									veg.includes(option)
										? "bg-rose-600 bg-black border-2 border-rose-600"
										: "bg-black border-2 border-rose-600"
								}`}
							>
								{option}
							</button>
						))}
					</div>

					{/* Display selected vegetables below */}
					{veg.length > 0 && (
						<div className="mt-4 p-2 bg-gray-800 rounded-md bg-black border-2 border-rose-600">
							<h3 className="text-md font-semibold">Selection</h3>
							<p className="font-semibold">{veg.join(", ")}</p>
						</div>
					)}
				</div>

				{/* Dressing */}
				<div className="mb-6 w-full max-w-lg">
					<h2 className="text-xl text-black font-semibold mb-2">
						Dressing
					</h2>
					<div className="flex flex-wrap justify-start gap-4">
						{[
							"house mayo",
							"sriracha chilli",
							"sweet chilli",
							"mint yoghurt",
							"mayo",
							"ketchup",
						].map((option) => (
							<button
								key={option}
								onClick={() => handleDressingClick(option)}
								className={`px-3 py-1 rounded-md text-white font-semibold ${
									dressing === option
										? "bg-rose-600 bg-black border-2 border-rose-600"
										: "bg-black border-2 border-rose-600"
								}`}
							>
								{option}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Selected Meal Summary */}
			<div className="w-full max-w-lg bg-gray-800 rounded-xl p-2 bg-black border-2 border-rose-600">
				<h3 className="text-xl font-semibold">Summary</h3>
				<div className="grid grid-cols-2 gap-x-2">
					<p className="font-semibold">Size:</p>
					<p className="font-semibold">
						{mealSize ? mealSize : "none"}
					</p>

					<p className="font-semibold">Base:</p>
					<p className="font-semibold">
						{base.length > 0 ? base.join(", ") : "none"}
					</p>

					<p className="font-semibold">Protein:</p>
					<p className="font-semibold">
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

					<p className="font-semibold">Vegetables:</p>
					<p className="font-semibold">
						{veg.length > 0 ? veg.join(", ") : "none"}
					</p>

					<p className="font-semibold">Dressing:</p>
					<p className="font-semibold">
						{dressing ? dressing : "none"}
					</p>
				</div>
			</div>
		</div>
	);
}
