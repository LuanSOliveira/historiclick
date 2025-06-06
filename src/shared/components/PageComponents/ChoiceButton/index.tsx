import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { useLastPassStore } from "../../../../store/NaTeiaDoBoato/lastPassStore";

interface Props {
  route: string;
  text: string;
  lastPass?: string;
}

const ChoiceButton = ({ route, text, lastPass }: Props) => {
  const navigate = useNavigate();
  const setLastPass = useLastPassStore((state) => state.setLastPass);

  function OnClickButton() {
    if (lastPass) {
      setLastPass(lastPass);
    }
    navigate(route);
  }

  return (
    <Button
      variant="outlined"
      endIcon={<SendIcon />}
      color="inherit"
      fullWidth
      size="small"
      onClick={() => OnClickButton()}
    >
      {text}
    </Button>
  );
};

export default ChoiceButton;
