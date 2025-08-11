import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer=styled(Box)`
 background: #f0f5ff;
  width: 400px;
  border-radius: 4px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  box-shadow:none;
  border: 1px solid #e0e0e0;
`;

const InputSearchBase=styled(InputBase)`
   padding-left: 12px;
  width: 100%;
  font-size: 15px;
  color: #212121;
`
const SearchIconWrapper=styled(Box)`
   background: #fff;
  color: #2874f0;
  padding: 6px 8px;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Search = () => {
  return (
    <SearchContainer>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
     <InputSearchBase  placeholder='Search for Products, Brands and more'/>
    </SearchContainer>
  )
}

export default Search
