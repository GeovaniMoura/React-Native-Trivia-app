import React, { Component, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
	Container,
	ButtonSelect,
	HeaderModal,
	ModalCategory,
	ModalTitle,
  FlatListCategory,
  ContainerOptions,
  TextOptions,
  TextLabel,
} from './styles';

type ConfigsProps = {
	options: Array<any>;
	onChangeSelect: Function;
	text: string;
  label: string;
};

export default function Select({
	options,
	onChangeSelect,
	text,
  label,
}: ConfigsProps) {
	const [txt, setTxt] = useState(text);
	const [modalVisible, setModalVisible] = useState(false);

  const renderOption = ({ item }: any) => {
    return (
      <ContainerOptions
        onPress={() => {
          onChangeSelect(item);
          setTxt(item.name);
          setModalVisible(false);
        }}
      >
        <TextOptions>{item.name}</TextOptions>
      </ContainerOptions>
    )
  }

	return (
		<Container>
      <TextLabel>{label}</TextLabel>
			<ButtonSelect onPress={() => setModalVisible(true)}>
				<Text>{txt}</Text>
				{/* <Text>+</Text> */}
			</ButtonSelect>
			<ModalCategory
				animationType="slide"
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<HeaderModal>
					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Text>Voltar</Text>
					</TouchableOpacity>
					<ModalTitle>{text}</ModalTitle>
					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Text>Cancelar</Text>
					</TouchableOpacity>
				</HeaderModal>
        <FlatListCategory
          data={options}
          keyExtractor={(item: any) => item.id}
          renderItem={(item: any) => renderOption(item)}
        />
			</ModalCategory>
		</Container>
	);
}
