import React from 'react';

const Button = () => {
	return (
		<a
			className="btn"
			href="#"
		>
			<span className="btn__icon-wrapper">
				<svg
					width="10"
					className="btn__icon-svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 15"
				>
					<path
						fill="currentColor"
						d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
					></path>
				</svg>

				<svg
					className="btn__icon-svg  btn__icon-svg--copy"
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					fill="none"
					viewBox="0 0 14 15"
				>
					<path
						fill="currentColor"
						d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
					></path>
				</svg>
			</span>
			Explore All
		</a>
	);
};

export default Button;
