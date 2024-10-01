// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};

//Create an action:
const POST_A_TWEET = 'tweet/postATweet';
//Create regular action creator:
const postATweet = (tweet) => {
  return {
    type: POST_A_TWEET,
    payload: tweet
  }
};
//Create Thunk action creator:
export const asyncPostATweet = (tweetData) => async (dispatch) => {
  const response = await fetch('/api/tweets', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: tweetData })
  });
  if (response.ok) {
    const tweet = await response.json();
    dispatch(postATweet(tweet));
  };
}

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    };
    case POST_A_TWEET:
      const newTweet = action.payload;
      return {
        ...state,
        [newTweet.id]: newTweet
      };

    default:
      return state;
  }
};

export default tweetsReducer;
