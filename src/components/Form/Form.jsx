import { useState } from 'react';
import { Label, Input, Button } from './Form.styled';
import { Box } from '../Box/Box';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

export function Form ({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();
 
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.log('error');;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit({ name,number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <Box as='form' onSubmit={onSubmitForm} autoComplete='off' display='flex' flexDirection='column' maxWidth={500} mx='auto'>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}   
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={telInputId}>
          Number
          <Input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number} 
            onChange={handleChange}
            id={telInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Box>
    );
  }


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
