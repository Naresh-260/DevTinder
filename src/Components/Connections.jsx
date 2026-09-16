
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../Utils/connectionsSlice";
import { Users, Code2, ArrowUpRight, Sparkles } from "lucide-react";

const Connections = () => {
    const dispatch = useDispatch();
    const userConnectionsFromRedux = useSelector(
        (store) => store.connections
    );

    const [loading, setLoading] = useState(false);

    const Userconnections = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                BASE_URL + "/user/connections",
                { withCredentials: true }
            );

            dispatch(addConnections(res.data));
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!userConnectionsFromRedux) {
            Userconnections();
        }
    }, []);

    /* Loading */
    if (loading || !userConnectionsFromRedux) {
        return (
            <main className="min-h-[calc(100vh-64px)] bg-base-200 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <span className="loading loading-spinner loading-lg text-primary" />

                    <p className="text-sm text-base-content/60">
                        Loading your connections...
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-[calc(100vh-64px)] bg-base-200 relative overflow-hidden">

            {/* Ambient background */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 border border-base-300 shadow-sm mb-4">
                            <Users size={14} className="text-primary" />

                            <span className="text-xs font-semibold tracking-wide text-base-content/60">
                                YOUR NETWORK
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            My Connections
                        </h1>

                        <p className="mt-2 text-sm sm:text-base text-base-content/60">
                            Developers you've connected with on DevTinder.
                        </p>
                    </div>

                    {/* Connection count */}
                    <div className="self-start sm:self-auto px-5 py-3 rounded-2xl bg-base-100 border border-base-300 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Users
                                    size={19}
                                    className="text-primary"
                                />
                            </div>

                            <div>
                                <p className="text-xl font-bold leading-none">
                                    {userConnectionsFromRedux.length}
                                </p>

                                <p className="text-xs text-base-content/50 mt-1">
                                    Connections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty state */}
                {userConnectionsFromRedux.length === 0 ? (
                    <div className="max-w-lg mx-auto">
                        <div className="bg-base-100 border border-base-300 rounded-[28px] shadow-xl p-10 text-center">

                            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Sparkles
                                    size={32}
                                    className="text-primary"
                                />
                            </div>

                            <h2 className="text-2xl font-bold">
                                Your network is waiting
                            </h2>

                            <p className="text-sm text-base-content/60 mt-3 leading-relaxed">
                                Start discovering developers and connect with
                                people who share your interests and skills.
                            </p>

                            <div className="mt-6">
                                <span className="badge badge-primary badge-outline px-4 py-3">
                                    Start discovering
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (

                    /* Connections grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {userConnectionsFromRedux.map((connection) => {

                            const {
                                _id,
                                firstName,
                                lastName,
                                age,
                                Bio,
                                PhotoUrl,
                                skills
                            } = connection;

                            return (
                                <div
                                    key={_id}
                                    className="
                                        group
                                        bg-base-100
                                        border border-base-300
                                        rounded-[26px]
                                        p-5
                                        shadow-sm
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {/* Top section */}
                                    <div className="flex gap-5">

                                        {/* Avatar */}
                                        <div className="relative shrink-0">

                                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-1 ring-base-300">
                                                <img
                                                    src={PhotoUrl}
                                                    alt={`${firstName} ${lastName}`}
                                                    className="
                                                        w-full
                                                        h-full
                                                        object-cover
                                                        transition-transform
                                                        duration-500
                                                        group-hover:scale-105
                                                    "
                                                />
                                            </div>

                                            {/* Online indicator */}
                                            <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-success border-2 border-base-100" />
                                        </div>

                                        {/* User info */}
                                        <div className="min-w-0 flex-1">

                                            <div className="flex items-start justify-between gap-3">

                                                <div>
                                                    <h2 className="text-lg sm:text-xl font-bold tracking-tight truncate">
                                                        {firstName} {lastName}
                                                        {age && (
                                                            <span className="font-normal text-base-content/50 ml-2">
                                                                {age}
                                                            </span>
                                                        )}
                                                    </h2>

                                                    <div className="flex items-center gap-2 mt-1.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-success" />

                                                        <span className="text-xs text-base-content/50">
                                                            Connected
                                                        </span>
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="
                                                        w-9
                                                        h-9
                                                        shrink-0
                                                        rounded-xl
                                                        bg-base-200
                                                        border
                                                        border-base-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        opacity-0
                                                        group-hover:opacity-100
                                                        hover:bg-primary
                                                        hover:text-primary-content
                                                        transition-all
                                                    "
                                                    aria-label={`Open ${firstName}'s profile`}
                                                >
                                                    <ArrowUpRight size={17} />
                                                </button>

                                            </div>

                                            {/* Skills */}
                                            {skills?.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5 mt-4">

                                                    {skills
                                                        .slice(0, 3)
                                                        .map((skill, index) => (
                                                            <span
                                                                key={index}
                                                                className="
                                                                    inline-flex
                                                                    items-center
                                                                    gap-1
                                                                    px-2.5
                                                                    py-1
                                                                    rounded-lg
                                                                    bg-primary/10
                                                                    text-primary
                                                                    text-[11px]
                                                                    font-semibold
                                                                "
                                                            >
                                                                <Code2 size={11} />
                                                                {skill}
                                                            </span>
                                                        ))}

                                                    {skills.length > 3 && (
                                                        <span className="px-2.5 py-1 rounded-lg bg-base-200 text-base-content/50 text-[11px] font-semibold">
                                                            +{skills.length - 3}
                                                        </span>
                                                    )}

                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-base-200 my-5" />

                                    {/* Bio */}
                                    <div>
                                        {Bio ? (
                                            <p className="text-sm text-base-content/65 leading-relaxed line-clamp-2">
                                                {Bio}
                                            </p>
                                        ) : (
                                            <p className="text-sm text-base-content/40 italic">
                                                No bio available.
                                            </p>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-5">

                                        <span className="text-xs text-base-content/40">
                                            Developer connection
                                        </span>

                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                                            <span>Connected</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>
                )}
            </div>
        </main>
    );
};

export default Connections;

