import { Button } from "@mui/material";
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../constants/route";

interface Props {
  children: ReactNode;
  chapter: string;
}

const HistoryPageContainer = ({ children, chapter }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col gap-6 p-5 md:px-20 lg:px-30 xl:px-35 2xl:px-40">
      <div className="flex justify-between p-2">
        <img src="/logo_nome.png" alt="Logotipo aplicativo" className="w-15" />
        <div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(APP_ROUTES.home)}
          >
            Sair do livro
          </Button>
        </div>
      </div>
      <div className="w-full h-full text-lg flex flex-col gap-6">
        <h1 className="text-center text-2xl font-semibold">{chapter}</h1>
        {children}
      </div>
    </div>
  );
};

export default HistoryPageContainer;
