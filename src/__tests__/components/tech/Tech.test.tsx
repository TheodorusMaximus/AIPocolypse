import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tech from '../../../components/Tech';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    useInView: () => [jest.fn(), true],
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe('Tech Component', () => {
  it('renders the tech section with title', () => {
    render(<Tech />);
    expect(screen.getByText(/THE TECHNOLOGY/)).toBeInTheDocument();
  });

  it('renders technology cards', () => {
    render(<Tech />);
    expect(screen.getByText('DECENTRALIZED STORAGE')).toBeInTheDocument();
    expect(screen.getByText('ZERO-KNOWLEDGE PROOFS')).toBeInTheDocument();
  });

  it('opens detail panel when tech card is clicked', () => {
    render(<Tech />);
    
    // Find and click on a tech card
    const techCard = screen.getByText('DECENTRALIZED STORAGE').closest('div');
    fireEvent.click(techCard);
    
    // Check if detail panel content is visible
    expect(screen.getByText('Visual Architecture')).toBeInTheDocument();
    expect(screen.getByText('Implementation Sample')).toBeInTheDocument();
  });
}); 