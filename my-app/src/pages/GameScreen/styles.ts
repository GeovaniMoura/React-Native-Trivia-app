import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2F6DBA;
`

export const ButtonNextQuestion = styled.TouchableOpacity`
  width: 70%;
  align-items: center;
  align-self: center;
  margin: 30px;
  border: 1px solid black;
  background-color: #B80065;
  padding: 10px;
`

export const TextNextQuestion = styled.Text`
  color: white;
`

export const QuestionContainer = styled.View`
  border-radius: 12px;
  background-color: #6E96CA;
  align-self: center;
  padding: 10px;
  width: 80%;
  height: 50%;
`