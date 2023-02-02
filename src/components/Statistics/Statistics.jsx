import PropTypes from 'prop-types';

export const Statistics = props => {
  const { good, neutral, bad } = props;
  return (
    <ul>
      {Object.keys(props).map(prop => (
        <li key={prop}>
          {prop}: {props[prop]}
        </li>
      ))}
    </ul>
  );
};
