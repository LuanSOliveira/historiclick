import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";
import { useLastPassStore } from "../../../store/NaTeiaDoBoato/lastPassStore";

const Page3 = () => {
  const lastPass = useLastPassStore((state) => state.lastPass);

  function FirstSelectRoute() {
    if (lastPass === "3_1") {
      return APP_ROUTES.naTeiaDoBoato.final_1;
    } else if (lastPass === "3_3") {
      return APP_ROUTES.naTeiaDoBoato.final_3;
    } else if (lastPass === "3_5") {
      return APP_ROUTES.naTeiaDoBoato.final_5;
    } else if (lastPass === "3_7") {
      return APP_ROUTES.naTeiaDoBoato.final_7;
    } else {
      return "";
    }
  }

  function SecondSelectRoute() {
    if (lastPass === "3_2") {
      return APP_ROUTES.naTeiaDoBoato.final_2;
    } else if (lastPass === "3_4") {
      return APP_ROUTES.naTeiaDoBoato.final_4;
    } else if (lastPass === "3_6") {
      return APP_ROUTES.naTeiaDoBoato.final_6;
    } else if (lastPass === "3_8") {
      return APP_ROUTES.naTeiaDoBoato.final_8;
    } else {
      return "";
    }
  }

  return (
    <HistoryPageContainer chapter="Capítulo 4: A Escolha Final">
      <p>
        A direção pergunta aos alunos: “O que podemos fazer para evitar que isso
        se repita?”
      </p>
      <OptionContainer
        optionTitle={"Criar um Comitê de Cultura Digital."}
        route={FirstSelectRoute()}
        text={"Para promover respeito, empatia e responsabilidade online."}
      />
      <OptionContainer
        optionTitle={"Encerrar de vez o app “FalaAí”."}
        route={SecondSelectRoute()}
        text={"A escola entende que sem o app, os boatos acabam."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page3;
