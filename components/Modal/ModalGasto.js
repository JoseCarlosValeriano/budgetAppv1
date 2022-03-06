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

const ModalGasto = ({
                    operaciones,
                    setOperaciones,
                    modalGasto,
                    setModalGasto,
                    setDineroCuenta,
                    dineroCuenta
                    }) => {

    const [balance, setBalance] = useState('');
    const [title, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleClose = () => {
        setModalGasto(false);
    }

    const handleGasto = () => {
        const tiempo = new Date();
        const fechaOperar = tiempo.getDate() + '/' + tiempo.getMonth() + '/' + tiempo.getFullYear() + ' - ' + tiempo.getHours() + ':' + tiempo.getMinutes() + ':' + tiempo.getSeconds();
        const listaOperacion = [{
            title: title,
            timestamp: fechaOperar,
            coste: '-' + balance,
            description: descripcion,
            key: String(Math.random())
        },...operaciones];
        setDineroCuenta(dineroCuenta - parseInt(balance));
        setOperaciones(listaOperacion);
        setBalance(0);
        setTitle('');
        setDescripcion('');
        handleClose();
    }


    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalGasto}
        onRequestClose={() => handleClose()}
    >
        <ModalContainer>
            <VistaModal>
                <TituloModal>Generar gasto</TituloModal>
                <TextoInput>Indique un título para el gasto:</TextoInput>
                <InputModal 
                    placeHolder="Introduzca el título"
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
                <TextoInput>Indique una descripción para el gasto:</TextoInput>
                <InputModal 
                    placeHolder="Introduzca la descripción"
                    onChangeText={(text) => setDescripcion(text)}
                    value={descripcion}
                />
                <TextoInput>Indique la cantidad del gasto:</TextoInput>
                <InputModal 
                    placeHolder="Introduzca la cantidad"
                    keyboardType="number-pad"
                    maxLength={5}
                    onChangeText={(text) => setBalance(text)}
                    value={balance}
                />
                <ModalBottons>
                    <AntDesign name="check" size={35} color={'green'} onPress={() => handleGasto()}/>
                    <AntDesign name="close" size={35} color={'red'} onPress={() => handleClose()}/>
                </ModalBottons>
                
            </VistaModal>
        </ModalContainer>
    </Modal>
)
}

export default ModalGasto;