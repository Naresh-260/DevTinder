import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Utils/constants';
import FeedCard from './FeedCard';

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
        <div className="flex justify-center my-10">
            {userFeed.length > 0 && (
                <FeedCard user={userFeed[0]} />
            )}
        </div>
    );
};

export default Feed;