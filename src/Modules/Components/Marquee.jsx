import React from "react";

const Marquee = () => {
	return (
		<section className="w-full">
			<div className="mar-all h-auto">
				<figure
					className="marquee marquee--flamingo"
					data-text="discover, list and rent"
				>
					<span className="sr-only">
						Like a &lt;marquee&gt; element
					</span>
				</figure>

				<figure
					className="marquee marquee--reverse marquee--ochre text-white"
					data-text="Hives"
				>
					<span className="sr-only">Powered by some CSS</span>
				</figure>

				<figure className="marquee marquee--butter" data-text="find your dream home">
					<span className="sr-only">
						Like a &lt;marquee&gt; element
					</span>
				</figure>
			</div>
		</section>
	);
};

export default Marquee;
