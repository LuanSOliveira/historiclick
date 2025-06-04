import { APP_IMAGES } from "../../shared/assets";
import HistoryCard from "../../shared/components/Cards/HistoryCard";
import { APP_ROUTES } from "../../shared/constants/route";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 p-5">
      <div className="w-full flex justify-center">
        <img src="/app_logo.png" alt="Logotipo aplicativo" className="w-70" />
      </div>
      <div className="w-full flex justify-center">
        <img src="/logo_nome.png" alt="Logotipo aplicativo" className="w-35" />
      </div>
      <div className="w-full text-center">
        <h2 className="text-lg font-bold">
          A tecnologia que transforma a leitura
        </h2>
      </div>
      <div className="flex justify-center">
        <HistoryCard
          img={APP_IMAGES.naTeiaDoBoato.capa}
          title={"Na Teia do Boato"}
          route={APP_ROUTES.naTeiaDoBoato.intro}
        />
      </div>
      <div className="py-2 text-center">
        <div className="w-full">
          <p>EMTI Pastor Florêncio Nunes Neto</p>
          <p>Turma 9º ano - A</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
