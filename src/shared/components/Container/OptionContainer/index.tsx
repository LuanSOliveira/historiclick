import ChoiceButton from "../../PageComponents/ChoiceButton";

interface Props {
  optionTitle: string;
  route: string;
  text: string;
}

const OptionContainer = ({ optionTitle, route, text }: Props) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-justify">{optionTitle}</p>
      <ChoiceButton route={route} text={text} />
    </div>
  );
};

export default OptionContainer;
