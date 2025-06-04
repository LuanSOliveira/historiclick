import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page1 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 1: O Começo da Tempestade">
      <p className="text-justify">Você é Samuel. O que faz?</p>
      <div className="w-full mt-5 flex flex-col gap-10">
        <OptionContainer
          optionTitle={
            "1.1 Samuel decide enfrentar o agressor e perguntar por que ele fez isso."
          }
          route={APP_ROUTES.naTeiaDoBoato["1_1"]}
          text={"Vai até Tiago, que ele desconfia ser o autor do boato."}
        />
        <OptionContainer
          optionTitle={
            "1.2 Samuel escolhe se abrir com seus amigos sobre o que aconteceu, buscando apoio e conselhos."
          }
          route={APP_ROUTES.naTeiaDoBoato["1_2"]}
          text={"Conversa com Ana e Pedro, seus amigos mais próximos."}
        />
      </div>
    </HistoryPageContainer>
  );
};

export default Page1;
