import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { BsCart3 } from "react-icons/bs";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <>
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <BsCart3 />
      </StyledBadge>
    </IconButton>

    </>
  )
}

export default Header