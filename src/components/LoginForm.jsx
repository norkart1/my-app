import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store in localStorage (for now, since no backend)
        localStorage.setItem("user", JSON.stringify({ email, password }));

        alert("Login Successful!");
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="avatar"></div>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="options">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default LoginForm;
