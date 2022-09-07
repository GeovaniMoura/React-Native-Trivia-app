import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2F6DBA;
  align-items: center;
  justify-content: center;
`

export const ConfigsContainer = styled.View`
  border-radius: 12px;
  background-color: #6E96CA;
  align-self: center;
  padding: 10px;
  width: 80%;
  justify-content: space-around;
  height: 60%;
`

export const TextTitle = styled.Text`
  align-self: center;
  font-size: 18px;
`

export const ButtonSaveSettings = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  width: 40%;
  padding: 5px;
  border-radius: 4px;
  background-color: purple;
`

export const TextSaveSettings = styled.Text`
  color: white;
`