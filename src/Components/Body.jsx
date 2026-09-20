import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import axios from "axios";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const fetchUser = async () => {
        try {
            const res = await axios.get(
                BASE_URL + "/profile/view",
                { withCredentials: true }
            );

            dispatch(addUser(res));
        } catch (err) {
            console.log(err);
             if (err.response?.status === 401) {
            navigate("/landingPage");
        }
        else{
            navigate("/landingPage")
        }
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

       return (
        <div className="min-h-screen flex flex-col bg-base-200">
            <NavBar />

            <main className="flex-1">
                <Outlet />
            </main>

        <Footer />
    </div>
);
};

export default Body;