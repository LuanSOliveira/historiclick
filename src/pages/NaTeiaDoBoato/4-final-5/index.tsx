import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import ChoiceButton from "../../../shared/components/PageComponents/ChoiceButton";
import { APP_ROUTES } from "../../../shared/constants/route";

const Page4_Final_5 = () => {
  return (
    <HistoryPageContainer chapter="A verdade e o apoio coletivo curam e fortalecem">
      <p>Vídeo viraliza, campanha do bem criada, comitê surge.</p>
      <div className="w-full mt-5">
        <ChoiceButton
          route={APP_ROUTES.naTeiaDoBoato.conclusion}
          text="Conclusão"
        />
      </div>
    </HistoryPageContainer>
  );
};

export default Page4_Final_5;
