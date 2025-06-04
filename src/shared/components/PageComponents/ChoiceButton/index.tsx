import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

interface Props {
  route: string;
  text: string;
}

const ChoiceButton = ({ route, text }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      endIcon={<SendIcon />}
      color="inherit"
      fullWidth
      size="small"
      onClick={() => navigate(route)}
    >
      {text}
    </Button>
  );
};

export default ChoiceButton;
