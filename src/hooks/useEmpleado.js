import {useState} from "react";
import {alertaError,alertaSuccess,alertaWarning} from '../Alerta'
import Swal from "sweetalert2";

const useEmpleado = () =>{
    const [id, setId] = useState('')
    const [empleados , setEmpleados] = useState([])
    const [nombre, setNombre] = useState('')
    const [dni, setDni] = useState('')
    const [direccion, setDireccicon] = useState('')
    const [email, setEmail] = useState('')
    const [TitleModal, setTitleModal] = useState('')
    const [operacion, setOperacion] = useState(1)

    const getEmpleados = () =>{
        const localStorageEmpleados = localStorage.getItem
        ('EMPLEADOS')
        const parsedEmpleados = localStorageEmpleados ? JSON.parse
        (localStorageEmpleados) : []
        if (Array.isArray(parsedEmpleados)){
            setEmpleados([])
        }else{
            setEmpleados(parsedEmpleados)
        }
    }

    const openModal = (operacion) =>{
        setId('')
        setDni('')
        setNombre('')
        setDireccicon('')
        setEmail('')

        if (operacion ===1){
            setTitleModal('Registar Empleado')
            setOperacion(1)
        }
    }

    const enviarSolicitud = (metodo, parametros = {}) =>{
        const saveEmpleado = [...empleados]
        let mensaje = ''

        if (metodo === 'POST'){
            saveEmpleado.push({...parametros, parametros})
            mensaje = 'empleado registrado exitosamente'
        }
        if (metodo === 'GET'){
            saveEmpleado.push({...parametros, parametros})
            mensaje = 'empleado registrado exitosamente'
        }
        localStorage.setItem('EMPLEADOS',JSON.stringify(saveEmpleado))
        setEmpleados(saveEmpleado)
        alertaSuccess(mensaje)
        document.getElementById('btnCerrarModal').click()
    }

    const validar = () => {
        let playload, metodo
        if(nombre === ''){
            alertaWarning('¡Nombre del empleado no puede estar vacio!', 'nombre')
        }else if (dni === ''){
            alertaWarning('¡El DNI no puede estar vacio!', 'dni')
        }else if(email === ''){
            alertaWarning('¡El email no puede estar vacio!', 'email')
        }else if(direccion === ''){
            alertaWarning('¡La direccion no puede estar vacia!', 'email')
        }else{
         playload = {
                id :dni,
                dni : dni ,
                nombre:nombre,
                direccion:direccion,
                email:email
            }
            if (operacion === 1){
                metodo = 'POST'
            }
            enviarSolicitud('',metodo, playload)
        }
    }

    return(
        getEmpleados,
        openModal,
        validar,
        empleados,
        TitleModal,
        nombre,
        setNombre,
        dni,
        setDni,
        direccion,
        setDireccicon,
        email,
        setEmail
    )
    
}

export default useEmpleado