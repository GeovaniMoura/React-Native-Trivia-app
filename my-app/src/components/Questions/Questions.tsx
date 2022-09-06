import React, { Fragment, useEffect } from 'react';
import { Text } from 'react-native';
import he from 'he';
import IQuestion from '../../interfaces/IQuestion';
import { ContainerQuestion, TextQuestion } from './styles';

type QuestionProps = {
  question: IQuestion,
}

export default function Question({ question }: QuestionProps) {
  return (
    <ContainerQuestion>
      <TextQuestion>{question.category}</TextQuestion>
      <TextQuestion>{he.decode(question.question) }</TextQuestion>
    </ContainerQuestion>
  );
}