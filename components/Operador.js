import React from 'react';
import {
    TarjetaOperaciones,
    TituloOperacion,
    BotonOperacion,
    TextoBotones
} from '../constants/appStyles'

const Operador = ({dineroCuenta,setModalIngreso,setModalGasto}) => {
    return(
    <>
        <TarjetaOperaciones>
            <TituloOperacion>Dinero actual en la cuenta: {dineroCuenta} €</TituloOperacion>
            <BotonOperacion onPress={() => setModalIngreso(true)}>
                <TextoBotones>Ingreso</TextoBotones>
            </BotonOperacion>
            <BotonOperacion onPress={() => setModalGasto(true)}>
                <TextoBotones>Gasto</TextoBotones>
            </BotonOperacion>
        </TarjetaOperaciones>
    </>
    )
}

export default Operador;