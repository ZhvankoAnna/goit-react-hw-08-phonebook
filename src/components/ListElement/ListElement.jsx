import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact, editContact } from 'redux/contacts/contacts-operations';
import {
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Modal
} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomButton from 'shared/components/Button/Button';
// import BasicModal from 'shared/components/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';

const ListElement = () => {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  const onEditContact = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSubmit = data => {
    dispatch(editContact(data));
  };

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ListItem
      key={id}
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        borderBottom: "1px solid rgba(0,0,0,0.12)"
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ width: 24, height: 24, backgroundColor: 'white' }}>
          <AccountCircleRoundedIcon color="primary" sx={{ fontSize: 24 }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} sx={{display: "block", maxWidth: 240}} />
      <Box element="div" sx={{ display: 'flex', gap: 1 }}>
        <CustomButton
          type="button"
          onBtnClick={onEditContact}
          startIcon={<EditIcon />}
        >
          Edit
        </CustomButton>
        <CustomButton
          type="button"
          onBtnClick={() => onDeleteContact(id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </CustomButton>
      </Box>
      {showModal && (
        // <BasicModal onClose={onEditContact}>
        <Modal open={showModal} onClose={onEditContact}>
          <ContactForm
            initialState={(id, name, number)}
            onFormSubmit={handleSubmit}
          />
          </Modal>
        // </BasicModal>
      )}
    </ListItem>
  ));

  return elements;
};

export default ListElement;
