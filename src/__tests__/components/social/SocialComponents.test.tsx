import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// Note: testing-library/jest-dom is already imported in jest.setup.js
import type { ReactNode } from 'react';

// Import individual components directly from their modules
import { SectionTitle } from '../../../components/social-refactored/header/SectionTitle';
import { JoinCTA } from '../../../components/social-refactored/header/JoinCTA';
import { ResourcesGrid } from '../../../components/social-refactored/resources/ResourcesGrid';
import { CommunityStats } from '../../../components/social-refactored/stats/CommunityStats';
import { ResistanceTestimonials } from '../../../components/social-refactored/testimonials/ResistanceTestimonials';

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
      span: ({ children, ...props }: MotionComponentProps) => <span data-testid="motion-span" {...props}>{children}</span>,
      button: ({ children, ...props }: MotionComponentProps) => <button data-testid="motion-button" {...props}>{children}</button>,
      path: ({ children, ...props }: MotionComponentProps) => <path data-testid="motion-path" {...props}>{children}</path>,
    },
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
  };
});

describe('Social Refactored Components', () => {
  describe('SectionTitle Component', () => {
    it('renders title and subtitle correctly', () => {
      render(
        <SectionTitle 
          title="TEST TITLE" 
          subtitle="Test subtitle text" 
          isInView={true}
        />
      );
      
      expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
      expect(screen.getByText('Test subtitle text')).toBeInTheDocument();
    });
  });

  describe('JoinCTA Component', () => {
    it('renders title, description and button text correctly', () => {
      render(
        <JoinCTA 
          title="TEST CTA TITLE" 
          description="Test CTA description" 
          buttonText="TEST BUTTON"
        />
      );
      
      expect(screen.getByText('TEST CTA TITLE')).toBeInTheDocument();
      expect(screen.getByText('Test CTA description')).toBeInTheDocument();
      expect(screen.getByText('TEST BUTTON')).toBeInTheDocument();
    });
  });

  describe('ResourcesGrid Component', () => {
    it('renders all resources correctly', () => {
      render(<ResourcesGrid />);
      
      // Check for section title
      expect(screen.getByText('RESISTANCE TOOLKIT')).toBeInTheDocument();
      
      // Check for all resource items
      const resourceTitles = [
        'GUARDIAN', 'OVERSIGHT', 'CODEX',
        'CIPHER', 'NEXUS', 'COMMONS'
      ];
      
      resourceTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });
  });

  describe('CommunityStats Component', () => {
    it('renders stats section and items correctly', () => {
      render(<CommunityStats />);
      
      // Check for section title
      expect(screen.getByText('RESISTANCE BY THE NUMBERS')).toBeInTheDocument();
      
      // Check for stat categories
      const statCategories = [
        'Active Members', 'Surveillance Blocks', 
        'Countries', 'Secure Nodes'
      ];
      
      statCategories.forEach(category => {
        expect(screen.getByText(category)).toBeInTheDocument();
      });
    });
  });

  describe('ResistanceTestimonials Component', () => {
    it('renders testimonial component with navigation', () => {
      render(<ResistanceTestimonials />);
      
      // Check for section title
      expect(screen.getByText('VOICES FROM THE RESISTANCE')).toBeInTheDocument();
      
      // Check that at least one testimonial is visible
      const firstTestimonial = screen.getByText(/M\. Chen/);
      expect(firstTestimonial).toBeInTheDocument();
      
      // Check navigation dots exist
      const navigationDots = screen.getAllByRole('button');
      expect(navigationDots.length).toBe(4); // We have 4 testimonials
    });
    
    it('changes testimonial when navigation is clicked', () => {
      render(<ResistanceTestimonials />);
      
      // First testimonial should be visible
      expect(screen.getByText(/M\. Chen/)).toBeInTheDocument();
      
      // Get navigation dots and click the second one
      const navigationDots = screen.getAllByRole('button');
      fireEvent.click(navigationDots[1]);
      
      // Now the second testimonial should be visible
      expect(screen.getByText(/L\. Kowalski/)).toBeInTheDocument();
    });
  });
}); 