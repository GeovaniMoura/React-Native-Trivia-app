import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, QuestionContainer } from './styles';
import { ResetTimer, SetThirtySeconds } from '../../store/ducks/Timer';
import { setStorage, getStorage } from '../../services/handleLocalStorage';
import Question from '../../components/Questions/Questions';
import Header from '../../components/Header/Header';
import Answers from '../../components/Answers/Answers';
import ButtonNextQuestion from '../../components/ButtonNextQuestion/ButtonNextQuestion';
import Timer from '../../components/Timer/Timer';
import ShowAnswers from '../../components/ShowAnswers/ShowAnswers';

export default function GameScreen({ navigation }: any) {
  const {
    questions: { results },
    score: { score, correctAnswers },
    setScore,
  } = useContext(AuthContext);
  const [arrayAnswers, setArrayAnswers] = useState(['']);
  const [index, setIndex] = useState(0);
  const [enableTimer, setEnableTimer] = useState(true);
  const [isRight, setIsRight] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);
  const dispatch = useDispatch()
  const { timer } = useSelector((state: any) => state.reducerTimer);

  const generateAlternatives = (): void => {
    const arrAnswers = [results[index].correct_answer, ...results[index].incorrect_answers];
    arrAnswers.sort(()=>Math.random() - Math.random());
    setArrayAnswers(arrAnswers);
  }
  
  const timeOutFunc = (): void => {
    setEnableTimer(false);
  };

  const updateScore = async (): Promise<void> => {
    let newScore: number = 0;
    let newCorrectAnswer: number = correctAnswers;
    const EASY = 1;
    const MEDIUM = 2;
    const HARD = 3;
    const DEZ = 10;

    if (results[index].difficulty === 'hard') {
      newScore = score + (DEZ + (timer * HARD));
      newCorrectAnswer += 1;
      setScore({ score: newScore, correctAnswers: newCorrectAnswer});
    } else if (results[index].difficulty === 'medium') {
      newScore = score + (DEZ + (timer * MEDIUM));
      newCorrectAnswer += 1;
      setScore({ score: newScore, correctAnswers: newCorrectAnswer});
    } else if (results[index].difficulty === 'easy') {
      newScore = score + (DEZ + (timer * EASY));
      newCorrectAnswer += 1;
      setScore({ score: newScore, correctAnswers: newCorrectAnswer});
    }

    const { name, picture } = await getStorage('ranking'); 
    
    await setStorage('ranking', {
      name, score: newScore, picture, numberOfCorrectAnswers: newCorrectAnswer,
    });
  }

  const clickAnswer = async (answer: string): Promise<void> => {
    dispatch(ResetTimer());
    setEnableTimer(false);
    if (results[index].correct_answer === answer) {
      setIsRight(true);
      await updateScore();
    } else {
      setIsRight(false);
    }
  }

  const nextQuestion = (): void => {
    if (index < 4) {
      setIndex(index + 1);
      generateAlternatives();
      dispatch(SetThirtySeconds())
      setEnableTimer(true);
    }
  }

  useEffect(() => {
    generateAlternatives();
    if (index === 4) setLastQuestion(true);
  }, [index])

  if (arrayAnswers.length > 1) {
    return (
      <Container>
        <Header />
        <QuestionContainer>
          <Question question={results[index]}/>
          { enableTimer ? (
            <Answers answers={arrayAnswers} clickAnswer={clickAnswer} />
          ) : (
            <ShowAnswers isRight={isRight} correctAnswers={results[index].correct_answer} />
          ) }
        </QuestionContainer>
        { timer === 0 && (
          <ButtonNextQuestion
            navigation={navigation}
            nextQuestion={nextQuestion}
            lastQuestion={lastQuestion}
          />
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