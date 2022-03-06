import * as React from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import HighlightAltOutlinedIcon from '@mui/icons-material/HighlightAltOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import FormatLineSpacingOutlinedIcon from '@mui/icons-material/FormatLineSpacingOutlined';
import { useAppThemeContext } from "../Contexts/theme/ThemeContext";

export interface ISpeedDialProps { }

//Aumento de Fonte
let tamanho = 16;
function aumentar(){
  tamanho++;
  document.body.style.fontSize=tamanho+"px";
}

//Espacamento
let espaco = 35;
function espacamento(){
  tamanho++;
  document.body.style.lineHeight=espaco+"px";
}

function readOutLoud() {
  var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
  speech.text = document.body.innerText;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

const SpeedDialComponent: React.FunctionComponent<ISpeedDialProps> = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { toggleTheme } = useAppThemeContext();

  const actions = [
    { icon: <ContrastOutlinedIcon onClick={toggleTheme} />, name: 'Alto Contraste' },
    { icon: <FormatSizeOutlinedIcon onClick={aumentar} />, name: 'Fonte em +20%' },
    { icon: <HighlightAltOutlinedIcon />, name: 'Highlights' },
    { icon: <RecordVoiceOverOutlinedIcon onClick={readOutLoud} />, name: 'Conteúdo por voz' },
    { icon: <FormatLineSpacingOutlinedIcon onClick={espacamento} />, name: 'Espaçamento entre linhas' },
  ];

  return (
    <>
      <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: 'absolute', bottom: 0, right: 16 }}
          icon={<AccessibilityNewOutlinedIcon />}
          direction="left"
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
};
export default SpeedDialComponent; 