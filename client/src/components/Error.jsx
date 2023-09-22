import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-section">
      <SentimentVeryDissatisfiedIcon />
      <p>An error occurred in the server. Please try again later.</p>
      <Button onClick={() => navigate("/login")} variant="contained" disableRipple disableElevation>
        Go to Login Page
      </Button>
    </div>
  );
}

export default Error;
