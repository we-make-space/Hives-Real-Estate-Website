import React, { useState } from 'react';

const ImageSwitcher = () => {
	const [activeImage, setActiveImage] = useState(0);

	const images = [
		'https://images.unsplash.com/photo-1596510914914-e14c6f59f925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D',
		'https://images.unsplash.com/photo-1654272763471-87c0ebf395f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D',
		'https://images.unsplash.com/photo-1601510007533-c90434e630a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D'
	];

	const paragraphs = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum.',
		'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
		'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	];

	const handleHover = (index) => {
		setActiveImage(index);
	};

	return (
		<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
			<div className="w-full md:w-1/2 mb-8 md:mb-0">
				<img
					src={images[activeImage]}
					alt={`Image ${activeImage + 1}`}
					width={400}
					className=" rounded-lg shadow-lg transition-all"
				/>
			</div>
			<div className="w-full md:w-1/2 md:pl-8">
				{paragraphs.map((paragraph, index) => (
					<p
						key={index}
						className="mb-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
						onMouseEnter={() => handleHover(index)}
					>
						{paragraph}
					</p>
				))}
			</div>
		</div>
	);
};

export default ImageSwitcher;
