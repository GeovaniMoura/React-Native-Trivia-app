import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as EmailValidator from 'email-validator';
import md5 from 'crypto-js/md5';
import { InputLogin, ImageTrivia, Container, ContainerInputsLogin, ButtonConfigs, TextConfigs } from './styles';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import { AuthContext } from '../../contexts/auth';
import { setStorage } from '../../services/handleLocalStorage';
import { getToken } from '../../services/tokenApi';
import { fetchQuestionsAndAnswers } from '../../services/TriviaAPI';
import { SetThirtySeconds } from '../../store/ducks/Timer';

export default function Login({ navigation }: any) {
  const { nickName, setNickName, setToken, setQuestions, configs, setScore } = useContext(AuthContext);
  const [inputGravatarEmail, setInputGravatarEmail] = useState('');
  const [bttDisabled, setBttDisabled] = useState(true);
  const dispatch = useDispatch();
  
  const verifyButton = (): void => {
    const minCharacters = 6;
    const validate = ((nickName.length >= minCharacters)
    && EmailValidator.validate(inputGravatarEmail));
    validate ? setBttDisabled(false) : setBttDisabled(true);
  }
  
  useEffect(() => {
    verifyButton();
  }, [inputGravatarEmail, nickName])

  const startGame = async (): Promise<void> => {
    setScore({ score: 0, correctAnswers: 0 });
    const { token } = await getToken();
    setToken(token);
    const thumbnail = `https://www.gravatar.com/avatar/${md5(inputGravatarEmail).toString()}`;
    await setStorage('ranking', {
      name: nickName, score: 0, picture: thumbnail, numberOfCorrectAnswers: 0,
    });
    const data = await fetchQuestionsAndAnswers(token, configs);
    setQuestions(data);
    dispatch(SetThirtySeconds());
    navigation.navigate('GameScreen');
  }

  const redirectToSettings = () => {
    navigation.navigate('Configs');
  }
  
  return (
    <Container>
      <ContainerInputsLogin>
        <ImageTrivia
          source={require('../../images/trivia.png')}
        />
        <InputLogin
          placeholder="Digite seu nickname"
          value={nickName}
          onChangeText={setNickName}
        />
        <InputLogin
          placeholder="Digite seu email"
          value={inputGravatarEmail}
          onChangeText={setInputGravatarEmail}
        />
        <ButtonLogin bttDisabled={bttDisabled} startGame={startGame} />
        <ButtonConfigs onPress={redirectToSettings}>
          <TextConfigs>Settings</TextConfigs>
        </ButtonConfigs>
      </ContainerInputsLogin>
    </Container>
  );
}