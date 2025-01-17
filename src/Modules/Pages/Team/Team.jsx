import { people } from "./People";

const OurTeam = () => {
	return (
		<section className="py-3 m-4  sm:py-6">
			<div className="rounded-md mx-auto grid max-w-7xl gap-x-8 gap-y-16 py-6 lg:px-8 xl:grid-cols-3">
				<div className="max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-bg-primary sm:text-4xl text-sky-400">
						OUR SPECIALISTS
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						We&apos;re a dynamic group of individuals who are
						passionate about what we do and dedicated to delivering
						the best results for our clients.
					</p>
				</div>

				<div
					role="list"
					className="grid justify-items-center max-w gap-x-8 gap-y-16 py-10  lg:px-8 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 rounded-xl bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] overflow-hidden shadow-md"
				>
					{people.map((person) => (
						<div className="card" key={person.id}>
							<img src={person.imageUrl} className="card_img" />

							<div className="card__content">
								<p className="card__title">{person.name}</p>
								<p className="text-white">{person.role}</p>
								<p className="card__description">
									{person.bio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
