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
		<div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
			<h1 className="text-3xl font-bold mb-6">
				FFK Chef&apos;s Calculator
			</h1>

			{/* Meal Size */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Meal size</h2>
				<div className="flex flex-wrap justify-start gap-4">
					{["loss", "balance", "gain"].map((option) => (
						<button
							key={option}
							onClick={() => handleMealSizeClick(option)}
							className={`px-3 py-1 rounded-sm text-white ${
								mealSize === option
									? "bg-teal-600"
									: "bg-teal-950"
							} hover:bg-teal-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Base */}
			<div className="mb-6 w-full max-w-lg">
				<div className="flex justify-between items-end mb-2">
					<h2 className="text-xl font-semibold">Base</h2>
					<h3 className="text-m">Choose up to 2</h3>
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
							className={`px-3 py-1 rounded-sm text-white ${
								base.includes(option)
									? "bg-amber-600"
									: "bg-amber-950"
							} hover:bg-amber-600 transition`}
						>
							{option}
						</button>
					))}
				</div>

				{base.length > 0 && (
					<div className="mt-4 p-2 bg-gray-800 rounded-sm">
						<h3 className="text-md font-semibold">Selection</h3>
						<p>{base.join(", ")}</p>
					</div>
				)}
			</div>

			{/* Meat */}
			<div className="mb-6 w-full max-w-lg">
				<div className="flex justify-between items-end mb-2">
					<h2 className="text-xl font-semibold">Meat</h2>
					<h3 className="text-m">Choose up to 2</h3>
				</div>
				<div className="flex flex-wrap justify-start gap-4">
					{["steak", "beef chilli", "chicken", "tuna"].map(
						(option) => (
							<button
								key={option}
								onClick={() => handleMeatClick(option)}
								className={`px-3 py-1 rounded-sm text-white ${
									meat.includes(option)
										? "bg-rose-600"
										: "bg-rose-950"
								} hover:bg-rose-600 transition`}
							>
								{option}
							</button>
						)
					)}
				</div>

				{/* Display selected meats below */}
				{meat.length > 0 && (
					<div className="mt-4 p-2 bg-gray-800 rounded-sm">
						<h3 className="text-md font-semibold">Selection</h3>
						<p>{meat.join(", ")}</p>
					</div>
				)}
			</div>

			{/* Chicken flavours */}
			{meat.includes("chicken") && (
				<div className="mb-6 w-full max-w-lg">
					<h2 className="text-xl font-semibold mb-2">
						Chicken flavours
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
								className={`px-3 py-1 rounded-sm text-white ${
									flavour === option
										? "bg-violet-600"
										: "bg-violet-950"
								} hover:bg-violet-600 transition`}
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
					<h2 className="text-xl font-semibold">Veg</h2>
					<h3 className="text-m">Choose up to 3</h3>
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
							className={`px-3 py-1 rounded-sm text-white ${
								veg.includes(option)
									? "bg-emerald-600"
									: "bg-emerald-950"
							} hover:bg-emerald-600 transition`}
						>
							{option}
						</button>
					))}
				</div>

				{/* Display selected vegetables below */}
				{veg.length > 0 && (
					<div className="mt-4 p-2 bg-gray-800 rounded-sm">
						<h3 className="text-md font-semibold">Selection</h3>
						<p>{veg.join(", ")}</p>
					</div>
				)}
			</div>

			{/* Dressing */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Dressing</h2>
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
							className={`px-3 py-1 rounded-sm text-white ${
								dressing === option
									? "bg-indigo-600"
									: "bg-indigo-950"
							} hover:bg-indigo-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Selected Meal Summary */}
			<div className="w-full max-w-lg bg-gray-800 rounded-sm p-2">
				<h3 className="text-xl font-semibold">Summary</h3>
				<div className="grid grid-cols-2 gap-x-2">
					<p className="font-medium">Meal size:</p>
					<p>{mealSize ? mealSize : "none"}</p>

					<p className="font-medium">Base:</p>
					<p>{base.length > 0 ? base.join(", ") : "none"}</p>

					<p className="font-medium">Meat:</p>
					<p>
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

					<p className="font-medium">Veg:</p>
					<p>{veg.length > 0 ? veg.join(", ") : "none"}</p>

					<p className="font-medium">Dressing:</p>
					<p>{dressing ? dressing : "none"}</p>
				</div>
			</div>
		</div>
	);
}
