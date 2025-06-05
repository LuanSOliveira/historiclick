import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  img: string;
  setImageView: (value: boolean) => void;
}

const ImageNavigate = ({ img, setImageView }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <img
        src={img}
        alt="Imagem da história"
        className="border-3 border-paleta-2 h-120"
      />
      <Button
        variant="outlined"
        endIcon={<SendIcon />}
        color="inherit"
        fullWidth
        size="small"
        onClick={() => setImageView(false)}
      >
        CONTINUAR
      </Button>
    </div>
  );
};

export default ImageNavigate;
