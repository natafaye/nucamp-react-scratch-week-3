import { useState } from "react"
import PostForm from "./PostForm"

let nextId = 1 // little hack to get unique ids

export default function App() {
    const [postList, setPostList] = useState([ { id: 0, subject: "Week 3", message: "It's week 3!"}])

    const addToPostList = (newPostData) => {
        // CAN'T UPDATE STATE DIRECTLY
        //postList.push(newPostData)

        const newPost = {...newPostData, id: nextId++ } // little hack to give it an id

        // Fantastic
        const copyOfPostList = [...postList]
        copyOfPostList.push(newPost)
        setPostList(copyOfPostList)

        // Fancy
        //setPostList([...postList, newPost])
    }

    return (
        <div className="container mt-3">
            <PostForm addPost={addToPostList}/>
            { postList.map(post => (
                <div key={post.id} className="border my-3 p-3">
                    <h2>{post.subject}</h2>
                    <p>{post.message}</p>
                </div>
            ))}
        </div>
    )
}