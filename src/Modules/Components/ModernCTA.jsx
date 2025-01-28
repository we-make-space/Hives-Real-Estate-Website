import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { hotel, partner, rent } from '../../assets';

const images = [
	{
		url: hotel,
		title: 'Experience Innovation',
		description: 'Transform your digital presence with cutting-edge solutions'
	},
	{
		url: partner,
		title: 'Build the Future',
		description: "Join us in creating tomorrow's technology today"
	},
	{
		url: rent,
		title: 'Empower Growth',
		description: 'Scale your business with powerful tools and insights'
	}
];

const ModernCTA = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			handleSlideChange((prev) => (prev + 1) % images.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const handleSlideChange = (newIndex) => {
		setIsTransitioning(true);
		setCurrentSlide(newIndex);
		setTimeout(() => setIsTransitioning(false), 500);
	};

	const nextSlide = () => {
		handleSlideChange((prev) => (prev + 1) % images.length);
	};

	const prevSlide = () => {
		handleSlideChange((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<section className="relative w-full overflow-hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
			<div className="relative h-[350px] md:h-[600px] w-full">
				{' '}
				{/* Adjusted height */}
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-white opacity-50" />
				<div className="absolute inset-0" />
				{/* Image Container */}
				<div
					className="absolute inset-0 transition-transform duration-700 ease-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{images.map((image, index) => (
						<div
							key={index}
							className="absolute top-0 left-0 w-full h-full"
							style={{ transform: `translateX(${index * 100}%)` }}
						>
							<div className="relative w-full h-full overflow-hidden">
								<img
									src={image.url}
									alt={image.title}
									className={`w-full h-full object-cover transition-transform duration-700 ${
										currentSlide === index && !isTransitioning ? 'scale-95' : 'scale-100'
									}`}
									style={{
										height: '100%',
										objectFit: 'contain' // Ensures the image fits without cropping
									}}
								/>
							</div>
						</div>
					))}
				</div>
				{/* Navigation */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4">
					<button
						onClick={prevSlide}
						className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
					>
						<ChevronLeft className="w-5 h-5 text-white" />
					</button>

					<div className="flex gap-3">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => handleSlideChange(index)}
								className={`w-12 h-1 rounded-full transition-all duration-300 ${
									currentSlide === index ? 'bg-white w-16' : 'bg-white/50'
								}`}
							/>
						))}
					</div>

					<button
						onClick={nextSlide}
						className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
					>
						<ChevronRight className="w-5 h-5 text-white" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ModernCTA;
