import React, { useState } from "react";
import "../styles/Uploader.css";
import ProgressBar from "./ProgressBar";

function Uploader() {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ["image/png", "image/jpeg"];

	const handleChange = (e) => {
		let selected = e.target.files[0];
		console.log(selected);
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError(null);
		} else {
			setFile(null);
			setError("Please select the correct file type (jpg / png).");
		}
	};

	return (
		<form className="uploader">
			<label>
				<input type="file" onChange={handleChange} />
				<span>+</span>
			</label>
			<div className="uploader__output">
				{error && <div className="uploader__output--error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
}

export default Uploader;
