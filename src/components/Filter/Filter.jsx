import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  const filterInputId = nanoid();
  return (
    <FilterLabel htmlFor={filterInputId}>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
        id={filterInputId}
      ></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
