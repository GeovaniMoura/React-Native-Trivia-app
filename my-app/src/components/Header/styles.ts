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

export const TextNickName = styled.Text`
  margin: 4px;
  color: white;
`

export const TextScore = styled.Text`
  margin: 4px;
  color: white;
`

export const ImageGravatar = styled.Image`
  width: 20%;
  resizeMode: contain;
`

export const ContainerHeaderData = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`