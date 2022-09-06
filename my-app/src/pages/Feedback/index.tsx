import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../contexts/auth';
import { ButtonPlayAgain, ButtonSeeRanking, Container, ContainerFeedback, TextPlayAgain, TextSeeRanking } from './styles';

export default function Feedback({ navigation }: any) {
  const { score: { score, correctAnswers } } = useContext(AuthContext);
  const THREE = 3;

  const startGame = (): void => {
    navigation.navigate('Login');
  }

  const redirectToRanking = (): void => {
    navigation.navigate('Ranking');
  }

  return (
    <Container>
      <Header />
      <ContainerFeedback>
        <Text>{correctAnswers < THREE ? 'Could be better...' : 'Well Done!'}</Text>
        <Text>Total score: {score}</Text>
        <Text>Total questions: {correctAnswers}</Text>
        <ButtonSeeRanking onPress={redirectToRanking}>
          <TextSeeRanking>See ranking</TextSeeRanking>
        </ButtonSeeRanking>
      </ContainerFeedback>
      <ButtonPlayAgain onPress={startGame}>
        <TextPlayAgain>Play again</TextPlayAgain>
      </ButtonPlayAgain>
    </Container>
  )
}