import Section from 'components/Section/Section';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({onLeaveFeedback, options}) => {
 
    return (
      <Section title={'Please leave feedback!'}>
        <ul className={css.feedback__list}>
          {options.map(feedbackType => {
            return (
              <li key={feedbackType}>
                <button
                  className={css.feedback__button}
                  onClick={() => onLeaveFeedback(feedbackType)}
                >
                  {feedbackType}
                </button>
              </li>
            );
          })}
        </ul>
      </Section>
    );
  
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;