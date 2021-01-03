import { useState } from 'react';

const useContactForm = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const nameRegex = /^[a-zA-Z\s]*[^\s]$/gim;
    const messageRegex = /^[\w\d][^<>/\\&]*$/gim;

    const isValid = (value, name, regex, text) => {
        if (!value) {
            setErrors({ ...errors, [name]: `Your ${text} is required` });
            return false;
        } else if (!regex.test(value)) {
            setErrors({ ...errors, [name]: `Your ${text} is not valid` });
            return false;
        } else {
            setErrors({ ...errors, [name]: '' });
            return true;
        }
    };

    const validateInput = (name, value) => {
        switch (name) {
            case '_replyto':
                return isValid(value, name, emailRegex, 'Email');
            case 'name':
                return isValid(value, name, nameRegex, 'Name');
            case 'message':
                return isValid(value, name, messageRegex, 'Message');
            default:
                return;
        }
    };

    const handleInput = e => {
        e.preventDefault();
        const { name, value } = e.target;
        validateInput(name, value);
        setFormData({ ...formData, [name]: value });
    };
    const isFormValid = () => {
        const haveErrors = Object.values(errors).reduce((hasError, error) => hasError || error.length > 0, false);
        return Object.keys(errors).length === 3 && !haveErrors;
    };

    return { formData, errors, handleInput, isFormValid };
};

export default useContactForm;
