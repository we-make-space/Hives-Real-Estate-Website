import React, { useRef } from "react";
import { GridShadow, Marquee, Masonry, Mission } from "../../Components";
import { Banhart } from "../../../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Team } from "..";

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
			xPercent: 2,
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
								className="max-w-xl mb-4 text-4xl font-bold tracking-tight text-gold-400 sm:text-6xl sub_hero_text"
							>
								We're changing the way people connect.
							</h1>
							<div className="flex flex-col gap-8 text-lg ">
								<p
									id="entry_text"
									className="text-black max-w-2xl text-justify "
								>
									Cupidatat minim in magna ipsum sint dolor
									qui. Sunt elit in quis cupidatat mollit aute
									velit. Elit labore commodo nulla aliqua
									pariatur. Mollit ullamco exercitation
									tempor. Sint aliqua enim velit sunt id
									pariatur in voluptate elit. Eu voluptate.
									Semper massa enim curat feugiat varius
									consectetur aliquet.
								</p>
								<p
									id="entry_text"
									className="text-black max-w-2xl text-justify"
								>
									Cupidatat minim in magna ipsum sint dolor
									qui. Sunt elit in quis cupidatat mollit aute
									velit. Elit labore commodo nulla aliqua
									pariatur. Mollit ullamco exercitation
									tempor. Sint aliqua enim velit sunt id
									pariatur in voluptate elit. Eu voluptate.
									Semper massa enim curat feugiat varius
									consectetur aliquet.
								</p>
								<p
									id="entry_text"
									className="text-black max-w-2xl text-justify"
								>
									Cupidatat minim in magna ipsum sint dolor
									qui. Sunt elit in quis cupidatat mollit aute
									velit. Elit labore commodo nulla aliqua
									pariatur. Mollit ullamco exercitation
									tempor. Sint aliqua enim velit sunt id
									pariatur in voluptate elit. Eu voluptate.
									Semper massa enim curat feugiat varius
									consectetur aliquet.
								</p>
							</div>
						</div>
						<img
							src="https://plus.unsplash.com/premium_photo-1664303363680-4c8f8e504694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWxzfGVufDB8fDB8fHww"
							alt="hospital"
							className="rounded-2xl"
							id="entry_media"
						/>
					</div>
				</section>

				{/* Mission Section */}
				{/* <section className="bg-gray-100 p-8 rounded-lg">
				<h2 className="text-4xl font-bold mb-4">Our mission</h2>
				<p className="text-gray-600 mb-6">
					Aliquet nec acdi mattis amet quisque ullamcorper neque, nibh
					sem. At arcu, sit dui, nibh dui, aliquam eget aliquam.
					Quisque id ut vitae feugiat egestas ac. Diam nulla orci et
					in vivamus scelerisque eget. Eleifend egestas fringilla
					sapien.
				</p>
				<p className="text-gray-600 mb-6">
					Faucibus commodo massa morbi, volutpat. Dignissim ad eget
					risus diam. Mattis mattis neque sit erat rhoncus erat
					turpis. Id lacinia viverra porttitor ut ac vitae eu mauris
					risus. Faucibus commodo massa morbi, volutpat. Dignissim ad
					eget risus diam. Mattis mattis neque sit erat rhoncus erat
					turpis.
				</p>
				<p className="text-gray-600">
					Et vitae fames facilisi magna lacus est commassa. Vitae
					sapien duis est id et blandit hendrerit faucibus vestibulum.
					Luctus enim faucibus orci donec nullam. Sit varius volutpat
					vulputate est varius nisl. Vestibulum sit ut sit amet at
					amet feugiat volutpat. Ac a lorem varius vulputate.
				</p>
			</section> */}

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
				<GridShadow />
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
