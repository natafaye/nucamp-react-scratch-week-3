import { Formik, Form, Field } from "formik";

export default function NewMessageForm() {
    const handleSubmit = (formikValues) => {
        console.log(formikValues)
    }

    return (
        <Formik
            initialValues={{ author: 'Natalie', text: '', private: true }}
            onSubmit={handleSubmit}
        >
            <Form className="d-flex flex-column gap-2 mt-5 m-1">
                <h6>New Message</h6>
                <div>
                    Author 
                    <Field type="text" name="author" />
                </div>
                <Field as="textarea" name="text" />
                <div>
                    <Field type="checkbox" name="private" /> Private
                </div>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}