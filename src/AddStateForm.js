import { Formik, Form, Field } from "formik"
import { useState } from "react"

export default function AddStateForm({ usaChunks, setUSAChunks }) {

    const submitForm = (values) => { // values comes from Formik with the form values
        const newChunk = { 
            name: values.name, 
            territory: values.territory 
        }
        setUSAChunks([ ...usaChunks, newChunk])
    }

    return (
        <Formik 
            initialValues={{ name: "", territory: false }}
            onSubmit={submitForm}
        >
            <Form>
                <h2>New State</h2>
                <label>Name</label>
                <Field type="text"
                    name="name"
                />
                <Field type="checkbox"
                    name="territory"
                />
                <label>Territory</label>
                <button>Add</button>
            </Form>
        </Formik>
    )
}


// Form by hand
// export default function AddStateForm({ usaChunks, setUSAChunks }) {
//     // Pieces of state are for the in-progress form values
//     const [nameValue, setNameValue] = useState("")
//     const [territoryValue, setTerritoryValue] = useState(false)

//     const submitForm = (event) => {
//         event.preventDefault() // to prevent the annoying page refresh

//         const newChunk = { 
//             name: nameValue, 
//             territory: territoryValue 
//         }

//         // REACT BLASPHEMY - changing state directly
//         //usaChunks.push(newChunk)

//         // REACT PRETTY GREAT - working off copies
//         // const copyOfChunks = [...usaChunks]
//         // copyOfChunks.push(newChunk)
//         // setUSAChunks(copyOfChunks)

//         // REACT MAGNIFICENCE - shorcut for working off copies
//         setUSAChunks([ ...usaChunks, newChunk])

//         console.log("submitted!")
//     }

//     return (
//         <form>
//             <h2>New State</h2>
//             <label>Name</label>
//             <input type="text"
//                 onChange={(event) => setNameValue(event.target.value)}
//                 value={nameValue}
//             />
//             <input type="checkbox"
//                 onChange={(event) => setTerritoryValue(event.target.checked)}
//                 checked={territoryValue}
//             />
//             <label>Territory</label>
//             <button onClick={submitForm}>Add</button>
//         </form>
//     )
// }