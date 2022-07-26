import PropTypes from 'prop-types';
import Filter from '../Filter';
import {
  ButtonDelete,
  Ul,
  List,
  Number,
  TitleStyle,
  ValueStyle,
} from './Contacts.styled';

function Contacts({ contacts, filterValue, onDelete, filterHandler }) {
  const filteredContacts = contacts.filter(i =>
    i.name.toLowerCase().includes(filterValue)
  );
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length && (
        <Filter title={'Find contacts by name'} filter={filterHandler} />
      )}

      <Ul>
        {filteredContacts.length ? (
          filteredContacts.map(item => {
            return (
              <List key={item.id}>
                <span>
                  <TitleStyle>Name:</TitleStyle>
                  <ValueStyle> {item.name}</ValueStyle>
                </span>
                <Number>
                  <TitleStyle>Number:</TitleStyle>
                  <ValueStyle>{item.number}</ValueStyle>
                </Number>
                <ButtonDelete
                  type="button"
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  delete
                </ButtonDelete>
              </List>
            );
          })
        ) : (
          <div>
            {filterValue ? (
              <span>
                No contacts <TitleStyle>found</TitleStyle>
              </span>
            ) : (
              <span>
                No contacts <TitleStyle>yet</TitleStyle>
              </span>
            )}
          </div>
        )}
      </Ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
