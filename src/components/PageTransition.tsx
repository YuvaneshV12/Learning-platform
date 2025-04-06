import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // When route changes, start exit animation and show loading
    setIsExiting(true);
    setShowLoading(true);
    
    // After exit animation completes, reset and start entrance animation
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      
      // Short delay to ensure the transition is visible
      const entranceTimer = setTimeout(() => {
        setIsVisible(true);
        setShowLoading(false);
      }, 50);
      
      return () => clearTimeout(entranceTimer);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [location.pathname]);

  return (
    <>
      {showLoading && <LoadingIndicator />}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : isExiting 
              ? 'opacity-0 translate-y-4' 
              : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
} 