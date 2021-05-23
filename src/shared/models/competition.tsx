type Category = {
    name: string;
    competition:Competition[];
  };
  type Competition = {
    questions: Question[];
    users: User[];
    password: string;
    name: string;
  };
  type User = {
    email: string;
    password: string;
    nickname: string;
    point: number;
  };
  type Question = {
    title: string;
    duration: number;
    choices: Choice[];
  };
  type Choice = {
    title: string;
    isCorrectAnswer: boolean;
    point: number;
    isSelected: boolean;
  };