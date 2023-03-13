import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import {
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomButton from 'shared/components/Button/Button';
import styles from './list-element.module.scss';

const ListElement = ({ showModal }) => {
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

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ListItem key={id} className={styles.item}>
      <ListItemAvatar>
        <Avatar className={styles.avatar}>
          <AccountCircleRoundedIcon color="primary" className={styles.icon} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} className={styles.text} />
      <Box element="div" className={styles.box}>
        <CustomButton
          type="button"
          onBtnClick={() => showModal({ id, name, number })}
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
    </ListItem>
  ));

  return elements;
};

export default ListElement;

ListElement.propTypes = {
  showModal: PropTypes.func.isRequired,
};
