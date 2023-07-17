export const reducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };

    default:
      throw Error('Unknown action.');
  }
};
