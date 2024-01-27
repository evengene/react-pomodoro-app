import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
  buttonGroup: {
    borderRadius: '50px',
    gap: '16px',
  },
  root: {
    borderRadius: '50%',
    border: 'none',
    background: '#EFF1FA',
    color: '#1E213F',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    width: '40px',
    height: '40px',
  },
  selectedButton: {
    background: '#161932',
    color: '#FFF',
    borderRadius: '50% !important',
    border: '#161932',
  },
  firstButton: {
    borderRadius: '50% !important',
    background: '#EFF1FA',
    color: '#1E213F',
    border: '#EFF1FA',
    fontFamily: 'Kumbh Sans, sans-serif',
    '&.Mui-selected': {
      background: '#161932',
      color: '#FFF',
      '&:hover': {
        background: '#161932',
        color: '#FFF'
      },
    }
  },
  middleButton: {
    borderRadius: '50% !important',
    width: '40px',
    height: '40px',
    background: '#EFF1FA',
    color: '#1E213F',
    border: '#EFF1FA',
    transition: 'all 0.3s ease',
    fontFamily: 'Roboto Slab, serif',
    '&.Mui-selected': {
      background: '#161932',
      color: '#FFF',
      '&:hover': {
        background: '#161932',
        color: '#FFF'
      },
    }
  },
  lastButton: {
    borderRadius: '50% !important',
    width: '40px',
    height: '40px',
    background: '#EFF1FA',
    color: '#1E213F',
    border: '#EFF1FA',
    transition: 'all 0.3s ease',
    fontFamily: 'Space Mono, monospace',

    '&.Mui-selected': {
      background: '#161932',
      color: '#FFF',
      '&:hover': {
        background: '#161932',
        color: '#FFF'
      },
    }
  }
});
