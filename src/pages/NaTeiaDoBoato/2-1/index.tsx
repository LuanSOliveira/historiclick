import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page2_1 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 3: As Consequências">
      <p>
        A escola investiga e confirma que Tiago espalhou o boato. Ele é
        suspenso.
      </p>
      <p>Mas o clima na escola fica tenso. Alguns acham que Samuel exagerou.</p>
      <OptionContainer
        optionTitle={"Fazer uma roda de conversa na escola."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_1"
        text={"Para falar sobre fake news e respeito."}
      />
      <OptionContainer
        optionTitle={"Ficar na sua e esperar tudo passar."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_2"
        text={"Samuel prefere não se envolver mais."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page2_1;
