import React, { createContext, useState } from 'react';
import IConfig from '../interfaces/IConfig';
import IQuestion from '../interfaces/IQuestion';
import IScore from '../interfaces/IScore';

interface IContext {
  nickName: string;
  setNickName: Function;
  token: string;
  setToken: Function;
  questions: { results: Array<IQuestion> };
  setQuestions: Function;
  configs: IConfig;
  setConfigs: Function;
  score: IScore;
  setScore: Function;
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
  score: { score: 0, correctAnswers: 0 },
  setScore: () => {},
}

export const AuthContext = createContext(initialState);

export default function AuthProvider({ children }: any) {
  const [nickName, setNickName] = useState('');
  const [token, setToken] = useState('');
  const [questions, setQuestions] = useState({ results: []});
  const [configs, setConfigs] = useState({ type: '', category: '', difficulty: '' });
  const [score, setScore] = useState({ score: 0, correctAnswers: 0 });

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
        score,
        setScore,
      }}>
      { children }
    </AuthContext.Provider>
  )
}