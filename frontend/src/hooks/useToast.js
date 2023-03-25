import { useRef } from 'react';

const useToast = () => {
	const toast = useRef(null);

	const showToast = (status, title, detail) => {
		toast.current.show({ severity: status, summary: title, detail: detail });
	};

	return { toast, showToast };
};

export default useToast;
