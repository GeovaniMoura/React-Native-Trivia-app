import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { ButtonSaveSettings, ConfigsContainer, Container, TextSaveSettings, TextTitle } from './styles';
import Select from '../../components/Select';
import { Difficulties, Types } from '../../utils/difficultiesAndType';

export default function Configs({ navigation }: any) {
	const { categories, setConfigs } = useContext(AuthContext);
	const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const saveSettings = (): void => {
    setConfigs({
      type: selectedType,
      difficulty: selectedDifficulty,
      category: selectedCategory,
    });
    navigation.navigate('Login');
  }

	return (
		<Container>
			<ConfigsContainer>
				<TextTitle>Settings</TextTitle>
					<View>
						<View>
							<Select
								options={categories}
								text="Any Category"
								onChangeSelect={(item: any) => setSelectedCategory(item.id)}
								label="Category"
							/>
						</View>
						<View>
							<Select
								options={Difficulties}
								text="Any Difficulty"
                onChangeSelect={(item: any) => setSelectedDifficulty(item.name)}
								label="Difficulty"
							/>
						</View>
            <View>
							<Select
								options={Types}
								text="Any Type"
								onChangeSelect={(item: any) => setSelectedType(item.name)}
								label="Type"
							/>
						</View>
					</View>
				<ButtonSaveSettings onPress={saveSettings}>
          <TextSaveSettings>Save Settings</TextSaveSettings>
        </ButtonSaveSettings>
			</ConfigsContainer>
		</Container>
	);
}
