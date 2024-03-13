import { useForm } from "react-hook-form";
import "./../App.css";
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Axios from 'axios';

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Axios.post('http://localhost:3001/create', {
            name: data.name,
            email: data.email,
            city: data.city,
            type: data.type,
            description: data.description
        }).then(() => {
            console.log('success');
        });      
    }
    
    return  <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className="Input-Area">
                <label className="Label">Nombre completo:</label>
                    <div className="Input-Container">
                        <PersonIcon className="Input-Icon" />
                        <input type="text" className="Input" {...register("name", { required: true })} />
                    </div>
                        {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Email:</label>
                <div className="Input-Container">
                    <AlternateEmailIcon className="Input-Icon" />
                    <input type="text" className="Input"{...register("email", { required: true })} />
                </div>  
                    {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Ciudad:</label>
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
                <label className="Label">Tipo</label>
                <select className="Select" {...register("type")}>
                    <option value="0"></option>
                    <option value="1">Petición</option>
                    <option value="2">Queja</option>
                    <option value="3">Reclamo</option>
                </select>
                {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Descripción</label>
                    <textarea placeholder="Maximo 1000 caracteres..." className="Text-Area" {...register("description", { required: true })}></textarea>
                    {errors.description && <span>Este campo es requerido</span>}
            </div>
            <input type="submit" value='Enviar' className="Button"/>
        </form>

}

export default Form;