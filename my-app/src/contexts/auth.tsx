import React, { createContext, useState } from 'react';
import IConfig from '../interfaces/IConfig';
import IQuestion from '../interfaces/IQuestion';

interface IContext {
  nickName: string;
  setNickName: Function;
  token: string;
  setToken: Function;
  questions: { results: Array<IQuestion> };
  setQuestions: Function;
  configs: IConfig;
  setConfigs: Function;
}

const initialState: IContext = {
  nickName: '',
  setNickName: () => {},
  token: '',
  setToken: () => {},
  questions: { results: [] },
  setQuestions: () => {},
  configs: { type: '', category: '', difficulty: '' },
  setConfigs: () => {},
}

export const AuthContext = createContext(initialState);

export default function AuthProvider({ children }: any) {
  const [nickName, setNickName] = useState('');
  const [token, setToken] = useState('');
  const [questions, setQuestions] = useState({ results: []});
  const [configs, setConfigs] = useState({ type: '', category: '', difficulty: '' });

  return (
    <AuthContext.Provider value={
      {
        nickName,
        setNickName,
        token,
        setToken,
        questions,
        setQuestions,
        configs,
        setConfigs,
      }}>
      { children }
    </AuthContext.Provider>
  )
}