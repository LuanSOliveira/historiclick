import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLastPassStore } from "../../../../store/NaTeiaDoBoato/lastPassStore";
import { ReplyAll } from "@mui/icons-material";
import { APP_ROUTES } from "../../../constants/route";

const BackButton = () => {
  const navigate = useNavigate();
  const lastPass = useLastPassStore((state) => state.lastPass);

  function DefineBackRoute() {
    if (lastPass === "intro") {
      return APP_ROUTES.naTeiaDoBoato.intro;
    } else if (lastPass === "1_1" || lastPass === "1_2") {
      return APP_ROUTES.naTeiaDoBoato[1];
    } else if (lastPass === "2_1" || lastPass === "2_2") {
      return APP_ROUTES.naTeiaDoBoato["1_1"];
    } else if (lastPass === "2_3" || lastPass === "2_4") {
      return APP_ROUTES.naTeiaDoBoato["1_2"];
    } else if (lastPass === "3_1" || lastPass === "3_2") {
      return APP_ROUTES.naTeiaDoBoato["2_1"];
    } else if (lastPass === "3_3" || lastPass === "3_4") {
      return APP_ROUTES.naTeiaDoBoato["2_2"];
    } else if (lastPass === "3_5" || lastPass === "3_6") {
      return APP_ROUTES.naTeiaDoBoato["2_3"];
    } else if (lastPass === "3_7" || lastPass === "3_8") {
      return APP_ROUTES.naTeiaDoBoato["2_4"];
    } else {
      return APP_ROUTES.naTeiaDoBoato[3];
    }
  }

  function OnClickButton() {
    navigate(DefineBackRoute());
  }

  return (
    <Button
      variant="outlined"
      startIcon={<ReplyAll />}
      color="inherit"
      fullWidth
      size="small"
      onClick={() => OnClickButton()}
    >
      VOLTAR
    </Button>
  );
};

export default BackButton;
