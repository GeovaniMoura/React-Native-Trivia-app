interface IToken {
  response_code: number;
  response_message: string;
  token: string;
}

export const getToken = async (): Promise<IToken> => {
  try {
    const result = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await result.json();
    return data;
  } catch (e: any) {
    return e.message;
  }
};