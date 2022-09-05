import React from 'react';
import he from 'he';
import { ContainerCorrectAnswer, ContainerIncorrectAnswer, TextAnswer } from './styles';

type AnswersProps = {
  correctAnswers: string,
  isRight: boolean,
}

export default function ShowAnswers({ correctAnswers, isRight }: AnswersProps) {
  if (!isRight) {
    return (
      <ContainerIncorrectAnswer>
        <TextAnswer>{he.decode(correctAnswers)}</TextAnswer>
      </ContainerIncorrectAnswer>
    )
  } else {
    return (
      <ContainerCorrectAnswer>
        <TextAnswer>{he.decode(correctAnswers)}</TextAnswer>
      </ContainerCorrectAnswer>
    )
  }
}