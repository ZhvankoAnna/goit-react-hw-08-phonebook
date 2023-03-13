import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, addContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/selectors';
import { Container, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from './contacts-page.module.scss';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const handleSubmit = data => {
    dispatch(addContact(data));
  };

  return (
    <main>
      <Container maxWidth="lg" className={styles.container}>
        <Typography variant="h3" component="h1">
          Phonebook
        </Typography>
        <ContactForm onFormSubmit={handleSubmit} />
        <Typography variant="h4" component="h2">
          Contacts
        </Typography>
        <Filter />
        {contacts.length !== 0 && <ContactList />}
      </Container>
    </main>
  );
};

export default ContactsPage;
