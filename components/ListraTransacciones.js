import React, {useState} from 'react';
import {SwipeListView} from "react-native-swipe-list-view";

import {
    CardTransacciones,
    ListaVista,
    VistaListaOculta, 
    BotonOculto,
    TituloListaOperacion,
    GastoLista,
    TiempoLista,
    DescripcionGasto,

} from '../constants/appStyles'


import { Entypo } from '@expo/vector-icons';


const ListraTransacciones = ({operaciones,
                            setOperaciones,
                            dineroCuenta,
                            setDineroCuenta,
                            handleEdit,

                            }) => {

    const handleDelete = (rowKey) => {
        const listaTransaccion = [...operaciones];
        const modifiBalance = rowKey.coste.slice(2, rowKey.key.length)
        const saberBalancePosNeg = rowKey.coste.slice(0,1)
        if(saberBalancePosNeg == "-"){
            setDineroCuenta(dineroCuenta + parseFloat(modifiBalance))
        }else{
            setDineroCuenta(dineroCuenta - parseFloat(modifiBalance))
        }
        const indexTransaccion = operaciones.findIndex((item) => item.key = rowKey.key);
        listaTransaccion.splice(indexTransaccion,1);
        setOperaciones(listaTransaccion)
        
     }

    const [swipedRow, setSwipedRow] = useState(null);


    return(
        <CardTransacciones>
            <SwipeListView 
                        data={operaciones}
                        renderItem={(data) => {
                            return(
                                
                                    <ListaVista>
                                        <TituloListaOperacion>{data.item.title}</TituloListaOperacion>
                                        <DescripcionGasto>{data.item.description}</DescripcionGasto>
                                        <GastoLista>{data.item.coste}€</GastoLista>
                                        <TiempoLista>{data.item.timestamp}</TiempoLista>
                                    </ListaVista>
                            );
                        }}
                        renderHiddenItem={(data) => {
                            return(
                                <VistaListaOculta>
                                    <BotonOculto
                                        onPress={() => handleDelete(
                                            data.item) }
                                    >
                                        <Entypo name="trash" size={25} color={'black'} />
                                    </BotonOculto>
                                    <BotonOculto>
                                        <Entypo name="edit" size={25} color={'black'} 
                                                onPress={() => {
                                                    handleEdit(data.item)
                                                }}
                                        />
                                    </BotonOculto>
                                </VistaListaOculta>
                            )
                            
                        }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={95}
            previewOpenDelay={2500}
            showsVerticalScrollIndicator={false}
            disableLeftSwipe={true}
            onRowOpen={( (rowKey) => {
                setSwipedRow(rowKey);
            })}
            onRowClose={() => {
                setSwipedRow(null);
            }}
        />
            
            </CardTransacciones>
    );
}

export default ListraTransacciones