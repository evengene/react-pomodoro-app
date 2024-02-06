import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
      },
    },
    label: {
      color: theme.palette.byName.deepBlue,
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 6,
      opacity: 0.4,
      textTransform: 'lowercase',
      [theme.breakpoints.down('sm')]: {
        flex: 1,
      },
    },
    textField: {
      [theme.breakpoints.down('sm')]: {
        flex: 1,
      },
    },
    inputRoot: {
      backgroundColor: theme.palette.byName.lightGrey,
      borderRadius: '10px',
    },
    input: {
      borderRadius: '10px',
      color: theme.palette.byName.deepBlue,
      fontSize: 14,
      fontWeight: 700,
      padding: theme.spacing(1.5, 2),
    },
    inputInner: {
      backgroundColor: theme.palette.byName.lightGrey,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }
));
