import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WavingEmoji = () => {
	const emojiRef = useRef(null);

	useEffect(() => {
		const emoji = emojiRef.current;

		const waveAnimation = gsap
			.timeline()
			.to(emoji, {
				rotation: 20,
				duration: 0.1,
				ease: "power2.in",
				transformOrigin: "70% 70%",
			})
			.to(emoji, {
				rotation: -20,
				duration: 0.1,
				ease: "power2.in",
				repeat: 2,
				yoyo: true,
			})
			.to(emoji, {
				rotation: 0,
				duration: 0.3,
				ease: "power2.out",
			});

		const animationInterval = setInterval(() => {
			waveAnimation.restart();
		}, 2000);

		return () => {
			clearInterval(animationInterval);
		};
	}, []);

	return (
		<div
			ref={emojiRef}
			style={{ display: "inline-block", fontSize: "2rem" }}
		>
			👋
		</div>
	);
};

export default WavingEmoji;
