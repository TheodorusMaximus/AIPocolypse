// This file is used to test that imports work correctly
// It's not intended to be used in the actual app

// Import the main refactored component
import { SocialRefactored } from './components/Social-refactored';

// Import individual components directly
import { SectionTitle } from './components/social-refactored/header/SectionTitle';
import { JoinCTA } from './components/social-refactored/header/JoinCTA';
import { SectionDivider } from './components/social-refactored/header/SectionDivider';
import { BackgroundElements } from './components/social-refactored/visualizations/BackgroundElements';
import { NetworkVisualization } from './components/social-refactored/visualizations/NetworkVisualization';
import { ResistanceMap } from './components/social-refactored/visualizations/ResistanceMap';
import { MapAndActivityContainer } from './components/social-refactored/visualizations/MapAndActivityContainer';
import { LiveActivityFeed } from './components/social-refactored/activity/LiveActivityFeed';
import { CommunityStats } from './components/social-refactored/stats/CommunityStats';
import { ResistanceTestimonials } from './components/social-refactored/testimonials/ResistanceTestimonials';
import { ResourcesGrid } from './components/social-refactored/resources/ResourcesGrid';

// Verify the imports by creating dummy objects
const imports = {
  mainComponent: SocialRefactored,
  headerComponents: {
    SectionTitle,
    JoinCTA,
    SectionDivider
  },
  visualizationComponents: {
    BackgroundElements,
    NetworkVisualization,
    ResistanceMap,
    MapAndActivityContainer
  },
  activityComponents: {
    LiveActivityFeed
  },
  statsComponents: {
    CommunityStats
  },
  testimonialComponents: {
    ResistanceTestimonials
  },
  resourcesComponents: {
    ResourcesGrid
  }
};

console.log('All components imported successfully');
export default imports; 