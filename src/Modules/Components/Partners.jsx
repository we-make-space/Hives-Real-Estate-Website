import React from 'react';
import Marquee from 'react-fast-marquee';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { BiSolidQuoteRight } from 'react-icons/bi';
import AnimatedWords from './AnimatedWords';
import WavingEmoji from './WavingEmoji';

const Partners = () => {
	return (
		<Marquee
			pauseOnClick={true}
			pauseOnHover={true}
			autoFill={true}
			loop={0}
			className="overflow-hidden"
			speed={70}
			// play={false}
		>
			<section className="flex gap-4 p-3 overflow-hidden ">
				<div className="w-[20rem] h-48 rounded-lg bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
					<div className="flex flex-col justify-between h-full p-3">
						<div className="h-[60%] flex flex-col justify-between text-white text-sm ">
							<small className="">Medical Center Patient</small>
							<p className="text-base max-w-full">
								In the realm of care, Banhart doctors aren't just practitioners; they're medical
								guardians
							</p>
						</div>

						<div className="flex justify-between  items-center">
							<AvatarGroup
								max={4}
								className=""
							>
								<Avatar
									alt="Remy Sharp"
									src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww"
									sx={{ width: 28, height: 28 }}
								/>
								<Avatar
									alt="Travis Howard"
									src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D"
									sx={{ width: 28, height: 28 }}
								/>
								<Avatar
									alt="Cindy Baker"
									src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D"
									sx={{ width: 28, height: 28 }}
								/>
								<Avatar
									alt="Agnes Walker"
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D"
									sx={{ width: 26, height: 26 }}
								/>
								<Avatar
									alt="Trevor Henderson"
									src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D"
									sx={{ width: 28, height: 28 }}
								/>
							</AvatarGroup>

							<div className="">
								<BiSolidQuoteRight
									size={26}
									color="white"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[20rem] h-48 rounded-lg bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] relative flex items-center justify-center border">
					<div className="absolute min-w-[17rem] h-[9rem] bg-gray-200/20 backdrop-blur-[4px]  throw_img rounded-xl  overflow-hidden">
						<div className="flex items-center justify-between pr-3 pt-2">
							<div className="relative left-[5px] z_ndex animate-pulse">❤️</div>
							<small className="bg-white/40 p-1 backdrop-blur-[1px] rounded-2xl text-red-500 font-semibold">
								We serve with love
							</small>
						</div>
					</div>
				</div>

				<div className="w-[20rem] h-48 rounded-lg flex justify-center items-center card_3">
					<div className="relative min-w-[17rem] h-[9rem] overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl max-w-[17rem]">
							<div className="flex flex-col gap-2">
								<div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-lg">
									<span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
										Banhart
									</span>{' '}
									Specialist Hospital
								</div>
								<div className="grid grid-flow-col grid-cols-2 gap-3">
									<div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
										<div>
											<ul className="text-xs text-purple-200 font-semibold">
												<li>Emergency</li>
												<li>General Care</li>
												<li>Extensive care</li>
											</ul>
										</div>
									</div>
									<div className="p-3 flex justify-center items-center bg-white/20 backdrop-blur-sm rounded-lg relative">
										<div className="absolute top-[-7px] left-[-8px] animate-bounce">
											{/* ⏰ */}
											<span className="text-2xl">⚡️</span>
										</div>
										<div className="space--1 flex flex-col text-xl overflow-hidden">
											<span className="space-x-2">
												24
												<span className="animate-ping">hr</span>
											</span>
											<small className="text-xs text-red-500 animate-pulse">service</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[20rem] h-48 rounded-lg relative card_4 flex justify-center items-center">
					<div className="relative min-w-[17rem] h-[10rem]  rounded-xl p-[1px] backdrop-blur-3xl">
						<div className="absolute top-[-6px] right-0">
							<WavingEmoji />
						</div>
						<AnimatedWords />
					</div>
				</div>

				<div className="w-[20rem] h-48 rounded-lg card_5 flex flex-col justify-between items-center text-white overflow-hidden">
					<div className="px-1 m-1 min-w-[19rem] flex items-center">
						<span className="text-lg font-semibold">Our Hotlines</span>
					</div>
					<div className="bg-white/20 p-3 min-w-[19rem] min-h-[8rem] m-2 overflow-hidden text-white rounded-lg">
						<div className="border-l-[5px] border-gold-400 h-[7rem] px-2 flex flex-col">
							<small className="bg-gold-400 text-gray-900 w-fit rounded-full px-1 mb-[5px]">
								General & Special Services
							</small>
							<div className="flex gap-2 font-semibold mb-[9px]">
								<span>0256970906</span>
								<div className="px-1 py-1 text-sm bg-yellow-500/50 rounded-full">🔗</div>
								<span>0208009342</span>
							</div>

							<small className="bg-gold-400 text-gray-900 w-fit rounded-full px-1 mb-[5px]">
								Complaints & Comments
							</small>
							<div className="flex gap-2 font-semibold">
								<span>0256970906</span>
								<div className="px-1 py-1 text-sm bg-teal-500/50 rounded-full">🔗</div>
								<span>0208009342</span>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[20rem] h-48 rounded-lg bg-gold-400/50 overflow-hidden">
					<img
						src={smile}
						alt="smile_photo"
						width={150}
						className="float-right mix-blend-luminosity"
					/>
					<div className="text-3xl font-bold  max-w-[8rem] rounded-md bg-white h-[8rem] mix-blend-screen mx-5 my-5 p-1">
						<div>
							Every <br /> smile <br /> matters
						</div>
					</div>
					<div className=" max-w-[10rem] px-2 text-white font-semibold tracking-wider">
						<small>at Hives</small>
					</div>
				</div>

				{/* <div className="w-[20rem] h-48 rounded-lg bg-blue-200"></div> */}
			</section>
			<div class="absolute top-0 z-[-2] h-screen w-screen "></div>
			<div class="absolute top-0 z-[-2] h-screen w-screen "></div>
			<div class="relative h-full w-full bg-slate-950">
				<div class="absolute bottom-0 left-0 right-0 top-0 "></div>
			</div>
		</Marquee>
	);
};

export default Partners;
