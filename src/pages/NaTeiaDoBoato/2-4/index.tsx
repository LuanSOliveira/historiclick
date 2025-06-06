import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page2_4 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 3: As Consequências">
      <p>
        Descobrem que Tiago, junto com dois colegas, espalhou o boato. Todos são
        chamados na direção.
      </p>
      <OptionContainer
        optionTitle={"Fazer uma conversa com todos os envolvidos."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_7"
        text={"Resolver com diálogo e entendimento."}
      />
      <OptionContainer
        optionTitle={"Exigir que todos sejam punidos."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_8"
        text={"Quer que a escola tome medidas firmes."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page2_4;
