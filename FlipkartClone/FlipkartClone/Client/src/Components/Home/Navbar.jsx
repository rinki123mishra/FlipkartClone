import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../Constants/Data'

const NavbarContainer = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
  text-align: center;
`;

const NavItem = styled(Box)`
  padding: 12px 8px;
  align-items: center;
`;

const Text=styled(Typography)`

font-size: 14px;
font-weight: 600;
font-family: 'inherit';
`

const Navbar = () => {
  return (
    <NavbarContainer>
      {navData.map((item) => (
        <NavItem key={item.title}>
          <img src={item.url} alt={item.title} style={{ width: 64 }} />
          <Text>{item.text}</Text>
        </NavItem>
      ))}
    </NavbarContainer>
  )
}

// import { Box } from '@mui/material'
// import React from 'react'
// import { navData } from '../../Constants/Data'


// const NavbarContainer = styled(Box)`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 20px;
//   background-color: #f5f5f5;
// `;

// const Navbar = () => {
//   return (
//     <Box>
//       {
//         navData.map((item) => (
//           <NavbarContainer key={item.title}>
//             <img src={item.url} alt={item.title} />
//             <p>{item.text}</p>
//           </NavbarContainer>
//         ))
//       }
//     </Box>
//   )
// }

 export default Navbar