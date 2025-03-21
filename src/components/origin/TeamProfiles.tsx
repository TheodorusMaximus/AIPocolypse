import React from 'react';
import { motion } from 'framer-motion';

interface Profile {
  initials: string;
  role: string;
}

interface TeamProfilesProps {
  profiles: Profile[];
}

export function TeamProfiles({ profiles }: TeamProfilesProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
      {profiles.map((profile) => (
        <motion.div 
          key={profile.initials}
          className="bg-black bg-opacity-50 border border-concrete p-3 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            backgroundColor: "rgba(0, 255, 102, 0.1)",
            borderColor: "#00FF66",
            transition: { duration: 0.2 }
          }}
        >
          <div className="w-10 h-10 bg-resistance bg-opacity-20 rounded-full flex items-center justify-center text-resistance mb-2">
            {profile.initials}
          </div>
          <div className="text-xs text-gray-400 text-center">{profile.role}</div>
        </motion.div>
      ))}
    </div>
  );
}