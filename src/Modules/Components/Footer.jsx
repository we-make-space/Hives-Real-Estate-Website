import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	Twitter,
	Instagram,
	Linkedin,
	MapPin,
	Mail,
	Phone,
	ChevronUp,
	Building2,
	Key,
	Users,
	Home,
	Building
} from 'lucide-react';
import { hives_yellow, logo_hives } from '../../../public/images';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black text-gray-300">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Brand Section */}
					<div className="space-y-6">
						<div className="flex items-center gap-3">
							<img
								src={logo_hives}
								alt="Hives Real Estate"
								className="h-10"
							/>
							<img
								src={hives_yellow}
								alt="Hives"
								className="h-6"
							/>
						</div>
						<p className="text-gray-400 text-sm">
							Your trusted partner in finding the perfect property. We make real estate simple,
							transparent, and efficient.
						</p>
						<div className="flex gap-4">
							<Link
								to="https://x.com/realhives?s=21"
								className="hover:text-gold-400 transition-colors"
							>
								<Twitter size={20} />
							</Link>
							<Link
								to="https://www.instagram.com/hivesrealestate/"
								className="hover:text-gold-400 transition-colors"
							>
								<Instagram size={20} />
							</Link>
							<Link
								to="https://www.linkedin.com/company/realhives/"
								className="hover:text-gold-400 transition-colors"
							>
								<Linkedin size={20} />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold text-white">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((item) => (
								<li
									key={item.name}
									className="flex items-center gap-2"
								>
									{item.icon}
									<Link
										to={item.link}
										className="text-gray-400 hover:text-gold-400 transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Properties */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold text-white">Properties</h3>
						<ul className="space-y-3">
							{propertyLinks.map((item) => (
								<li
									key={item.name}
									className="flex items-center gap-2"
								>
									{item.icon}
									<Link
										to={item.link}
										className="text-gray-400 hover:text-gold-500 transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-6">
						<h3 className="text-lg font-semibold text-white">Contact Us</h3>
						<ul className="space-y-4">
							<li className="flex items-center gap-3">
								<MapPin
									className="text-gold-400"
									size={20}
								/>
								<span className="text-gray-400">Blantyne Ave.</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone
									className="text-gold-400"
									size={20}
								/>
								<span className="text-gray-400">+233 (0) 544-121-741</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail
									className="text-gold-400"
									size={20}
								/>
								<a
									href="mailto:realhives@gmail.com"
									className="text-gray-400"
								>
									realhives@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-gray-400 text-sm">
							© {currentYear} Hives Real Estate. All rights reserved.
						</div>
						<div className="flex gap-6 text-sm">
							<Link
								to="/privacy"
								className="text-gray-400 hover:text-gold-400 transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-gold-400 transition-colors hidden"
							>
								Terms of Service
							</Link>
							<Link
								to="/cookies"
								className="text-gray-400 hover:text-gold-400 transition-colors hidden"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll to Top Button */}
			<motion.a
				href="#"
				className="fixed bottom-8 right-8 bg-gold-400 hover:bg-gold-400/70 text-white p-3 rounded-full shadow-lg transition-colors"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<ChevronUp size={24} />
			</motion.a>
		</footer>
	);
};

// Navigation Links Data
const quickLinks = [
	{
		name: 'About Us',
		link: '/about',
		icon: (
			<Users
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'Our Services',
		link: '/services',
		icon: (
			<Key
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'Contact',
		link: '/contact',
		icon: (
			<Mail
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'Careers',
		link: '/careers',
		icon: (
			<Building2
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'News & Updates',
		link: '/news',
		icon: (
			<Building
				size={18}
				className="text-gold-400"
			/>
		)
	}
];

const propertyLinks = [
	{
		name: 'For Sale',
		link: '/properties/sale',
		icon: (
			<Home
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'For Rent',
		link: '/properties/rent',
		icon: (
			<Key
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'New Developments',
		link: '/new-developments',
		icon: (
			<Building2
				size={18}
				className="text-gold-400"
			/>
		)
	},
	{
		name: 'List Your Property',
		link: '/list-property',
		icon: (
			<Building
				size={18}
				className="text-gold-400"
			/>
		)
	}
];

export default Footer;
