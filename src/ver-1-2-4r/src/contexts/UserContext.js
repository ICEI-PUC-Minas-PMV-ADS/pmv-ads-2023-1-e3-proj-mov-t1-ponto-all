import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');
  const [matricula, setMatricula] = useState('');
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);

  const recoverPassword = async (email) => {
  try {
    // Fazer uma chamada à API para enviar a solicitação de recuperação de senha
    const response = await API.post('/forgot-password', { email });

    if (response.status === 200) {
      // Recuperação de senha bem-sucedida
      // Você pode exibir uma mensagem de sucesso ou redirecionar para a página de confirmação de recuperação de senha
      console.log('Solicitação de recuperação de senha enviada com sucesso.');
    } else {
      // Recuperação de senha falhou
      // Exibir mensagem de erro para o usuário
      console.log('Falha na solicitação de recuperação de senha.');
    }
  } catch (error) {
    console.log(error);
    // Lidar com erros de recuperação de senha
    // Exibir mensagem de erro para o usuário ou tomar ações adicionais
  }
};


  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        matricula,
        setMatricula,
        isPasswordRecovery,
        setIsPasswordRecovery,
        recoverPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const {
    signed,
    setSigned,
    name,
    setName,
    matricula,
    setMatricula,
    isPasswordRecovery,
    setIsPasswordRecovery,
    recoverPassword,
  } = context;

  return {
    signed,
    setSigned,
    name,
    setName,
    matricula,
    setMatricula,
    isPasswordRecovery,
    setIsPasswordRecovery,
    recoverPassword,
  };
}
