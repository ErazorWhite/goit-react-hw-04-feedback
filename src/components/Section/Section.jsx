import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
