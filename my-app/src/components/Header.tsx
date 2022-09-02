import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth';
import { getStorage } from '../services/handleLocalStorage';
import { ContainerHeaderData, GameHeader, ImageGravatar, ImageTriviaHeader, TextNickName, TextScore } from './styles';

export default function Header() {
  const { nickName } = useContext(AuthContext);
  const [ranking, setRanking] = useState({
    picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y',
    score: 0
  });

  useEffect(() => {
    const funcGetStorage = async () => {
      const storage = await getStorage('ranking');
      setRanking(storage);
    };
    funcGetStorage();
  }, [])

  return (
    <GameHeader>
      <ImageTriviaHeader source={require('../images/trivia.png')}/>
      <ContainerHeaderData>
        <TextNickName>{nickName}</TextNickName>
        <TextScore>Score: {ranking.score}</TextScore>
        <ImageGravatar source={{ uri: ranking.picture }} />
      </ContainerHeaderData>
    </GameHeader>
  ) 
}