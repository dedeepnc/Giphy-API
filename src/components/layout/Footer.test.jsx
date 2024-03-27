import React from 'react';
import { render, screen } from '@testing-library/react'; // Import render and screen from testing-library/react
import Footer from './Footer';

describe('Footer', () => {
  test('renders copyright text', () => {
    render(<Footer darkMode={false} />);
    const copyrightElement = screen.getByText('© 2024 GIPHYy');
    expect(copyrightElement).toBeInTheDocument();
  });
});
