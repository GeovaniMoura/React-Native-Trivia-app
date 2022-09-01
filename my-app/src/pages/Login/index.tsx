import React, { useState, useContext } from 'react';
import * as EmailValidator from 'email-validator';
import md5 from 'crypto-js/md5';
import { InputLogin, ImageTrivia, Container, ContainerInputsLogin } from './styles';
import ButtonLogin from '../../components/ButtonLogin';
import { AuthContext } from '../../contexts/auth';
import { setStorage } from '../../services/handleLocalStorage';
import { getToken } from '../../helpers/token';

export default function Login({ navigation }: any) {
  const { nickName, setNickName, setToken } = useContext(AuthContext);
  const [inputGravatarEmail, setInputGravatarEmail] = useState('');
  const [bttDisabled, setBttDisabled] = useState(true);
  
  const verifyButton = (): void => {
    const minCharacters = 6;
    const validate = ((nickName.length >= minCharacters)
      && EmailValidator.validate(inputGravatarEmail));
    if (validate) setBttDisabled(false);
  }

  const startGame = async (): Promise<void> => {
    const { token } = await getToken();
    setToken(token);
    const thumbnail = `https://www.gravatar.com/avatar/${md5(inputGravatarEmail).toString()}`;
    await setStorage('ranking', {
      name: nickName, score: 0, picture: thumbnail, numberOfCorrectAnswers: 0,
    });
    navigation.navigate('GameScreen');
  }
  
  return (
    <Container>
      <ContainerInputsLogin>
        <ImageTrivia
          source={require('../../images/Design.png')}
        />
        <InputLogin
          placeholder="Digite seu nickname"
          value={nickName}
          onChangeText={setNickName}
          onChange={verifyButton}
        />
        <InputLogin
          placeholder="Digite seu email"
          value={inputGravatarEmail}
          onChangeText={setInputGravatarEmail}
          onChange={verifyButton}
        />
        <ButtonLogin bttDisabled={bttDisabled} startGame={startGame} />
      </ContainerInputsLogin>
    </Container>
  );
}