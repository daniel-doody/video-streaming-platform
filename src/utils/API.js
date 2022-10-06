import axios from "axios";

const baseURL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${baseURL}/${url}`, options);

  return data;
};
