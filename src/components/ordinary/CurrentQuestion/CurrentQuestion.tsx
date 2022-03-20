import React from 'react';
import './CurrentQuestion.sass';
import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../../../core/types/question';
import { AccentText } from '../../ui/AccentText/AccentText';
import { useActions } from '../../../core/hooks/useActions';

interface ICurrentQuestion {
  question: IQuestion;
  current: number;
  length: number;
}

export const CurrentQuestion: React.FC<ICurrentQuestion> = ({ question, current, length }) => {
  const actualAnswers = question.answers.slice(0, 4);
  const listType: string[] = ['A', 'B', 'C', 'D'];
  const navigate = useNavigate();
  const { changeCurrentQuestion } = useActions();

  const answerHandler = (correct: boolean) => {
    if (current === 0 && !correct) {
      changeCurrentQuestion(-1);
      navigate('/result');
    } else if (!correct) {
      changeCurrentQuestion(current - 1);
      navigate('/result');
    } else if (current === length - 1) {
      navigate('/result');
    } else {
      changeCurrentQuestion(current + 1);
    }
  };

  return (
    <div className="current-question">
      <div className="question">
        <AccentText className="text-size-medium">{ question.question }</AccentText>
      </div>

      <div className="answers">
        { actualAnswers.map((answer, index) =>
          <div onClick={ () => answerHandler(answer.correct) } className="answer" key={ answer.answer }>
            <span>{ listType[index] }</span>
            { answer.answer }
          </div>)
        }
      </div>
    </div>
  );
};
