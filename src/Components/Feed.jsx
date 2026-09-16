import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Utils/constants";
import FeedCard from "./FeedCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../Utils/FeedSlice";

const Feed = () => {
    const dispatch = useDispatch()
    const userFeed = useSelector(store=>store.feed)

    const fetchUserFeed = async () => {
        try {
            const res = await axios.get(
                BASE_URL + "/user/feed",
                { withCredentials: true }
            );

            dispatch(addFeed(res.data));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if(!userFeed){
            fetchUserFeed();
        }
    }, []);

    return (
        userFeed && <div className="h-full flex items-center justify-center py-12">
            {userFeed.length > 0 ? (
                <FeedCard user={userFeed[0]} />
            ) : (
                <p className="text-gray-400">
                    No more users available
                </p>
            )}

        </div>
    );
};

export default Feed;