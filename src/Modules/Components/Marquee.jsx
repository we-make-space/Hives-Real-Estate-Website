import React from "react";

const Marquee = () => {
	return (
		<section className="w-full">
			<div className="mar-all h-auto">
				<figure
					className="marquee marquee--flamingo"
					data-text="Plenty of space for you"
				>
					<span className="sr-only">
						Like a &lt;marquee&gt; element
					</span>
				</figure>

				<figure
					className="marquee marquee--reverse marquee--ochre text-white"
					data-text="Banhart"
				>
					<span className="sr-only">Powered by some CSS</span>
				</figure>

				<figure className="marquee marquee--butter" data-text="Health is wealth">
					<span className="sr-only">
						Like a &lt;marquee&gt; element
					</span>
				</figure>
			</div>
		</section>
	);
};

export default Marquee;
