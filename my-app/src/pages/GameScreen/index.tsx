import React, { useContext } from 'react';
import { TextInput, View, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { getStorage } from '../../services/handleLocalStorage';

export default function GameScreen() {
  const { nickName } = useContext(AuthContext);
  const testFunc = async (): Promise<void> => {
    const data = await getStorage('ranking');
    console.log(data);
    console.log('nickName', nickName);
  }
  return (
    <View>
      <Button
        title="test"
        onPress={testFunc}
      />
    </View>
  )
}