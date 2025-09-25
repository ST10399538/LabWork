import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function CreatePost() {
    const [form, setForm] = useState({
        user: "",
        content: "",
        image: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem("name");
        if (savedUser) {
            setForm((prev) => ({
                ...prev,
                user: savedUser,
            }));
        } else {
            navigate("/login");
        }
    }, [navigate]);

}