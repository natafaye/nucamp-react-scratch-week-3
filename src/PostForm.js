import { Field, Form, Formik } from "formik"
import { useState } from "react"

// One piece of state
export default function PostForm({ addPost }) {
    const onSubmitClick = (values, { resetForm }) => { // values parameter comes from Formik
        const postData = {
            subject: values.subject,
            message: values.message
        }
        addPost(postData)

        resetForm()
    }

    return (
        <Formik onSubmit={onSubmitClick} initialValues={{
            subject: "",
            message: ""
        }}>
            <Form>
                <label className="form-label">Subject</label>
                <Field type="text" className="form-control" name="subject"/>
                <label className="form-label">Message</label>
                <Field as="textarea" className="form-control mb-3" name="message"/>
                <button className="btn btn-success">Post to Forum</button>
            </Form>
        </Formik>
    )
}

// One piece of state
// export default function PostForm({ addPost }) {
//     const [values, setValues] = useState({
//         subject: "",
//         message: ""
//     })

//     // event.target will be the actual input (or textarea) and then we can grab the current value
//     const onChange = (event) => setValues({ ...values, [event.target.name]: event.target.value })

//     const onSubmitClick = (event) => {
//         event.preventDefault() // prevents the page from refreshing
        
//         const postData = {
//             subject: values.subject,
//             message: values.message
//         }

//         addPost(postData)

//         setValues({
//             subject: "",
//             message: ""
//         })
//     }

//     return (
//         <form>
//             <label className="form-label">Subject</label>
//             <input value={values.subject} type="text" className="form-control" name="subject" onChange={onChange}/>
//             <label className="form-label">Message</label>
//             <textarea value={values.message} className="form-control mb-3" name="message" onChange={onChange}/>
//             <button className="btn btn-success" onClick={onSubmitClick}>Post to Forum</button>
//         </form>
//     )
// }

// Multiple pieces of state
// export default function PostForm({ addPost }) {
//     const [subjectValue, setSubjectValue] = useState("")
//     const [messageValue, setMessageValue] = useState("")

//     const onSubmitClick = (event) => {
//         event.preventDefault() // prevents the page from refreshing
        
//         const postData = {
//             subject: subjectValue,
//             message: messageValue
//         }

//         addPost(postData)

//         setSubjectValue("")
//         setMessageValue("")
//     }

//     // event.target will be the actual input (or textarea) and then we can grab the current value

//     return (
//         <form>
//             <label className="form-label">Subject</label>
//             <input value={subjectValue} type="text" className="form-control" onChange={(event) => setSubjectValue(event.target.value)}/>
//             <label className="form-label">Message</label>
//             <textarea value={messageValue} className="form-control mb-3" onChange={(event) => setMessageValue(event.target.value)}/>
//             <button className="btn btn-success" onClick={onSubmitClick}>Post to Forum</button>
//         </form>
//     )
// }