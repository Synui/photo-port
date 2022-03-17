import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        // This conditional statement says if the <input> is email, then validate the value of that input field with the validateEmail function and assign its return to isValid
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        // The name property of target actually refers to the name attribute of the form element. 
        // This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        // console.log('errorMessage', errorMessage);
    };
    // console.log(formState) is located outside the handleChange function declaration
    // because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync
    // console.log(formState);

    // front-end purposes only
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {/* Same as a conditional "if" statement.
                If errorMessage has a truthy value, the <div> block will render. 
                If errorMessage doesn't have an error message, the following <div> block doesn't render. 
                The && operator—known as the AND operator—is being used here as a short circuit. 
                If the first value resolves to true, the second expression is evaluated.*/}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="button">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;