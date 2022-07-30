import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContactForm, Label, ButtonAdd, Input } from './Form.styled';
import { nanoid } from 'nanoid';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const objWithId = { id, number, name };
    onSubmit(objWithId);
    reset();
  };
  const handleInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <ContactForm autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </Label>
      <Label>
        <span>Phone</span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInput}
        />
      </Label>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </ContactForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
