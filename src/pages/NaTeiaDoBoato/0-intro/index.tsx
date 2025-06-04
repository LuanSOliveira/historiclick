import HistoryPageContainer from "../../../shared/components/Container/HistoryPageContainer";
import { APP_ROUTES } from "../../../shared/constants/route";
import ChoiceButton from "../../../shared/components/PageComponents/ChoiceButton";

const NaTeiaDoBoatoIntroPage = () => {
  return (
    <HistoryPageContainer chapter="NA TEIA DO BOATO">
      <p className="text-justify indent-8">
        Na Escola Horizonte, a amizade era um valor forte. Os alunos
        compartilhavam tudo: trabalhos, segredos, e até memes engraçados. Mas
        tudo mudou quando um grupo criou o app{" "}
        <span className="font-semibold">"FalaAí"</span> — uma rede interna para
        espalhar notícias da escola de forma "anônima".
      </p>
      <p className="text-justify indent-8">
        No começo era divertido. Até que alguém postou um boato cruel sobre
        Samuel, um aluno tranquilo e querido por muitos.
      </p>
      <div>
        <p className="font-semibold mb-2">A postagem dizia: </p>
        <p className="text-justify italic">
          "Samuel foi pego colando na prova de matemática. Tá explicado por que
          ele sempre tira nota boa!"
        </p>
      </div>
      <p className="text-justify indent-8">
        A notícia se espalhou rápido. Amigos se afastaram, professores começaram
        a tratá-lo com desconfiança, e Samuel, sem entender, viu sua vida virar
        de cabeça para baixo.
      </p>
      <div className="w-full mt-5">
        <ChoiceButton route={APP_ROUTES.naTeiaDoBoato[1]} text="Continuar" />
      </div>
    </HistoryPageContainer>
  );
};

export default NaTeiaDoBoatoIntroPage;
