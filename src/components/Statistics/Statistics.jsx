import Section from 'components/Section/Section';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  const optionsEntries = Object.entries(options);
  return (
    <Section title={'Statistics'}>
      <ul className={css.statistics__list}>
        {optionsEntries.map(optionsEntry => {
          return (
            <li key={optionsEntry[0]}>
              {optionsEntry[0]}: {optionsEntry[1]}
            </li>
          );
        })}

        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.number.isRequired
  ).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;