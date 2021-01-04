import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PageHeader from '../common/PageHeader';
import { ContactWrapper, ContactBox, LeftContent, ContactForm } from './Contact.style';
import useContactForm from './useContactForm';
import Button from '../common/Button';

const Contact = () => {
    const { formData, errors, handleInput, isFormValid } = useContactForm();
    return (
        <ContactWrapper id="contact">
            <PageHeader>Get In Touch</PageHeader>
            <ContactBox>
                <LeftContent>
                    <FontAwesomeIcon size={'5x'} icon="handshake" />
                    <h3>Thank You</h3>
                    <p>Do You Have Any Queries?</p>
                </LeftContent>
                <ContactForm action="https://formspree.io/f/mqkggvyd" method="POST">
                    <label className="label__email">
                        <span>Email</span>
                        <input
                            className={errors._replyto && 'invalid'}
                            onChange={handleInput}
                            value={formData.email}
                            id="email"
                            name="_replyto"
                            type="email"
                            required
                            placeholder="john@exp.com"
                        />
                    </label>
                    <label className="label__name">
                        <span>Name</span>
                        <input
                            className={errors.name && 'invalid'}
                            onChange={handleInput}
                            value={formData.name}
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                        />
                    </label>
                    <label className="label__message">
                        <span>Message</span>
                        <textarea
                            className={errors.message && 'invalid'}
                            onChange={handleInput}
                            value={formData.message}
                            name="message"
                            placeholder="Type a Message"
                            required
                        />
                    </label>

                    <Button disabled={!isFormValid()} className="submit__btn" as="button" type="submit" value="send">
                        <FontAwesomeIcon icon="paper-plane" /> Submit
                    </Button>
                </ContactForm>
            </ContactBox>
        </ContactWrapper>
    );
};
export default Contact;
