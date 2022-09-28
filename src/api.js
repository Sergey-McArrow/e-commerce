const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v1/shop?lang=en';

const getItems = () => {
	const data = fetch(API_URL, {
		headers: {
			Authorization: API_KEY,
		},
	})
		.then(res => res.json())
		.then(res => res.featured)
		.catch(err => console.error(err));
	return data;
};

export { getItems };
