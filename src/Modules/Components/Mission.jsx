import React, { useRef } from 'react';
import Button from './Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
	{
		id: 1,
		title: 'Find Your Dream Home',
		imageSrc: 'https://rb.gy/mj35l7',
		content:
			"Discover your ideal property with Hives. Whether you're looking to rent or buy, we make it easier than ever to find your perfect match in the real estate market.",
		tag: 'Home Search'
	},
	{
		id: 2,
		title: 'List Your Property with Ease',
		imageSrc: 'https://rb.gy/7og41m',
		content:
			'Join Hives today and list your property with just a few simple steps. Our platform helps homeowners and agents quickly connect with buyers and renters in a seamless way.',
		tag: 'Property Listing'
	},
	{
		id: 3,
		title: 'Maximize Your Property Value',
		imageSrc: 'https://rb.gy/o9t60y',
		content:
			"Hives offers expert tools to help you showcase your property in the best light. With high-quality listings and market insights, you can maximize your property's value and attract more buyers or renters.",
		tag: 'Property Value'
	}
];

const Mission = () => {
	const containerRef = useRef(null);
	const textRef = useRef(null);
	const cardsRef = useRef([]);

	useGSAP(() => {
		const textElement = textRef.current;
		const containerElement = containerRef.current;

		gsap.fromTo(
			textElement.children,
			{ y: 40, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'power2.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: containerElement,
					start: 'top 90%',
					toggleActions: 'play none none none'
				}
			}
		);

		gsap.fromTo(
			cardsRef.current,
			{ y: 100, scale: 0.9, opacity: 0 },
			{
				y: 0,
				scale: 1,
				opacity: 1,
				duration: 1.2,
				ease: 'back.out(1.7)',
				stagger: 0.2,
				scrollTrigger: {
					trigger: '.cards-container',
					start: 'top 80%',
					toggleActions: 'play none none none'
				}
			}
		);

		gsap.fromTo(
			containerElement.querySelectorAll('.stats-item'),
			{ scale: 0.8, opacity: 0 },
			{
				scale: 1,
				opacity: 1,
				duration: 1.5,
				ease: 'elastic.out(1, 0.5)',
				stagger: 0.3,
				scrollTrigger: {
					trigger: '.stats-container',
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			}
		);
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0  opacity-40" />

			<div className="relative bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm min-h-screen p-8 md:p-16 overflow-hidden">
				<div
					ref={textRef}
					className="max-w-6xl mx-auto mb-16"
				>
					<div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full">
						Our Services
					</div>
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold-400 to-green-600 bg-clip-text text-transparent mb-6">
						Renting, Buying, Selling and Booking
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8">
						Simplified for You - Everything you need in one place
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cards-container max-w-6xl mx-auto">
					{cardData.map((card, i) => (
						<div
							ref={(el) => (cardsRef.current[i] = el)}
							key={card.id}
							className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
						>
							{/* Image Container */}
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
								<img
									src={card.imageSrc}
									alt={card.title}
									className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
								/>
								<span className="absolute top-4 left-4 z-20 px-3 py-1 text-sm font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
									{card.tag}
								</span>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3 text-gray-900">{card.title}</h3>
								<p className="text-gray-600 mb-6 line-clamp-3">{card.content}</p>
								<button className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
									Learn more
									<svg
										className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{[
						{ value: '2M+', label: 'Potential Users' },
						{ value: '98%', label: 'Success Rate' },
						{ value: '24/7', label: 'Support' },
						{ value: '150+', label: 'Testimonials' }
					].map((stat, index) => (
						<div
							key={index}
							className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm"
						>
							<div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
							<div className="text-sm text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Mission;
