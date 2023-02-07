import axios from 'axios';

const BACK_URL = `back.judgment-tweet.jildo.site/cohere`;

const tweetApi = axios.create({
  baseURL: BACK_URL
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
