import React from 'react';
import { View, Button } from 'react-native';
import { ButtonPlay } from '../pages/Login/styles';

type ButtonProps = {
  bttDisabled: boolean;
  startGame: Function;
}

export default function ButtonLogin({ bttDisabled, startGame }: ButtonProps) {
  return (
    <View>
      { bttDisabled ? (
        <Button
          title='Play'
          disabled={bttDisabled}
        />
      ) : (
        <ButtonPlay
          title="Play"
          onPress={startGame}
        />
      )}
    </View>
  )
}