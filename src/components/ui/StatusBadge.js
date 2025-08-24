import React from 'react';

const StatusBadge = ({ status, size = 'sm', className = '' }) => {
  const getStatusConfig = (status) => {
    const configs = {
      'Active': { color: 'bg-green-100 text-green-800 border-green-200', dot: 'bg-green-400' },
      'Inactive': { color: 'bg-gray-100 text-gray-800 border-gray-200', dot: 'bg-gray-400' },
      'Pending': { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', dot: 'bg-yellow-400' },
      'Completed': { color: 'bg-blue-100 text-blue-800 border-blue-200', dot: 'bg-blue-400' },
      'Draft': { color: 'bg-gray-100 text-gray-800 border-gray-200', dot: 'bg-gray-400' },
      'Limited': { color: 'bg-orange-100 text-orange-800 border-orange-200', dot: 'bg-orange-400' },
      'Upcoming': { color: 'bg-purple-100 text-purple-800 border-purple-200', dot: 'bg-purple-400' },
      'Ended': { color: 'bg-red-100 text-red-800 border-red-200', dot: 'bg-red-400' }
    };
    
    return configs[status] || configs['Inactive'];
  };

  const config = getStatusConfig(status);
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1 text-sm',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 rounded-full border font-medium
      ${config.color} ${sizeClasses[size]} ${className}
    `}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
      {status}
    </span>
  );
};

export default StatusBadge;
