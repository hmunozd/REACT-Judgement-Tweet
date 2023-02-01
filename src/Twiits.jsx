import React, { useState, useEffect } from 'react';

const url = 'https://api.twitter.com/2/tweets/search/recent';
const bearerToken = "AAAAAAAAAAAAAAAAAAAAAAsZlgEAAAAA%2FtwwxbAY8O%2Fy7is3G3kezEmo3JA%3Dk1aUl9HzitdCYguuPazfzswPC6WiyeXWiUboAF5NkZyoDI4DQf";

const CommentList = ({
  query,
  tweetId,
  start_time,
  end_time,
  since_id,
  until_id,
  max_results,
  next_token,
  tweetFields,
  expansions,
  mediaFields,
  placeFields,
  pollFields,
  userFields
}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      })
      const data = await response.json();
      setComments(data);
    };

    fetchData();
  }, [tweetId]);

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
};

export default CommentList;