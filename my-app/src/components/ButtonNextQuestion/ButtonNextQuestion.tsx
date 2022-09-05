import React from 'react';
import { ContainerButtonNextQuestion, TextNextQuestion } from './styles';

type ButtonProps = {
  nextQuestion: Function,
  lastQuestion: boolean,
  navigation: any,
}

export default function ButtonNextQuestion({ nextQuestion, lastQuestion, navigation }: ButtonProps) {
  const finishGame = (): void => {
    navigation.navigate('Feedback');
  }

  if (lastQuestion) {
    return (
      <ContainerButtonNextQuestion onPress={finishGame}>
        <TextNextQuestion>Pontuação</TextNextQuestion>
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