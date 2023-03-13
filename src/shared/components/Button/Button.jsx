// import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const CustomButton = ({ type = 'button', children, onBtnClick, startIcon }) => {
  return (
    <Button
      onClick={onBtnClick}
      type={type}
      variant="contained"
      startIcon={startIcon}
      sx={{
        maxWidth: '140px',
        py: 0.5,
        px: 2,
        border: '1px solid',
        borderRadius: 1.5,
        fontSize: 12,
      }}
    >
      {children}
    </Button>
  );
};

// const CustomButton = styled(Button)({
//   minWidth: 120,
//   paddingTop: 2,
//   paddingRight: 18,
//   paddingBottom: 2,
//   paddingLeft: 18,
//   border: "1px solid lightgreen",
//   borderRadius: 6,
//   color: "lightgreen",
//   fontSize: 14,
// })

export default CustomButton;
