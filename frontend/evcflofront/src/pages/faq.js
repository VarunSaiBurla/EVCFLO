import Questions from '../components/Questions';
import Title from '../components/Title';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FAQ = () => 
{
  const navigate = useNavigate();  // Get the useNavigate hook

  const goToSupportPage = () => {
    navigate('/support');  // Navigate to the Support page
  }

  const appStyle = {
    //display: 'flex',
    //flexDirection: 'column',
    //alignItems: 'center',
    margin: '0 auto',
    maxWidth: 'auto',
    padding: '0 2rem',
  };

  const textStyle = {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    margin: '1em 0',
    textAlign: 'left', // Change to "left" alignment
  };

  const ButtonStyle = {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    margin: '1em 0',
    textAlign: 'right', // Change to "right" alignment
  };

  return (
    <div className="app" style={appStyle} id='FAQ'>
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="FAQ" />
      </Box>
      <div className="screenRight" style={textStyle}>
        <Questions />
      </div>
      <div className="screenRight" style={ButtonStyle}>
      <input type="submit" value="Back" className="form-submit" style={textStyle} onClick={goToSupportPage} />
      </div>
    </div>
  );

};

export default FAQ;
