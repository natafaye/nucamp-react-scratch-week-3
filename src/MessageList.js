

export default function MessageList({ messageList }) {
    return (
        <div>
            {messageList.map(message => (
                <div key={message.id}>
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    )
}