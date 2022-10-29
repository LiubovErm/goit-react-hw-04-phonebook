import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styles';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Filter by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};