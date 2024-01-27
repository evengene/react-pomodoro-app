import { Check } from '@mui/icons-material';
import { IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material';

import { Colors } from '../../../context/ThemeContext';
import { useStyles } from './ColorSettings.styles';

export const ColorSettings = (props: any) => {
  const {
    themeColor,
    switchColor,
  } = props;

  const { classes } = useStyles();

  const THEME_COLORS = [
    Colors.Carrot,
    Colors.Turquoise,
    Colors.NeonPink,
  ];

  const checkIcon =
    <IconButton className={classes.checkIcon}>
      <Check  />
    </IconButton>


  const handleFontChange = (event: any) => {
    switchColor(event.target.value);
  };

  return (
    <ToggleButtonGroup
      value={themeColor}
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
      {THEME_COLORS.map((color: any, index: number) => {
          return (
            <ToggleButton
              key={index}
              value={color}
              aria-label={color}
              classes={{
                root: classes.root,
              }}
            >
              {themeColor === color ? checkIcon : null}
            </ToggleButton>
          )
        }
      )}
    </ToggleButtonGroup>
  );
}