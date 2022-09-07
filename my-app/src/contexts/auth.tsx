import React, { createContext, useState, useEffect } from 'react';
import IConfig from '../interfaces/IConfig';
import IQuestion from '../interfaces/IQuestion';
import IScore from '../interfaces/IScore';
import { fetchCategories } from '../services/handleApi';

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
  categories: any;
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
  categories: [],
}

export const AuthContext = createContext(initialState);

export default function AuthProvider({ children }: any) {
  const [nickName, setNickName] = useState('');
  const [token, setToken] = useState('');
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState({ results: []});
  const [configs, setConfigs] = useState({ type: '', category: '', difficulty: '' });
  const [score, setScore] = useState({ score: 0, correctAnswers: 0 });

  useEffect(() => {
    const funcFetchCategories = async () => {
      const data = await fetchCategories();
      setCategories(data.trivia_categories);
    };
    funcFetchCategories();
  }, []);

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
        categories,
      }}>
      { children }
    </AuthContext.Provider>
  )
}