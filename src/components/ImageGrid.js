import React from "react";
import "../styles/ImageGrid.css";
import { useFirestore } from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImage }) {
	const { docs } = useFirestore("images");

	return (
		<div className="imageGrid">
			{docs?.map((item) => (
				<motion.div
					layout
					whileHover={{ opacity: 1 }}
					className="imageGrid__imageWrap"
					key={item.id}
					onClick={() => setSelectedImage(item.url)}
				>
					<motion.img
						src={item.url}
						alt="uploaded pic"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					/>
				</motion.div>
			))}
		</div>
	);
}

export default ImageGrid;
