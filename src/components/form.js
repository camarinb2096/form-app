import { useForm } from "react-hook-form";
import "./../App.css";
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Axios from 'axios';
import React from "react";
import { useState } from "react";
import ConfirmModal from "./modal";

const Form = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            city: 0,
            type: 0,
            description: ''
        }
    });

    const [message, setMessage] = useState({ title: '', body: '' });
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        Axios.post('https://usb-form-api.onrender.com/form', {
            name: data.name,
            email: data.email,
            city: data.city,
            type: data.type,
            description: data.description
        }).then(() => {
            setMessage({ title: 'Exito!!!', body: 'Se ha enviado el formulario correctamente' });
            setShowModal(true);
            reset();
            console.log('success');
        }).catch((error) => {
            console.log("Error:", error.response.data.message)
            const errorMessage = error.response.data.message ? error.response.data.message : error.message; 
            setMessage({ title: 'Error!!!', body: errorMessage });
            setShowModal(true);
            console.log('error');
        });


    }

    const closeModal = () => {
        setShowModal(false);
    }

    
    return (
        <>
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className="Input-Area">
                <label className="Label">Nombre completo:</label>
                    <div className="Input-Container">
                        <PersonIcon className="Input-Icon" />
                        <input type="text" className="Input" {...register("name", { required: true, maxLength: 100, })} />
                    </div>
                        {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Email:</label>
                <div className="Input-Container">
                    <AlternateEmailIcon className="Input-Icon" />
                    <input type="text" className="Input" {...register("email", { required: true, maxLength: 100, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                </div>
                    {errors.email && <span>Este campo es requerido</span>}
                    {errors.email?.type === "pattern" && <span>El email no es valido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Ciudad: </label>
                <select className="Select" {...register("city")}>
                    <option value='0'></option>
                    <option value="1">Bogotá D.C</option>
                    <option value="2">Medellín</option>
                    <option value="3">Cali</option>
                    <option value="4">Barranquilla</option>
                    <option value="5">Cartagena</option>
                    <option value="6">Bucaramanga</option>
                </select>
                {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Tipo:</label>
                <select className="Select" {...register("type")}>
                    <option value="0"></option>
                    <option value="1">Petición</option>
                    <option value="2">Queja</option>
                    <option value="3">Reclamo</option>
                </select>
                {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Descripción:</label>
                    <textarea placeholder="Maximo 1000 caracteres..." className="Text-Area" {...register("description", { required: true, maxLength: 10000, })}></textarea>
                    {errors.description && <span>Este campo es requerido</span>}
            </div>
            <input type="submit" value='Enviar' className="Button"/>
        </form>
        <ConfirmModal show={showModal} close={closeModal} message={message} />
        </>
    );
}

export default Form;