import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStyles } from './FontSettings.styles';
import { Fonts } from '../../../context/ThemeContext';

export const FontSettings = (props: any) => {
  const {
    themeFont,
    switchFont,
    defaultLabel,
  } = props;

  const { classes } = useStyles();

  const THEME_FONTS = [
    Fonts.KumbhSans,
    Fonts.RobotoSlab,
    Fonts.SpaceMono,
  ];


  const handleFontChange = (event: any) => {
    switchFont(event.target.value);
  };

  return (
    <ToggleButtonGroup
      value={themeFont}
      exclusive
      color="secondary"
      onChange={handleFontChange}
      aria-label="font"
      classes={{
        root: classes.buttonGroup,
        firstButton: classes.firstButton,
        middleButton: classes.middleButton,
        lastButton: classes.lastButton,
      }}
    >
      {THEME_FONTS.map((font: any, index: number) => {
        return (
          <ToggleButton
            key={index}
            value={font}
            aria-label={font}
            classes={{
              root: classes.root,
              selected: classes.selectedButton,
            }}
          >
            {defaultLabel}
          </ToggleButton>
        )
      }
      )}
    </ToggleButtonGroup>
  );
}