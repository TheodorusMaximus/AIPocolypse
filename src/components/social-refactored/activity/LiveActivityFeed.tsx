import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, User, Code, Download, Globe } from 'lucide-react';

interface ActivityItem {
  id: number;
  type: 'join' | 'contribution' | 'deploy' | 'download' | 'verification';
  location: string;
  timestamp: string;
  message: string;
}

const activityData: ActivityItem[] = [
  {
    id: 1,
    type: 'join',
    location: 'Stockholm, Sweden',
    timestamp: '2 min ago',
    message: 'New node joined the resistance network'
  },
  {
    id: 2,
    type: 'contribution',
    location: 'Toronto, Canada',
    timestamp: '5 min ago',
    message: 'Code contribution to Scribe privacy tool'
  },
  {
    id: 3,
    type: 'deploy',
    location: 'Berlin, Germany',
    timestamp: '7 min ago',
    message: 'New Warden instance deployed'
  },
  {
    id: 4,
    type: 'download',
    location: 'Kyoto, Japan',
    timestamp: '12 min ago',
    message: 'Forager downloaded 1,000+ times today'
  },
  {
    id: 5,
    type: 'verification',
    location: 'Rio de Janeiro, Brazil',
    timestamp: '15 min ago',
    message: 'Identity verification completed'
  },
  {
    id: 6,
    type: 'join',
    location: 'Melbourne, Australia',
    timestamp: '18 min ago',
    message: 'New node joined the resistance network'
  }
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'join':
      return <User size={16} className="text-resistance" />;
    case 'contribution':
      return <Code size={16} className="text-yellow-500" />;
    case 'deploy':
      return <Shield size={16} className="text-blue-500" />;
    case 'download':
      return <Download size={16} className="text-purple-500" />;
    case 'verification':
      return <Shield size={16} className="text-green-500" />;
    default:
      return <Globe size={16} className="text-resistance" />;
  }
};

const LiveActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>(activityData.slice(0, 4));
  
  // Simulate new activities coming in periodically
  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate the activities
      setActivities(prev => {
        const newActivities = [...prev];
        // Remove first item and add a random one from the data
        newActivities.shift();
        const randomIndex = Math.floor(Math.random() * activityData.length);
        newActivities.push({
          ...activityData[randomIndex],
          id: Date.now(), // Ensure unique keys
          timestamp: 'Just now'
        });
        return newActivities;
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black bg-opacity-50 border border-concrete rounded-sm h-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-mono font-bold text-resistance flex items-center">
          <Clock size={16} className="mr-2" />
          LIVE ACTIVITY
        </h3>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-resistance mr-2 animate-pulse"></div>
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>
      
      <div className="space-y-4 overflow-hidden">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="p-3 bg-black bg-opacity-30 border-l-2 border-resistance rounded-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                {getIconForType(activity.type)}
              </div>
              <div>
                <p className="text-sm text-white font-medium">{activity.message}</p>
                <div className="flex items-center mt-1 text-xs text-gray-400">
                  <span>{activity.location}</span>
                  <span className="mx-2">•</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-4 pt-4 border-t border-concrete text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="text-xs text-resistance hover:text-white transition-colors flex items-center mx-auto">
          <span>View all activity</span>
          <Clock size={12} className="ml-1" />
        </button>
      </motion.div>
    </div>
  );
};

export default LiveActivityFeed; 