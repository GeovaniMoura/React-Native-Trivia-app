import React, { useEffect } from 'react';
import he from 'he';
import { ContainerAnswer, TextAnswer, ContainerAnswers } from './styles';
import { FlatList, StyleSheet } from 'react-native';

type AnswersProps = {
  answers: {
    correct_answer: string,
    incorrect_answers: string[],
  },
  arrAnswers: string[],
}

export default function ShowAnswers({ answers, arrAnswers }: AnswersProps) {
  const verifyCorrectAnswer = (item: any) => {
    if (item === answers.correct_answer) return styles.correct;
    return styles.incorrect;
  }

  return (
    <ContainerAnswers>
      <FlatList
        data={arrAnswers}
        renderItem={({ item }: any) => (
            <ContainerAnswer style={verifyCorrectAnswer(item)}>
              <TextAnswer>{he.decode(item)}</TextAnswer>
            </ContainerAnswer>
          )}
      />
    </ContainerAnswers>
  )
}

const styles = StyleSheet.create({
  correct: {
    backgroundColor: 'green'
  },
  incorrect: {
    backgroundColor: 'red'
  }
});