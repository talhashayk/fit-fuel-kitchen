"use client";

import React, { useState } from "react";

export default function Home() {
	const [mealSize, setMealSize] = useState("");
	const [base, setBase] = useState("");
	const [meat, setMeat] = useState("");
	const [flavour, setFlavour] = useState("");
	const [veg, setVeg] = useState("");
	const [dressing, setDressing] = useState("");

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
			<h1 className="text-3xl font-bold mb-6">Create Your Meal</h1>

			{/* Meal Size */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Meal Size:</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{["loss", "balance", "gain"].map((option) => (
						<button
							key={option}
							onClick={() => setMealSize(option)}
							className={`px-6 py-3 rounded-lg text-white ${
								mealSize === option
									? "bg-blue-600"
									: "bg-blue-800"
							} hover:bg-blue-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Base */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Base:</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
							onClick={() => setBase(option)}
							className={`px-6 py-3 rounded-lg text-white ${
								base === option
									? "bg-yellow-600"
									: "bg-yellow-800"
							} hover:bg-yellow-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Meat */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Meat:</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{["steak", "beef chilli", "chicken", "tuna"].map(
						(option) => (
							<button
								key={option}
								onClick={() => setMeat(option)}
								className={`px-6 py-3 rounded-lg text-white ${
									meat === option
										? "bg-red-600"
										: "bg-red-800"
								} hover:bg-red-600 transition`}
							>
								{option}
							</button>
						)
					)}
				</div>
			</div>

			{meat === "chicken" && (
				<div className="mb-6 w-full max-w-lg">
					<h2 className="text-xl font-semibold mb-2">Flavours:</h2>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							"plain",
							"peri",
							"tandoori",
							"jerk",
							"mango and lime",
							"lemon and herb",
						].map((option) => (
							<button
								key={option}
								onClick={() => setFlavour(option)}
								className={`px-6 py-3 rounded-lg text-white ${
									flavour === option
										? "bg-yellow-600"
										: "bg-yellow-800"
								} hover:bg-yellow-600 transition`}
							>
								{option}
							</button>
						))}
					</div>
				</div>
			)}

			{/* Veg */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Veg:</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
							onClick={() => setVeg(option)}
							className={`px-6 py-3 rounded-lg text-white ${
								veg === option ? "bg-green-600" : "bg-green-800"
							} hover:bg-green-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Dressing */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Dressing:</h2>
				<div className="flex flex-wrap justify-center gap-4">
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
							onClick={() => setDressing(option)}
							className={`px-6 py-3 rounded-lg text-white ${
								dressing === option
									? "bg-purple-600"
									: "bg-purple-800"
							} hover:bg-purple-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Selected Meal Summary */}
			<div className="mt-6 w-full max-w-lg">
				<h3 className="text-xl font-semibold">Your Meal:</h3>
				<p>Meal Size: {mealSize}</p>
				<p>Base: {base}</p>
				<p>
					Meat: {meat} {meat === "chicken" && `(Flavour: ${flavour})`}
				</p>
				<p>Veg: {veg}</p>
				<p>Dressing: {dressing}</p>
			</div>
		</div>
	);
}
