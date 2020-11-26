import { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import Uploader from "./components/Uploader";

function App() {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div className="app">
			<Title />
			<Uploader />
			<ImageGrid setSelectedImage={setSelectedImage} />
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
}

export default App;
