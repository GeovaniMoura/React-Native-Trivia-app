import React from 'react';
import he from 'he';
import { ButtonAnswer, ContainerAnswer, ContainerAnswers, TextAnswer } from './styles';

type AnswersProps = {
  answers: string[],
}

export default function Answers({ answers }: AnswersProps) {
  return (
    <ContainerAnswers>
      { answers.map((answer) => (
        <ContainerAnswer key={answer}>
          <ButtonAnswer>
            <TextAnswer>{he.decode(answer)}</TextAnswer>
          </ButtonAnswer>
        </ContainerAnswer>
      ))}
    </ContainerAnswers>
  );
}