import { useForm } from "react-hook-form";
import "./../App.css";

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return <div> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Input-Area">
                <label className="Label">Nombre</label>
                <input type="text" className="Input"{...register("name", { required: true })} />
                {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Email</label>
                <input type="text" className="Input"{...register("email", { required: true })} />
                {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Ciudad</label>
                <select className="Input" {...register("city")}>
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
                <select className="Input" {...register("type")}>
                    <option value="1">Petición</option>
                    <option value="2">Queja</option>
                    <option value="3">Reclamo</option>
                </select>
                {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="Input-Area">
                <label className="Label">Descripción</label>
                    <textarea className="Text-Area" {...register("description", { required: true })}></textarea>
                    {errors.description && <span>Este campo es requerido</span>}
            </div>
            <input type="submit" value='Enviar' className="Button"/>
        </form>
    </div>

}

export default Form;