import React, { useContext, useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Question from '../../components/Questions';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';
import Header from '../../components/Header';
import { QuestionContainer } from '../../components/styles';
import Answers from '../../components/Answers';

export default function GameScreen() {
  const { questions: { results } } = useContext(AuthContext);
  const [arrayAnswers, setArrayAnswers] = useState(['']);
  const [index, setIndex] = useState(0);
  const timer = useSelector((state: any) => state.reducerTimer);

  const generateAlternatives = () => {
    const arrAnswers = [results[index].correct_answer, ...results[index].incorrect_answers];
    arrAnswers.sort(()=>Math.random() - Math.random());
    setArrayAnswers(arrAnswers);
  }

  useEffect(() => {
    generateAlternatives();
    console.log('timer', timer);
  }, [])

  if (arrayAnswers.length > 1) {
    return (
      <Container>
        <Header />
        <QuestionContainer>
          <Question question={results[index]}/>
          <Answers answers={arrayAnswers} />
        </QuestionContainer>
        <Button
          title="Next Question"
          onPress={generateAlternatives}
        />
      </Container>
    )
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
}