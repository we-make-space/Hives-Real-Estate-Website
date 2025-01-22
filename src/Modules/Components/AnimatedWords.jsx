import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AnimatedWords = () => {
	const words = ["Hello 🐝", "Welcome ❤️", "To 🌱", "Hives 💛"];
	const [index, setIndex] = useState(0);
	const wordRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			// GSAP fade out animation
			gsap.to(wordRef.current, {
				opacity: 0,
				duration: 0.5,
				onComplete: () => {
					// Update the word index
					setIndex((prevIndex) => (prevIndex + 1) % words.length);

					// GSAP fade in animation
					gsap.to(wordRef.current, {
						opacity: 1,
						duration: 0.5,
					});
				},
			});
		}, 2000); // Change word every 3 seconds

		// Cleanup the interval on component unmount
		return () => clearInterval(interval);
	}, [words.length]);

	return (
		<div
			style={{
				fontSize: "2rem",
				fontWeight: "bold",
				textAlign: "center",
				marginTop: "20%",
			}}
		>
			<span ref={wordRef} className="text-gold-400">{words[index]}</span>
		</div>
	);
};

export default AnimatedWords;