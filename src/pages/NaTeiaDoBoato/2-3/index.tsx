import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import OptionContainer from "../../../shared/components/Container/OptionContainer";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page2_3 = () => {
  return (
    <HistoryPageContainer chapter="Capítulo 3: As Consequências">
      <p>
        O vídeo emociona muita gente na escola. Alunos se solidarizam, mas
        outros acham que Samuel só quer aparecer.
      </p>
      <OptionContainer
        optionTitle={"Criar a campanha “FalaAí do Bem”."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_5"
        text={"Para usar o app para coisas positivas."}
      />
      <OptionContainer
        optionTitle={"Pedir que a escola acabe com o app."}
        route={APP_ROUTES.naTeiaDoBoato["3"]}
        lastPass="3_6"
        text={"Acredita que sem o app os boatos vão acabar."}
      />
      {/* <BackButton /> */}
    </HistoryPageContainer>
  );
};

export default Page2_3;
