
import React, { useState } from "react";
import { Heart, X, Code2, Sparkles } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../Utils/feedSlice";

const FeedCard = ({ user }) => {
    const {
        _id,
        firstName,
        lastName,
        age,
        PhotoUrl,
        skills,
        Bio
    } = user;

    const dispatch = useDispatch();

    const [actionLoading, setActionLoading] = useState(null);

    const handleUser = async (status, userId) => {
        try {
            setActionLoading(status);

            await axios.post(
                BASE_URL + "/request/send/" + status + "/" + userId,
                {},
                { withCredentials: true }
            );

            dispatch(removeUserFromFeed(userId));
        } catch (err) {
            console.log(err.message);
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <div className="group w-full max-w-[410px]">

            {/* Card */}
            <div className="relative bg-base-100 rounded-[32px] overflow-hidden border border-base-300 shadow-[0_25px_70px_rgba(0,0,0,0.18)] transition-all duration-500 hover:shadow-[0_30px_90px_rgba(0,0,0,0.25)]">

                {/* Image */}
                <div className="relative h-[480px] sm:h-[520px] overflow-hidden">

                    <img
                        src={PhotoUrl}
                        alt={`${firstName} ${lastName}`}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                    {/* Top badge */}
                    <div className="absolute top-5 left-5">
                        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/15 text-white">
                            <Sparkles size={14} className="text-primary" />
                            <span className="text-xs font-semibold">
                                Developer
                            </span>
                        </div>
                    </div>

                    {/* Profile info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white">

                        <div className="flex items-end justify-between gap-4">

                            <div className="min-w-0">

                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-none">
                                    {firstName}{" "}
                                    {lastName}
                                    {age && (
                                        <span className="font-normal text-xl sm:text-2xl ml-2 text-white/80">
                                            {age}
                                        </span>
                                    )}
                                </h2>

                                <div className="flex items-center gap-2 mt-3">
                                    <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

                                    <span className="text-sm text-white/75">
                                        Open to new connections
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Skills */}
                        {skills?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-5">
                                {skills.slice(0, 4).map((skill, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-xs font-medium text-white shadow-sm"
                                    >
                                        <Code2 size={12} />
                                        {skill}
                                    </span>
                                ))}

                                {skills.length > 4 && (
                                    <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-xs font-medium">
                                        +{skills.length - 4}
                                    </span>
                                )}
                            </div>
                        )}

                        {/* Bio */}
                        {Bio && (
                            <p className="mt-4 text-sm text-white/75 leading-relaxed line-clamp-2 max-w-[340px]">
                                {Bio}
                            </p>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="relative flex items-center justify-center gap-8 py-6 px-6 bg-base-100">

                    {/* Pass */}
                    <button
                        type="button"
                        disabled={actionLoading !== null}
                        onClick={() => handleUser("ignored", _id)}
                        aria-label="Pass"
                        className="
                            w-[68px] h-[68px]
                            rounded-full
                            bg-base-200
                            border border-base-300
                            shadow-md
                            flex items-center justify-center
                            transition-all duration-200
                            hover:scale-110
                            hover:bg-error/10
                            hover:border-error/30
                            hover:shadow-lg
                            active:scale-95
                            disabled:opacity-50
                            disabled:pointer-events-none
                        "
                    >
                        {actionLoading === "ignored" ? (
                            <span className="loading loading-spinner loading-sm text-error" />
                        ) : (
                            <X
                                size={30}
                                strokeWidth={2.5}
                                className="text-error"
                            />
                        )}
                    </button>

                    {/* Like */}
                    <button
                        type="button"
                        disabled={actionLoading !== null}
                        onClick={() => handleUser("interested", _id)}
                        aria-label="Interested"
                        className="
                            w-[76px] h-[76px]
                            rounded-full
                            bg-primary
                            flex items-center justify-center
                            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                            transition-all duration-200
                            hover:scale-110
                            hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
                            active:scale-95
                            disabled:opacity-50
                            disabled:pointer-events-none
                        "
                    >
                        {actionLoading === "interested" ? (
                            <span className="loading loading-spinner loading-md text-primary-content" />
                        ) : (
                            <Heart
                                size={32}
                                strokeWidth={2.5}
                                className="text-primary-content fill-current"
                            />
                        )}
                    </button>

                    {/* Small divider */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-base-300" />
                </div>
            </div>

            {/* Action labels */}
            <div className="flex items-center justify-center gap-[58px] mt-3">
                <span className="text-xs font-medium text-base-content/40">
                    Pass
                </span>

                <span className="text-xs font-medium text-base-content/40">
                    Connect
                </span>
            </div>
        </div>
    );
};

export default FeedCard;

