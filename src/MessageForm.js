import { Formik, Form, Field } from "formik"


export default function MessageForm({ addMessage }) {
    // Formik gives us values as a parameter
    const handleSubmit = (values, { resetForm }) => {
        addMessage(values)
        resetForm()
    }

    return (
        <Formik 
            initialValues={{
                text: "I'm the best",
                author: "",
                private: false
            }}
            onSubmit={handleSubmit}
        >
            <Form className="d-flex align-items-center gap-2 mt-4">
                {/* step 2: tie the piece of state to the input */}
                <Field type="text" 
                    className="form-control"
                    name="text"
                />
                <Field type="text" 
                    className="form-control"
                    name="author"
                />
                <div className="form-check">
                    <Field
                        type="checkbox" 
                        className="form-check-input"
                        name="private"
                    />
                    <label className="form-check-label">Private</label>
                </div>
                <button className="btn btn-sm btn-success" type="submit">Send</button>
            </Form>
        </Formik>
    )
}


// export default function MessageForm() {
//     const initialValues = {
//         text: "I'm the best",
//         author: "",
//         private: false
//     }

//     // THE SAME FOR ANY FORM EVER
//     const [values, setValues] = useState(initialValues)
//     const handleChange = (event) => setValues({ ...values, [event.target.name]: event.target.value })
    
//     const handleSubmit = (event) => {
//         // step 3: Use the piece of state in your submit event handler
//         event.preventDefault() // prevent the page from refreshing
//         alert("Submitted with value: " + values.text)
//     }

//     return (
//         <form className="d-flex align-items-center gap-2 mt-4" onSubmit={handleSubmit}>
//             {/* step 2: tie the piece of state to the input */}
//             <input type="text" 
//                 className="form-control"
//                 name="text"
//                 value={values.text}
//                 onChange={handleChange}
//             />
//             <input type="text" 
//                 className="form-control"
//                 name="author"
//                 value={values.author}
//                 onChange={handleChange}
//             />
//             <div className="form-check">
//                 <input 
//                     type="checkbox" 
//                     className="form-check-input"
//                     checked={values.private}
//                     onChange={(event) => setValues({ ...values, private: event.target.checked})}
//                 />
//                 <label className="form-check-label">Private</label>
//             </div>
//             <button className="btn btn-sm btn-success">Send</button>
//         </form>
//     )
// }


// Working form with multiple state variables
// export default function MessageForm() {
//     // step 1: make a piece state
//     const [textValue, setTextValue] = useState("I'm the best")
//     const [privateValue, setPrivateValue] = useState(false)

//     const handleSubmit = (event) => {
//         // step 3: Use the piece of state in your submit event handler
//         event.preventDefault() // prevent the page from refreshing
//         alert("Submitted with value: " + textValue)
//     }

//     return (
//         <form className="d-flex align-items-center gap-2 mt-4" onSubmit={handleSubmit}>
//             {/* step 2: tie the piece of state to the input */}
//             <input type="text" 
//                 className="form-control"
//                 value={textValue}
//                 onChange={(event) => setTextValue(event.target.value)}
//             />
//             <div className="form-check">
//                 <input 
//                     type="checkbox" 
//                     className="form-check-input"
//                     checked={privateValue}
//                     onChange={(event) => setPrivateValue(event.target.checked)}
//                 />
//                 <label className="form-check-label">Private</label>
//             </div>
//             <button className="btn btn-sm btn-success">Send</button>
//         </form>
//     )
// }