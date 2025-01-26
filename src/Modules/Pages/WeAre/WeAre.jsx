import React, { useRef } from "react";
import { GridShadow, Marquee, Masonry, Mission } from "../../Components";
import { Banhart, hivesSmiles } from "../../../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Team } from "..";
import HivesApp from "../Hives/HivesApp";

const WeAre = () => {
	const textRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	//  const videoRef = useRef();

	useGSAP(() => {
		if (window.innerWidth > 768) {
			gsap.set("#entry_text", {
				xPercent: -50,
				opacity: 0,
			});

			gsap.to("#entry_text", {
				scrollTrigger: {
					trigger: "#entry",
					start: "top bottom",
					end: "bottom 100%",
					scrub: true,
				},
				opacity: 1,
				xPercent: 80,
			});
		}

		//entry picture
		gsap.set("#entry_media", {
			xPercent: 100,
			opacity: 0,
		});

		gsap.to("#entry_media", {
			scrollTrigger: {
				trigger: "#entry_pic",
				start: "top bottom",
				end: "bottom 100%",
				scrub: true,
			},
			xPercent: 0,
			opacity: 1,
		});

		const textElement = textRef.current;

		gsap.fromTo(
			textElement,
			{ x: "-100%", opacity: 0 }, // Initial state: text is below and invisible
			{
				x: "0%",
				opacity: 1,
				duration: 3, // Adjust the duration as per your need
				ease: "elastic.inOut",
				// yoyo: true,
				// yoyoEase: true,
				scrollTrigger: {
					trigger: textElement,
					start: "top 90%", // Starts when the top of the element reaches 90% of the viewport
					end: "bottom 70%",
					toggleActions: "play none none none", // Play the animation only once
				},
			}
		);
	}, []);

	return (
		<>
			<div className="font-sans p-8 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
				{/* Top Section */}
				<section id="#entry" className="mb-12">
					<div
						id="entry_pic"
						className="flex max-w-full justify-between gap-5 blog_write"
					>
						<div>
							<h1
								ref={textRef}
								style={{ overflow: "hidden" }}
								className="max-w-xl mb-4 text-4xl font-bold tracking-tight text-green-400 sm:text-6xl sub_hero_text"
							>
								We're changing the way people connect.
							</h1>
							<div className="flex flex-col gap-8 text-xl ">
								<p
									id="entry_text"
									className="text-black max-w-2xl text-justify "
								>
									We're revolutionizing how people find and connect with their ideal homes. With Hives, you can explore properties, list spaces, and make connections effortlessly—all through our mobile app. Say goodbye to the hassle and hello to a smarter, more seamless way of navigating real estate. Your perfect home is just a tap away.
								</p>
								<p
									id="entry_text"
									className="text-black max-w-2xl text-left"
								>
									Our platform simplifies the real estate experience by eliminating the need for agents, putting you in direct contact with property owners. With Hives, you can seamlessly browse properties, communicate openly, and manage transactions securely—all within our user-friendly mobile app. Whether you're renting, listing, or simply exploring, Hives gives you the freedom to navigate your journey with ease and confidence.
								</p>
								<p
									id="entry_text"
									className="text-black max-w-2xl text-left"
								>
									With Hives, you’re not just finding a place to live; you’re discovering a community that fits your lifestyle. Our mobile app brings you closer to the perfect home with ease and convenience. Explore, connect, and make the move that suits you—all in one seamless experience.
								</p>
							</div>
						</div>
						<img
							src={hivesSmiles}
							width={550}
							className=""
							id="entry_media"
						/>
					</div>
				</section>

				<Mission />

				{/* Stats Section */}
				<section className="flex justify-around my-12 text-center text-gold-400 blog_write gap-5">
					<div>
						<p className="text-5xl font-bold">44 million</p>
						<p className="text-gray-600">
							Transactions every 24 hours
						</p>
					</div>
					<div>
						<p className="text-5xl font-bold">$119 trillion</p>
						<p className="text-gray-600">Assets under holding</p>
					</div>
					<div>
						<p className="text-5xl font-bold">46,000</p>
						<p className="text-gray-600">New users annually</p>
					</div>
				</section>
			</div>
			<div className="bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
				<Marquee />
				<HivesApp />
				<Masonry />
				<Team />
			</div>
			{/* Footer Section */}
			<section className="flex justify-center items-center w-full p-8">
				<div className="cta_img h-[60vh] w-full rounded-xl"></div>
			</section>
		</>
	);
};

export default WeAre;
