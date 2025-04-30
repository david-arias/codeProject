import "./App.css";
import { useState, useEffect } from "react";

import Loader from "./comps/Loader/Loader";

async function servHealth() {
    let url = "http://localhost:3001";
    // let url = "https://codeproject.onrender.com";

    try {
        const response = await fetch(`${url}/api/health`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        servHealth()
            .then((result) => {
                setTimeout(() => {
                    setLoading(result.loader);
                }, 1500);
            })
            .catch(() => {
                console.log("error");
            });
    }, []);

    if (loading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <div className="wrap">content</div>
        </>
    );
}

export default App;
