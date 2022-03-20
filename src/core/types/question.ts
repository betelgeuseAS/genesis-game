export interface IAnswer {
  answer: string;
  correct: boolean;
}

export interface IQuestion {
  id: number;
  cost: number;
  question: string;
  answers: IAnswer[];
}
