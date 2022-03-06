import React, { useState, useEffect } from 'react';
import { Modal, Text } from 'react-native';

import {
    ModalContainer,
    VistaModal,
    TituloModal,
    TextoInput,
    InputModal,
    ModalBottons,

} from '../../constants/appStyles'

import { AntDesign } from '@expo/vector-icons';

const ModalEdit = ({
            modalEditar,
            setModalEditar,
            tituloEdit,
            descEdit,
            costeEdit,
            setTituloEdit,
            setDescEdit,
            setCosteEdit,
            costeComparador,
            operaciones,
            keyEdit,
            setDineroCuenta,
            dineroCuenta,
            setOperaciones
            }) => {


    const handleClose = () => {
        setModalEditar(false);
    }

    const handleModificacion = () => {
        const time = new Date();
        const fechaOperacion = time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear() + ' - ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
        const listaOperaciones = [...operaciones];
        const indexOperacion = operaciones.findIndex((transac) => transac.key === keyEdit)
        listaOperaciones.splice(indexOperacion,1,{
            title: tituloEdit,
            timestamp: fechaOperacion,
            coste: costeEdit,
            description: descEdit,
            key:String(Math.random())
        });
        setOperaciones(listaOperaciones);
        handleClose()

    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalEditar}
            onRequestClose={() => handleClose()}
        >
            <ModalContainer>
                <VistaModal>
                    <TituloModal>Modificar gasto/ingreso</TituloModal>
                    <TextoInput>Indique un título:</TextoInput>
                    <InputModal
                        placeHolder="Introduzca el título"
                        onChangeText={(text) => setTituloEdit(text)}
                        value={tituloEdit}
                    />
                    <TextoInput>Indique una descripción:</TextoInput>
                    <InputModal
                        placeHolder="Introduzca la descripción"
                        onChangeText={(text) => setDescEdit(text)}
                        value={descEdit}
                    />
                    <TextoInput>Indique la cantidad:</TextoInput>
                    <InputModal
                        placeHolder="Introduzca la cantidad"
                        keyboardType="number-pad"
                        onChangeText={(text) => setCosteEdit(text)}
                        value={costeEdit}
                    />
                    <ModalBottons>
                        <AntDesign name="check" size={35} color={'green'} onPress={() => handleModificacion()} />
                        <AntDesign name="close" size={35} color={'red'} onPress={() => handleClose()} />
                    </ModalBottons>

                </VistaModal>
            </ModalContainer>
        </Modal>
    )
}

export default ModalEdit;