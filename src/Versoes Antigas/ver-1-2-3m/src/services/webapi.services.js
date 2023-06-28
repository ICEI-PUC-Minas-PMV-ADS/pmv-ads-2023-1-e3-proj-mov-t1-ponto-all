import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const onRequest = async (config) => {
  const token = await AsyncStorage.getItem('@TOKEN_KEY');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest);
  return axiosInstance;
};

const API = axios.create();
setupInterceptorsTo(API);

export const forgotPassword = async (email) => {
  try {
    const response = await API.post('/forgot-password', { email });

    if (response.status === 200) {
      // Recuperação de senha bem-sucedida
      console.log('Solicitação de recuperação de senha enviada com sucesso.');
    } else {
      // Recuperação de senha falhou
      console.log('Falha na solicitação de recuperação de senha.');
    }
  } catch (error) {
    console.log(error);
    // Lidar com erros de recuperação de senha
    console.log('Erro ao enviar solicitação de recuperação de senha.');
  }
};

export default API;
