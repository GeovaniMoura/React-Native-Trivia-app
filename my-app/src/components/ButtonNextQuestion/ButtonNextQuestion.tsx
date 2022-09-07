import React from 'react';
import { getStorage, setStorage } from '../../services/handleLocalStorage';
import { ContainerButtonNextQuestion, TextNextQuestion } from './styles';

type ButtonProps = {
  nextQuestion: Function,
  lastQuestion: boolean,
  navigation: any,
}

export default function ButtonNextQuestion({ nextQuestion, lastQuestion, navigation }: ButtonProps) {
  const finishGame = async (): Promise<void> => {
    const ranking = await getStorage('ranking');
    const rankingPlayers = await getStorage('rankingPlayers');
    if (!rankingPlayers) {
      await setStorage('rankingPlayers', [ranking]);
    } else {
      await setStorage('rankingPlayers', [...rankingPlayers, ranking]);
    }
    navigation.navigate('Feedback');
  }

  if (lastQuestion) {
    return (
      <ContainerButtonNextQuestion onPress={finishGame}>
        <TextNextQuestion>Score</TextNextQuestion>
      </ContainerButtonNextQuestion>
    )
  } else {
    return (
      <ContainerButtonNextQuestion onPress={nextQuestion}>
        <TextNextQuestion>Next Question</TextNextQuestion>
      </ContainerButtonNextQuestion>
    )
  }
}