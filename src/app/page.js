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
			<h1 className="text-3xl font-bold mb-6">FFK Chef's Calculator</h1>

			{/* Meal Size */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Meal Size</h2>
				<div className="flex flex-wrap justify-start gap-4">
					{["loss", "balance", "gain"].map((option) => (
						<button
							key={option}
							onClick={() => setMealSize(option)}
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
				<h2 className="text-xl font-semibold mb-2">Base</h2>
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
							onClick={() => setBase(option)}
							className={`px-3 py-1 rounded-sm text-white ${
								base === option
									? "bg-amber-600"
									: "bg-amber-950"
							} hover:bg-amber-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Meat */}
			<div className="mb-6 w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-2">Meat</h2>
				<div className="flex flex-wrap justify-start gap-4">
					{["steak", "beef chilli", "chicken", "tuna"].map(
						(option) => (
							<button
								key={option}
								onClick={() => setMeat(option)}
								className={`px-3 py-1 rounded-sm text-white ${
									meat === option
										? "bg-rose-600"
										: "bg-rose-950"
								} hover:bg-rose-600 transition`}
							>
								{option}
							</button>
						)
					)}
				</div>
			</div>

			{/* Flavours */}
			{meat === "chicken" && (
				<div className="mb-6 w-full max-w-lg">
					<h2 className="text-xl font-semibold mb-2">Flavours</h2>
					<div className="flex flex-wrap justify-start gap-4">
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
				<h2 className="text-xl font-semibold mb-2">Veg</h2>
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
							onClick={() => setVeg(option)}
							className={`px-3 py-1 rounded-sm text-white ${
								veg === option
									? "bg-emerald-600"
									: "bg-emerald-950"
							} hover:bg-emerald-600 transition`}
						>
							{option}
						</button>
					))}
				</div>
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
							onClick={() => setDressing(option)}
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
			<div className="mt-6 w-full max-w-lg">
				<h3 className="text-xl font-semibold">Your Meal</h3>
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
