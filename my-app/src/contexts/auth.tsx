import React, { createContext, useState } from 'react';

interface IContext {
  nickName: string;
  setNickName: Function;
  token: string;
  setToken: Function;
}

const initialState: IContext = {
  nickName: '',
  setNickName: () => {},
  token: '',
  setToken: () => {},
}

export const AuthContext = createContext(initialState);

export default function AuthProvider({ children }: any) {
  const [nickName, setNickName] = useState('');
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={
      {
        nickName,
        setNickName,
        token,
        setToken,
      }}>
      { children }
    </AuthContext.Provider>
  )
}