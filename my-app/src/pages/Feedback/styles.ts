import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2F6DBA;
  align-items: center;
`

export const ContainerFeedback = styled.View`
  border-radius: 12px;
  background-color: #6E96CA;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 80%;
  height: 50%;
`

export const ButtonPlayAgain = styled.TouchableOpacity`
  width: 70%;
  align-items: center;
  align-self: center;
  margin: 30px;
  border-radius: 6px;
  background-color: #B80065;
  padding: 10px;
`

export const TextPlayAgain = styled.Text`
  color: white;
`

export const ButtonSeeRanking = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  margin: 50px;
  border-radius: 6px;
  background-color: purple;
  padding: 6px;
`

export const TextSeeRanking = styled.Text`
  color: white;
`