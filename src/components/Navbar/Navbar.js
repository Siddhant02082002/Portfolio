// import React from 'react'
// import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
// import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
// import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
// import { useTheme } from 'styled-components';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme()
//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to='/'>
//           <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
//             <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
//           </a>
//         </NavLogo>
//         <MobileIcon>
//           <FaBars onClick={() => {
//             setIsOpen(!isOpen)
//           }} />
//         </MobileIcon>
//         <NavItems>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href='#skills'>Skills</NavLink>
//           <NavLink href='#experience'>Experience</NavLink>
//           <NavLink href='#projects'>Projects</NavLink>
//           <NavLink href='#education'>Education</NavLink>
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
//         </ButtonContainer>
//         {
//           isOpen &&
//           <MobileMenu isOpen={isOpen}>
//             <MobileLink href="#about" onClick={() => {
//               setIsOpen(!isOpen)
//             }}>About</MobileLink>
//             <MobileLink href='#skills' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Skills</MobileLink>
//             <MobileLink href='#experience' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Experience</MobileLink>
//             <MobileLink href='#projects' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Projects</MobileLink>
//             <MobileLink href='#education' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Education</MobileLink>
//             <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
//           </MobileMenu>
//         }
//       </NavbarContainer>
//     </Nav>
//   )
// }

// export default Navbar

import './Navbar.css';
import React, { useState } from 'react';
import sc from '../../assets/Untitled (2).png'
export default function Navbar() {
    const [isOpen, setIsopen] = useState(false);
    return (
        <div className="Nav">
            <div className="NavbarContainer">
                <div className='Navlogo'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        <img src={sc} alt='logo'></img>
                        <span>Portfolio</span>
                    </a>
                </div>
                <div className='MobileIcon'>
                    <FaBars onClick={()=>{setIsopen(!isOpen)}}></FaBars>
                </div>
                <ul className='NavItems'>
                    <li>
                        About
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Exprience
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Education
                    </li>
                </ul>
                <div className='buttonContainer'>
                    <a className='gitHubBtn'>Github Profile</a>
                </div>
                {/* {
                    isOpen && <div className='menu'>    
                        <a onClick={()=>setIsopen(false)}>About</a>
                        <a onClick={()=>setIsopen(false)}>Skills</a>
                        <a onClick={()=>setIsopen(false)}>Ecperience</a>
                        <a onClick={()=>setIsopen(false)}>Projects</a>
                        <a onClick={()=>setIsopen(false)}>Education</a>
                    </div>

                } */}
            </div>
        </div>
    )
}