import { useEffect } from 'react'
import useEmpleado from '../hooks/useEmpleado'

const Empleado = () =>{
    const { 
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
        setEmail} = useEmpleado
    useEffect(() =>{
        getEmpleados()
    }, [])
    return (
        <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-md-4 offset-md-4'>
                <div className='d-grid mx-auto'>
                    <button onClick= {() => openModal(1)} className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modalProductos'>
                        <i className='fa-solid fa-circle-plus'/> Añadir
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-lg-2'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>dni</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody >
                        {
                            empleados.map((empleado, i) =>(
                                <tr key={empleado.id}>
                                    <td>{i +1}</td>
                                    <td>{empleado.dni}</td>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.direccion}</td>
                                    <td>{empleado.email}</td>
                                    <td>
                                        <button className='btn btn-warning m-1'  data-bs-toggle='modal' data-bs-target='#modalEmpleados'
                                         onClick={() => openModal(2, empleado.dni, empleado.nombre, empleado.direccion, empleado.email)}>
                                            <i className='fa-solid fa-edit'></i> 
                                         </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div id='modalEmpleados' className='modal fade' aria-hidden='true' tabIndex={-1}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>{TitleModal}</label>
                        <button className='btn-close' data-bs-dismiss='modal' aria-label='close'/>
                    </div>
                    <div className='modal-body'>
                        <input type='hidden' id='id'/>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                            <input type="text" id='dni' className='form-control' placeholder='DNI Empleado' value={dni} onChange={(e) => setDni(e.target.value)} />
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                            <input type="text" id='nombre' className='form-control' placeholder='Nombre Empleado'value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                            <input type="text" id='direccion' className='form-control' placeholder='Direccion' value={direccion} onChange={(e) => setDireccicon(e.target.value)}/>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                            <input type="text" id='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button onClick= {() => validar()} className='btn btn-success'><i className='fa-solid  fa-floppy-disk'></i> Guardar</button>
                        <button id='btnCerrarModal' className='btn btn-danger' data-bs-dismiss='modal'><i className='fa-solid fa-trash' ></i> Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}
export default Empleado