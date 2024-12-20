import React, { useState, useEffect } from "react";
import Chatbot from './Chatbot';
import { Link } from "react-router-dom";

const productivity = ["https://notability.com/","https://pomofocus.io/","https://www.forestapp.cc/"]
const podcast = ["https://soundcloud.com/sparkyourcreativepodcast/episode-50-its-never-too-late-pursuing-a-musical-passion-over-40","https://www.audible.com/podcast/Pod-Save-the-World/B08JJMVJ6W","https://open.spotify.com/show/53QfpH4TQfckU74vOqvfbL"]

function Home() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";
    
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/users/`);
                if (!response.ok) throw new Error("Failed to fetch users");
    
                const data = await response.json();
                console.log("Fetched users:", data);
    
                setUsers(data);
    
                const storedUser = JSON.parse(localStorage.getItem("user"));
                console.log("Stored user from localStorage:", storedUser);
    
                if (storedUser) {
                    const loggedInUser = data
                        .filter((u) => u.email) // Filter out invalid users
                        .find((u) =>
                            u.email.trim().toLowerCase() === storedUser.email.trim().toLowerCase()
                        );
    
                    if (!loggedInUser) {
                        console.warn("No matching user found for stored user:", storedUser.email);
                    }
    
                    setCurrentUser(loggedInUser || null);
                }
    
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Could not fetch users. Please try again later.");
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    

    return (
        <div className="LandingPage">
            <div className="landing-greeting">
                {currentUser ? (
                    <p>Good Morning, {currentUser.name}! What do you need the most help with today?</p>
                ) : (
                    <p>Welcome!  What do you need the most help with today?</p>
                )}
                <Chatbot />
            </div>

            <div className="landing-last-msg">
                <h4>
                    <img
                        className="icon"
                        src={require(`./img/icon-message.png`)}
                        alt="Message Icon"
                    />
                    Your Last Message
                </h4>
                <div className="textbox">
                    <p>
                        We are sorry to hear you are really stressed from your assignments.
                        We hope that these resources can help you better plan your assignments and help evaluate how much time you need to spend on them.
                        <br />
                        To-Do List: Homework
                        <br />
                        Pomodoro: 15-25 x3
                    </p>
                </div>
            </div>

            <div className="landing-resource">
                <h3>Resources</h3>
                <div className="resource-category" id="productivity">
                    <h4>Productivity</h4>
                    <div className="row">
                        {productivity.map((url, index) => (
                            <span key={index}>
                                <Link to={`${url}`}>
                                    <img
                                        className="resource-card"
                                        src={require(`./img/productivity-${index+1}.png`)}
                                        alt={`Productivity Resource ${index + 1}`}
                                    />
                                </Link>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="resource-category" id="podcast">
                    <h4>Podcast</h4>
                    <div className="row">
                        {podcast.map((url, index) => (
                            <span key={index}>
                                <Link to={`${url}`}>
                                    <img
                                        className="resource-card"
                                        src={require(`./img/podcast-${index+1}.png`)}
                                        alt={`Productivity Resource ${index + 1}`}
                                    />
                                </Link>
                            </span>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
