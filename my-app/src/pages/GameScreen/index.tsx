import React, { useContext, useEffect, useState } from 'react';
import { TextInput, View, Button, FlatList } from 'react-native';
import Question from '../../components/Questions';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';
import Header from '../../components/Header';
import { QuestionContainer } from '../../components/styles';

export default function GameScreen() {
  const { questions: { results } } = useContext(AuthContext);
  const [arrayAnswers, setArrayAnswers] = useState(['']);
  const [index, setIndex] = useState(0);

  const generateAlternatives = () => {
    const arrAnswers = [results[index].correct_answer, ...results[index].incorrect_answers];
    arrAnswers.sort(()=>Math.random() - Math.random());
    setArrayAnswers(arrAnswers);
  }

  return (
    <Container>
      <Header />
      <QuestionContainer>
        <Question question={results[index]}/>
      </QuestionContainer>
      <Button
        title="Next Question"
        onPress={generateAlternatives}
      />
    </Container>
  )
}