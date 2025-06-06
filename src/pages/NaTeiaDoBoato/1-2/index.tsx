import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import CharacterSpeech from "../../../shared/components/PageComponents/CharacterSpeech";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page1_2 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 2: Primeiras Ações">
      <p>Ana e Pedro escutam tudo e querem ajudar.</p>
      <CharacterSpeech
        character={"Ana"}
        speech={"Vamos fazer um vídeo mostrando quem você realmente é."}
      />
      <CharacterSpeech
        character={"Pedro"}
        speech={"Ou podemos investigar de onde veio essa postagem."}
      />
      <OptionContainer
        optionTitle={"Fazer um vídeo com apoio dos amigos."}
        route={APP_ROUTES.naTeiaDoBoato["2_3"]}
        lastPass="2_3"
        text={"Apostar na força da verdade."}
      />
      <OptionContainer
        optionTitle={"Investigar quem fez a postagem."}
        route={APP_ROUTES.naTeiaDoBoato["2_4"]}
        lastPass="2_4"
        text={"Buscar provas com o professor de informática."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page1_2;
