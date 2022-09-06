import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2F6DBA;
  align-items: center;
`

export const TitleRanking = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin: 5px;
`

export const ContainerRanking = styled.View`
  border-radius: 12px;
  background-color: #76a2db;
  box-sizing: border-box;
  padding: 10px;
  width: 80%;
  margin-top: 30px;
  height: 60%;
`

export const FlatListRanking = styled.FlatList`
  width: 100%;
  margin: 0;
  padding: 0;
`

export const ContainerItemRanking = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 80%;
  border-radius: 20px;
  margin: 4px;
  border: 1px solid gray;
  background-color: #6E96CA;
  justify-content: space-between;
  padding: 6px;
`

export const ImageGravatar = styled.Image`
  width: 10%;
  height: 100%;
  border-radius: 16px;
`

export const TextRanking = styled.Text`
  color: white;
  margin: 5px;
`

export const ButtonBackToHome = styled.TouchableOpacity`
  width: 70%;
  align-items: center;
  align-self: center;
  margin: 30px;
  border: 1px solid black;
  background-color: #B80065;
  padding: 10px;
`

export const TextBackToHome = styled.Text`
  color: white;
`