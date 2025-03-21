import React from 'react';
import { render, screen } from '@testing-library/react';
// Note: testing-library/jest-dom is already imported in jest.setup.js
import { SocialRefactored } from '../../../components/Social-refactored';
import type { ReactNode } from 'react';

// Define interface for motion component props
interface MotionComponentProps {
  children?: ReactNode;
  [key: string]: any; // This is acceptable in test files
}

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    useInView: () => true,
    motion: {
      div: ({ children, ...props }: MotionComponentProps) => <div data-testid="motion-div" {...props}>{children}</div>,
      h3: ({ children, ...props }: MotionComponentProps) => <h3 data-testid="motion-h3" {...props}>{children}</h3>,
      text: ({ children, ...props }: MotionComponentProps) => <text data-testid="motion-text" {...props}>{children}</text>,
      circle: ({ children, ...props }: MotionComponentProps) => <circle data-testid="motion-circle" {...props}>{children}</circle>,
      line: ({ children, ...props }: MotionComponentProps) => <line data-testid="motion-line" {...props}>{children}</line>,
      path: ({ children, ...props }: MotionComponentProps) => <path data-testid="motion-path" {...props}>{children}</path>,
      button: ({ children, ...props }: MotionComponentProps) => <button data-testid="motion-button" {...props}>{children}</button>,
    },
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
  };
});

describe('SocialRefactored Component', () => {
  it('renders the header section with title', () => {
    render(<SocialRefactored />);
    expect(screen.getByText(/THE RESISTANCE NETWORK/)).toBeInTheDocument();
  });

  it('renders the join CTA buttons', () => {
    render(<SocialRefactored />);
    // First CTA button at the top
    const topCTA = screen.getByText('JOIN THE RESISTANCE');
    expect(topCTA).toBeInTheDocument();
    
    // Footer CTA button
    const footerCTA = screen.getByText('READY TO TAKE ACTION?');
    expect(footerCTA).toBeInTheDocument();
  });

  it('renders the community stats section', () => {
    render(<SocialRefactored />);
    expect(screen.getByText('RESISTANCE BY THE NUMBERS')).toBeInTheDocument();
    expect(screen.getByText('Active Members')).toBeInTheDocument();
    expect(screen.getByText('Surveillance Blocks')).toBeInTheDocument();
    expect(screen.getByText('Countries')).toBeInTheDocument();
    expect(screen.getByText('Secure Nodes')).toBeInTheDocument();
  });

  it('renders the network visualization section', () => {
    render(<SocialRefactored />);
    expect(screen.getByText('DECENTRALIZED NETWORK ARCHITECTURE')).toBeInTheDocument();
  });

  it('renders the resources grid', () => {
    render(<SocialRefactored />);
    expect(screen.getByText('RESISTANCE TOOLKIT')).toBeInTheDocument();
    expect(screen.getByText('GUARDIAN')).toBeInTheDocument();
    expect(screen.getByText('OVERSIGHT')).toBeInTheDocument();
    expect(screen.getByText('CODEX')).toBeInTheDocument();
    expect(screen.getByText('CIPHER')).toBeInTheDocument();
    expect(screen.getByText('NEXUS')).toBeInTheDocument();
    expect(screen.getByText('COMMONS')).toBeInTheDocument();
  });

  it('renders the global activity section', () => {
    render(<SocialRefactored />);
    expect(screen.getByText('GLOBAL RESISTANCE ACTIVITY')).toBeInTheDocument();
  });

  it('renders the testimonials section', () => {
    render(<SocialRefactored />);
    expect(screen.getByText('VOICES FROM THE RESISTANCE')).toBeInTheDocument();
  });
}); 