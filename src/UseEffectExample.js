import { useState } from "react"
import { useEffect } from "react"

export default function App() {
    const [unreadCount, setUnreadCount] = useState(0)

    useEffect(() => {
        console.log("running use effect")
        // slightly DOM manipulation-ish
        // have to sync with "external system" of the document.title
        document.title = `(${unreadCount}) Messaging`
    }, [unreadCount]) // last time [1] this time [1]
    // the first time an effect runs, it will run twice because of development mode

    // cannot set document.title in the JSX
    return (
        <div>
            {unreadCount}
            <button onClick={() => setUnreadCount(unreadCount + 1)}>
                Send yourself a message
            </button>
        </div>
    )
}