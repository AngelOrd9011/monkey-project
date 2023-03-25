import { useState } from 'react';

const useSessionStorage = (key, initialValue) => {
	const [stored, setStored] = useState(() => {
		try {
			const item = window.sessionStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (e) {
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			setStored(value);
			window.sessionStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.log(e);
		}
	};

	return [stored, setValue];
};

export default useSessionStorage;
