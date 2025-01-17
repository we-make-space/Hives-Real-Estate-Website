import React from "react";
import { motion } from "framer-motion";
import ImageData from "./imageData";

const Gallery = () => {
	return (
		<section className="bg-mesh rounded-md p-8 py-2">
			<h3 className="p-8 text-4xl font-medium text-sky-400">
				Banhart got your needs covered
			</h3>
			<section className="flex w-100 h-full justify-center p-8">
				<div className="gap-3 h-full sg:columns-1 se:columns-2 xr:columns-2  xs:columns-2 cs:columns-2 mm:columns-4 ss:columns-3 lg:columns-5">
					{ImageData.map((image, i) => (
						<div
							key={i}
							className="my-2 w-full group  relative break-inside-avoid "
						>
							<motion.img
								src={image.src}
								className="rounded-xl"
								alt="about_photo"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</section>
		</section>
	);
};

export default Gallery;
