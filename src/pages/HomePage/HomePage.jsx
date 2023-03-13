import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <main>
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFF59D',
        }}
      >
        <Typography variant="h2" component="h1">
          Create your own PhoneBook!
        </Typography>
      </Container>
    </main>
  );
};

export default HomePage;
