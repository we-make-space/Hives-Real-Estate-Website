import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Home, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { homepage } from '../../../assets';

const HivesApp = () => {
	const features = [
		{
			icon: <Home className="w-6 h-6" />,
			title: 'Property Search',
			description: 'Browse through extensive listings with detailed filters'
		},
		{
			icon: <Calendar className="w-6 h-6" />,
			title: 'Instant Booking',
			description: 'Schedule viewings directly through the app'
		},
		{
			icon: <MapPin className="w-6 h-6" />,
			title: 'Location Intel',
			description: 'Get neighborhood insights and nearby amenities'
		},
		{
			icon: <MessageCircle className="w-6 h-6" />,
			title: 'Instant Chat',
			description: 'Connect directly with property owners'
		}
	];

	return (
		<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-green-400/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-10"
					>
						<div className="space-y-6">
							<h2 className="text-5xl font-bold text-gray-900 leading-tight">
								Your Dream Home
								<span className="text-gold-400 block mt-2">in Your Pocket</span>
							</h2>
							<p className="text-xl text-gray-600 leading-relaxed">
								Experience the future of real estate hunting with our innovative mobile app. Find, tour,
								and secure your perfect property with just a few taps.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-8">
							{features.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
								>
									<div className="text-gold-400 mb-3">{feature.icon}</div>
									<h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</motion.div>
							))}
						</div>

						<div className="flex gap-6 pt-4">
							<button className="px-8 py-4 bg-gold-400 text-white text-lg rounded-full hover:text-green-400 transition-colors shadow-lg hover:shadow-xl">
								Download App
							</button>
							<button className="px-8 py-4 border-2 border-gold-400 text-gold-400 text-lg rounded-full hover:bg-gold-400/10 transition-colors">
								Learn More
							</button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="relative lg:h-[800px] flex items-center justify-center"
					>
						<div className="absolute inset-0 rounded-full filter blur-3xl opacity-30" />
						<motion.img
							src={homepage}
							alt="Hives Real Estate App Interface"
							className="relative w-full max-w-5xl mx-auto rounded-3xl shadow-2xl"
							animate={{ y: [0, -15, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: 'easeInOut'
							}}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HivesApp;
