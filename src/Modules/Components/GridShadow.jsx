import React, { useRef, useState } from "react";
import FAQ from "./FAQ";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GridShadow = () => {
	const [activeImage, setActiveImage] = useState(0);

	const images = [
		"https://images.unsplash.com/photo-1596510914914-e14c6f59f925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D",
		"https://images.unsplash.com/photo-1654272763471-87c0ebf395f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D",
		"https://images.unsplash.com/photo-1601510007533-c90434e630a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D",
	];

	const paragraphs = [
		{
			id: 1,
			title: "Comprehensive Care for Every Stage of Life",
			content:
				"At our hospital, we provide specialized care for every phase of your health journey.From routine checkups to advanced surgeries, our dedicated team is here to ensure you receive the best possible treatment tailored to your needs.",
			footer: "follow us on our social media platforms",
		},
		{
			id: 2,
			title: "State-of-the-Art Facilities, Compassionate Care",
			content:
				"Our hospital combines cutting-edge technology with a human touch. Explore our advanced medical services, designed to deliver exceptional care in a compassionate and patient-centered",
			footer: "follow us on our social media platforms",
		},
		{
			id: 3,
			title: "Expertise You Can Trust, Close to Home",
			content:
				"With a team of highly trained professionals across various specialties, we offer world-class care right in your community. Learn more about the innovative treatments and services we provide to support your health and wellness.",
			footer: "follow us on our social media platforms",
		},
	];

	const handleHover = (index) => {
		setActiveImage(index);
	};

	const textRef = useRef(null);
	const textReff = useRef(null);

	useGSAP(() => {
		const textElement = textRef.current;
		const textElement1 = textReff.current;

		gsap.fromTo(
			textElement,
			{ y: "100%", opacity: 0 },
			{
				y: "0%",
				opacity: 1,
				duration: 3,
				ease: "elastic",
				stagger: {
					amount: 1,
				},
				scrollTrigger: {
					trigger: textElement,
					start: "top 90%",
					end: "bottom 70%",
					toggleActions: "play none none none",
				},
			}
		);

		gsap.fromTo(
			textElement1,
			{ y: "100%", opacity: 0 },
			{
				y: "0%",
				opacity: 1,
				duration: 5,
				ease: "elastic",
				stagger: {
					amount: 1,
				},
				scrollTrigger: {
					trigger: textElement1,
					start: "top 90%",
					end: "bottom 70%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<main className="h-auto bg-white/0 backdrop-blur-[1px]">
			{/* <div class="absolute inset-0 -z-10 h-full w-full ">
				<div class="absolute bottom-0 left-0 right-0 top-0 "></div>
			</div> */}
			<section className="showcase h-auto connect-sec bg-[radial-gradient(circle_800px_at_100%_200px,#a2e3f48e,transparent)]">
				<div class="portfolio">
					<div
						className="portfolio_item one
                                    relative
                                    flex
                                    flex-col
                                    justify-end
                                    w-full
                                    h-auto
                                    overflow-hidden
                                    "
					>
						<div
							className="h-full
                            absolute
                            flex
                            flex-col
                            justify-end
                            
                            overlay-text-first-grid
                            overflow-hidden
                            "
						>
							<div
								className="h-50
                                transition-all
                                flex
                                flex-col
                                justify-end 
                                "
							>
								<p
									className="p-5
                                                text-[#fffafa]
                                                xl:text-3xl
                                                lg:text-2xl
                                                md:text-2xl
                                                text-2xl
                                                overlay-text
                                                overflow-hidden           
                                                "
								>
									How we do it at space How we do it at space
								</p>
							</div>
						</div>
					</div>
					<div
						class="portfolio_item two
                                    relative
                                    flex
                                    flex-col
                                    justify-center
                                    w-full
                                    overflow-hidden
                                    xl:text-[3.5rem]
                                    lg:text-5xl
                                    md:text-4xl
                                    sm:text-3xl
                                    item_two_order //order-first
                                    "
					>
						<div className="portfolio_item_two_text">
							<span>
								You're at the right place;{" "}
								<span class="span_create">let's create!</span>
							</span>
						</div>
					</div>
					<div
						className="portfolio_item three
                                    relative
                                    flex
                                    flex-col
                                    justify-end
                                    w-full
                                    overflow-hidden
                                    "
					>
						<div
							className="h-full
                            absolute
                            flex
                            flex-col
                            justify-end
                            overlay
                            overflow-hidden
                            "
						>
							<div
								className="h-50
                                transition-all
                                flex
                                flex-col
                                justify-end 
                                "
							>
								<p
									className="p-5
                                                text-[#fffafa]
                                                xl:text-3xl
                                                lg:text-2xl
                                                md:text-2xl
                                                text-2xl
                                                overlay-text
                                                overflow-hidden           
                                                "
								>
									How we do it at space How we do it at space
								</p>
							</div>
						</div>
					</div>

					<div
						className="portfolio_item four
                                    relative
                                    flex
                                    flex-col
                                    justify-end
                                    w-full
                                    overflow-hidden
                                    "
					>
						<div
							className="h-full
                                            absolute
                                            flex
                                            flex-col
                                            justify-end
                                            overlay
                                            overflow-hidden
                                            "
						>
							<div
								className="h-50
                                                transition-all
                                                flex
                                                flex-col
                                                justify-end 
                                                "
							>
								<p
									className="p-5
                                                text-[#fffafa]
                                                xl:text-3xl
                                                lg:text-2xl
                                                md:text-2xl
                                                text-2xl
                                                overlay-text
                                                overflow-hidden           
                                                "
								>
									How we do it at space How we do it at space
								</p>
							</div>
						</div>
					</div>

					<div
						className="portfolio_item five
                                    relative
                                    flex
                                    flex-col
                                    justify-end
                                    w-full
                                    overflow-hidden
                                    "
					>
						<div
							className="h-full
                                            absolute
                                            flex
                                            flex-col
                                            justify-end
                                            overlay
                                            overflow-hidden
                                            "
						>
							<div
								className="h-50
                                                transition-all
                                                flex
                                                flex-col
                                                justify-end 
                                                "
							>
								<p
									className="p-5
                                                text-[#fffafa]
                                                xl:text-3xl
                                                lg:text-2xl
                                                md:text-2xl
                                                text-2xl
                                                overlay-text
                                                overflow-hidden           
                                                "
								>
									How we do it at space How we do it at space
								</p>
							</div>
						</div>
					</div>

					<div
						className="portfolio_item six
                                    relative
                                    flex
                                    flex-col
                                    justify-end
                                    w-full
                                    overflow-hidden
                                    "
					>
						<div
							className="h-full
                                            absolute
                                            flex
                                            flex-col
                                            justify-end
                                            overlay
                                            overflow-hidden
                                            "
						>
							<div
								className="h-50
                                                transition-all
                                                flex
                                                flex-col
                                                justify-end                              "
							>
								<p
									className="p-5
                                                text-[#fffafa]
                                                xl:text-3xl
                                                lg:text-2xl
                                                md:text-2xl
                                                text-2xl
                                                overlay-text
                                                overflow-hidden           
                                                "
								>
									How we do it at space How we do it at space
								</p>
							</div>
						</div>
					</div>

					<div className="portfolio_item seven">
						<div>
							<span className="text-white">
								Meet Jeshuruna
								{/* <span className="text-white">create</span> */}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Other section More */}
			<section
				className="min-w-full
                                    h-auto
                                    p-16
                                    overflow-hidden
                                    "
			>
				<div
					className="flex
                                    flex-row
                                    gap-[15px]
                                    pb-[50px]
                                    write-up-media-query
                                    "
				>
					<div className="w-[100%]">
						<header className="pb-20">
							<h3
								ref={textRef}
								className="lg:text-4xl
                                                md:text-3xl
                                                sm:text-2xl
                                                xl:text-5xl
                                                pb-6
                                                font-bold
                                                text-green-400
                                                "
							>
								Discover More...
							</h3>
							<div
								ref={textReff}
								className="lg:text-lg md:text-md sm:text-lg max-w-xl"
							>
								These paragraphs focus on the hospital's
								commitment to quality care, innovation, and
								patient satisfaction.
							</div>
						</header>

						<figure className="services_wrapper_one_fig pl-5">
							<div className="w-full md:w-1/2 mb-8 md:mb-0">
								<img
									src={images[activeImage]}
									alt={`Image ${activeImage + 1}`}
									width={400}
									className=" rounded-lg shadow-lg"
								/>
							</div>
						</figure>
					</div>

					<div className="flex flex-col w-full gap-5 cursor-pointer">
						{paragraphs.map((para, index) => (
							<header
								className="
                                          services_wrapper_two_base
                                          border-gold-400
                                          border-t-[0.5px]
                                          py-4
                                          "
								key={index}
								onMouseEnter={() => handleHover(index)}
							>
								<h4
									className="lg:text-2xl
                                                md:text-2xl
                                                sm:text-xl
                                                xs:text-lg
                                                ss:text-lg
                                                text-green-400
                                                
                                                font-semibold
                                                "
								>
									{para.title}
								</h4>
								<p className="pb-4">{para.content}</p>

								<a href="#">{para.footer}</a>
							</header>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}

			<FAQ />
		</main>
	);
};

export default GridShadow;
