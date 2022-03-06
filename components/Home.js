import React,{useState} from 'react'

import Cabecera from './Cabecera'
import Operador from './Operador'
import ListraTransacciones from './ListraTransacciones'
import ModalIngreso from './Modal/ModalIngreso'
import ModalGasto from './Modal/ModalGasto'
import ModalEdit from './Modal/ModalEdit'

const Home = () => {


    const transacciones = [
        {
            title: 'Lidl',
            timestamp: '2/03/22 10:45 O.M',
            coste: '- 40.00',
            description:'Gasto en supermercado Lidl',
            key:String(Math.random())
        },
        {
            title: 'Ingreso',
            timestamp: '2/03/22 10:30 A.M',
            description:'Ingreso de dinero en cajero',
            coste: '+ 40.00',
            key:String(Math.random())
        }
    ];

    const handleEdit = (operacion) => {
        setTituloEdit(operacion.title)
        setDescEdit(operacion.description)
        setCosteEdit(operacion.coste)
        setCosteComparador(operacion.coste)
        setKeyEdit(operacion.key)
        setModalEditar(true)
    }

    const [operaciones,setOperaciones] = useState(transacciones)
    const [dineroCuenta, setDineroCuenta] = useState(0)
    const [modalIngreso, setModalIngreso] = useState(false);
    const [modalGasto, setModalGasto] = useState(false);

    const [modalEditar, setModalEditar] = useState(false);
    const [tituloEdit, setTituloEdit] = useState('');
    const [descEdit, setDescEdit] = useState('');
    const [costeEdit, setCosteEdit] = useState('');
    const [costeComparador, setCosteComparador] = useState(0);
    const [keyEdit, setKeyEdit] = useState('');

    return (
        <>
            <Cabecera />
            <Operador 
                dineroCuenta={dineroCuenta}
                setModalIngreso={setModalIngreso}
                setModalGasto={setModalGasto}
            />
            <ListraTransacciones 
                operaciones={operaciones}
                setOperaciones={setOperaciones}
                dineroCuenta={dineroCuenta}
                setDineroCuenta={setDineroCuenta}
                handleEdit={handleEdit}
            />
            <ModalIngreso 
                operaciones={operaciones}
                setOperaciones={setOperaciones}
                modalIngreso={modalIngreso}
                setModalIngreso={setModalIngreso}
                setDineroCuenta={setDineroCuenta}
            />
            <ModalGasto 
                operaciones={operaciones}
                setOperaciones={setOperaciones}
                modalGasto={modalGasto}
                setModalGasto={setModalGasto}
                setDineroCuenta={setDineroCuenta}
                dineroCuenta={dineroCuenta}
            />
            <ModalEdit 
                modalEditar={modalEditar}
                setModalEditar={setModalEditar}
                tituloEdit={tituloEdit}
                descEdit={descEdit}
                costeEdit={costeEdit}
                setTituloEdit={setTituloEdit}
                setDescEdit={setDescEdit}
                setCosteEdit={setCosteEdit}
                costeComparador={costeComparador}
                operaciones={operaciones}
                keyEdit={keyEdit}
                setDineroCuenta={setDineroCuenta}
                dineroCuenta={dineroCuenta}
                setOperaciones={setOperaciones}
            />
        </>
    )
}

export default Home;