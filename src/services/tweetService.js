import axios from 'axios';

const BASE_URL = `${process.env.BASE_URL}/twitter`;

export const tweetApi = axios.create({
  baseURL: BASE_URL,
});

tweetApi.defaults.headers.common["Content-Type"] = "application/json";
// tweetApi.defaults.headers.common["Accept"] = "json";

export const getCommentsStatistics = async ({ idTweet, max = 50 }) => {
  const response = await tweetApi.get(`getTweetReplies/${idTweet}/${max}`,);
  return response.data;
};

