import React from 'react';
import he from 'he';
import { ContainerAnswer, TextAnswer } from './styles';

type AnswersProps = {
  correctAnswers: string,
}

export default function Answers({ correctAnswers }: AnswersProps) {
  return (
    <ContainerAnswer>
      <TextAnswer>{he.decode(correctAnswers)}</TextAnswer>
    </ContainerAnswer>
  );
}