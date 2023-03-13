import { Typography } from '@mui/material';
import CustomContainer from 'shared/components/Container/Container';

const HomePage = () => {
  return (
    <main>
      <CustomContainer>
        <Typography variant="h2" component="h1">
          Create your own PhoneBook!
        </Typography>
      </CustomContainer>
    </main>
  );
};

export default HomePage;
