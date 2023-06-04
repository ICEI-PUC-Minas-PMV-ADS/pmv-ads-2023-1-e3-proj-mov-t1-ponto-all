import styled from "styled-components/native";
import { Appbar } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00A6FF;
  border-bottom-color: #000;
`;

export const ImageWrapper = styled.View`
  border-radius: 200px;
  border-width: 5px;
  border-color: #8190a5;
  padding: 5px;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
  resize-mode: contain;
`;

export const AppbarHeader = styled(Appbar.Header)`
  background-color: #8190A5;
`;

export const HoraAtual = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: 10px;
`;