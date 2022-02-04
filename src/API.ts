export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  // 왜 wait을 두번해? => 첫번째는 fetch용, 두번째는 jsoin용
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
