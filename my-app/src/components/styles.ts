import styled from 'styled-components/native';

export const GameHeader  = styled.View`
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-height: 20%;
`

export const ImageTriviaHeader = styled.Image`
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const QuestionContainer = styled.View`
  justify-content: center;
  border-radius: 12px;
  text-align: center;
  background-color: #6E96CA;
  align-items: center;
  align-self: center;
  width: 80%;
  height: 50%;
`

export const TextNickName = styled.Text`
  margin: 4px;
  color: white;
`

export const TextScore = styled.Text`
  margin: 4px;
  color: white;
`

export const ImageGravatar = styled.Image`
  width: 30%;
  resizeMode: contain;
`

export const ContainerHeaderData = styled.View`
  flex-direction: row;
`