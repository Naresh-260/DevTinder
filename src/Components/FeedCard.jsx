import React from "react";
import { Heart, X, MapPin } from "lucide-react";

const FeedCard = ({ user }) => {
    const {
        firstName,
        lastName,
        age,
        PhotoUrl,
        skills,
        Bio
    } = user;

    return (
        <div className="w-[360px] mt-10 bg-base-100 rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-base-300">

            {/* Profile Image */}
            <div className="relative w-full h-[430px] overflow-hidden">

                <img
                    src={PhotoUrl}
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />


                {/* Profile information */}
                <div className="absolute bottom-6 left-6 right-6 text-white">

                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight leading-tight">
                                {firstName} {lastName}
                                <span className="font-normal text-2xl ml-2">
                                    {age}
                                </span>
                            </h2>

                            <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-200">
                                <MapPin size={15} />
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    {skills?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.slice(0, 4).map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-xs font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Bio */}
                    {Bio && (
                        <p className="mt-3 text-sm text-gray-200 leading-relaxed line-clamp-2">
                            {Bio}
                        </p>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-7 py-6 bg-base-100">

                {/* Pass */}
                <button
                    type="button"
                    className="w-16 h-16 rounded-full bg-base-200 border border-base-300 shadow-lg flex items-center justify-center hover:bg-red-50 hover:border-red-200 hover:scale-110 transition-all duration-200"
                >
                    <X
                        size={30}
                        strokeWidth={2.5}
                        className="text-red-500"
                    />
                </button>

                {/* Like */}
                <button
                    type="button"
                    className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
                >
                    <Heart
                        size={30}
                        strokeWidth={2.5}
                        className="text-primary-content fill-current"
                    />
                </button>

            </div>
        </div>
    );
};

export default FeedCard;