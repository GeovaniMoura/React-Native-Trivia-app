import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (name: string, obj: any): Promise<void> => {
  await AsyncStorage.setItem(name, JSON.stringify(obj));
};

export const getStorage = async (name: string): Promise<any> => {
  try {
    const result = await AsyncStorage.getItem(name);
    if (result) return JSON.parse(result);
  } catch (e: any) {
    console.log(e.message);
  }
};