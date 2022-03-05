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
import Icon from "../Assets/img/icon2.png";

const actions = [
  { icon: <ContrastOutlinedIcon />, name: 'Alto Contraste' },
  { icon: <FormatSizeOutlinedIcon />, name: 'Fonte em +20%' },
  { icon: <HighlightAltOutlinedIcon />, name: 'Highlights' },
  { icon: <RecordVoiceOverOutlinedIcon />, name: 'Conteúdo por voz' },
  { icon: <FormatLineSpacingOutlinedIcon />, name: 'Espaçamento entre linhas' },
];

export interface ISpeedDialProps { }

const SpeedDialComponent: React.FunctionComponent<ISpeedDialProps> = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{position: 'absolute', bottom: 0, right: 16 }}
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