import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getStorage } from '../../services/handleLocalStorage';
import { ButtonBackToHome, Container, ContainerItemRanking, ContainerRanking, FlatListRanking, ImageGravatar, TextBackToHome, TextScore, TitleRanking } from './styles';

export default function Ranking({ navigation }: any) {
  const [ranking, setRanking] = useState([]);
  const backToHome = (): void => {
    navigation.navigate('Login');
  }
  useEffect(() => {
    const funcGetStorage = async (): Promise<void> => {
      const ranking = await getStorage('rankingPlayers');
      setRanking(ranking);
    }
    funcGetStorage();
  }, [])
  return (
    <Container>
      <ContainerRanking>
        <FlatListRanking
          data={ranking}
          ListHeaderComponent={<TitleRanking>Ranking</TitleRanking>}
          renderItem={({ item }: any) => (
            <ContainerItemRanking>
              <ImageGravatar source={{ uri: item.picture }} />
              <Text>{item.name}</Text>
              <TextScore>{item.score}</TextScore>
            </ContainerItemRanking>
          )}
        />
      </ContainerRanking>
      <ButtonBackToHome
        onPress={backToHome}
      >
        <TextBackToHome>Back to home screen</TextBackToHome>
      </ButtonBackToHome>
    </Container>    
  )
}