import { useState, useEffect } from "react";
import { storage, firestore, timestamp } from "../firebase/firebaseConfig";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		// once hook is called, takes the file, creates a reference
		const storageRef = storage.ref(file.name);
		const collectionRef = firestore.collection("images");

		//uploads the file and we get values for our state in this component
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();

				collectionRef.add({ url, createdAt });
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, error, url };
};

export default useStorage;
