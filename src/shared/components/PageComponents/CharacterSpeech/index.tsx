import { RecordVoiceOver } from "@mui/icons-material";

interface Props {
  character: string;
  action?: string;
  speech: string;
}

const CharacterSpeech = ({ character, action, speech }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <div className="flex gap-2">
          <RecordVoiceOver />
          <p className="font-semibold mr-2">{character}: </p>
        </div>
        {action && <p className="text-sm">{action}</p>}
      </div>
      <p className="italic text-justify">"{speech}"</p>
    </div>
  );
};

export default CharacterSpeech;
