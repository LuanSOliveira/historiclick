import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import ChoiceButton from "../../../shared/components/PageComponents/ChoiceButton";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page4_Final_4 = () => {
  return (
    <HistoryPageContainer chapter="Ignorar o problema impede mudanças maiores">
      <p>Desculpas feitas, assunto morre, app fechado.</p>
      <div className="w-full mt-5">
        <ChoiceButton
          route={APP_ROUTES.naTeiaDoBoato.conclusion}
          text="Conclusão"
        />
      </div>
    </HistoryPageContainer>
  );
};

export default Page4_Final_4;
