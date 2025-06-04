import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import CharacterSpeech from "../../../shared/components/PageComponents/CharacterSpeech";

const Page1_1 = () => {
  return (
    <HistoryPageContainer chapter="Enfrentando Tiago">
      <p>Samuel respira fundo e chama Tiago para conversar no intervalo.</p>

      <CharacterSpeech
        character={"Samuel"}
        speech={"Foi você que postou aquilo no FalaAí? Por quê?"}
      />
      <CharacterSpeech
        character={"Tiago"}
        action="(rindo, depois sério)"
        speech={"Eu só quis zoar... Não achei que fosse dar nisso tudo."}
      />
      <p>Samuel fica dividido.</p>
      <OptionContainer
        optionTitle={"2.1 Denunciar Tiago para a direção"}
        route={""}
        text={
          "Samuel acredita que precisa de justiça, mesmo que Tiago seja punido."
        }
      />
      <OptionContainer
        optionTitle={
          "2.2 Tentar convencer Tiago a contar a verdade publicamente."
        }
        route={""}
        text={"Samuel quer resolver sem punições severas."}
      />
    </HistoryPageContainer>
  );
};

export default Page1_1;
