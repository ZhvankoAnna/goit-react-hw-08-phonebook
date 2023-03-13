import { Modal } from '@mui/material';
import { Button } from '@mui/material';

const BasicModal = ({ onClose, children }) => {
  return (
    <Modal>
      <Button onClick={onClose}>x</Button>
      {children}
    </Modal>
  );
};

export default BasicModal;
