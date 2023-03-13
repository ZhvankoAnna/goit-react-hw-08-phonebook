import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contacts-operations';
import { List } from '@mui/material';
import ListElement from 'components/ListElement/ListElement';
import ContactForm from 'components/ContactForm/ContactForm';
import Modal from 'shared/components/Modal/Modal';

const ContactList = () => {
  const [showModal, setShowModal] = useState(false);
  const [initialState, setInitialState] = useState({});
  const dispatch = useDispatch();

  const onShowModal = data => {
    setShowModal(true);
    setInitialState({ ...data });
  };

  const onCloseModal = () => {
    setShowModal(false);
    setInitialState({});
  };

  const handleSubmit = data => {
    setShowModal(false);
    dispatch(editContact(data));
  };

  return (
    <List>
      <ListElement showModal={onShowModal} />
      {showModal && (
        <Modal onClose={onCloseModal}>
          <ContactForm
            isShowModal={showModal}
            initialState={initialState}
            onFormSubmit={handleSubmit}
          />
        </Modal>
      )}
    </List>
  );
};

export default ContactList;
