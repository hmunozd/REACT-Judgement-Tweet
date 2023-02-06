import axios from 'axios';

const BASE_URL = "http://localhost:3658/api/cohere/";

export const tweetApi = axios.create({
  baseURL: BASE_URL,
});

tweetApi.defaults.headers.common["Content-Type"] = "application/json";
// tweetApi.defaults.headers.common["Accept"] = "json";

export const getCommentsStatistics = async ({ idTweet, maxResults = 50 }) => {
  const response = await tweetApi.get(`clasifyData/${idTweet}/${maxResults}`,);
  return response.data;
};

