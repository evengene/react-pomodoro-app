import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
  checkIcon: {
    color: '#1E213F',
    fontSize: '1.5rem',
  },
  buttonGroup: {
    borderRadius: '50px',
    gap: '16px',
  },
  root: {
    borderRadius: '50%',
    border: 'none',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    width: '40px',
    height: '40px',
  },
  firstButton: {
    borderRadius: '50% !important',
    background: '#F87070',
    // color: '#1E213F',
    '&:hover': {
      background: '#F87070',
    },
    '&.Mui-selected': {
      background: '#F87070',
      '&:hover': {
        background: '#F87070',
      },
    }
  },
  middleButton: {
    borderRadius: '50% !important',
    width: '40px',
    height: '40px',
    background: '#70F3F8',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#70F3F8',
    },
    '&.Mui-selected': {
      background: '#70F3F8',
      '&:hover': {
        background: '#70F3F8',
      },
    }
  },
  lastButton: {
    borderRadius: '50% !important',
    width: '40px',
    height: '40px',
    background: '#D881F8',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#D881F8',
    },
    '&.Mui-selected': {
      background: '#D881F8',
      '&:hover': {
        background: '#D881F8',
      },
    }
  }
});
