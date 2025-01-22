import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { TbArrowBadgeUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { logo_hives } from "../../../public/images";

const Footer = () => {
	return (
		<main className="h-auto flex mt-auto flex-col relative ">
			<section className="w-full h-auto bg-blue-50	flex p-3  justify-start items-start overflow-hidden footer-section gap-5">
				<section className="items-start h-auto flex ">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<figure className="w-full gap-3 items-center flex ">
								<span className="flex items-center gap-6">
									<img
										src={logo_hives}
										className="h-8 mr-[-1.25rem]"
										alt="Fashion Logo"
									/>
									<span className="self-center text-xl font-bold whitespace-nowrap dark:text-white uppercase text-black flex flex-col justify-start">
										Hives
									</span>
								</span>
							</figure>
						</header>

						<div className="intro-foot-icons mt-3 flex gap-1">
							<div className="intro-foot-icons-twitter flex items-center">
								<span className="text-md text-black social_media_names pl-2">
									<Link to="#">
										<FiTwitter />
									</Link>
								</span>
							</div>

							<div className="intro-foot-icons-linkedIn flex items-center">
								<span className="text-md text-black social_media_names pl-2">
									<Link to="">
										<AiOutlineFacebook />
									</Link>
								</span>
							</div>

							<div className="intro-foot-icons-instagram flex items-center">
								<span className="text-md text-black social_media_names pl-2">
									<Link to="#">
										<FiInstagram />
									</Link>
								</span>
							</div>
						</div>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<span className="text-black">Get to know us</span>
						</header>

						<ul name="footer" className="cursor-pointer mt-4">
							{arry["getToKnow"].map((items) => (
								<li
									key={items.link}
									className="	flex items-center"
								>
									<Link
										to={items.link}
										className="text-sm pl-2	text-black hover:text-orange-500"
									>
										{items.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<span className="text-black">
								Sell on Fashion.com
							</span>
						</header>

						<ul name="footer" className="cursor-pointer mt-4">
							{arry["Sell"].map((items) => (
								<li
									key={items.link}
									className="	flex items-center"
								>
									<Link
										to={items.link}
										className="text-sm pl-2	text-black hover:text-orange-500"
									>
										{items.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<span className="text-black">Get Support</span>
						</header>

						<ul name="footer" className="cursor-pointer mt-4">
							{arry["Support"].map((items) => (
								<li
									key={items.link}
									className="	flex items-center"
								>
									<Link
										to={items.link}
										className="text-sm pl-2	text-black hover:text-orange-500"
									>
										{items.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>
			</section>
			<hr className="" />

			<div className=" flex justify-between p-5 bg-coffee-500 text-black ">
				<span className="mx-10">
					&copy; {new Date().getFullYear()} Fashion
				</span>
				<span className="mx-10">All right reserved</span>
			</div>

			<a
				href="#"
				className=" text-black bg-sea-400 hover:bg-sea-500 transition-colors gap-2 p-2 right-8 flex justify-center items-center rounded-md absolute top-[-50px]"
			>
				<motion.div
					animate={{
						y: 0,
					}}
					initial={{ y: -5 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className=" flex gap-0"
				>
					<TbArrowBadgeUp />
				</motion.div>
			</a>
		</main>
	);
};

export default Footer;
const arry = {
	getToKnow: [
		{
			name: "About us",
			link: "/AboutUs",
		},
		{
			name: "Terms of Service",
			link: "/Terms",
		},
		{
			name: "Fashion Blog",
			link: "/FashionBlog",
		},
	],
	Sell: [
		{
			name: "Start Selling",
			link: "/StartSelling",
		},
		{
			name: "Seller Central",
			link: "/SellerCentral",
		},
	],
	Support: [
		{
			name: "Help Center",
			link: "/Help",
		},
		{
			name: "Your Accout",
			link: "/Account",
		},
		{
			name: "Report",
			link: "/Report",
		},
		{
			name: "support@fashion.com",
			link: "/support",
		},
	],
};
