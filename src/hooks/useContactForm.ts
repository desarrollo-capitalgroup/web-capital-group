import { useState } from "react"

const emailForward = 'support@capitalgrouprecovery.com.mx';

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
            const res = await fetch(`https://formsubmit.co/${emailForward}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    'Nombre': formData.name,
                    'Contacto': formData.contact,
                    'Correo electrónico': formData.email,
                    'Nombre de la empresa donde invirtió': formData.investCompany,
                    'Monto aproximado de la inversión': formData.amountInvest,
                    'Cuéntanos la historia': formData.summaryHistory,
                    _subject: 'Nuevo Formulario Capital Group Recovery',
                    _captcha: false,
                    _template: 'table',
                    _redirect: false
                })
            });

            console.log('res', res)
            if(!res.ok) throw new Error('Error enviando formulario');

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