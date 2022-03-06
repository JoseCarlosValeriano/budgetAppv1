
import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";


export const Container = styled.SafeAreaView`
  background-color: #D1D1D1;
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const CabeceraView = styled.View`
  border-radius: 5px;
  background-color: black ;  
  padding-vertical: 35px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TituloCabecera = styled.Text`
  font-size: 35px;
  color: white;
  align-items: center;
`;

export const TarjetaOperaciones = styled.View`
  margin-top: 10px;
  margin-left: 26%;
  width: 50%;
  height: 15%;
  background-color: #614141;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 0.9;
`;

export const TituloOperacion = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #FFFF;
  align-items: center;
`

export const BotonOperacion = styled.TouchableHighlight`
  background-color: white;
  border-radius: 5px;
  padding: 1px;
`

export const TextoBotones = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  align-items: center;
  padding-top: 2px;
`

export const CardTransacciones = styled.View`
  margin-top: 10px;
  margin-left: 5%;
  width: 90%;
  height: 45%;
  background-color: #949494;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

export const ListaVista = styled.View`
  background-color: black;
  min-height: 85px;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: stretch;
`;

export const TituloListaOperacion = styled.Text`
font-size: 25px;
font-weight: bold;
color: white;
align-items: center;
`

export const DescripcionGasto = styled.Text`
font-size: 15px;
color: white;
align-items: center;
`

export const GastoLista = styled.Text`
font-size: 20px;
font-weight: bold;
color: white;
align-items: baseline;
margin-left: 90%;
margin-bottom: 10px;
`
export const TiempoLista = styled.Text`
font-size: 10px;
color: white;
font-style: italic;
align-items: baseline;
margin-left: 92%;
`

export const VistaListaOculta = styled.View`
  background-color: #949494;
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 10px;
  align-items: stretch;
`;

export const BotonOculto = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
  margin-bottom: 25px;
`;

export const ModalContainer = styled.View`
  padding: 25px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: transparent;
`;

export const VistaModal = styled.View`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
`;

export const TituloModal = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: black;
`

export const TituloInput = styled.Text`
font-size: 25px;
font-weight: bold;
color: white;
margin-left: 5%;
`

export const InputModal = styled.TextInput`
  background-color: grey;
  border-radius: 5px;
  padding: 10px;
  margin-top: 15px;
`

export const TextoInput = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  align-items: center;
  padding-top: 10px;
`

export const ModalBottons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`