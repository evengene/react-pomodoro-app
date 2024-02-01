import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    wrapper: {
      alignItems: 'center',
      background: theme.palette.byName.deepBlue,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(5),
      justifyContent: 'center',
      minHeight: '100vh',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2.5),
      }
    },
    title: {
      color: theme.palette.byName.bluishGrey,
      fontFamily: 'Kumbh Sans, sans-serif',
      fontSize: 32,
      fontWeight: 700,
      marginBottom: 1.75,
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
      }
    },
    settingsIcon: {
      color: theme.palette.byName.bluishGrey,
      height: 34,
      opacity: 0.5,
      transition: 'opacity 0.3s',
      width: 34,
      '&:hover': {
        opacity: 1,
      },
    }
  }),
);