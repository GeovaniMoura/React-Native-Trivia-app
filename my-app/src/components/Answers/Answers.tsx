import React from 'react';
import he from 'he';
import { ButtonAnswer, ContainerAnswer, ContainerAnswers, TextAnswer } from './styles';
import { FlatList } from 'react-native';

type AnswersProps = {
  answers: string[],
  clickAnswer: Function,
}

export default function Answers({ answers, clickAnswer }: AnswersProps) {
  return (
    <ContainerAnswers>
      <FlatList
        data={answers}
        renderItem={({ item }: any) => (
          <ContainerAnswer key={item}>
            <ButtonAnswer onPress={() => clickAnswer(he.decode(item))}>
              <TextAnswer>{he.decode(item)}</TextAnswer>
            </ButtonAnswer>
          </ContainerAnswer>
        )}
      />
    </ContainerAnswers>
  );
}