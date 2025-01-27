import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Home, Key, Calendar, MapPin } from 'lucide-react';

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
			icon: <Key className="w-6 h-6" />,
			title: 'Virtual Tours',
			description: 'Experience properties in 3D from anywhere'
		}
	];

	return (
		<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gold-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content Side */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div className="space-y-4">
							<h2 className="text-4xl font-bold text-gray-900">
								Your Dream Home
								<span className="text-gold-600"> in Your Pocket</span>
							</h2>
							<p className="text-lg text-gray-600">
								Experience the future of real estate hunting with our innovative mobile app. Find, tour,
								and secure your perfect property with just a few taps.
							</p>
						</div>
					</motion.div>
					<div className="grid grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="text-gold-600 mb-2">{feature.icon}</div>
								<h3 className="font-semibold text-gray-900">{feature.title}</h3>
								<p className="text-sm text-gray-600">{feature.description}</p>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="flex gap-4"
					>
						<div>
							<button className="px-6 py-3 bg-gold-600 text-white rounded-full hover:bg-gold-700 transition-colors">
								Download App
							</button>
							<button className="px-6 py-3 border border-gold-600 text-gold-600 rounded-full hover:bg-gold-50 transition-colors">
								Learn More
							</button>
						</div>
					</motion.div>

					{/* Image Side */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-gold-200 to-gold-100 rounded-full filter blur-3xl opacity-30" />
						<motion.img
							src={homepage}
							alt="Hives Real Estate App Interface"
							className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
							animate={{ y: [0, -10, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: 'easeInOut'
							}}
						/>
					</motion.div>
				</div>
			</div>

			{/* Animated background elements */}
			<div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
				<motion.div
					className="absolute w-64 h-64 rounded-full bg-gold-200 opacity-20 top-1/4 left-1/4"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360]
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: 'linear'
					}}
				/>
				<motion.div
					className="absolute w-96 h-96 rounded-full bg-gold-100 opacity-10 bottom-1/4 right-1/4"
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [360, 180, 0]
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear'
					}}
				/>
			</div>
		</section>
	);
};

export default HivesApp;
