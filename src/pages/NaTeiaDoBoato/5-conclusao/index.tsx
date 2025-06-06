import { APP_IMAGES } from "../../../shared/assets";
import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import ChoiceButton from "../../../shared/components/PageComponents/ChoiceButton";
import { APP_ROUTES } from "../../../shared/constants/route";

const ConclusionPage = () => {
  return (
    <HistoryPageContainer chapter="CONCLUSÃO">
      <div className="w-full flex justify-center">
        <img
          src={APP_IMAGES.naTeiaDoBoato.conclusion}
          alt="Imagem de Introdução"
          className="border-2 border-paleta-2 h-80 w-100 lg:h-120 lg:w-140"
        />
      </div>
      <p>Fake news causam danos reais.</p>
      <p>A tecnologia pode ser aliada ou vilã — depende de como usamos</p>
      <p>O melhor caminho é sempre o diálogo, empatia e educação digital.</p>
      <div className="w-full mt-5">
        <ChoiceButton route={APP_ROUTES.home} text="Fechar o Livro" />
      </div>
    </HistoryPageContainer>
  );
};

export default ConclusionPage;
