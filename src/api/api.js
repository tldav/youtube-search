import axios from "axios";
const KEY = "AIzaSyBlN5QYpoPysGfT1E_BuQQLoG0r6XhUVJw";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY
	}
});
