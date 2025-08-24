// Dashboard Tab Configuration
// This file defines the structure and icons for all dashboard tabs

import { 
  User, 
  Users2, 
  Flag, 
  Activity, 
  Trophy, 
  Medal, 
  Layers, 
  Crown, 
  HelpCircle, 
  ClipboardCheck, 
  Settings,
  Calendar
} from 'lucide-react';

export const dashboardTabs = [
  { id: 'players', name: 'Players', icon: User, description: 'Manage user accounts and profiles' },
  { id: 'teams', name: 'Teams', icon: Users2, description: 'Organize users into collaborative groups' },
  { id: 'missions', name: 'Missions', icon: Flag, description: 'Create and track user challenges' },
  { id: 'streaks', name: 'Streaks', icon: Activity, description: 'Monitor continuous user engagement' },
  { id: 'rewards', name: 'Rewards', icon: Trophy, description: 'Manage prizes and incentives' },
  { id: 'achievements', name: 'Achievements', icon: Medal, description: 'Track user accomplishments' },
  { id: 'levels', name: 'Levels', icon: Layers, description: 'Define user progression tiers' },
  { id: 'leaderboards', name: 'Leaderboards', icon: Crown, description: 'Display competitive rankings' },
  { id: 'quizzes', name: 'Quizzes', icon: HelpCircle, description: 'Create interactive assessments' },
  { id: 'surveys', name: 'Surveys', icon: ClipboardCheck, description: 'Collect user feedback' },
  { id: 'events', name: 'Events', icon: Calendar, description: 'Manage special events and campaigns' },
  { id: 'settings', name: 'Settings', icon: Settings, description: 'Configure system preferences' }
];

// Helper function to get tab by ID
export const getTabById = (id) => dashboardTabs.find(tab => tab.id === id);

// Helper function to get tab icon by ID
export const getTabIcon = (id) => {
  const tab = getTabById(id);
  return tab ? tab.icon : Settings;
};

// Helper function to get tab name by ID
export const getTabName = (id) => {
  const tab = getTabById(id);
  return tab ? tab.name : 'Settings';
};
