import axios from 'axios';

const BASE_URL = `${process.env.BASE_URL}/cohere`;

const tweetApi = axios.create({
  baseURL: BASE_URL
});

export const getCommentsStatistics = async ({ idTweet, maxResults = 50 }) => {
  try {
    const response = await tweetApi.get(`/classifyData/${idTweet}/${maxResults}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
