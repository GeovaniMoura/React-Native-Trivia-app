export const fetchCategories = async (): Promise<any> => {
  const result = await fetch('https://opentdb.com/api_category.php');
  const data = await result.json();
  return data;
}