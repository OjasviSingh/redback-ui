import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerMenu from './HamburgerMenu';

describe('<HamburgerMenu />', () => {
    it('should toggle menu on click', () => {
        render(<HamburgerMenu />);
        const button = screen.getByText('☰');
        fireEvent.click(button);
        expect(screen.getByText('Home')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.queryByText('Home')).toBeNull();
    });
});
