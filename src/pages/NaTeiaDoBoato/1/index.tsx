import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page1 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 1: O Começo da Tempestade">
      <p className="text-justify">Você é Samuel. O que faz?</p>
      <div className="w-full mt-5 flex flex-col gap-10">
        <OptionContainer
          optionTitle={"Enfrentar quem espalhou o boato."}
          route={APP_ROUTES.naTeiaDoBoato["1_1"]}
          lastPass="1_1"
          text={"Samuel vai até Tiago, de quem ele desconfia."}
        />
        <OptionContainer
          optionTitle={"Pedir ajuda aos amigos."}
          route={APP_ROUTES.naTeiaDoBoato["1_2"]}
          lastPass="1_2"
          text={"Conversa com Ana e Pedro, buscando apoio."}
        />
        {/* <BackButton /> */}
      </div>
    </HistoryPageContainer>
  );
};

export default Page1;
