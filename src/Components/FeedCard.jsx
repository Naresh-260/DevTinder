import React from 'react';
import { Heart, X } from 'lucide-react';

const FeedCard = ({ user }) => {
    const { firstName, lastName, age, PhotoUrl, skills } = user;

    return (
        <div className="fixed inset-0 top-16 bottom-16 flex items-center justify-center bg-neutral">
            <div className="card w-96 bg-base-300 shadow-2xl rounded-2xl overflow-hidden">
                <div className="relative w-full h-[420px] overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-top"
                        src={PhotoUrl}
                        alt={firstName}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold leading-tight">
                            {firstName} {lastName}, {age}
                        </h2>
                        {skills?.length > 0 && (
                            <p className="text-sm text-gray-200 mt-1">
                                {skills.join(" • ")}
                            </p>
                        )}
                    </div>
                </div>

                <div className="card-body py-5 flex-row justify-center gap-6">
                    <button className="btn btn-circle btn-lg bg-base-100 border-none shadow-md hover:scale-110 transition-transform">
                        <X className="text-red-500" size={26} />
                    </button>
                    <button className="btn btn-circle btn-lg bg-base-100 border-none shadow-md hover:scale-110 transition-transform">
                        <Heart className="text-green-500" size={26} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;