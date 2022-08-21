// import s from './contactList.module.css';

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
  return <ul>{elements}</ul>;
};

export default ContactList;
