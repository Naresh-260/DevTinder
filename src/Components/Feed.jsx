
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Utils/constants";
import FeedCard from "./FeedCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../Utils/feedSlice";

const Feed = () => {
    const dispatch = useDispatch();
    const userFeed = useSelector((store) => store.feed);
    const [loading, setLoading] = useState(false);

    const fetchUserFeed = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                BASE_URL + "/user/feed",
                { withCredentials: true }
            );

            dispatch(addFeed(res.data));
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!userFeed) {
            fetchUserFeed();
        }
    }, []);

    if (loading || !userFeed) {
        return (
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200">
                <div className="flex flex-col items-center gap-4">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="text-sm text-base-content/60">
                        Finding developers for you...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-[calc(100vh-64px)] bg-base-200 relative overflow-hidden">

            {/* Ambient background */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center px-4 py-10 sm:py-14">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 border border-base-300 shadow-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className="text-xs font-semibold tracking-wide text-base-content/70">
                            DEVELOPER DISCOVERY
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Discover your{" "}
                        <span className="text-primary">dev tribe.</span>
                    </h1>

                    <p className="mt-2 text-sm sm:text-base text-base-content/60 max-w-md">
                        Connect with developers, discover new skills,
                        and build meaningful connections.
                    </p>
                </div>

                {/* Feed */}
                {userFeed.length > 0 ? (
                    <FeedCard user={userFeed[0]} />
                ) : (
                    <div className="w-full max-w-md">
                        <div className="bg-base-100 border border-base-300 rounded-3xl shadow-xl p-10 text-center">

                            <div className="w-20 h-20 mx-auto rounded-2xl bg-base-200 flex items-center justify-center mb-5">
                                <span className="text-3xl">✨</span>
                            </div>

                            <h2 className="text-xl font-bold">
                                You’re all caught up
                            </h2>

                            <p className="text-sm text-base-content/60 mt-2 leading-relaxed">
                                There are no more developers to discover
                                right now. Check back later for new connections.
                            </p>

                            <div className="mt-6">
                                <div className="badge badge-primary badge-outline px-4 py-3">
                                    No more profiles
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Hint */}
                {userFeed.length > 0 && (
                    <p className="mt-6 text-xs text-base-content/40">
                        Swipe through profiles using the actions below
                    </p>
                )}
            </div>
        </main>
    );
};

export default Feed;

