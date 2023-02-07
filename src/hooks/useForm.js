import { useEffect, useState } from 'react'

export const useForm = (initialValues) => {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.idTweet) {
            newErrors.idTweet = 'Por favor ingresa el id de un Tweet';
        }
        setErrors(newErrors);
        return newErrors;
    };

    const resetForm = () => {
        setFormData(initialValues);
        setErrors({});
    };

    return {
        formData,
        errors,
        handleChange,
        validate,
        resetForm,
    };
};

export default useForm