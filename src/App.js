import { useState } from "react";
import { TEST_MESSAGES } from "./TEST_MESSAGES";
import NewMessageForm from "./NewMessageForm";

export default function App() {
    const [searchTerm, setSearchTerm] = useState("")

    const searchResults = TEST_MESSAGES.filter(message =>
        message.author.includes(searchTerm) || message.text.includes(searchTerm)
    )

    return (
        <div>
            Search <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            {searchResults.map((message) => (
                <div key={message.id}>
                    <h4>{message.author}</h4>
                    {message.text}
                </div>
            ))}
            <NewMessageForm/>
        </div>
    )
}