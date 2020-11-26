import React, { useEffect } from "react";
import "../styles/ProgressBar.css";
import useStorage from "../hooks/useStorage";

import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
	const { url, progress } = useStorage(file);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [setFile, url]);

	return (
		<motion.div
			className="progressBar"
			initial={{ width: 0 }}
			animate={{ width: progress + "%" }}
		></motion.div>
	);
}

export default ProgressBar;
