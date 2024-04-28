import { FC, useState } from 'react';
import { StyledHamburgerMenu, MenuIcon, MenuItem } from './HamburgerMenu.style';

type HamburgerMenuProps = {}

const HamburgerMenu: FC<HamburgerMenuProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <StyledHamburgerMenu>
            <MenuIcon onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'} {/* Simple icons for open/close */}
            </MenuIcon>
            {isOpen && (
                <div>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </div>
            )}
        </StyledHamburgerMenu>
    );
};

export default HamburgerMenu;
