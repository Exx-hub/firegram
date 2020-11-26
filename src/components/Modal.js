import React from "react";
import "../styles/Modal.css";

import { motion } from "framer-motion";

function Modal({ selectedImage, setSelectedImage }) {
	// console.log(selectedImage);

	const handleClick = (e) => {
		console.log(e.target.classList.value); // gets classname of image clicked
		if (e.target.classList.contains("modal__backdrop")) {
			setSelectedImage(null);
		}
	};

	return (
		<motion.div
			className="modal__backdrop"
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				initial={{ y: "-100vh" }}
				animate={{ y: "0" }}
				src={selectedImage}
				alt="enlarged pic"
				className="hello"
			/>
		</motion.div>
	);
}

export default Modal;
