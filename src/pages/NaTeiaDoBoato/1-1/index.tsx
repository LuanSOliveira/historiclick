import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import CharacterSpeech from "../../../shared/components/PageComponents/CharacterSpeech";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page1_1 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 2: Primeiras Ações">
      <p>Samuel confronta Tiago no intervalo</p>
      <CharacterSpeech
        character={"Tiago"}
        speech={"Foi só uma brincadeira... Não achei que ia dar problema."}
      />
      <CharacterSpeech
        character={"Samuel"}
        speech={"Isso me prejudicou muito. E agora?"}
      />
      <OptionContainer
        optionTitle={"Denunciar Tiago para a direção."}
        route={APP_ROUTES.naTeiaDoBoato["2_1"]}
        lastPass="2_1"
        text={"Samuel quer justiça, mesmo que haja punição."}
      />
      <OptionContainer
        optionTitle={"Pedir que Tiago conte a verdade publicamente."}
        route={APP_ROUTES.naTeiaDoBoato["2_2"]}
        lastPass="2_2"
        text={"Prefere resolver sem punições, apostando no diálogo."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page1_1;
