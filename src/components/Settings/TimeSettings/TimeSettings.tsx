import { TextField, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';


const StyledTextField = styled(TextField)({
  input: {
    padding: '12px 16px',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      margin: 0,
      '-moz-appearance': 'textfield',
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },
});

export const TimeSettings = (props: any) => {
  const {
    title,
    defaultValue,
  } = props;

  return (
    <div>
      <Typography variant="subtitle1">{title}</Typography>
      <StyledTextField
        type="number"
        defaultValue={defaultValue}
        variant="filled"
        InputProps={{
          disableUnderline: true,
          componentsProps: {
            root: {
              style: {
                borderRadius: '10px',
                backgroundColor: '#EFF1FA'
              }
            },
          },
        }}
      />
    </div>
  );
}