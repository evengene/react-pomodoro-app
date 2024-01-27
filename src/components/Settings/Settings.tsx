import { useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';


import { ColorSettings } from './ColorSettings/ColorSettings';
import { FontSettings } from './FontSettings/FontSettings';
import { ThemeContext } from '../../context/ThemeContext';
import { TimeSettings } from './TimeSettings';
import { TimerContext } from '../../context/TimerContext';
import { useStyles } from './Settings.styles';

export const Settings = () => {
  const { settingsOpen, setSettingsOpen } = useContext(TimerContext);
  const { classes } = useStyles();

  const handleClose = () => {
    setSettingsOpen(false);
  };


  const { themeFont, switchFont, themeColor, switchColor } = useContext(ThemeContext);

  return (
    <Dialog
      open={settingsOpen}
      onClose={handleClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        Settings
      </DialogTitle>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        className={classes.closeButton}
      >
        <Close/>
      </IconButton>
      <DialogContent dividers classes={{ root: classes.dialogContent }}>
        <Typography variant="h6">Time</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TimeSettings
              title="Pomodoro"
              defaultValue={25}
            />
          </Grid>
          <Grid item xs={4}>
            <TimeSettings
              title="Short Break"
              defaultValue={5}
            />
          </Grid>
          <Grid item xs={4}>
            <TimeSettings
              title="Long Break"
              defaultValue={15}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }}/>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="h6">Font</Typography>
          <FontSettings
            themeFont={themeFont}
            switchFont={switchFont}
            defaultLabel="Aa"
          />
        </Grid>

        <Divider sx={{ my: 3 }}/>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="h6">Color</Typography>
          <ColorSettings
            themeColor={themeColor}
            switchColor={switchColor}
          />
        </Grid>
      </DialogContent>
    </Dialog>
  );
};