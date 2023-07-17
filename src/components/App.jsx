import { useReducer } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { reducer } from './reducer';

export const App = () => {

  const [feedback, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClickFeedback = feedbackType => {
    dispatch({type: feedbackType})
  };

  const countTotalFeedback = () => {
    const feedbackValues = Object.values(feedback);
    return feedbackValues.reduce((acc, curr) => acc + curr, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return Math.round((good * 100) / total) ?? 0;
  };

  const total = countTotalFeedback();
  return (
    <>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleClickFeedback}
      />
      {total ? (
        <Statistics
          options={feedback}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
