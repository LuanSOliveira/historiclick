import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import ChoiceButton from "../../../shared/components/PageComponents/ChoiceButton";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page4_Final_6 = () => {
  return (
    <HistoryPageContainer chapter="Cortar o problema não ensina empatia">
      <p>Vídeo gera repercussão, críticas surgem, app fechado.</p>
      <div className="w-full mt-5">
        <ChoiceButton
          route={APP_ROUTES.naTeiaDoBoato.conclusion}
          text="Conclusão"
        />
      </div>
    </HistoryPageContainer>
  );
};

export default Page4_Final_6;
