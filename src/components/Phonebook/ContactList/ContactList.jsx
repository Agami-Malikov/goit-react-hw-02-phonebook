import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <>
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => removeContact(id)}>
          remove
        </button>
      </li>
    </>
  ));
  console.log(elements);
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.prototypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.func.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
