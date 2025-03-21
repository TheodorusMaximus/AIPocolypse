import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: string;
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width = '100%',
  height = '1rem',
  rounded = '0.25rem',
  animate = true
}) => {
  return (
    <div
      className={`bg-gray-800 ${animate ? 'animate-pulse' : ''} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: rounded
      }}
      aria-hidden="true"
    ></div>
  );
};

// Common skeleton layouts
export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3,
  className = ''
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array(lines).fill(0).map((_, i) => (
      <Skeleton
        key={i}
        width={i === lines - 1 && lines > 1 ? '80%' : '100%'}
        height="0.8rem"
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-4 border border-gray-800 rounded-sm ${className}`}>
    <Skeleton height="1.5rem" className="mb-4" />
    <TextSkeleton lines={2} className="mb-4" />
    <Skeleton height="8rem" className="mb-2" />
    <div className="flex justify-between">
      <Skeleton width="40%" height="2rem" />
      <Skeleton width="40%" height="2rem" />
    </div>
  </div>
);

export const ProfileSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <Skeleton width={50} height={50} rounded="50%" />
    <div className="flex-1">
      <Skeleton width="60%" height="1rem" className="mb-2" />
      <Skeleton width="40%" height="0.8rem" />
    </div>
  </div>
);

export const TableSkeleton: React.FC<{ 
  rows?: number; 
  columns?: number;
  className?: string;
}> = ({ 
  rows = 5,
  columns = 4,
  className = ''
}) => (
  <div className={`w-full ${className}`}>
    <div className="flex space-x-4 mb-4">
      {Array(columns).fill(0).map((_, i) => (
        <Skeleton key={`header-${i}`} height="2rem" className="flex-1" />
      ))}
    </div>
    
    {Array(rows).fill(0).map((_, rowIndex) => (
      <div key={`row-${rowIndex}`} className="flex space-x-4 mb-3">
        {Array(columns).fill(0).map((_, colIndex) => (
          <Skeleton key={`cell-${rowIndex}-${colIndex}`} height="1.5rem" className="flex-1" />
        ))}
      </div>
    ))}
  </div>
);

// Grid layout skeletons
export const GridSkeleton: React.FC<{
  items?: number;
  columns?: number;
  className?: string;
}> = ({
  items = 6,
  columns = 3,
  className = ''
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-4 ${className}`}>
    {Array(items).fill(0).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

// Resource skeletons
export const ResourceSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-800 rounded-sm w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-800 rounded-sm w-full mb-2"></div>
    <div className="h-4 bg-gray-800 rounded-sm w-5/6 mb-6"></div>
    <div className="h-32 bg-gray-800 rounded-sm"></div>
  </div>
);

// Testimonial skeletons
export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-black bg-opacity-50 border border-gray-800 rounded-sm p-4 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-gray-800 rounded-full mr-3"></div>
      <div>
        <div className="h-4 bg-gray-800 rounded-sm w-32 mb-2"></div>
        <div className="h-3 bg-gray-800 rounded-sm w-24"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-800 rounded-sm w-full"></div>
      <div className="h-4 bg-gray-800 rounded-sm w-full"></div>
      <div className="h-4 bg-gray-800 rounded-sm w-4/5"></div>
    </div>
  </div>
);

export default Skeleton; 