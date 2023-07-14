import Section from 'components/Section/Section';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <Section>
      <p>{message}</p>
    </Section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;