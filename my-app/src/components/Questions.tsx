import React, { Fragment, useEffect } from 'react';
import { Text } from 'react-native';
import he from 'he';
import IQuestion from '../interfaces/IQuestion';

type QuestionProps = {
  question: IQuestion,
}

export default function Question({ question }: QuestionProps) {

  useEffect(() => {
    // console.log(question);
    
  }, []);

  return (
    <Fragment>
      <Text>{question.category}</Text>
      <Text>{he.decode(question.question) }</Text>
    </Fragment>
  );
}