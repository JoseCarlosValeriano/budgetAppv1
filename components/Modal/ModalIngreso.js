import React, { useState,useEffect } from 'react';
import {Modal,Text} from 'react-native';

import {
    ModalContainer,
    VistaModal,
    TituloModal,
    TextoInput,
    InputModal,
    ModalBottons,

} from '../../constants/appStyles'

import {AntDesign} from '@expo/vector-icons';

const ModalIngreso = ({
                    operaciones,
                    setOperaciones,
                    modalIngreso,
                    setModalIngreso,
                    setDineroCuenta,

                    }) => {

    const [balance, setBalance] = useState('')

    const handleClose = () => {
        setModalIngreso(false);
    }

    const handleNewItem = () => {
        const tiempo = new Date();
        const fechaOperar = tiempo.getDate() + '/' + tiempo.getMonth() + '/' + tiempo.getFullYear() + ' - ' + tiempo.getHours() + ':' + tiempo.getMinutes() + ':' + tiempo.getSeconds();
        setDineroCuenta(parseFloat(balance))
        const listaOperacion = [{
            title: 'Ingreso',
            timestamp: fechaOperar,
            coste: '+' + balance,
            description: 'Ingreso de balance',
            key: String(Math.random())
        },...operaciones]
        setOperaciones(listaOperacion);
        setBalance(0);
        handleClose();
    }


    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalIngreso}
        onRequestClose={() => handleClose()}
    >
        <ModalContainer>
            <VistaModal>
                <TituloModal>Ingreso de dinero</TituloModal>
                <TextoInput>Indique la cantidad de dinero a ingresar:</TextoInput>
                <InputModal 
                    placeHolder="Introduzca la cantidad"
                    keyboardType="number-pad"
                    maxLength={5}
                    onChangeText={(text) => setBalance(text)}
                    value={balance}
                />
                <ModalBottons>
                    <AntDesign name="check" size={35} color={'green'} onPress={() => handleNewItem()}/>
                    <AntDesign name="close" size={35} color={'red'} onPress={() => handleClose()}/>
                </ModalBottons>
                
            </VistaModal>
        </ModalContainer>
    </Modal>
)
}

export default ModalIngreso;