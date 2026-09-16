
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    addRequests,
    removeUserRequest
} from "../Utils/requestSlice";
import {
    Users,
    Check,
    X,
    Code2,
    Sparkles
} from "lucide-react";

const Requests = () => {
    const dispatch = useDispatch();

    const userRequestsFromRedux = useSelector(
        (store) => store.requests
    );

    const [loading, setLoading] = useState(false);
    const [processingId, setProcessingId] = useState(null);

    const Userrequests = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                BASE_URL + "/user/requests/received",
                { withCredentials: true }
            );

            dispatch(addRequests(res.data));
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!userRequestsFromRedux) {
            Userrequests();
        }
    }, []);

    const handleRequest = async (status, requestId) => {
        try {
            setProcessingId(requestId);

            await axios.post(
                BASE_URL +
                    "/request/review/" +
                    status +
                    "/" +
                    requestId,
                {},
                { withCredentials: true }
            );

            dispatch(removeUserRequest(requestId));
        } catch (err) {
            console.log(err.message);
        } finally {
            setProcessingId(null);
        }
    };

    /* Loading state */
    if (loading || !userRequestsFromRedux) {
        return (
            <main className="min-h-[calc(100vh-64px)] bg-base-200 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <span className="loading loading-spinner loading-lg text-primary" />

                    <p className="text-sm text-base-content/60">
                        Loading your requests...
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
                            <Users
                                size={14}
                                className="text-primary"
                            />

                            <span className="text-xs font-semibold tracking-wide text-base-content/60">
                                CONNECTION REQUESTS
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Connection Requests
                        </h1>

                        <p className="mt-2 text-sm sm:text-base text-base-content/60">
                            People who want to connect with you.
                        </p>
                    </div>

                    {/* Request count */}
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
                                    {userRequestsFromRedux.length}
                                </p>

                                <p className="text-xs text-base-content/50 mt-1">
                                    Pending
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Empty state */}
                {userRequestsFromRedux.length === 0 ? (
                    <div className="max-w-lg mx-auto">

                        <div className="bg-base-100 border border-base-300 rounded-[28px] shadow-xl p-10 text-center">

                            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Sparkles
                                    size={32}
                                    className="text-primary"
                                />
                            </div>

                            <h2 className="text-2xl font-bold">
                                No pending requests
                            </h2>

                            <p className="text-sm text-base-content/60 mt-3 leading-relaxed">
                                You're all caught up. New connection requests
                                will appear here when developers want to connect
                                with you.
                            </p>

                        </div>
                    </div>
                ) : (

                    /* Requests */
                    <div className="space-y-4">

                        {userRequestsFromRedux.map((request) => {

                            const {
                                _id,
                                firstName,
                                lastName,
                                age,
                                Bio,
                                PhotoUrl,
                                skills
                            } = request.fromUserId;

                            const isProcessing =
                                processingId === request._id;

                            return (
                                <div
                                    key={request._id}
                                    className="
                                        group
                                        bg-base-100
                                        border border-base-300
                                        rounded-[26px]
                                        p-5
                                        sm:p-6
                                        shadow-sm
                                        hover:shadow-xl
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                                        {/* Profile */}
                                        <div className="flex gap-5 flex-1 min-w-0">

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

                                            {/* Information */}
                                            <div className="min-w-0 flex-1">

                                                <div className="flex items-center gap-2 flex-wrap">

                                                    <h2 className="text-xl font-bold tracking-tight">
                                                        {firstName} {lastName}
                                                    </h2>

                                                    {age && (
                                                        <span className="text-base text-base-content/50">
                                                            {age}
                                                        </span>
                                                    )}

                                                </div>

                                                <div className="flex items-center gap-2 mt-1.5">

                                                    <span className="w-1.5 h-1.5 rounded-full bg-success" />

                                                    <span className="text-xs text-base-content/50">
                                                        Wants to connect with you
                                                    </span>

                                                </div>

                                                {/* Skills */}
                                                {skills?.length > 0 && (
                                                    <div className="flex flex-wrap gap-1.5 mt-4">

                                                        {skills
                                                            .slice(0, 4)
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

                                                        {skills.length > 4 && (
                                                            <span className="px-2.5 py-1 rounded-lg bg-base-200 text-base-content/50 text-[11px] font-semibold">
                                                                +{skills.length - 4}
                                                            </span>
                                                        )}

                                                    </div>
                                                )}

                                                {/* Bio */}
                                                {Bio && (
                                                    <p className="text-sm text-base-content/60 mt-3 line-clamp-2 max-w-2xl">
                                                        {Bio}
                                                    </p>
                                                )}

                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-row lg:flex-col xl:flex-row gap-3 lg:min-w-[220px]">

                                            {/* Reject */}
                                            <button
                                                type="button"
                                                disabled={isProcessing}
                                                onClick={() =>
                                                    handleRequest(
                                                        "rejected",
                                                        request._id
                                                    )
                                                }
                                                className="
                                                    btn
                                                    btn-ghost
                                                    flex-1
                                                    lg:flex-none
                                                    border
                                                    border-base-300
                                                    hover:bg-error/10
                                                    hover:text-error
                                                    hover:border-error/30
                                                    transition-all
                                                "
                                            >
                                                {isProcessing ? (
                                                    <span className="loading loading-spinner loading-sm" />
                                                ) : (
                                                    <X size={17} />
                                                )}

                                                Reject
                                            </button>

                                            {/* Accept */}
                                            <button
                                                type="button"
                                                disabled={isProcessing}
                                                onClick={() =>
                                                    handleRequest(
                                                        "accepted",
                                                        request._id
                                                    )
                                                }
                                                className="
                                                    btn
                                                    btn-primary
                                                    flex-1
                                                    lg:flex-none
                                                    shadow-md
                                                    hover:shadow-lg
                                                    transition-all
                                                "
                                            >
                                                {isProcessing ? (
                                                    <span className="loading loading-spinner loading-sm" />
                                                ) : (
                                                    <Check size={17} />
                                                )}

                                                Accept
                                            </button>

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

export default Requests;

