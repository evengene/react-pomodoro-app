import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    dialogPaper: {
      padding: '0',
      maxWidth: 540,
      width: '100%',
      borderRadius: 25,
    },
    dialogTitle: {
      padding: '36px 40px',
    },
    dialogContent: {
      padding: '6px 40px 60px',
    },
    closeButton: {
      position: 'absolute',
      right: 38,
      top: 39,
      color: theme.palette.grey[500],
    },
  }
));
