import React, { useContext, useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/Questions/Questions';
import { AuthContext } from '../../contexts/auth';
import { ButtonNextQuestion, Container, TextNextQuestion, QuestionContainer } from './styles';
import Header from '../../components/Header/Header';
import Answers from '../../components/Answers/Answers';
import Timer from '../../components/Timer/Timer';
import ShowAnswers from '../../components/ShowAnswers/ShowAnswers';
import { setThirtySeconds } from '../../store/ducks/Timer';

export default function GameScreen() {
  const { questions: { results } } = useContext(AuthContext);
  const [arrayAnswers, setArrayAnswers] = useState(['']);
  const [index, setIndex] = useState(0);
  const [enableTimer, setEnableTimer] = useState(true);
  const dispatch = useDispatch()
  const { timer } = useSelector((state: any) => state.reducerTimer);

  const generateAlternatives = () => {
    const arrAnswers = [results[index].correct_answer, ...results[index].incorrect_answers];
    arrAnswers.sort(()=>Math.random() - Math.random());
    setArrayAnswers(arrAnswers);
  }
  
  const timeOutFunc = () => {
    setEnableTimer(false);
    // showAnswersResults()
    return '1'
  };

  // const showAnswersResults = (answer) => {
  //   this.setState({
  //     borderCorrect: 'border-correct',
  //     borderWrong: 'border-wrong',
  //   });
  //   const { time } = this.props;
  //   time(0);
  //   this.updateScore(answer);
  // }

  // const updateScore = () => {

  // }

  const nextQuestion = () => {
    if (index < 4) {
      setIndex(index + 1);
      generateAlternatives();
      dispatch(setThirtySeconds())
      setEnableTimer(true);
    } else {
      // renderizar botão de encerrar jogo
    }
  }

  useEffect(() => {
    generateAlternatives();
  }, [])

  if (arrayAnswers.length > 1) {
    return (
      <Container>
        <Header />
        <QuestionContainer>
          <Question question={results[index]}/>
          { enableTimer ? (
            <Answers answers={arrayAnswers} />
          ) : (
            <ShowAnswers correctAnswers={results[index].correct_answer} />
          ) }
        </QuestionContainer>
        { timer === 0 && (
          <ButtonNextQuestion
            onPress={nextQuestion}
          >
            <TextNextQuestion>Next Question</TextNextQuestion>
          </ButtonNextQuestion>
        )}
        { enableTimer && ( <Timer timeOutFunc={timeOutFunc} /> )}
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