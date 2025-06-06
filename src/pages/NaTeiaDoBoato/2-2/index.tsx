import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page2_2 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 3: As Consequências">
      <p>
        Tiago grava um vídeo pedindo desculpas e explicando que tudo era
        mentira.
      </p>
      <p>O vídeo viraliza, mas alguns ainda zombam de Samuel.</p>
      <OptionContainer
        optionTitle={"Criar uma campanha na escola contra fake news."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_3"
        text={"Transformar a situação em aprendizado coletivo."}
      />
      <OptionContainer
        optionTitle={"Deixar o assunto morrer."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_4"
        text={"Seguir a vida e não falar mais sobre isso."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page2_2;
