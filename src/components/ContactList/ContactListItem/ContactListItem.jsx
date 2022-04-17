import PropTypes from 'prop-types';
import {
  ContactListItemBlock,
  ContactItemText,
  Button,
} from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <ContactListItemBlock>
      <ContactItemText>
        {name}: {number}
      </ContactItemText>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ContactListItemBlock>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
