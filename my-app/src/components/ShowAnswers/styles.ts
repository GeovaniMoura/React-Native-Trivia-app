import styled from 'styled-components/native';

export const ContainerCorrectAnswer = styled.View`
  min-width: 80%;
  align-items: center;
  margin: 20px;
  border: 1px solid gray;
  background-color: green;
  padding: 5px;
`

export const ContainerIncorrectAnswer = styled.View`
  min-width: 80%;
  align-items: center;
  margin: 20px;
  border: 1px solid gray;
  background-color: red;
  padding: 5px;
`

export const TextAnswer = styled.Text`
  color: #fff;
`