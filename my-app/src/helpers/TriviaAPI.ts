import IConfig from "../interfaces/IConfig";

export const fetchQuestionsAndAnswers = async (
  token: string,
  configs: IConfig,
): Promise<any> => {
  let result: Response;
  if (configs.type !== '' || configs.difficulty !== '' || configs.category !== '') {
    result = await fetch(`https://opentdb.com/api.php?amount=5&category=${configs.category}&difficulty=${configs.difficulty}&type=${configs.type}&token=${token}`);
  } else {
    result = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  }
  const data = await result.json();
  return data;
};