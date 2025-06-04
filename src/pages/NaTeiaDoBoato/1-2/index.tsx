import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import CharacterSpeech from "../../../shared/components/PageComponents/CharacterSpeech";

const Page1_2 = () => {
  return (
    <HistoryPageContainer chapter="Buscando Apoio">
      <p>
        Samuel conta tudo para Ana e Pedro. Eles ficam indignados e prometem
        ajudar.
      </p>

      <CharacterSpeech
        character={"Ana"}
        speech={
          "Vamos fazer um vídeo com depoimentos mostrando quem você realmente é."
        }
      />
      <CharacterSpeech
        character={"Pedro"}
        speech={
          "Ou podemos tentar rastrear quem postou, dá pra ver os IPs com o professor de informática."
        }
      />
      <OptionContainer
        optionTitle={"2.3 Aceitar fazer um vídeo com apoio dos amigos."}
        route={""}
        text={"Samuel aposta na força da verdade e da imagem positiva."}
      />
      <OptionContainer
        optionTitle={"2.4 Investigar a origem da postagem com ajuda técnica."}
        route={""}
        text={"Samuel quer provas para confrontar quem mentiu."}
      />
    </HistoryPageContainer>
  );
};

export default Page1_2;
