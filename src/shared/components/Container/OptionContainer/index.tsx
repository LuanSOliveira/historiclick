import ChoiceButton from "../../PageComponents/ChoiceButton";

interface Props {
  optionTitle: string;
  route: string;
  text: string;
  lastPass?: string;
}

const OptionContainer = ({ optionTitle, route, text, lastPass }: Props) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-justify">{optionTitle}</p>
      <ChoiceButton route={route} text={text} lastPass={lastPass} />
    </div>
  );
};

export default OptionContainer;
