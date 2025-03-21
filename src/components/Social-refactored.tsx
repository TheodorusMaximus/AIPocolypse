import React, { useRef, lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

// Header Components - these are small and can be imported directly
import { SectionTitle } from './social-refactored/header/SectionTitle';
import { JoinCTA } from './social-refactored/header/JoinCTA';
import { SectionDivider } from './social-refactored/header/SectionDivider';

// Immediately loaded critical components
import { BackgroundElements } from './social-refactored/visualizations/BackgroundElements';
import { CommunityStats } from './social-refactored/stats/CommunityStats';

// Define props for type safety
interface PerformanceProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

// Enhanced loading component with better UX
const SectionLoader = React.memo(() => (
  <div className="py-12 flex justify-center items-center">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-resistance opacity-25 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-resistance border-transparent rounded-full animate-spin"></div>
    </div>
  </div>
));

// Lazy loaded components with dynamic import to reduce initial bundle size
// Using import() with .then() for better chunk naming in webpack
const NetworkVisualization = lazy(() => 
  import(/* webpackChunkName: "network-viz" */ './social-refactored/visualizations/NetworkVisualization'));

const MapAndActivityContainer = lazy(() => 
  import(/* webpackChunkName: "map-activity" */ './social-refactored/visualizations/MapAndActivityContainer'));

const ResistanceTestimonials = lazy(() => 
  import(/* webpackChunkName: "testimonials" */ './social-refactored/testimonials/ResistanceTestimonials'));

const ResourcesGrid = lazy(() => 
  import(/* webpackChunkName: "resources" */ './social-refactored/resources/ResourcesGrid'));

// Memoized section component to prevent unnecessary re-renders
const Section = React.memo(({ 
  children, 
  refProp, 
  className = "my-16 md:my-24 lg:my-36" 
}: { 
  children: React.ReactNode; 
  refProp: React.RefObject<HTMLDivElement>;
  className?: string;
}) => (
  <div ref={refProp} className={className}>
    {children}
  </div>
));

export const SocialRefactored: React.FC = () => {
  // State for device performance detection
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIntersectionObserverSupported, setIsIntersectionObserverSupported] = useState(true);

  // Refs for intersection observer
  const titleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  
  // Optimized viewport detection with appropriate thresholds
  // Only calculate these if IntersectionObserver is supported
  const viewportConfig = useMemo(() => ({
    once: true,
    amount: isMobile ? 0.1 : 0.2 // Reduced threshold for better performance
  }), [isMobile]);
  
  // Initialize all hooks unconditionally as React rules require
  const isTitleInView = useInView(titleRef, viewportConfig);
  const isCtaInView = useInView(ctaRef, viewportConfig);
  const isNetworkInView = useInView(networkRef, viewportConfig);
  const isMapInView = useInView(mapRef, viewportConfig);
  const isStatsInView = useInView(statsRef, viewportConfig);
  const isTestimonialsInView = useInView(testimonialsRef, viewportConfig);
  const isResourcesInView = useInView(resourcesRef, viewportConfig);
  
  // Only use the calculated inView values if intersection observer is supported
  const effectiveIsTitleInView = isIntersectionObserverSupported ? isTitleInView : true;
  const effectiveIsCtaInView = isIntersectionObserverSupported ? isCtaInView : true;
  const effectiveIsNetworkInView = isIntersectionObserverSupported ? isNetworkInView : true;
  const effectiveIsMapInView = isIntersectionObserverSupported ? isMapInView : true;
  const effectiveIsStatsInView = isIntersectionObserverSupported ? isStatsInView : true;
  const effectiveIsTestimonialsInView = isIntersectionObserverSupported ? isTestimonialsInView : true;
  const effectiveIsResourcesInView = isIntersectionObserverSupported ? isResourcesInView : true;
  
  // Detect device capabilities once on mount
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(prefersReducedMotion.matches);
    
    // Check if IntersectionObserver is supported
    setIsIntersectionObserverSupported('IntersectionObserver' in window);
    
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    prefersReducedMotion.addEventListener("change", handleReducedMotionChange);

    // Check for mobile viewport with debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const checkMobile = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      prefersReducedMotion.removeEventListener("change", handleReducedMotionChange);
      window.removeEventListener("resize", checkMobile);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized animation props to prevent recalculation on every render
  const getAnimationProps = useMemo(() => (inView: boolean) => ({
    initial: { 
      opacity: 0,
      y: isReducedMotion ? 0 : 20 
    },
    animate: inView ? { 
      opacity: 1,
      y: 0 
    } : {},
    transition: { 
      duration: isReducedMotion ? 0.2 : 0.5, // Reduced duration
      delay: isReducedMotion ? 0 : 0.1 // Reduced delay
    }
  }), [isReducedMotion]);

  // Prepare shared props
  const performanceProps = useMemo(() => ({
    isMobile,
    reducedMotion: isReducedMotion
  }), [isMobile, isReducedMotion]);

  // Performance optimized component
  return (
    <div className="relative min-h-screen bg-black overflow-hidden py-8 sm:py-12 md:py-16">
      {/* Background Elements - only render if not a low-performance device */}
      <BackgroundElements mobileOptimized={isMobile} />
      
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <div ref={titleRef} className="mb-8 md:mb-12">
            <SectionTitle 
              title="THE RESISTANCE NETWORK" 
              subtitle="Join the global movement for privacy, digital rights, and algorithmic justice."
              isInView={effectiveIsTitleInView}
              reducedMotion={isReducedMotion}
            />
          </div>
          
          <div ref={ctaRef} className="w-full max-w-2xl mx-auto">
            <JoinCTA 
              title="JOIN THE RESISTANCE"
              description="Our decentralized community develops tools and strategies to counter algorithmic oppression, surveillance capitalism, and digital exploitation."
              buttonText="CONNECT NOW"
              isMobile={isMobile}
              reducedMotion={isReducedMotion}
            />
          </div>
        </div>
        
        <SectionDivider />
        
        {/* Stats Section */}
        <Section refProp={statsRef}>
          <CommunityStats
            isMobile={isMobile}
            reducedMotion={isReducedMotion}
            isInView={effectiveIsStatsInView}
          />
        </Section>
        
        <SectionDivider />
        
        {/* Network Visualization - Conditionally render based on viewport */}
        <Section refProp={networkRef}>
          <motion.div
            {...getAnimationProps(effectiveIsNetworkInView)}
            className="text-center mb-6 md:mb-8"
          >
            <h3 className="text-base md:text-lg lg:text-xl text-gray-200 font-mono">DECENTRALIZED NETWORK ARCHITECTURE</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
              Our peer-to-peer infrastructure ensures no single point of failure and resistant to censorship and surveillance.
            </p>
          </motion.div>
          
          {/* Only load component when close to viewport */}
          {(effectiveIsNetworkInView || !isIntersectionObserverSupported) && (
            <Suspense fallback={<SectionLoader />}>
              <NetworkVisualization {...performanceProps} />
            </Suspense>
          )}
        </Section>
        
        <SectionDivider />
        
        {/* Resources Section - Only render when in viewport */}
        <Section refProp={resourcesRef}>
          {(effectiveIsResourcesInView || !isIntersectionObserverSupported) && (
            <Suspense fallback={<SectionLoader />}>
              <ResourcesGrid {...performanceProps} />
            </Suspense>
          )}
        </Section>
        
        <SectionDivider />
        
        {/* Map and Activity Feed - Only render when in viewport */}
        <Section refProp={mapRef}>
          <motion.div
            {...getAnimationProps(effectiveIsMapInView)}
            className="text-center mb-6 md:mb-12"
          >
            <h3 className="text-base md:text-lg lg:text-xl text-gray-200 font-mono">GLOBAL RESISTANCE ACTIVITY</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
              Track real-time activity across our worldwide network of privacy advocates, researchers, and digital rights activists.
            </p>
          </motion.div>
          
          {(effectiveIsMapInView || !isIntersectionObserverSupported) && (
            <Suspense fallback={<SectionLoader />}>
              <MapAndActivityContainer {...performanceProps} />
            </Suspense>
          )}
        </Section>
        
        <SectionDivider />
        
        {/* Testimonials Section - Only render when in viewport */}
        <Section refProp={testimonialsRef}>
          {(effectiveIsTestimonialsInView || !isIntersectionObserverSupported) && (
            <Suspense fallback={<SectionLoader />}>
              <ResistanceTestimonials {...performanceProps} />
            </Suspense>
          )}
        </Section>
        
        {/* Footer CTA */}
        <div className="my-16 md:my-24 lg:my-36 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isReducedMotion ? 0.2 : 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <JoinCTA 
              title="READY TO TAKE ACTION?"
              description="Join thousands of digital rights defenders working to build a more equitable algorithmic future."
              buttonText="JOIN THE RESISTANCE"
              isMobile={isMobile}
              reducedMotion={isReducedMotion}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default React.memo(SocialRefactored); 