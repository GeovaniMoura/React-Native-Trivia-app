export default interface IQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: [];
    question: string;
    type: string;
}