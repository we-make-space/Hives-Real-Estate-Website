import React, { useRef } from 'react';
import Button from './Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
	{
		id: 1,
		title: 'Streamlined Launch',
		imageSrc:
			'https://images.unsplash.com/photo-1581595220057-eefa8c4add1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zcGl0YWwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, cumque aut tempora dolorum magni odit! Dolorum vel unde illo quae tenetur cumque?'
	},
	{
		id: 2,
		title: 'Accelerate your build',
		imageSrc:
			'https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, cumque aut tempora dolorum magni odit! Dolorum vel unde illo quae tenetur cumque?'
	},
	{
		id: 3,
		title: 'Built for growth',
		imageSrc:
			'https://images.unsplash.com/photo-1516575901726-efcb7a9895a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, cumque aut tempora dolorum magni odit! Dolorum vel unde illo quae tenetur cumque?'
	}
];

const Mission = () => {
	const textRef = useRef(null);
	const cardsRef = useRef([]);

	useGSAP(() => {
		const textElement = textRef.current;

		gsap.fromTo(
			textElement,
			{ y: '100%', opacity: 0 },
			{
				y: '0%',
				opacity: 1,
				duration: 3,
				ease: 'elastic',
				stagger: {
					amount: 1
				},
				scrollTrigger: {
					trigger: textElement,
					start: 'top 90%',
					end: 'bottom 70%',
					toggleActions: 'play none none none'
				}
			}
		);

		gsap.fromTo(
			cardsRef.current,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 3,
				ease: 'elastic',
				stagger: 0.2,
				scrollTrigger: {
					trigger: '.cards-container',
					start: 'top 80%'
				}
			}
		);
	}, []);

	return (
		<div className="bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] inner-box-shadow text-slate-700 w-full mt-16 rounded-lg p-8 md:p-16 overflow-hidden">
			<h1
				ref={textRef}
				className="text-3xl font-semibold sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-green-400"
			>
				Renting, Buying, Selling, and Booking – <br /> Simplified for You
			</h1>

			<div className="w-fit mb-6">
				<Button />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 blog_write cards-container">
				{cardData.map((card, i) => (
					<div
						ref={(el) => (cardsRef.current[i] = el)}
						key={card.id}
						className="flex flex-col gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						{/* Image Section */}
						<div className="w-full h-48 overflow-hidden rounded-xl">
							<img
								src={card.imageSrc}
								alt={card.title}
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Text Content */}
						<h5 className="text-2xl font-semibold text-gold-500">{card.title}</h5>
						<p className="text-gray-600">{card.content}</p>
						<button className="mt-auto py-2 bg-gold-400 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 lg:w-[40%]">
							Read more
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Mission;
