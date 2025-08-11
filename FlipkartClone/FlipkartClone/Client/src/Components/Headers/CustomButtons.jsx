import { Box, Button, styled, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 24px;
  & > * {
    margin-left: 32px;
    font-size: 14px;
    font-weight: 500;
    color: #212121;
  }
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  text-transform: none;
  padding: 4px 30px;
  background: #fff;
  box-shadow: none;
  font-weight: 600;
`;

const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton startIcon={<PermIdentityIcon />}>Login</LoginButton>
      <Box display="flex" alignItems="center">
        <ShoppingCartIcon style={{ marginRight: 6 }} />
        <Typography>Cart</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <StorefrontIcon style={{ marginRight: 6 }} />
        <Typography>Become a Seller</Typography>
      </Box>
      <MoreVertIcon />
    </Wrapper>
  )
}

export default CustomButtons