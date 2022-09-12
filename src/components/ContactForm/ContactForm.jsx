import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const errorName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const errorNumber =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const regularName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
//   const regularNumber ="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

const schema = yup.object().shape({
    name: yup.string().required().matches(regularName, {message: errorName}),
    number: yup.number().required(errorNumber), 
});

// .matches(regularNumber, {message: errorNumber})
const initialValues = {
    name: '',
    number: '',
} ; 


const ContactForm = ({ onSubmit }) => {
  
        return (
            <Formik 
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values, actions) => {
                onSubmit(values);
                actions.resetForm();
              }}>
                <Form autoComplete="off">
                    <label htmlFor="name">
                        <p>Name</p>
                        <Field 
                          name="name" 
                          type="text" 
                          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
                        <ErrorMessage name="name" component="div"/>
                    </label>
                    <br/>
                    <label htmlFor="number">
                        <p>Number</p>
                        <Field 
                          name="number" 
                          type="tel" 
                          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                        <ErrorMessage name="number" component="div"/>
                    </label>
                    <br/>
                    <button type="submit">Add contact</button>

                </Form>
              

            </Formik>
        )
    
}


export default ContactForm;