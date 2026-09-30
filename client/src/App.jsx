import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const sendUser = async () => {
        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        const data = await response.json();

        console.log(data);
    };

    return (
        <div>
            <h1>LearnBridge</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={sendUser}>
                Submit
            </button>
        </div>
    );
}

export default App;