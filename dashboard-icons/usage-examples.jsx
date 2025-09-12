// DASHBOARD ICONS USAGE EXAMPLES
// Source: Lucide React (https://lucide.dev/)

import React from 'react';
import { 
  Users, 
  User,
  Trophy, 
  Settings, 
  Bell,
  Search,
  Filter,
  Edit,
  Trash2,
  Flag,
  Layers,
  Crown,
  HelpCircle,
  Medal,
  Gift,
  Box,
  Ticket,
  Star,
  Zap,
  Activity,
  BookOpen,
  DollarSign,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  Zap as ZapIcon,
  X,
  Clock,
  Target,
  Tag,
  Check,
  Upload,
  Calendar,
  RefreshCw,
  Users2,
  Image as ImageIcon
} from 'lucide-react';

// NAVIGATION TABS EXAMPLES
const NavigationTabs = () => (
  <div className="flex space-x-2">
    <button className="flex items-center px-3 py-2">
      <User className="w-4 h-4 mr-3" />
      Players
    </button>
    <button className="flex items-center px-3 py-2">
      <Users2 className="w-4 h-4 mr-3" />
      Teams
    </button>
    <button className="flex items-center px-3 py-2">
      <Flag className="w-4 h-4 mr-3" />
      Missions
    </button>
    <button className="flex items-center px-3 py-2">
      <Activity className="w-4 h-4 mr-3" />
      Streaks
    </button>
    <button className="flex items-center px-3 py-2">
      <Trophy className="w-4 h-4 mr-3" />
      Rewards
    </button>
    <button className="flex items-center px-3 py-2">
      <Medal className="w-4 h-4 mr-3" />
      Achievements
    </button>
    <button className="flex items-center px-3 py-2">
      <Layers className="w-4 h-4 mr-3" />
      Levels
    </button>
    <button className="flex items-center px-3 py-2">
      <Crown className="w-4 h-4 mr-3" />
      Leaderboards
    </button>
    <button className="flex items-center px-3 py-2">
      <HelpCircle className="w-4 h-4 mr-3" />
      Quizzes
    </button>
    <button className="flex items-center px-3 py-2">
      <ClipboardCheck className="w-4 h-4 mr-3" />
      Surveys
    </button>
    <button className="flex items-center px-3 py-2">
      <Settings className="w-4 h-4 mr-3" />
      Settings
    </button>
  </div>
);

// STATISTICS CARDS EXAMPLES
const StatisticsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Players Registered</h3>
          <p className="text-2xl font-bold text-gray-900">12,847</p>
          <p className="text-sm text-gray-600">8,234 Active</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 text-blue-600">
          <Users className="w-6 h-6" />
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Missions Started</h3>
          <p className="text-2xl font-bold text-gray-900">5,234</p>
          <p className="text-sm text-gray-600">3,456 Completed</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 text-green-600">
          <Flag className="w-6 h-6" />
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Prizes Claimed</h3>
          <p className="text-2xl font-bold text-gray-900">2,847</p>
          <p className="text-sm text-gray-600">Total Claims</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 text-yellow-600">
          <Trophy className="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
);

// ACTION BUTTONS EXAMPLES
const ActionButtons = () => (
  <div className="flex space-x-2">
    <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg">
      <Search className="w-4 h-4 mr-2" />
      Search
    </button>
    <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg">
      <Filter className="w-4 h-4 mr-2" />
      Filter
    </button>
    <button className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg">
      <Edit className="w-4 h-4 mr-2" />
      Edit
    </button>
    <button className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg">
      <Trash2 className="w-4 h-4 mr-2" />
      Delete
    </button>
  </div>
);

// SPECIAL ICONS EXAMPLES
const SpecialIcons = () => (
  <div className="flex space-x-4">
    {/* Zap Icon for special elements */}
    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
      <ZapIcon className="w-4 h-4" />
    </div>
    
    {/* Image Icon for image features */}
    <div className="flex items-center">
      <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
      <span>Image Feature</span>
    </div>
    
    {/* Notification Bell */}
    <button className="relative p-2 text-gray-600 hover:text-gray-900">
      <Bell className="w-5 h-5" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </button>
  </div>
);

// COMMON ICON SIZES AND COLORS
const IconSizes = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-4">
      <Users className="w-4 h-4 text-gray-600" />
      <span>Small (16px)</span>
    </div>
    <div className="flex items-center space-x-4">
      <Users className="w-5 h-5 text-gray-600" />
      <span>Medium (20px)</span>
    </div>
    <div className="flex items-center space-x-4">
      <Users className="w-6 h-6 text-gray-600" />
      <span>Large (24px)</span>
    </div>
  </div>
);

const IconColors = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="flex items-center space-x-2">
      <Users className="w-5 h-5 text-blue-600" />
      <span>Blue (Users)</span>
    </div>
    <div className="flex items-center space-x-2">
      <Flag className="w-5 h-5 text-green-600" />
      <span>Green (Missions)</span>
    </div>
    <div className="flex items-center space-x-2">
      <Trophy className="w-5 h-5 text-yellow-600" />
      <span>Yellow (Prizes)</span>
    </div>
    <div className="flex items-center space-x-2">
      <Medal className="w-5 h-5 text-purple-600" />
      <span>Purple (Achievements)</span>
    </div>
  </div>
);

export {
  NavigationTabs,
  StatisticsCards,
  ActionButtons,
  SpecialIcons,
  IconSizes,
  IconColors
};

