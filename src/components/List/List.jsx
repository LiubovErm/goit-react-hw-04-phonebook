import PropTypes from 'prop-types';
import { ContactList, ContactItem, Button } from './List.styled';

export const List = ({ contacts, onDeleteContact }) => (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Button type = "button" onClick={() => {onDeleteContact(id)}}>
              Delete
            </Button>
          </ContactItem>
      ))}
    </ContactList>
);

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};