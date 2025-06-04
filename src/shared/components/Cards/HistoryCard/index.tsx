import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  route: string;
}

const HistoryCard = ({ img, title, route }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt="Imagem da história"
        className="w-50  border-3 border-paleta-2 "
      />
      <Button
        onClick={() => navigate(route)}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#117372",
          fontWeight: "bold",
          paddingY: 2,
          color: "#e2e2dc",
          "&:hover": {
            backgroundColor: "#117a79",
          },
        }}
      >
        Começar: {title}
      </Button>
    </div>
  );
};

export default HistoryCard;
