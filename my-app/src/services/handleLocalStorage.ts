import AsyncStorage from "@react-native-async-storage/async-storage";

interface IPlayer {
  name: string;
  score: number;
  picture: string;
  numberOfCorrectAnswers: number;
}

export const setStorage = async (name: string, obj: IPlayer): Promise<void> => {
  await AsyncStorage.setItem(name, JSON.stringify(obj));
};

export const getStorage = async (name: string): Promise<IPlayer> => {
  const result = await AsyncStorage.getItem(name) || ''
  return JSON.parse(result);
};