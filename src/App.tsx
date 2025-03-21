import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Tools } from './components/Tools';
import { Origin } from './components/Origin';
import Tech from './components/Tech';
import { Proverbs } from './components/Proverbs';
// import { Social } from './components/Social';
import { SocialRefactored } from './components/Social-refactored';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { NavigationIndicator } from './components/ui/NavigationIndicator';

// Define the sections for navigation
const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'tools', label: 'Tools' },
  { id: 'origin', label: 'Origin' },
  { id: 'tech', label: 'Technology' },
  { id: 'ethos', label: 'Ethos' },
  { id: 'social', label: 'Community' },
  { id: 'faq', label: 'FAQ' },
  { id: 'cta', label: 'Join' }
];

// Error fallback component for sections
class SectionErrorBoundary extends React.Component<
  { id: string; children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { id: string; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(`Error in section ${this.props.id}:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section id={this.props.id} className="min-h-[50vh] bg-black flex flex-col items-center justify-center p-8">
          <div className="border border-red-500 bg-red-500/10 rounded-md p-6 max-w-xl w-full">
            <h2 className="text-2xl font-mono font-bold text-red-500 mb-4">Section Failed to Load</h2>
            <p className="text-gray-300 mb-4">
              There was an error loading this section of the page. You can continue exploring other sections.
            </p>
            <details className="text-xs text-gray-400 mt-4">
              <summary>Technical Details</summary>
              <pre className="mt-2 p-2 bg-black/50 rounded overflow-auto">{this.state.error?.toString()}</pre>
            </details>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px', // Consider element in view when it's 50% visible
      threshold: 0.1
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  
  // Scroll to section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Layout>
      {/* Floating navigation indicator */}
      <NavigationIndicator 
        sections={sections} 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
      />
      
      <SectionErrorBoundary id="hero">
        <Hero />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="tools">
        <Tools />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="origin">
        <Origin />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="tech">
        <Tech />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="ethos">
        <Proverbs />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="social">
        <SocialRefactored />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="faq">
        <FAQ />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary id="cta">
        <CTA />
      </SectionErrorBoundary>
    </Layout>
  );
}

export default App;
