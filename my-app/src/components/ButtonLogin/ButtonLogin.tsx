import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { ButtonPlay, DisabledButtonPlay, TextButton } from './styles';

type ButtonProps = {
  bttDisabled: boolean;
  startGame: Function;
}

export default function ButtonLogin({ bttDisabled, startGame }: ButtonProps) {
  return (
    <View>
      { bttDisabled ? (
        <DisabledButtonPlay
          disabled={bttDisabled}
        >
          <TextButton>Play</TextButton>
        </DisabledButtonPlay>
      ) : (
        <ButtonPlay
          onPress={startGame}
        >
          <TextButton>Play</TextButton>
        </ButtonPlay>
      )}
    </View>
  )
}