import { useState } from 'react';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClickFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
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

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickFeedBack = feedbackType => {
//     this.setState(prevState => ({
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const stateValues = Object.values(this.state);
//     return stateValues.reduce((acc, curr) => acc + curr, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good * 100) / total) || 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     return (
//       <>
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleClickFeedBack}
//         />
//         {total ? (
//           <Statistics
//             options={this.state}
//             total={total}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </>
//     );
//   }
// }
