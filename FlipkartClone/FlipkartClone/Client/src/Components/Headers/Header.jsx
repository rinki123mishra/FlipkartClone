import React from 'react'
import {AppBar, Toolbar,Box, styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader=styled(AppBar)`
background-Color:#fff;
height:56px;
box-shadow: 0 1px 1px 0 rgba(0,0,0,.16);
`;

const Logo = styled('img')`
  width: 110px;
`;

// const CustomButtonWrapper=styled(Box)`
// margin:0 5% 0 auto;`
const Header = () => {
    const logoURL="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg";
  return (
    <div>
      <StyledHeader>
       <Toolbar style={{ minHeight: 56, padding: '0 24px', display: 'flex', justifyContent: 'space-between' }}>
            {/* <Logo> */}
                <Logo src={logoURL} alt="Logo" />
            {/* </Logo> */}
            <Search/>
            {/* <CustomButtonWrapper> */}
                  <CustomButtons/>
            {/* </CustomButtonWrapper> */}
          
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header;

              