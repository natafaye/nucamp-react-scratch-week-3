import { useState } from "react"
import { useEffect } from "react"
import Sidebar from "./Sidebar"
import MessageForm from "./MessageForm"
import MessageList from "./MessageList"
import { TEST_MESSAGES } from "./TEST_MESSAGES"

export default function App() {
    const [messageList, setMessageList] = useState(TEST_MESSAGES)

    useEffect(() => {
        // triggered by the component loading in
        // sync with an external system (backend, special library)
        document.title = `(${messageList.length}) Messaging`

        console.log("updated document title")
    }, [messageList]) // first load in (technically twice) and then every time unreadCount changes

    useEffect(() => {
        console.log("Component just loaded in")
    }, []) // first load in (technically twice) - in production it will be once

    const addMessage = (newMessageData) => {
        const newMessage = {
            id: 3, // purely so I can give it an id
            ...newMessageData
        }
        // BAD WRONG BLASPHEMY
        //messageList.push(newMessage)

        // PERFECTLY FINE
        // const copyOfMessageList = [...messageList]
        // copyOfMessageList.push(newMessage)
        // setMessageList(copyOfMessageList)

        // BEAUTIFUL MAGIC HAPPINESS
        setMessageList( [...messageList, newMessage] )
    }

    return (
        <div className="main-container">
            <Sidebar />
            <div className="main">
                <MessageList messageList={messageList}/>
                <MessageForm addMessage={addMessage}/>
            </div>
        </div>
    )
}


// CSS with React Philosophies
// 1) CSS modules -> my favorite
// 2) CSS in JS (styled-components) -> not as popular (kinda annoying)
// 3) basic css -> very broad styling (bootstrap) (tailwind)
// 4) inline styling -> dynamic styling, little things
// 5) UI library (Reactstrap, MUI, Tailwind UI)