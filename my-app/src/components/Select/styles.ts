import styled from 'styled-components/native';

export const Container = styled.View`
  min-width: 80%;
  align-items: center;
  margin: 5px;
  padding: 5px;
`

export const TextLabel = styled.Text`
  padding: 12px;
  font-size: 14px;
`

export const ButtonSelect = styled.TouchableOpacity`
  height: 30px;
  border: 1px solid gray;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: rgb(220,220,220);
  width: 80%;
`

export const ModalCategory = styled.Modal`
  /* flex-direction: column; */
`

export const HeaderModal = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  padding: 12px;
  width: 100%;
`

export const ModalTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #555;
`

export const ContainerOptions = styled.TouchableOpacity`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
`

export const TextOptions = styled.Text`
  font-size: 16px;
  color: #555;
`

export const FlatListCategory = styled.FlatList``
