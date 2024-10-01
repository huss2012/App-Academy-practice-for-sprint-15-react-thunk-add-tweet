import React, { useState } from "react";
import { asyncPostATweet } from "./store/tweet";
import { useDispatch } from "react-redux";

const CreateTweet = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const dispatch = useDispatch();

    const handeSubmit = (e) => {
        e.preventDefault();
        if (tweetMessage) {
            dispatch(asyncPostATweet(tweetMessage));
            setTweetMessage("");
        }

    }
    return (
        <>
            <form onSubmit={handeSubmit}>
                <label>Tweet</label>
                <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreateTweet;
