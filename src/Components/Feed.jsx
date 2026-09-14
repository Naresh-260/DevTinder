import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Utils/constants";
import FeedCard from "./FeedCard";

const Feed = () => {
    const [userFeed, setUserFeed] = useState([]);

    const fetchUserFeed = async () => {
        try {
            const res = await axios.get(
                BASE_URL + "/user/feed",
                { withCredentials: true }
            );

            setUserFeed(res.data.users);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUserFeed();
    }, []);

    return (
        <div className="h-full flex items-center justify-center py-12">
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