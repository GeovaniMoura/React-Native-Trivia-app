import React, { Fragment, useEffect } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import he from 'he';
import { ButtonAnswer, ContainerAnswer, ContainerAnswers } from './styles';

type AnswersProps = {
  answers: string[],
}

export default function Answers({ answers }: AnswersProps) {
  useEffect(() => {
    console.log(answers);
  }, []);

  return (
    <ContainerAnswers>
      { answers.map((answer) => (
        <ContainerAnswer>
          <ButtonAnswer key={answer} title={answer} />
        </ContainerAnswer>
      ))}
    </ContainerAnswers>
  );
}