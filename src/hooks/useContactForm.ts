import { useState } from "react"
import emailjs from "@emailjs/browser";


export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        investCompany: '',
        amountInvest: '',
        summaryHistory: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const submitForm = async () => {
        setLoading(true);
        setSuccess(false);
        setError(false);

        try {
            const body = {
                title: 'Nuevo Formulario Capital Group Recovery',
                ...formData
            }

            const res = await emailjs.send('service_fqp9gn3', 'template_xrafkrb', body, {
                publicKey: 'Nz6FH8wTZMR5o_aTb'
            });

            if(res.status != 200) throw new Error('Error enviando formulario');

            setSuccess(true);
            setFormData({ name: '', email: '', contact: '', amountInvest: '', investCompany: '', summaryHistory: '' });
             
        } catch (error) {
            console.error(error);
            setError(true);
        }

        setLoading(false);
    };

    return {
        formData,
        loading,
        success,
        error,
        handleChange,
        submitForm,
    };
}