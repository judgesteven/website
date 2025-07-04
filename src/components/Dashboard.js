import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import AddPrizeModal from './AddPrizeModal';
import AddRaffleModal from './AddRaffleModal';
import AddMysteryBoxModal from './AddMysteryBoxModal';
import AddEventModal from './AddEventModal';
import AddMissionModal from './AddMissionModal';
import AddPlayerModal from './AddPlayerModal';
import AddTeamModal from './AddTeamModal';
import AddStreakModal from './AddStreakModal';
import AddAchievementModal from './AddAchievementModal';
import AddLevelModal from './AddLevelModal';
import AddLeaderboardModal from './AddLeaderboardModal';
import AddQuizModal from './AddQuizModal';
import AddSurveyModal from './AddSurveyModal';
import EditPrizeModal from './EditPrizeModal';
import EditRaffleModal from './EditRaffleModal';
import EditMysteryBoxModal from './EditMysteryBoxModal';
import EditEventModal from './EditEventModal';
import EditMissionModal from './EditMissionModal';

const prizes = [
  { id: 'prize1', name: 'Gift Card $50', description: 'Amazon gift card', value: 50, stock: 25, redeemed: 8, startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active', image: 'https://picsum.photos/400/300?random=1' },
  { id: 'prize2', name: 'Company Swag', description: 'T-shirt and water bottle', value: 15, stock: 100, redeemed: 45, startDate: '2024-02-01', endDate: '2024-11-30', status: 'Active', image: 'https://picsum.photos/400/300?random=2' },
  { id: 'prize3', name: 'Premium Subscription', description: '1 month premium access', value: 29, stock: 50, redeemed: 12, startDate: '2024-03-01', endDate: '2024-10-31', status: 'Active', image: 'https://picsum.photos/400/300?random=3' },
  { id: 'prize4', name: 'Conference Ticket', description: 'Annual conference pass', value: 299, stock: 10, redeemed: 3, startDate: '2024-01-15', endDate: '2024-06-30', status: 'Limited', image: 'https://picsum.photos/400/300?random=4' }
];

const raffles = [
  { id: 'raffle1', name: 'Monthly Grand Prize', description: 'Win a MacBook Pro', credits: 1000, entries: 1247, drawDate: '2024-02-29', startDate: '2024-01-01', endDate: '2024-02-29', status: 'Active', image: 'https://picsum.photos/400/300?random=5' },
  { id: 'raffle2', name: 'Weekly Draw', description: 'Win $100 gift card', credits: 500, entries: 567, drawDate: '2024-02-07', startDate: '2024-01-29', endDate: '2024-02-07', status: 'Active', image: 'https://picsum.photos/400/300?random=6' },
  { id: 'raffle3', name: 'Holiday Special', description: 'Win vacation package', credits: 2000, entries: 234, drawDate: '2024-12-25', startDate: '2024-11-01', endDate: '2024-12-25', status: 'Upcoming', image: 'https://picsum.photos/400/300?random=7' },
  { id: 'raffle4', name: 'Tech Bundle', description: 'Win iPhone + AirPods', credits: 1500, entries: 89, drawDate: '2024-01-15', startDate: '2024-01-01', endDate: '2024-01-15', status: 'Ended', image: 'https://picsum.photos/400/300?random=8' }
];

const mysteryBoxes = [
  { id: 'mystery1', name: 'Common Box', description: 'Basic rewards', credits: 100, available: 1000, redeemed: 753, startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active', image: 'https://picsum.photos/400/300?random=9' },
  { id: 'mystery2', name: 'Rare Box', description: 'Better rewards', credits: 250, available: 500, redeemed: 433, startDate: '2024-02-01', endDate: '2024-11-30', status: 'Active', image: 'https://picsum.photos/400/300?random=10' },
  { id: 'mystery3', name: 'Epic Box', description: 'Premium rewards', credits: 500, available: 200, redeemed: 166, startDate: '2024-03-01', endDate: '2024-10-31', status: 'Active', image: 'https://picsum.photos/400/300?random=11' },
  { id: 'mystery4', name: 'Legendary Box', description: 'Ultimate rewards', credits: 1000, available: 50, redeemed: 11, startDate: '2024-01-15', endDate: '2024-06-30', status: 'Limited', image: 'https://picsum.photos/400/300?random=12' }
];

const missions = [
  { 
    id: 1,
    name: 'Daily Check-in', 
    description: 'Complete daily check-in for 7 days', 
    image: 'https://picsum.photos/400/300?random=13',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    createdOn: '2024-01-01',
    status: 'Active',
    pointsAwarded: 100,
    creditsEarned: 50,
    // Mission Details
    category: 'Engagement',
    tags: ['daily', 'check-in', 'streak'],
    priority: 'Medium',
    // Timers & Limits
    maxCompletions: 1,
    refreshPeriod: 'daily',
    // Objectives
    objectivesEvent: '',
    objectivesQuiz: '',
    objectivesSurvey: '',
    // Rewards
    achievements: '',
    stepsGranted: 0,
    // Requirements
    requirementsCategory: '',
    requirementsTags: [],
    requirementsLevel: '',
    requirementsMission: '',
    requirementsAchievement: ''
  },
  { 
    id: 2,
    name: 'Social Share', 
    description: 'Share content on social media', 
    image: 'https://picsum.photos/400/300?random=14',
    startDate: '2024-02-01',
    endDate: '2024-11-30',
    createdOn: '2024-02-01',
    status: 'Active',
    pointsAwarded: 250,
    creditsEarned: 100,
    // Mission Details
    category: 'Social',
    tags: ['social', 'share', 'marketing'],
    priority: 'High',
    // Timers & Limits
    maxCompletions: 3,
    refreshPeriod: 'weekly',
    // Objectives
    objectivesEvent: '',
    objectivesQuiz: '',
    objectivesSurvey: '',
    // Rewards
    achievements: 'social_butterfly',
    stepsGranted: 0,
    // Requirements
    requirementsCategory: '',
    requirementsTags: [],
    requirementsLevel: '',
    requirementsMission: '',
    requirementsAchievement: ''
  },
  { 
    id: 3,
    name: 'Refer a Friend', 
    description: 'Invite 3 friends to join', 
    image: 'https://picsum.photos/400/300?random=15',
    startDate: '2024-03-01',
    endDate: '2024-10-31',
    createdOn: '2024-03-01',
    status: 'Upcoming',
    pointsAwarded: 500,
    creditsEarned: 200,
    // Mission Details
    category: 'Referral',
    tags: ['referral', 'friends', 'invite'],
    priority: 'High',
    // Timers & Limits
    maxCompletions: 1,
    refreshPeriod: '',
    // Objectives
    objectivesEvent: '',
    objectivesQuiz: '',
    objectivesSurvey: '',
    // Rewards
    achievements: 'referral_king',
    stepsGranted: 0,
    // Requirements
    requirementsCategory: '',
    requirementsTags: [],
    requirementsLevel: '2',
    requirementsMission: '',
    requirementsAchievement: ''
  },
  { 
    id: 4,
    name: 'Complete Profile', 
    description: 'Fill out your complete profile', 
    image: 'https://picsum.photos/400/300?random=16',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    createdOn: '2024-01-15',
    status: 'Completed',
    pointsAwarded: 150,
    creditsEarned: 75,
    // Mission Details
    category: 'Profile',
    tags: ['profile', 'setup', 'onboarding'],
    priority: 'Low',
    // Timers & Limits
    maxCompletions: 1,
    refreshPeriod: '',
    // Objectives
    objectivesEvent: '',
    objectivesQuiz: '',
    objectivesSurvey: '',
    // Rewards
    achievements: 'first_blood',
    stepsGranted: 0,
    // Requirements
    requirementsCategory: '',
    requirementsTags: [],
    requirementsLevel: '1',
    requirementsMission: '',
    requirementsAchievement: ''
  }
];

const levels = [
  { level: 1, name: 'Beginner', description: 'Starting level for all new users', pointsRequired: 0, users: 1247, rewards: 'Welcome Badge', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center' },
  { level: 2, name: 'Explorer', description: 'Begin exploring the platform features', pointsRequired: 100, users: 892, rewards: 'Bronze Medal', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center' },
  { level: 3, name: 'Adventurer', description: 'Experienced user with active participation', pointsRequired: 500, users: 567, rewards: 'Silver Medal', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center' },
  { level: 4, name: 'Champion', description: 'Top performer with significant contributions', pointsRequired: 1000, users: 234, rewards: 'Gold Medal', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center' },
  { level: 5, name: 'Master', description: 'Elite level for the most dedicated users', pointsRequired: 2500, users: 89, rewards: 'Diamond Crown', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center' }
];

const leaderboards = [
  { id: 'leaderboard1', name: 'Weekly Points', period: 'This Week', participants: 1247, image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop&crop=center' },
  { id: 'leaderboard2', name: 'Monthly Activity', period: 'This Month', participants: 892, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center' },
  { id: 'leaderboard3', name: 'Team Competition', period: 'Ongoing', participants: 234, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center' },
  { id: 'leaderboard4', name: 'Mission Completion', period: 'All Time', participants: 567, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center' }
];

const quizzes = [
  { name: 'Product Knowledge', questions: 10, participants: 234, avgScore: 85, status: 'Active' },
  { name: 'Company History', questions: 15, participants: 156, avgScore: 78, status: 'Active' },
  { name: 'Safety Training', questions: 20, participants: 445, avgScore: 92, status: 'Completed' },
  { name: 'Customer Service', questions: 12, participants: 89, avgScore: 81, status: 'Draft' }
];

const surveys = [
  { id: '1', name: 'Employee Satisfaction Survey', description: 'Annual employee satisfaction and engagement survey', questions: 25, participants: 450, completionRate: 78, status: 'active', category: 'HR', type: 'satisfaction', duration: 15, rewards: '50 points + recognition badge' },
  { id: '2', name: 'Product Feedback Survey', description: 'Gather feedback on new product features and user experience', questions: 12, participants: 200, completionRate: 85, status: 'active', category: 'Product', type: 'feedback', duration: 8, rewards: '25 points' },
  { id: '3', name: 'Onboarding Experience Survey', description: 'Evaluate new employee onboarding process effectiveness', questions: 18, participants: 120, completionRate: 92, status: 'completed', category: 'HR', type: 'onboarding', duration: 10, rewards: '30 points' },
  { id: '4', name: 'Customer Service Pulse Check', description: 'Quick pulse check on customer service satisfaction', questions: 8, participants: 300, completionRate: 65, status: 'active', category: 'Customer', type: 'pulse', duration: 5, rewards: '15 points' },
  { id: '5', name: 'Exit Interview Survey', description: 'Comprehensive exit interview for departing employees', questions: 20, participants: 45, completionRate: 88, status: 'active', category: 'HR', type: 'exit', duration: 20, rewards: '100 points' }
];

const achievements = [
  { id: 'achievement1', name: 'First Blood', description: 'Complete your first mission', icon: '🩸', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center', earned: 1247, points: 50, credits: 25 },
  { id: 'achievement2', name: 'Social Butterfly', description: 'Share 10 posts on social media', icon: '🦋', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center', earned: 567, points: 100, credits: 50 },
  { id: 'achievement3', name: 'Team Player', description: 'Join 5 different teams', icon: '👥', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center', earned: 234, points: 200, credits: 100 },
  { id: 'achievement4', name: 'Quiz Master', description: 'Score 100% on 5 quizzes', icon: '🧠', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center', earned: 89, points: 500, credits: 250 },
  { id: 'achievement5', name: 'Level 50', description: 'Reach level 50', icon: '⭐', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center', earned: 12, points: 1000, credits: 500 }
];

const tabs = [
  { id: 'players', name: 'Players', icon: User },
  { id: 'teams', name: 'Teams', icon: Users2 },
  { id: 'missions', name: 'Missions', icon: Flag },
  { id: 'streaks', name: 'Streaks', icon: Activity },
  { id: 'rewards', name: 'Rewards', icon: Trophy },
  { id: 'achievements', name: 'Achievements', icon: Medal },
  { id: 'levels', name: 'Levels', icon: Layers },
  { id: 'leaderboards', name: 'Leaderboards', icon: Crown },
  { id: 'quizzes', name: 'Quizzes', icon: HelpCircle },
  { id: 'surveys', name: 'Surveys', icon: ClipboardCheck },
  { id: 'settings', name: 'Settings', icon: Settings }
];

const teams = [
  { id: 'team1', name: 'Alpha Squad', members: 12, points: 45600, level: 'Gold', avatar: 'AS', image: 'https://picsum.photos/400/300?random=50', description: 'Elite team of top performers' },
  { id: 'team2', name: 'Beta Force', members: 8, points: 38900, level: 'Silver', avatar: 'BF', image: 'https://picsum.photos/400/300?random=51', description: 'Innovation and creativity focused team' },
  { id: 'team3', name: 'Gamma Team', members: 15, points: 52300, level: 'Platinum', avatar: 'GT', image: 'https://picsum.photos/400/300?random=52', description: 'Largest and most diverse team' },
  { id: 'team4', name: 'Delta Unit', members: 6, points: 28700, level: 'Bronze', avatar: 'DU', image: 'https://picsum.photos/400/300?random=53', description: 'Specialized task force' }
];

const streaks = [
  { 
    id: 'daily_checkin', 
    name: 'Daily Check-in Streak', 
    description: 'Complete daily check-ins for consecutive days', 
    image: 'https://picsum.photos/400/300?random=40',
    category: 'Engagement',
    tags: ['daily', 'check-in', 'streak'],
    currentStreak: 7,
    longestStreak: 15,
    targetStreak: 30,
    points: 100,
    credits: 50,
    status: 'Active',
    createdOn: '2024-01-01'
  },
  { 
    id: 'workout_streak', 
    name: 'Workout Streak', 
    description: 'Complete daily workouts for consecutive days', 
    image: 'https://picsum.photos/400/300?random=41',
    category: 'Health',
    tags: ['workout', 'fitness', 'health'],
    currentStreak: 12,
    longestStreak: 12,
    targetStreak: 21,
    points: 200,
    credits: 100,
    status: 'Active',
    createdOn: '2024-01-15'
  },
  { 
    id: 'reading_streak', 
    name: 'Reading Streak', 
    description: 'Read for 30 minutes daily for consecutive days', 
    image: 'https://picsum.photos/400/300?random=42',
    category: 'Learning',
    tags: ['reading', 'learning', 'education'],
    currentStreak: 5,
    longestStreak: 8,
    targetStreak: 14,
    points: 150,
    credits: 75,
    status: 'Active',
    createdOn: '2024-02-01'
  },
  { 
    id: 'meditation_streak', 
    name: 'Meditation Streak', 
    description: 'Practice meditation daily for consecutive days', 
    image: 'https://picsum.photos/400/300?random=43',
    category: 'Wellness',
    tags: ['meditation', 'wellness', 'mindfulness'],
    currentStreak: 3,
    longestStreak: 10,
    targetStreak: 7,
    points: 75,
    credits: 25,
    status: 'Active',
    createdOn: '2024-02-10'
  }
];

const Dashboard = () => {
  // Force rebuild - updated timestamp
  const [activeTab, setActiveTab] = useState('players');
  const [addPrizeOpen, setAddPrizeOpen] = useState(false);
  const [addRaffleOpen, setAddRaffleOpen] = useState(false);
  const [addMysteryBoxOpen, setAddMysteryBoxOpen] = useState(false);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [addMissionOpen, setAddMissionOpen] = useState(false);
  const [addPlayerOpen, setAddPlayerOpen] = useState(false);
  const [addTeamOpen, setAddTeamOpen] = useState(false);
  const [addStreakOpen, setAddStreakOpen] = useState(false);
  const [addAchievementOpen, setAddAchievementOpen] = useState(false);
  const [addSurveyOpen, setAddSurveyOpen] = useState(false);
  const [editPrizeOpen, setEditPrizeOpen] = useState(false);
  const [editRaffleOpen, setEditRaffleOpen] = useState(false);
  const [editMysteryBoxOpen, setEditMysteryBoxOpen] = useState(false);
  const [editEventOpen, setEditEventOpen] = useState(false);
  const [editMissionOpen, setEditMissionOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [guideStep, setGuideStep] = useState(1);
  // Add state for inline mission editing
  const [editingMissionId, setEditingMissionId] = useState(null);
  const [editingMissionData, setEditingMissionData] = useState({});
  
  // Add state for inline event editing
  const [editingEventId, setEditingEventId] = useState(null);
  const [editingEventData, setEditingEventData] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    tags: '',
    restrictCompletions: 'unlimited',
    points: '',
    credits: '',
    achievements: '',
    stepsGranted: ''
  });
  
  // Add state for inline player editing
  const [editingPlayerId, setEditingPlayerId] = useState(null);
  const [editingPlayerData, setEditingPlayerData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    points: '',
    credits: '',
    team: '',
    level: '',
    status: ''
  });
  
  // Add state for inline team editing
  const [editingTeamId, setEditingTeamId] = useState(null);
  const [editingTeamData, setEditingTeamData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    points: '',
    credits: ''
  });
  
  // Add state for inline streak editing
  const [editingStreakId, setEditingStreakId] = useState(null);
  const [editingStreakData, setEditingStreakData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    restrictStreak: 'unlimited',
    priority: 'Medium',
    startDate: '',
    endDate: '',
    refreshPeriod: 'Daily',
    selectedMission: '',
    points: '',
    credits: '',
    achievements: '',
    stepsGranted: ''
  });
  
  // Add state for inline prize editing
  const [editingPrizeId, setEditingPrizeId] = useState(null);
  const [editingPrizeData, setEditingPrizeData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    credits: '',
    redemptionLimit: '',
    unlimitedRedemption: false,
    stockLimit: '',
    unlimitedStock: false,
    startDate: '',
    endDate: '',
    refreshPeriod: '',
    reqCategory: '',
    reqTags: '',
    level: '',
    mission: '',
    achievement: ''
  });
  
  // Add state for inline raffle editing
  const [editingRaffleId, setEditingRaffleId] = useState(null);
  const [editingRaffleData, setEditingRaffleData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    credits: '',
    reqCategory: '',
    reqTags: '',
    level: '',
    mission: '',
    achievement: ''
  });

  // Add state for inline mystery box editing
  const [editingMysteryBoxId, setEditingMysteryBoxId] = useState(null);
  const [editingMysteryBoxData, setEditingMysteryBoxData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    credits: '',
    reqCategory: '',
    reqTags: '',
    reqLevel: '',
    reqMission: '',
    reqAchievement: ''
  });

  // Add state for inline achievement editing
  const [editingAchievementId, setEditingAchievementId] = useState(null);
  const [editingAchievementData, setEditingAchievementData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    stepsRequired: '',
    // Rewards
    points: '',
    credits: '',
    achievements: '',
    stepsGranted: '',
    // Requirements
    requirementsCategory: '',
    requirementsTags: '',
    requirementsLevel: '',
    requirementsMission: '',
    requirementsAchievement: ''
  });
  const [typingProgress, setTypingProgress] = useState({
    id: false,
    name: false,
    description: false,
    category: false,
    tags: false,
    restrictCompletions: false,
    points: false,
    credits: false,
    achievements: false,
    stepsGranted: false
  });
  const [missionTypingProgress, setMissionTypingProgress] = useState({
    id: false,
    name: false,
    description: false,
    image: false,
    category: false,
    tags: false,
    restrictCompletions: false,
    priority: false,
    startDate: false,
    endDate: false,
    refreshPeriod: false,
    objectivesEvent: false,
    objectivesQuiz: false,
    objectivesSurvey: false,
    points: false,
    credits: false,
    achievements: false,
    stepsGranted: false,
    requirementsCategory: false,
    requirementsTags: false,
    requirementsLevel: false,
    requirementsMission: false,
    requirementsAchievement: false
  });
  const [currentTypingField, setCurrentTypingField] = useState(null);
  const [currentMissionTypingField, setCurrentMissionTypingField] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [missionTypedText, setMissionTypedText] = useState('');
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [selectedRaffle, setSelectedRaffle] = useState(null);
  const [selectedMysteryBox, setSelectedMysteryBox] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const [prizesList, setPrizesList] = useState(prizes);
  const [rafflesList, setRafflesList] = useState(raffles);
  const [mysteryBoxesList, setMysteryBoxesList] = useState(mysteryBoxes);
  const [missionsList, setMissionsList] = useState(missions);
  const [streaksList, setStreaksList] = useState(streaks);
  const [achievementsList, setAchievementsList] = useState(achievements);
  // Add state for levels list and inline editing
  const [levelsList, setLevelsList] = useState(levels);
  const [editingLevelId, setEditingLevelId] = useState(null);
  const [editingLevelData, setEditingLevelData] = useState({
    level: '',
    name: '',
    pointsRequired: '',
    users: '',
    rewards: ''
  });
  const [addLevelOpen, setAddLevelOpen] = useState(false);
  const [addLeaderboardOpen, setAddLeaderboardOpen] = useState(false);
  const [addQuizOpen, setAddQuizOpen] = useState(false);
  // Add state for leaderboards list and inline editing
  const [leaderboardsList, setLeaderboardsList] = useState(leaderboards);
  // Add state for quizzes list and inline editing
  const [quizzesList, setQuizzesList] = useState(quizzes);
  const [surveysList, setSurveysList] = useState(surveys);
  const [editingQuizId, setEditingQuizId] = useState(null);
  const [editingQuizData, setEditingQuizData] = useState({
    name: '',
    description: '',
    questions: '',
    participants: '',
    status: '',
    category: '',
    timeLimit: '',
    passingScore: ''
  });

  // Add state for surveys inline editing
  const [editingSurveyId, setEditingSurveyId] = useState(null);
  const [editingSurveyData, setEditingSurveyData] = useState({
    name: '',
    description: '',
    participants: '',
    status: '',
    category: '',
    duration: '',
    rewards: ''
  });
  const [editingLeaderboardId, setEditingLeaderboardId] = useState(null);
  const [editingLeaderboardData, setEditingLeaderboardData] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    sortBy: 'points',
    leaderboardUnits: 'points',
    startDate: '',
    endDate: '',
    refreshPeriod: 'none',
    missionSpecific: '',
    requirementsCategory: '',
    requirementsTags: '',
    selectLevel: '',
    selectMission: '',
    selectAchievement: '',
    period: '',
    participants: ''
  });
  const [eventsList, setEventsList] = useState([
    { 
      id: 'EVT001', 
      name: 'Product Launch', 
      description: 'Launch event for new product', 
      image: 'https://picsum.photos/400/300?random=20',
      category: 'Marketing',
      tags: ['launch', 'product', 'marketing'],
      restricted: 'unlimited',
      points: 100,
      credits: 50,
      achievements: 2,
      createdOn: '2024-02-15' 
    },
    { 
      id: 'EVT002', 
      name: 'Holiday Campaign', 
      description: 'Special holiday promotion', 
      image: 'https://picsum.photos/400/300?random=21',
      category: 'Sales',
      tags: ['holiday', 'promotion', 'sales'],
      restricted: 100,
      points: 75,
      credits: 25,
      achievements: 1,
      createdOn: '2024-12-01' 
    },
    { 
      id: 'EVT003', 
      name: 'Team Building', 
      description: 'Team building activities', 
      image: 'https://picsum.photos/400/300?random=22',
      category: 'HR',
      tags: ['team', 'building', 'hr'],
      restricted: 50,
      points: 50,
      credits: 20,
      achievements: 1,
      createdOn: '2024-03-01' 
    }
  ]);
  
  // Pagination states
  const [prizesPage, setPrizesPage] = useState(0);
  const [rafflesPage, setRafflesPage] = useState(0);
  const [mysteryBoxesPage, setMysteryBoxesPage] = useState(0);
  const [eventsPage, setEventsPage] = useState(0);
  const [missionsPage, setMissionsPage] = useState(0);
  const [streaksPage, setStreaksPage] = useState(0);
  const itemsPerPage = 5;

  const stats = [
    { title: 'Players Registered', value: '12,847', subtitle: '8,234 Active', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Missions Started', value: '5,234', subtitle: '3,456 Completed', change: '+18%', icon: Flag, color: 'text-green-600' },
    { title: 'Prizes Claimed', value: '2,847', subtitle: 'Total Claims', change: '+25%', icon: Trophy, color: 'text-yellow-600' },
    { title: 'Achievements Unlocked', value: '8,456', subtitle: '6,234 Granted', change: '+15%', icon: Medal, color: 'text-purple-600' },
    { title: 'Level-Ups', value: '1,234', subtitle: 'Total Promotions', change: '+22%', icon: Layers, color: 'text-indigo-600' },
    { title: 'Points Awarded', value: '2.4M', subtitle: 'Total Points', change: '+30%', icon: Zap, color: 'text-orange-600' },
    { title: 'Credits Earned', value: '1.8M', subtitle: 'Total Credits', change: '+28%', icon: DollarSign, color: 'text-emerald-600' },
    { title: 'Streaks Started', value: '3,456', subtitle: '2,123 Active', change: '+8%', icon: Activity, color: 'text-red-600' },
    { title: 'Quizzes Completed', value: '4,567', subtitle: 'Total Quizzes', change: '+12%', icon: BookOpen, color: 'text-teal-600' },
    { title: 'Surveys Completed', value: '2,345', subtitle: 'Total Surveys', change: '+15%', icon: ClipboardCheck, color: 'text-cyan-600' }
  ];

  const topUsers = [
    { id: 1, name: 'John Doe', points: 15420, level: 15, avatar: 'JD', image: 'https://picsum.photos/400/300?random=30', description: 'Senior Developer', category: 'Engineering', tags: 'developer,senior,tech', credits: 500, team: 'Alpha Squad', status: 'Active' },
    { id: 2, name: 'Jane Smith', points: 12850, level: 12, avatar: 'JS', image: 'https://picsum.photos/400/300?random=31', description: 'Product Manager', category: 'Product', tags: 'manager,product,lead', credits: 400, team: 'Beta Force', status: 'Active' },
    { id: 3, name: 'Mike Johnson', points: 11230, level: 10, avatar: 'MJ', image: 'https://picsum.photos/400/300?random=32', description: 'Designer', category: 'Design', tags: 'designer,ui,ux', credits: 350, team: 'Gamma Team', status: 'Active' },
    { id: 4, name: 'Sarah Wilson', points: 9870, level: 8, avatar: 'SW', image: 'https://picsum.photos/400/300?random=33', description: 'Marketing Specialist', category: 'Marketing', tags: 'marketing,specialist', credits: 300, team: 'Delta Unit', status: 'Active' },
    { id: 5, name: 'Alex Brown', points: 8540, level: 7, avatar: 'AB', image: 'https://picsum.photos/400/300?random=34', description: 'QA Engineer', category: 'Engineering', tags: 'qa,testing,engineer', credits: 250, team: 'Alpha Squad', status: 'Active' }
  ];

  const handleAddPrize = (prize) => {
    setPrizesList((prev) => [...prev, prize]);
    setAddPrizeOpen(false);
  };

  const handleEditPrize = (prize) => {
    setPrizesList((prev) => 
      prev.map((p, index) => 
        p === selectedPrize ? { ...p, ...prize } : p
      )
    );
    setEditPrizeOpen(false);
    setSelectedPrize(null);
  };

  const handleDeletePrize = (prize) => {
    setPrizesList((prev) => prev.filter((p) => p !== prize));
    setEditPrizeOpen(false);
    setSelectedPrize(null);
  };



  const handleAddRaffle = (raffle) => {
    setRafflesList((prev) => [...prev, raffle]);
    setAddRaffleOpen(false);
  };

  const handleEditRaffle = (raffle) => {
    setRafflesList((prev) => 
      prev.map((r, index) => 
        r === selectedRaffle ? { ...r, ...raffle } : r
      )
    );
    setEditRaffleOpen(false);
    setSelectedRaffle(null);
  };

  const handleDeleteRaffle = (raffle) => {
    setRafflesList((prev) => prev.filter((r) => r !== raffle));
    setEditRaffleOpen(false);
    setSelectedRaffle(null);
  };



  const handleAddMysteryBox = (box) => {
    setMysteryBoxesList((prev) => [...prev, box]);
    setAddMysteryBoxOpen(false);
  };

  const handleEditMysteryBox = (box) => {
    setMysteryBoxesList((prev) => 
      prev.map((b, index) => 
        b === selectedMysteryBox ? { ...b, ...box } : b
      )
    );
    setEditMysteryBoxOpen(false);
    setSelectedMysteryBox(null);
  };

  const handleDeleteMysteryBox = (box) => {
    setMysteryBoxesList((prev) => prev.filter((b) => b !== box));
    setEditMysteryBoxOpen(false);
    setSelectedMysteryBox(null);
  };



  const handleAddEvent = (event) => {
    setEventsList((prev) => [...prev, event]);
    setAddEventOpen(false);
  };

  const handleEditEvent = (event) => {
    setEventsList((prev) => 
      prev.map((e, index) => 
        e === selectedEvent ? { ...e, ...event } : e
      )
    );
    setEditEventOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (event) => {
    setEventsList((prev) => prev.filter((e) => e !== event));
    setEditEventOpen(false);
    setSelectedEvent(null);
  };

  const handleAddMission = (mission) => {
    setMissionsList((prev) => [...prev, mission]);
    setAddMissionOpen(false);
  };

  const handleAddPlayer = (player) => {
    // Add player to the list (you can implement this based on your data structure)
    console.log('Adding player:', player);
    setAddPlayerOpen(false);
  };

  const handleAddTeam = (team) => {
    // Add team to the list (you can implement this based on your data structure)
    console.log('Adding team:', team);
    setAddTeamOpen(false);
  };

  const handleAddStreak = (streak) => {
    setStreaksList(prev => [...prev, streak]);
    setAddStreakOpen(false);
  };

  const handleAddAchievement = (achievement) => {
    setAchievementsList(prev => [...prev, achievement]);
    setAddAchievementOpen(false);
  };

  const handleEditMission = (mission) => {
    setMissionsList((prev) => 
      prev.map((m, index) => 
        m === selectedMission ? { ...m, ...mission } : m
      )
    );
    setEditMissionOpen(false);
    setSelectedMission(null);
  };

  const handleDeleteMission = (mission) => {
    setMissionsList((prev) => prev.filter((m) => m !== mission));
    setEditMissionOpen(false);
    setSelectedMission(null);
  };

  // Inline mission editing handlers
  const handleStartEditMission = (mission) => {
    setEditingMissionId(mission.id);
    setEditingMissionData({ ...mission });
  };

  const handleSaveEditMission = () => {
    setMissionsList((prev) => 
      prev.map((mission) => 
        mission.id === editingMissionId ? { ...mission, ...editingMissionData } : mission
      )
    );
    setEditingMissionId(null);
    setEditingMissionData({});
  };

  const handleCancelEditMission = () => {
    setEditingMissionId(null);
    setEditingMissionData({});
  };

  const handleUpdateEditingMissionData = (field, value) => {
    setEditingMissionData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Event editing handlers
  const handleStartEditEvent = (event) => {
    setEditingEventId(event.id);
    setEditingEventData({
      id: event.id || '',
      name: event.name || '',
      description: event.description || '',
      image: event.image || '',
      category: event.category || '',
      tags: event.tags || '',
      restrictCompletions: event.restrictCompletions || 'unlimited',
      points: event.points || '',
      credits: event.credits || '',
      achievements: event.achievements || '',
      stepsGranted: event.stepsGranted || ''
    });
  };

  const handleSaveEditEvent = () => {
    setEventsList((prev) => 
      prev.map((event) => 
        event.id === editingEventId ? { 
          ...event, 
          ...editingEventData,
          points: editingEventData.points ? parseInt(editingEventData.points) : 0,
          credits: editingEventData.credits ? parseInt(editingEventData.credits) : 0,
          stepsGranted: editingEventData.stepsGranted ? parseInt(editingEventData.stepsGranted) : 0
        } : event
      )
    );
    setEditingEventId(null);
    setEditingEventData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      restrictCompletions: 'unlimited',
      points: '',
      credits: '',
      achievements: '',
      stepsGranted: ''
    });
  };

  const handleCancelEditEvent = () => {
    setEditingEventId(null);
    setEditingEventData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      restrictCompletions: 'unlimited',
      points: '',
      credits: '',
      achievements: '',
      stepsGranted: ''
    });
  };

  const handleUpdateEditingEventData = (field, value) => {
    setEditingEventData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Player editing handlers
  const handleStartEditPlayer = (player) => {
    setEditingPlayerId(player.id);
    setEditingPlayerData({
      id: player.id || '',
      name: player.name || '',
      description: player.description || '',
      image: player.image || '',
      category: player.category || '',
      tags: player.tags || '',
      points: player.points || '',
      credits: player.credits || '',
      team: player.team || '',
      level: player.level || '',
      status: player.status || ''
    });
  };

  const handleSaveEditPlayer = () => {
    // Update the player in the list
    const updatedUsers = topUsers.map((player) => 
      player.id === editingPlayerId ? { ...player, ...editingPlayerData } : player
    );
    // You would typically update state here, but since topUsers is not in state, we'll just log for now
    console.log('Updated players:', updatedUsers);
    setEditingPlayerId(null);
    setEditingPlayerData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      points: '',
      credits: '',
      team: '',
      level: '',
      status: ''
    });
  };

  const handleCancelEditPlayer = () => {
    setEditingPlayerId(null);
    setEditingPlayerData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      points: '',
      credits: '',
      team: '',
      level: '',
      status: ''
    });
  };

  const handleUpdateEditingPlayerData = (field, value) => {
    setEditingPlayerData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStartEditTeam = (team) => {
    setEditingTeamId(team.id || team.name);
    setEditingTeamData({
      id: team.id || team.name,
      name: team.name,
      description: team.description || '',
      image: team.image || '',
      category: team.category || '',
      tags: team.tags || '',
      points: team.points || '',
      credits: team.credits || ''
    });
  };

  const handleSaveEditTeam = () => {
    // Update the team in the teams array
    // In a real app, you would update the state here
    // const updatedTeams = teams.map(team => 
    //   team.id === editingTeamId || team.name === editingTeamId 
    //     ? { ...team, ...editingTeamData }
    //     : team
    // );
    // setTeams(updatedTeams);
    console.log('Saving team:', editingTeamData);
    setEditingTeamId(null);
    setEditingTeamData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      points: '',
      credits: ''
    });
  };

  const handleCancelEditTeam = () => {
    setEditingTeamId(null);
    setEditingTeamData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      points: '',
      credits: ''
    });
  };

  const handleUpdateEditingTeamData = (field, value) => {
    setEditingTeamData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStartEditStreak = (streak) => {
    setEditingStreakId(streak.id);
    setEditingStreakData({
      id: streak.id || '',
      name: streak.name || '',
      description: streak.description || '',
      image: streak.image || '',
      category: streak.category || '',
      tags: streak.tags ? streak.tags.join(', ') : '',
      restrictStreak: streak.restrictStreak || 'unlimited',
      priority: streak.priority || 'Medium',
      startDate: streak.startDate || '',
      endDate: streak.endDate || '',
      refreshPeriod: streak.refreshPeriod || 'Daily',
      selectedMission: streak.selectedMission || '',
      points: streak.points || '',
      credits: streak.credits || '',
      achievements: streak.achievements || '',
      stepsGranted: streak.stepsGranted || ''
    });
  };

  const handleSaveEditStreak = () => {
    if (!editingStreakId) return;

    const updatedStreak = {
      ...editingStreakData,
      tags: editingStreakData.tags ? editingStreakData.tags.split(',').map(tag => tag.trim()) : []
    };

    setStreaksList(prev => 
      prev.map(streak => 
        streak.id === editingStreakId ? updatedStreak : streak
      )
    );

    setEditingStreakId(null);
    setEditingStreakData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      restrictStreak: 'unlimited',
      priority: 'Medium',
      startDate: '',
      endDate: '',
      refreshPeriod: 'Daily',
      selectedMission: '',
      points: '',
      credits: '',
      achievements: '',
      stepsGranted: ''
    });
  };

  const handleCancelEditStreak = () => {
    setEditingStreakId(null);
    setEditingStreakData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      restrictStreak: 'unlimited',
      priority: 'Medium',
      startDate: '',
      endDate: '',
      refreshPeriod: 'Daily',
      selectedMission: '',
      points: '',
      credits: '',
      achievements: '',
      stepsGranted: ''
    });
  };

  const handleUpdateEditingStreakData = (field, value) => {
    setEditingStreakData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Prize editing handlers
  const handleStartEditPrize = (prize) => {
    setEditingPrizeId(prize.id);
    setEditingPrizeData({
      id: prize.id || '',
      name: prize.name || '',
      description: prize.description || '',
      image: prize.image || '',
      category: prize.category || '',
      tags: prize.tags || '',
      credits: prize.credits || '',
      redemptionLimit: prize.redemptionLimit || '',
      unlimitedRedemption: prize.unlimitedRedemption || false,
      stockLimit: prize.stockLimit || '',
      unlimitedStock: prize.unlimitedStock || false,
      startDate: prize.startDate || '',
      endDate: prize.endDate || '',
      refreshPeriod: prize.refreshPeriod || '',
      reqCategory: prize.reqCategory || '',
      reqTags: prize.reqTags || '',
      level: prize.level || '',
      mission: prize.mission || '',
      achievement: prize.achievement || ''
    });
  };

  const handleSaveEditPrize = () => {
    if (!editingPrizeId) return;
    
    const updatedPrize = {
      ...editingPrizeData,
      credits: editingPrizeData.credits ? parseInt(editingPrizeData.credits) : 0,
      redemptionLimit: editingPrizeData.redemptionLimit ? parseInt(editingPrizeData.redemptionLimit) : 0,
      stockLimit: editingPrizeData.stockLimit ? parseInt(editingPrizeData.stockLimit) : 0,
      level: editingPrizeData.level ? parseInt(editingPrizeData.level) : 0
    };

    setPrizesList(prev => 
      prev.map(prize => 
        prize.id === editingPrizeId ? updatedPrize : prize
      )
    );
    
    setEditingPrizeId(null);
    setEditingPrizeData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      credits: '',
      redemptionLimit: '',
      unlimitedRedemption: false,
      stockLimit: '',
      unlimitedStock: false,
      startDate: '',
      endDate: '',
      refreshPeriod: '',
      reqCategory: '',
      reqTags: '',
      level: '',
      mission: '',
      achievement: ''
    });
  };

  const handleCancelEditPrize = () => {
    setEditingPrizeId(null);
    setEditingPrizeData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      credits: '',
      redemptionLimit: '',
      unlimitedRedemption: false,
      stockLimit: '',
      unlimitedStock: false,
      startDate: '',
      endDate: '',
      refreshPeriod: '',
      reqCategory: '',
      reqTags: '',
      level: '',
      mission: '',
      achievement: ''
    });
  };

  const handleUpdateEditingPrizeData = (field, value) => {
    setEditingPrizeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Raffle editing handlers
  const handleStartEditRaffle = (raffle) => {
    setEditingRaffleId(raffle.id);
    setEditingRaffleData({
      id: raffle.id || '',
      name: raffle.name || '',
      description: raffle.description || '',
      image: raffle.image || '',
      category: raffle.category || '',
      tags: raffle.tags || '',
      credits: raffle.credits || '',
      reqCategory: raffle.reqCategory || '',
      reqTags: raffle.reqTags || '',
      level: raffle.level || '',
      mission: raffle.mission || '',
      achievement: raffle.achievement || ''
    });
  };

  const handleSaveEditRaffle = () => {
    const updatedRaffles = rafflesList.map(raffle => 
      raffle.id === editingRaffleId 
        ? { ...raffle, ...editingRaffleData }
        : raffle
    );
    setRafflesList(updatedRaffles);
    setEditingRaffleId(null);
    setEditingRaffleData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      credits: '',
      reqCategory: '',
      reqTags: '',
      level: '',
      mission: '',
      achievement: ''
    });
  };

  const handleCancelEditRaffle = () => {
    setEditingRaffleId(null);
    setEditingRaffleData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      credits: '',
      reqCategory: '',
      reqTags: '',
      level: '',
      mission: '',
      achievement: ''
    });
  };

  const handleUpdateEditingRaffleData = (field, value) => {
    setEditingRaffleData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Mystery Box editing handlers
  const handleStartEditMysteryBox = (box) => {
    setEditingMysteryBoxId(box.id);
    setEditingMysteryBoxData({
      id: box.id || '',
      name: box.name || '',
      description: box.description || '',
      image: box.image || '',
      category: box.category || '',
      tags: box.tags || '',
      credits: box.credits || '',
      reqCategory: box.reqCategory || '',
      reqTags: box.reqTags || '',
      reqLevel: box.reqLevel || '',
      reqMission: box.reqMission || '',
      reqAchievement: box.reqAchievement || ''
    });
  };

  const handleSaveEditMysteryBox = () => {
    if (!editingMysteryBoxId) return;

    const updatedMysteryBoxes = mysteryBoxesList.map(box => 
      box.id === editingMysteryBoxId 
        ? { ...box, ...editingMysteryBoxData }
        : box
    );

    setMysteryBoxesList(updatedMysteryBoxes);
    setEditingMysteryBoxId(null);
    setEditingMysteryBoxData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      credits: '',
      reqCategory: '',
      reqTags: '',
      reqLevel: '',
      reqMission: '',
      reqAchievement: ''
    });
  };

  const handleCancelEditMysteryBox = () => {
    setEditingMysteryBoxId(null);
    setEditingMysteryBoxData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      credits: '',
      reqCategory: '',
      reqTags: '',
      reqLevel: '',
      reqMission: '',
      reqAchievement: ''
    });
  };

  const handleUpdateEditingMysteryBoxData = (field, value) => {
    setEditingMysteryBoxData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Achievement editing handlers
  const handleStartEditAchievement = (achievement) => {
    setEditingAchievementId(achievement.name);
    setEditingAchievementData({
      id: achievement.id || '',
      name: achievement.name || '',
      description: achievement.description || '',
      image: achievement.image || '',
      category: achievement.category || '',
      tags: achievement.tags || '',
      stepsRequired: achievement.stepsRequired || '',
      // Rewards
      points: achievement.points || '',
      credits: achievement.credits || '',
      achievements: achievement.achievements || '',
      stepsGranted: achievement.stepsGranted || '',
      // Requirements
      requirementsCategory: achievement.requirementsCategory || '',
      requirementsTags: achievement.requirementsTags || '',
      requirementsLevel: achievement.requirementsLevel || '',
      requirementsMission: achievement.requirementsMission || '',
      requirementsAchievement: achievement.requirementsAchievement || ''
    });
  };

  const handleSaveEditAchievement = () => {
    // Update the achievement in the list
    const updatedAchievements = achievements.map((achievement) => 
      achievement.name === editingAchievementId ? { 
        ...achievement, 
        ...editingAchievementData,
        points: editingAchievementData.points ? parseInt(editingAchievementData.points) : 0,
        credits: editingAchievementData.credits ? parseInt(editingAchievementData.credits) : 0,
        stepsRequired: editingAchievementData.stepsRequired ? parseInt(editingAchievementData.stepsRequired) : 0,
        stepsGranted: editingAchievementData.stepsGranted ? parseInt(editingAchievementData.stepsGranted) : 0
      } : achievement
    );
    // You would typically update state here, but since achievements is not in state, we'll just log for now
    console.log('Updated achievements:', updatedAchievements);
    setEditingAchievementId(null);
    setEditingAchievementData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      stepsRequired: '',
      points: '',
      credits: '',
      achievements: '',
      stepsGranted: '',
      requirementsCategory: '',
      requirementsTags: '',
      requirementsLevel: '',
      requirementsMission: '',
      requirementsAchievement: ''
    });
  };

  const handleCancelEditAchievement = () => {
    setEditingAchievementId(null);
    setEditingAchievementData({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      stepsRequired: '',
      points: '',
      credits: '',
      achievements: '',
      stepsGranted: '',
      requirementsCategory: '',
      requirementsTags: '',
      requirementsLevel: '',
      requirementsMission: '',
      requirementsAchievement: ''
    });
  };

  const handleUpdateEditingAchievementData = (field, value) => {
    setEditingAchievementData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Level editing handlers
  const handleStartEditLevel = (level) => {
    setEditingLevelId(level.level);
    setEditingLevelData({
      id: level.id || '',
      level: level.level || '',
      name: level.name || '',
      description: level.description || '',
      image: level.image || '',
      category: level.category || '',
      tags: level.tags || '',
      ordinal: level.level || '',
      // Objectives
      points: level.pointsRequired || level.points || 0,
      credits: level.credits || 0,
      selectAchievement: level.selectAchievement || '',
      // Rewards
      rewardPoints: level.rewardPoints || 0,
      rewardCredits: level.rewardCredits || 0,
      rewardAchievements: level.rewardAchievements || '',
      stepsGranted: level.stepsGranted || 0
    });
  };

  const handleSaveEditLevel = () => {
    setLevelsList((prev) =>
      prev.map((level) =>
        level.level === editingLevelId ? { 
          ...level, 
          ...editingLevelData, 
          level: parseInt(editingLevelData.ordinal) || level.level,
          pointsRequired: parseInt(editingLevelData.points) || 0,
          credits: parseInt(editingLevelData.credits) || 0,
          rewardPoints: parseInt(editingLevelData.rewardPoints) || 0,
          rewardCredits: parseInt(editingLevelData.rewardCredits) || 0,
          stepsGranted: parseInt(editingLevelData.stepsGranted) || 0
        } : level
      )
    );
    setEditingLevelId(null);
    setEditingLevelData({ 
      id: '', level: '', name: '', description: '', image: '', category: '', tags: '', ordinal: '',
      points: '', credits: '', selectAchievement: '', rewardPoints: '', rewardCredits: '', rewardAchievements: '', stepsGranted: ''
    });
  };

  const handleCancelEditLevel = () => {
    setEditingLevelId(null);
    setEditingLevelData({ 
      id: '', level: '', name: '', description: '', image: '', category: '', tags: '', ordinal: '',
      points: '', credits: '', selectAchievement: '', rewardPoints: '', rewardCredits: '', rewardAchievements: '', stepsGranted: ''
    });
  };

  const handleUpdateEditingLevelData = (field, value) => {
    setEditingLevelData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddLevel = (level) => {
    setLevelsList((prev) => [...prev, { ...level, pointsRequired: parseInt(level.pointsRequired) || 0, users: parseInt(level.users) || 0 }]);
    setAddLevelOpen(false);
  };

  const handleDeleteLevel = (level) => {
    setLevelsList((prev) => prev.filter(l => l.level !== level.level));
  };

  const handleAddLeaderboard = (leaderboard) => {
    setLeaderboardsList((prev) => [...prev, leaderboard]);
    setAddLeaderboardOpen(false);
  };

  const handleDeleteLeaderboard = (leaderboard) => {
    setLeaderboardsList((prev) => prev.filter(l => l.id !== leaderboard.id));
  };

  const handleStartEditLeaderboard = (leaderboard) => {
    setEditingLeaderboardId(leaderboard.id);
    setEditingLeaderboardData({
      id: leaderboard.id || '',
      name: leaderboard.name || '',
      description: leaderboard.description || '',
      image: leaderboard.image || '',
      category: leaderboard.category || '',
      tags: leaderboard.tags || '',
      sortBy: leaderboard.sortBy || 'points',
      leaderboardUnits: leaderboard.leaderboardUnits || 'points',
      startDate: leaderboard.startDate || '',
      endDate: leaderboard.endDate || '',
      refreshPeriod: leaderboard.refreshPeriod || 'none',
      missionSpecific: leaderboard.missionSpecific || '',
      requirementsCategory: leaderboard.requirementsCategory || '',
      requirementsTags: leaderboard.requirementsTags || '',
      selectLevel: leaderboard.selectLevel || '',
      selectMission: leaderboard.selectMission || '',
      selectAchievement: leaderboard.selectAchievement || '',
      period: leaderboard.period || '',
      participants: leaderboard.participants || ''
    });
  };

  const handleSaveEditLeaderboard = () => {
    setLeaderboardsList((prev) =>
      prev.map((leaderboard) =>
        leaderboard.id === editingLeaderboardId ? { ...leaderboard, ...editingLeaderboardData } : leaderboard
      )
    );
    setEditingLeaderboardId(null);
    setEditingLeaderboardData({ 
      id: '', name: '', description: '', image: '', category: '', tags: '', sortBy: 'points', 
      leaderboardUnits: 'points', startDate: '', endDate: '', refreshPeriod: 'none', 
      missionSpecific: '', requirementsCategory: '', requirementsTags: '', selectLevel: '', 
      selectMission: '', selectAchievement: '', period: '', participants: '' 
    });
  };

  const handleCancelEditLeaderboard = () => {
    setEditingLeaderboardId(null);
    setEditingLeaderboardData({ 
      id: '', name: '', description: '', image: '', category: '', tags: '', sortBy: 'points', 
      leaderboardUnits: 'points', startDate: '', endDate: '', refreshPeriod: 'none', 
      missionSpecific: '', requirementsCategory: '', requirementsTags: '', selectLevel: '', 
      selectMission: '', selectAchievement: '', period: '', participants: '' 
    });
  };

  const handleUpdateEditingLeaderboardData = (field, value) => {
    setEditingLeaderboardData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddQuiz = (quiz) => {
    setQuizzesList((prev) => [...prev, quiz]);
    setAddQuizOpen(false);
  };

  const handleDeleteQuiz = (quiz) => {
    setQuizzesList((prev) => prev.filter(q => q.id !== quiz.id));
  };

  const handleStartEditQuiz = (quiz) => {
    setEditingQuizId(quiz.id);
    setEditingQuizData({
      name: quiz.name || '',
      description: quiz.description || '',
      questions: quiz.questions || '',
      participants: quiz.participants || '',
      status: quiz.status || 'active',
      category: quiz.category || '',
      timeLimit: quiz.timeLimit || '',
      passingScore: quiz.passingScore || ''
    });
  };

  const handleSaveEditQuiz = () => {
    setQuizzesList((prev) =>
      prev.map((quiz) =>
        quiz.id === editingQuizId ? { ...quiz, ...editingQuizData } : quiz
      )
    );
    setEditingQuizId(null);
    setEditingQuizData({ name: '', description: '', questions: '', participants: '', status: '', category: '', timeLimit: '', passingScore: '' });
  };

  const handleCancelEditQuiz = () => {
    setEditingQuizId(null);
    setEditingQuizData({ name: '', description: '', questions: '', participants: '', status: '', category: '', timeLimit: '', passingScore: '' });
  };

  const handleUpdateEditingQuizData = (field, value) => {
    setEditingQuizData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddSurvey = (survey) => {
    setSurveysList((prev) => [...prev, survey]);
    setAddSurveyOpen(false);
  };

  const handleDeleteSurvey = (survey) => {
    setSurveysList((prev) => prev.filter(s => s.id !== survey.id));
  };

  const handleStartEditSurvey = (survey) => {
    setEditingSurveyId(survey.id);
    setEditingSurveyData({
      name: survey.name || '',
      description: survey.description || '',
      participants: survey.participants || '',
      status: survey.status || 'active',
      category: survey.category || '',
      duration: survey.duration || '',
      rewards: survey.rewards || ''
    });
  };

  const handleSaveEditSurvey = () => {
    setSurveysList((prev) =>
      prev.map((survey) =>
        survey.id === editingSurveyId ? { ...survey, ...editingSurveyData } : survey
      )
    );
    setEditingSurveyId(null);
    setEditingSurveyData({ name: '', description: '', participants: '', status: '', category: '', duration: '', rewards: '' });
  };

  const handleCancelEditSurvey = () => {
    setEditingSurveyId(null);
    setEditingSurveyData({ name: '', description: '', participants: '', status: '', category: '', duration: '', rewards: '' });
  };

  const handleUpdateEditingSurveyData = (field, value) => {
    setEditingSurveyData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGuideCreateEvent = () => {
    setGuideStep(2);
    // Start typing animation sequence
    startTypingAnimation();
  };

  const startTypingAnimation = () => {
    const fields = [
      { key: 'id', text: 'daily_checkin' },
      { key: 'name', text: 'Daily Check-in' },
      { key: 'description', text: 'Complete your daily check-in to earn rewards and maintain your streak' },
      { key: 'category', text: 'Engagement' },
      { key: 'tags', text: 'daily, check-in, engagement, streak' },
      { key: 'restrictCompletions', text: '1' },
      { key: 'points', text: '50' },
      { key: 'credits', text: '25' },
      { key: 'achievements', text: 'Daily Check-in Master' },
      { key: 'stepsGranted', text: '1' }
    ];

    let currentIndex = 0;
    const typeField = () => {
      if (currentIndex >= fields.length) {
        return;
      }

      const field = fields[currentIndex];
      setCurrentTypingField(field.key);
      setTypedText('');

      let charIndex = 0;
      const typeChar = () => {
        if (charIndex < field.text.length) {
          setTypedText(prev => prev + field.text[charIndex]);
          charIndex++;
          setTimeout(typeChar, 50); // 50ms delay between characters
        } else {
          // Field completed, mark as done and move to next
          setTypingProgress(prev => ({ ...prev, [field.key]: true }));
          setCurrentTypingField(null);
          setTypedText('');
          currentIndex++;
          setTimeout(typeField, 300); // 300ms delay between fields
        }
      };
      typeChar();
    };

    // Start the animation sequence
    setTimeout(typeField, 500);
  };

  const handleGuideEventCreated = () => {
    setGuideStep(4);
  };

  const handleGuideCreateMission = () => {
    setGuideStep(5);
    // Add a small delay to ensure the component is rendered before starting animation
    setTimeout(() => {
      startMissionTypingAnimation();
    }, 100);
  };

  const startMissionTypingAnimation = () => {
    console.log('Starting mission typing animation...');
    const fields = [
      { key: 'id', text: 'daily_checkin_mission' },
      { key: 'name', text: 'Daily Check-in Mission' },
      { key: 'description', text: 'Complete your daily check-in for 7 consecutive days to earn rewards and maintain your streak' },
      { key: 'image', text: 'https://picsum.photos/400/300?random=20' },
      { key: 'category', text: 'Engagement' },
      { key: 'tags', text: 'daily, check-in, engagement, streak, consecutive' },
      { key: 'restrictCompletions', text: '1' },
      { key: 'priority', text: 'High' },
      { key: 'startDate', text: '2024-01-01' },
      { key: 'endDate', text: '2024-12-31' },
      { key: 'refreshPeriod', text: 'Daily' },
      { key: 'objectivesEvent', text: 'Product Launch' },
      { key: 'objectivesQuiz', text: 'Daily Check-in Quiz' },
      { key: 'objectivesSurvey', text: 'User Satisfaction Survey' },
      { key: 'points', text: '100' },
      { key: 'credits', text: '50' },
      { key: 'achievements', text: 'Daily Check-in Master, Streak Keeper' },
      { key: 'stepsGranted', text: '7' },
      { key: 'requirementsCategory', text: 'Engagement' },
      { key: 'requirementsTags', text: 'daily, check-in' },
      { key: 'requirementsLevel', text: '1' },
      { key: 'requirementsMission', text: 'daily_checkin' },
      { key: 'requirementsAchievement', text: 'First Check-in' }
    ];

    let currentIndex = 0;
    const typeField = () => {
      if (currentIndex >= fields.length) {
        console.log('Animation completed!');
        return;
      }

      const field = fields[currentIndex];
      console.log(`Typing field: ${field.key}`);
      setCurrentMissionTypingField(field.key);
      setMissionTypedText('');

      let charIndex = 0;
      const typeChar = () => {
        if (charIndex < field.text.length) {
          setMissionTypedText(prev => prev + field.text[charIndex]);
          charIndex++;
          setTimeout(typeChar, 50); // 50ms delay between characters
        } else {
          // Field completed, mark as done and move to next
          console.log(`Completed field: ${field.key}`);
          setMissionTypingProgress(prev => ({ ...prev, [field.key]: true }));
          setCurrentMissionTypingField(null);
          setMissionTypedText('');
          currentIndex++;
          setTimeout(typeField, 300); // 300ms delay between fields
        }
      };
      typeChar();
    };

    // Start the animation sequence
    setTimeout(typeField, 500);
  };

  // Pagination helpers
  const getPageItems = (items, page) => {
    const start = page * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const getTotalPages = (items) => Math.ceil(items.length / itemsPerPage);

  const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;
    
    return (
      <div className="flex items-center justify-center space-x-2 mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                currentPage === i
                  ? 'bg-primary-600 text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  // Blinking cursor component
  const BlinkingCursor = () => (
    <motion.span
      className="inline-block w-0.5 h-5 bg-blue-500 ml-1"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-6">
            {/* User Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                JS
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
                <p className="text-gray-600">Administrator</p>
                <p className="text-sm text-gray-500">john.smith@company.com</p>
              </div>
            </div>
            
            {/* Account Info */}
            <div className="border-l border-gray-200 pl-6">
              <h2 className="text-lg font-semibold text-gray-900">GameLayer Platform</h2>
              <p className="text-gray-600">Account: Premium</p>
              <p className="text-sm text-gray-500">Last login: Today at 9:30 AM</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4">
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.subtitle}</p>
                  <p className="text-green-600 text-sm font-medium">{stat.change} change</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Main Content Area with Sidebar */}
        <div className="flex gap-4 max-w-7xl mx-auto">
          {/* Left Sidebar Navigation */}
          <div className="w-56 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab, index) => (
                  <div key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-600 border border-primary-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-3" />
                      {tab.name}
                    </button>
                    {/* Add divider between Surveys and Settings */}
                    {tab.id === 'surveys' && (
                      <div className="border-t border-gray-200 my-2"></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            {activeTab === 'players' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search players..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setAddPlayerOpen(true)}
                  >
                    Add Player
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {topUsers.map((user, index) => (
                        <React.Fragment key={index}>
                          <tr 
                            className="hover:bg-gray-50 cursor-pointer" 
                            onClick={() => {
                              if (editingPlayerId === user.id) {
                                handleCancelEditPlayer();
                              } else {
                                handleStartEditPlayer(user);
                              }
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {user.image ? (
                                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                      src={user.image} 
                                      alt={user.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                      <User className="w-4 h-4" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                    <User className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                  <div className="text-sm text-gray-500">{user.description || 'No description'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Level {user.level}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {user.points.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {user.credits ? user.credits.toLocaleString() : '0'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button 
                                  className="text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleStartEditPlayer(user);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                          {/* Expandable Edit Section */}
                          {editingPlayerId === user.id && (
                            <tr>
                              <td colSpan="5" className="px-6 py-4 bg-gray-50">
                                <div className="space-y-6">
                                  {/* Player Details Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <User className="w-5 h-5 mr-2 text-blue-600" />
                                      Player Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                        <input
                                          type="text"
                                          value={editingPlayerData.id || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('id', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter player ID"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                          type="text"
                                          value={editingPlayerData.name || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('name', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter player name"
                                          required
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Description
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <textarea
                                          value={editingPlayerData.description || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('description', e.target.value)}
                                          rows={3}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter player description"
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Player Image
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="space-y-4">
                                          {/* File Upload Section */}
                                          <div className="flex items-center space-x-4">
                                            <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                              <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                  const file = e.target.files[0];
                                                  if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                      handleUpdateEditingPlayerData('image', event.target.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                  }
                                                }}
                                                className="hidden"
                                              />
                                              <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                              <span className="text-gray-600">Browse for image</span>
                                            </label>
                                            {editingPlayerData.image && (
                                              <button
                                                type="button"
                                                onClick={() => handleUpdateEditingPlayerData('image', '')}
                                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                              >
                                                Remove
                                              </button>
                                            )}
                                          </div>
                                          
                                          {/* Image Preview */}
                                          {editingPlayerData.image && (
                                            <div className="relative">
                                              <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                <img
                                                  src={editingPlayerData.image}
                                                  alt="Player preview"
                                                  className="w-full h-full object-cover"
                                                />
                                              </div>
                                            </div>
                                          )}
                                          
                                          {/* URL Input (fallback) */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                            <input 
                                              name="image" 
                                              value={editingPlayerData.image || ''} 
                                              onChange={(e) => handleUpdateEditingPlayerData('image', e.target.value)} 
                                              className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              placeholder="Enter image URL (optional if file uploaded)"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingPlayerData.category || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('category', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingPlayerData.tags || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('tags', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter tags (comma separated)"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Points
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingPlayerData.points || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('points', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter points"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Credits
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingPlayerData.credits || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('credits', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter credits"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Team
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingPlayerData.team || ''}
                                          onChange={(e) => handleUpdateEditingPlayerData('team', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                          <option value="">Select a team</option>
                                          <option value="alpha">Alpha Squad</option>
                                          <option value="beta">Beta Force</option>
                                          <option value="gamma">Gamma Team</option>
                                          <option value="delta">Delta Unit</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                    <button
                                      onClick={handleCancelEditPlayer}
                                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={handleSaveEditPlayer}
                                      className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="space-y-8">
                {/* Prizes Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search prizes..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4" onClick={() => setAddPrizeOpen(true)}>
                      Add Prize
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Prize
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Credits
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Available
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Redeemed
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getPageItems(prizesList, prizesPage).map((prize, index) => (
                          <React.Fragment key={index}>
                            <tr 
                              className={`hover:bg-gray-50 cursor-pointer ${editingPrizeId === prize.id ? 'bg-blue-50' : ''}`}
                              onClick={() => editingPrizeId === prize.id ? handleCancelEditPrize() : handleStartEditPrize(prize)}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {prize.image ? (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                      <img
                                        src={prize.image}
                                        alt={prize.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                          e.target.nextSibling.style.display = 'flex';
                                        }}
                                      />
                                      <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                        <Gift className="w-4 h-4" />
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                      <Gift className="w-4 h-4" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{prize.name}</div>
                                    <div className="text-sm text-gray-500">{prize.description}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                ${prize.value}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {prize.stock || 0}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {prize.redeemed || 0}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  prize.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {prize.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                <div className="flex items-center justify-center space-x-2">
                                  <button 
                                    className="text-gray-600 hover:text-gray-900"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (editingPrizeId === prize.id) {
                                        handleCancelEditPrize();
                                      } else {
                                        handleStartEditPrize(prize);
                                      }
                                    }}
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button 
                                    className="text-red-600 hover:text-red-900"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeletePrize(prize);
                                    }}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {editingPrizeId === prize.id && (
                              <tr>
                                <td colSpan="6" className="px-6 py-4 bg-gray-50">
                                  <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
                                    {/* Prize Details Section */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                                        Prize Details
                                      </h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                          <input 
                                            value={editingPrizeData.id} 
                                            onChange={(e) => handleUpdateEditingPrizeData('id', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter prize ID"
                                            required 
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                          <input 
                                            value={editingPrizeData.name} 
                                            onChange={(e) => handleUpdateEditingPrizeData('name', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter prize name"
                                            required 
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Description <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <textarea 
                                            value={editingPrizeData.description} 
                                            onChange={(e) => handleUpdateEditingPrizeData('description', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter prize description"
                                            rows="3"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Prize Image <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <div className="space-y-4">
                                            {/* File Upload Section */}
                                            <div className="flex items-center space-x-4">
                                              <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                                <input
                                                  type="file"
                                                  accept="image/*"
                                                  onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                      const reader = new FileReader();
                                                      reader.onload = (event) => {
                                                        handleUpdateEditingPrizeData('image', event.target.result);
                                                      };
                                                      reader.readAsDataURL(file);
                                                    }
                                                  }}
                                                  className="hidden"
                                                />
                                                <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                                <span className="text-gray-600">Browse for image</span>
                                              </label>
                                              {editingPrizeData.image && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleUpdateEditingPrizeData('image', '')}
                                                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                                >
                                                  Remove
                                                </button>
                                              )}
                                            </div>
                                            
                                            {/* Image Preview */}
                                            {editingPrizeData.image && (
                                              <div className="relative">
                                                <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                  <img
                                                    src={editingPrizeData.image}
                                                    alt="Prize preview"
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                              </div>
                                            )}
                                            
                                            {/* URL Input (fallback) */}
                                            <div>
                                              <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                              <input 
                                                value={editingPrizeData.image} 
                                                onChange={(e) => handleUpdateEditingPrizeData('image', e.target.value)} 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter image URL (optional if file uploaded)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Category <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <input 
                                            value={editingPrizeData.category} 
                                            onChange={(e) => handleUpdateEditingPrizeData('category', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Tags <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <div className="relative">
                                            <input 
                                              value={editingPrizeData.tags} 
                                              onChange={(e) => handleUpdateEditingPrizeData('tags', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Credits</label>
                                          <div className="relative">
                                            <input 
                                              type="number" 
                                              value={editingPrizeData.credits} 
                                              onChange={(e) => handleUpdateEditingPrizeData('credits', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter credits cost"
                                              min="0" 
                                            />
                                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Limits & Dates Section */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-green-600" />
                                        Limits & Dates
                                      </h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Redemption Limit</label>
                                          <div className="flex items-center space-x-2">
                                            <input 
                                              type="number" 
                                              value={editingPrizeData.unlimitedRedemption ? '' : editingPrizeData.redemptionLimit} 
                                              onChange={(e) => handleUpdateEditingPrizeData('redemptionLimit', e.target.value)} 
                                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter limit"
                                              min="0" 
                                              disabled={editingPrizeData.unlimitedRedemption} 
                                            />
                                            <label className="flex items-center text-sm">
                                              <input 
                                                type="checkbox" 
                                                checked={editingPrizeData.unlimitedRedemption} 
                                                onChange={(e) => handleUpdateEditingPrizeData('unlimitedRedemption', e.target.checked)} 
                                                className="mr-1" 
                                              />
                                              Unlimited
                                            </label>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Stock Limit</label>
                                          <div className="flex items-center space-x-2">
                                            <input 
                                              type="number" 
                                              value={editingPrizeData.unlimitedStock ? '' : editingPrizeData.stockLimit} 
                                              onChange={(e) => handleUpdateEditingPrizeData('stockLimit', e.target.value)} 
                                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter stock limit"
                                              min="0" 
                                              disabled={editingPrizeData.unlimitedStock} 
                                            />
                                            <label className="flex items-center text-sm">
                                              <input 
                                                type="checkbox" 
                                                checked={editingPrizeData.unlimitedStock} 
                                                onChange={(e) => handleUpdateEditingPrizeData('unlimitedStock', e.target.checked)} 
                                                className="mr-1" 
                                              />
                                              Unlimited
                                            </label>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                                          <div className="relative">
                                            <input 
                                              type="date" 
                                              value={editingPrizeData.startDate} 
                                              onChange={(e) => handleUpdateEditingPrizeData('startDate', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                                          <div className="relative">
                                            <input 
                                              type="date" 
                                              value={editingPrizeData.endDate} 
                                              onChange={(e) => handleUpdateEditingPrizeData('endDate', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                                          <select
                                            value={editingPrizeData.refreshPeriod}
                                            onChange={(e) => handleUpdateEditingPrizeData('refreshPeriod', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          >
                                            <option value="">None</option>
                                            <option value="daily">Daily</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Requirements Section */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-purple-600" />
                                        Requirements
                                      </h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Category <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <input
                                            type="text"
                                            value={editingPrizeData.reqCategory}
                                            onChange={(e) => handleUpdateEditingPrizeData('reqCategory', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Tags <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <div className="relative">
                                            <input
                                              type="text"
                                              value={editingPrizeData.reqTags}
                                              onChange={(e) => handleUpdateEditingPrizeData('reqTags', e.target.value)}
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Required tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Level <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <input
                                            type="number"
                                            value={editingPrizeData.level}
                                            onChange={(e) => handleUpdateEditingPrizeData('level', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Minimum level required"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Mission <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <input
                                            type="text"
                                            value={editingPrizeData.mission}
                                            onChange={(e) => handleUpdateEditingPrizeData('mission', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required mission"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Achievement <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">(Optional)</span></label>
                                          <input
                                            type="text"
                                            value={editingPrizeData.achievement}
                                            onChange={(e) => handleUpdateEditingPrizeData('achievement', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required achievement"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                                      <button
                                        onClick={handleCancelEditPrize}
                                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={handleSaveEditPrize}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PaginationControls currentPage={prizesPage} totalPages={getTotalPages(prizesList)} onPageChange={(newPage) => setPrizesPage(newPage)} />
                </div>

                {/* Divider between Prizes and Raffles */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Raffles Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search raffles..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4" onClick={() => setAddRaffleOpen(true)}>
                      Add Raffle
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Raffle
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Credits
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Entries
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Draw Date
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getPageItems(rafflesList, rafflesPage).map((raffle, index) => (
                          <React.Fragment key={index}>
                            <tr 
                              className={`hover:bg-gray-50 cursor-pointer ${editingRaffleId === raffle.id ? 'bg-blue-50' : ''}`}
                              onClick={() => editingRaffleId === raffle.id ? handleCancelEditRaffle() : handleStartEditRaffle(raffle)}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {raffle.image ? (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                      <img
                                        src={raffle.image}
                                        alt={raffle.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                          e.target.nextSibling.style.display = 'flex';
                                        }}
                                      />
                                      <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                        <Ticket className="w-4 h-4" />
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                      <Ticket className="w-4 h-4" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{raffle.name}</div>
                                    <div className="text-sm text-gray-500">{raffle.description}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {raffle.credits}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {raffle.entries}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {raffle.drawDate}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  raffle.status === 'Active' ? 'bg-green-100 text-green-800' :
                                  raffle.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {raffle.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                <div className="flex items-center justify-center space-x-2">
                                  <button 
                                    className="text-gray-600 hover:text-gray-900"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (editingRaffleId === raffle.id) {
                                        handleCancelEditRaffle();
                                      } else {
                                        handleStartEditRaffle(raffle);
                                      }
                                    }}
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button 
                                    className="text-red-600 hover:text-red-900"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteRaffle(raffle);
                                    }}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            
                            {/* Expandable Edit Section */}
                            {editingRaffleId === raffle.id && (
                              <tr>
                                <td colSpan="6" className="px-6 py-4 bg-gray-50">
                                  <div className="space-y-6">
                                    {/* Raffle Details Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Ticket className="w-5 h-5 mr-2 text-blue-600" />
                                        Raffle Details
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                          <input
                                            type="text"
                                            value={editingRaffleData.id || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('id', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter raffle ID"
                                            required
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                          <input
                                            type="text"
                                            value={editingRaffleData.name || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter raffle name"
                                            required
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <textarea
                                            value={editingRaffleData.description || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('description', e.target.value)}
                                            rows="3"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter raffle description"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Raffle Image
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="space-y-4">
                                            {/* File Upload Section */}
                                            <div className="flex items-center space-x-4">
                                              <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                                <input
                                                  type="file"
                                                  accept="image/*"
                                                  onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                      const reader = new FileReader();
                                                      reader.onload = (event) => {
                                                        handleUpdateEditingRaffleData('image', event.target.result);
                                                      };
                                                      reader.readAsDataURL(file);
                                                    }
                                                  }}
                                                  className="hidden"
                                                />
                                                <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                                <span className="text-gray-600">Browse for image</span>
                                              </label>
                                              {editingRaffleData.image && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleUpdateEditingRaffleData('image', '')}
                                                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                                >
                                                  Remove
                                                </button>
                                              )}
                                            </div>
                                            
                                            {/* Image Preview */}
                                            {editingRaffleData.image && (
                                              <div className="relative">
                                                <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                  <img
                                                    src={editingRaffleData.image}
                                                    alt="Raffle preview"
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                              </div>
                                            )}
                                            
                                            {/* URL Input (fallback) */}
                                            <div>
                                              <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                              <input 
                                                value={editingRaffleData.image || ''} 
                                                onChange={(e) => handleUpdateEditingRaffleData('image', e.target.value)} 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter image URL (optional if file uploaded)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingRaffleData.category || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('category', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input
                                              type="text"
                                              value={editingRaffleData.tags || ''}
                                              onChange={(e) => handleUpdateEditingRaffleData('tags', e.target.value)}
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Credits</label>
                                          <div className="relative">
                                            <input
                                              type="number"
                                              value={editingRaffleData.credits || ''}
                                              onChange={(e) => handleUpdateEditingRaffleData('credits', e.target.value)}
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter credits cost"
                                              min="0"
                                              required
                                            />
                                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Requirements Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-purple-600" />
                                        Requirements
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingRaffleData.reqCategory || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('reqCategory', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input
                                              type="text"
                                              value={editingRaffleData.reqTags || ''}
                                              onChange={(e) => handleUpdateEditingRaffleData('reqTags', e.target.value)}
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Required tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Level
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="number"
                                            value={editingRaffleData.level || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('level', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Minimum level required"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mission
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingRaffleData.mission || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('mission', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required mission"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Achievement
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingRaffleData.achievement || ''}
                                            onChange={(e) => handleUpdateEditingRaffleData('achievement', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required achievement"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                                      <button
                                        type="button"
                                        onClick={handleCancelEditRaffle}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        onClick={handleSaveEditRaffle}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PaginationControls currentPage={rafflesPage} totalPages={getTotalPages(rafflesList)} onPageChange={(newPage) => setRafflesPage(newPage)} />
                </div>

                {/* Divider between Raffles and Mystery Rewards */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Mystery Rewards Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search mystery rewards..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4" onClick={() => setAddMysteryBoxOpen(true)}>
                      Add Mystery Win
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mystery Reward
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Credits
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Available
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Redeemed
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getPageItems(mysteryBoxesList, mysteryBoxesPage).map((box, index) => (
                          <React.Fragment key={index}>
                            <tr 
                              className={`hover:bg-gray-50 cursor-pointer ${editingMysteryBoxId === box.id ? 'bg-blue-50' : ''}`}
                              onClick={() => editingMysteryBoxId === box.id ? handleCancelEditMysteryBox() : handleStartEditMysteryBox(box)}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {box.image ? (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                      <img
                                        src={box.image}
                                        alt={box.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                          e.target.nextSibling.style.display = 'flex';
                                        }}
                                      />
                                      <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                        <Box className="w-4 h-4" />
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                      <Box className="w-4 h-4" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{box.name}</div>
                                    <div className="text-sm text-gray-500">{box.description}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {box.credits}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {box.available}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {box.redeemed}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  box.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {box.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                <div className="flex items-center justify-center space-x-2">
                                  <button 
                                    className="text-gray-600 hover:text-gray-900"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (editingMysteryBoxId === box.id) {
                                        handleCancelEditMysteryBox();
                                      } else {
                                        handleStartEditMysteryBox(box);
                                      }
                                    }}
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button 
                                    className="text-red-600 hover:text-red-900"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteMysteryBox(box);
                                    }}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {editingMysteryBoxId === box.id && (
                              <tr>
                                <td colSpan="6" className="px-6 py-4 bg-gray-50">
                                  <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
                                    {/* Mystery Reward Details Section */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Box className="w-5 h-5 mr-2 text-blue-600" />
                                        Mystery Reward Details
                                      </h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                          <input 
                                            value={editingMysteryBoxData.id} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('id', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter reward ID"
                                            required 
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                          <input 
                                            value={editingMysteryBoxData.name} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('name', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter reward name"
                                            required 
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <textarea 
                                            value={editingMysteryBoxData.description} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('description', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter reward description"
                                            rows="3"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Image
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            value={editingMysteryBoxData.image} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('image', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter image URL"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            value={editingMysteryBoxData.category} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('category', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input 
                                              value={editingMysteryBoxData.tags} 
                                              onChange={(e) => handleUpdateEditingMysteryBoxData('tags', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Credits</label>
                                          <div className="relative">
                                            <input 
                                              type="number" 
                                              value={editingMysteryBoxData.credits} 
                                              onChange={(e) => handleUpdateEditingMysteryBoxData('credits', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter credits cost"
                                              min="0" 
                                              required
                                            />
                                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Requirements Section */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-purple-600" />
                                        Requirements
                                      </h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            value={editingMysteryBoxData.reqCategory} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('reqCategory', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input 
                                              value={editingMysteryBoxData.reqTags} 
                                              onChange={(e) => handleUpdateEditingMysteryBoxData('reqTags', e.target.value)} 
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Required tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Level
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            type="number" 
                                            value={editingMysteryBoxData.reqLevel} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('reqLevel', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Minimum level required"
                                            min="0"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Missions
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            value={editingMysteryBoxData.reqMission} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('reqMission', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required missions (comma separated)"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Achievements
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            value={editingMysteryBoxData.reqAchievement} 
                                            onChange={(e) => handleUpdateEditingMysteryBoxData('reqAchievement', e.target.value)} 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Required achievements (comma separated)"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                      <button
                                        onClick={handleCancelEditMysteryBox}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={handleSaveEditMysteryBox}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PaginationControls currentPage={mysteryBoxesPage} totalPages={getTotalPages(mysteryBoxesList)} onPageChange={(newPage) => setMysteryBoxesPage(newPage)} />
                </div>
              </div>
            )}

            {activeTab === 'teams' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search teams..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4"
                    onClick={() => setAddTeamOpen(true)}
                  >
                    Add Team
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Members
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {teams.map((team, index) => (
                        <React.Fragment key={index}>
                          <tr 
                            className="hover:bg-gray-50 cursor-pointer" 
                            onClick={() => {
                              if (editingTeamId === team.id) {
                                handleCancelEditTeam();
                              } else {
                                handleStartEditTeam(team);
                              }
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-12 h-12 rounded-lg overflow-hidden">
                                  <img
                                    src={team.image}
                                    alt={team.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{team.name}</div>
                                  <div className="text-sm text-gray-500">{team.description || 'No description'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {team.members}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {team.points.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {team.credits?.toLocaleString?.() ?? team.credits ?? 0}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button 
                                  className="text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleStartEditTeam(team);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                          {/* Expandable Edit Section */}
                          {editingTeamId === team.id && (
                            <tr>
                              <td colSpan="5" className="px-6 py-4 bg-gray-50">
                                <div className="space-y-6">
                                  {/* Team Details Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Users2 className="w-5 h-5 mr-2 text-blue-600" />
                                      Team Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                        <input
                                          type="text"
                                          value={editingTeamData.id || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('id', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter team ID"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                          type="text"
                                          value={editingTeamData.name || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('name', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter team name"
                                          required
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Description
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <textarea
                                          value={editingTeamData.description || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('description', e.target.value)}
                                          rows={3}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter team description"
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Team Image
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="space-y-4">
                                          {/* File Upload Section */}
                                          <div className="flex items-center space-x-4">
                                            <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                              <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                  const file = e.target.files[0];
                                                  if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                      handleUpdateEditingTeamData('image', event.target.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                  }
                                                }}
                                                className="hidden"
                                              />
                                              <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                              <span className="text-gray-600">Browse for image</span>
                                            </label>
                                            {editingTeamData.image && (
                                              <button
                                                type="button"
                                                onClick={() => handleUpdateEditingTeamData('image', '')}
                                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                              >
                                                Remove
                                              </button>
                                            )}
                                          </div>
                                          
                                          {/* Image Preview */}
                                          {editingTeamData.image && (
                                            <div className="relative">
                                              <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                <img
                                                  src={editingTeamData.image}
                                                  alt="Team preview"
                                                  className="w-full h-full object-cover"
                                                />
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingTeamData.category || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('category', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingTeamData.tags || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('tags', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter tags (comma separated)"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Points
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingTeamData.points || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('points', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter points"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Credits
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingTeamData.credits || ''}
                                          onChange={(e) => handleUpdateEditingTeamData('credits', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter credits"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                    <button
                                      onClick={handleCancelEditTeam}
                                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={handleSaveEditTeam}
                                      className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'streaks' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search streaks..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium" onClick={() => setAddStreakOpen(true)}>
                    Add Streak
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Streak
                        </th>

                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Target
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {getPageItems(streaksList, streaksPage).map((streak, index) => (
                        <React.Fragment key={index}>
                          <tr 
                            className="hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                              if (editingStreakId === streak.id) {
                                handleCancelEditStreak();
                              } else {
                                handleStartEditStreak(streak);
                              }
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {streak.image ? (
                                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                      src={streak.image}
                                      alt={streak.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                      <Activity className="w-4 h-4" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                    <Activity className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{streak.name}</div>
                                  <div className="text-sm text-gray-500">{streak.description}</div>
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {streak.targetStreak} days
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {streak.points}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {streak.credits}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                streak.status === 'Active' ? 'bg-green-100 text-green-800' :
                                streak.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                                streak.status === 'Broken' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {streak.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button 
                                  className="text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (editingStreakId === streak.id) {
                                      handleCancelEditStreak();
                                    } else {
                                      handleStartEditStreak(streak);
                                    }
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                          {/* Inline Edit Row */}
                          {editingStreakId === streak.id && (
                            <tr>
                              <td colSpan="6" className="px-6 py-4 bg-gray-50">
                                <div className="space-y-6">
                                  {/* Streak Details Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Activity className="w-5 h-5 mr-2 text-blue-600" />
                                      Streak Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                        <input 
                                          value={editingStreakData.id} 
                                          onChange={(e) => handleUpdateEditingStreakData('id', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter streak ID"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input 
                                          value={editingStreakData.name} 
                                          onChange={(e) => handleUpdateEditingStreakData('name', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter streak name"
                                          required
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Description
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <textarea 
                                          value={editingStreakData.description} 
                                          onChange={(e) => handleUpdateEditingStreakData('description', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter streak description"
                                          rows="3"
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Streak Image
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="space-y-4">
                                          {/* File Upload Section */}
                                          <div className="flex items-center space-x-4">
                                            <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                              <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                  const file = e.target.files[0];
                                                  if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                      handleUpdateEditingStreakData('image', event.target.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                  }
                                                }}
                                                className="hidden"
                                              />
                                              <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                              <span className="text-gray-600">Browse for image</span>
                                            </label>
                                            {editingStreakData.image && (
                                              <button
                                                type="button"
                                                onClick={() => handleUpdateEditingStreakData('image', '')}
                                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                              >
                                                Remove
                                              </button>
                                            )}
                                          </div>
                                          
                                          {/* Image Preview */}
                                          {editingStreakData.image && (
                                            <div className="relative">
                                              <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                <img
                                                  src={editingStreakData.image}
                                                  alt="Streak preview"
                                                  className="w-full h-full object-cover"
                                                />
                                              </div>
                                            </div>
                                          )}
                                          
                                          {/* URL Input (fallback) */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                            <input 
                                              name="image" 
                                              value={editingStreakData.image || ''} 
                                              onChange={(e) => handleUpdateEditingStreakData('image', e.target.value)} 
                                              className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              placeholder="Enter image URL (optional if file uploaded)"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input 
                                          value={editingStreakData.category} 
                                          onChange={(e) => handleUpdateEditingStreakData('category', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="relative">
                                          <input 
                                            value={editingStreakData.tags} 
                                            onChange={(e) => handleUpdateEditingStreakData('tags', e.target.value)}
                                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter tags (comma separated)"
                                          />
                                          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Limits & Settings Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                                      Limits & Settings
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Restrict Streak</label>
                                        <select
                                          value={editingStreakData.restrictStreak}
                                          onChange={(e) => handleUpdateEditingStreakData('restrictStreak', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                          <option value="unlimited">Unlimited</option>
                                          <option value="1">1</option>
                                          <option value="5">5</option>
                                          <option value="10">10</option>
                                          <option value="25">25</option>
                                          <option value="50">50</option>
                                          <option value="100">100</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Priority
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingStreakData.priority}
                                          onChange={(e) => handleUpdateEditingStreakData('priority', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                          <option value="Low">Low</option>
                                          <option value="Medium">Medium</option>
                                          <option value="High">High</option>
                                          <option value="Critical">Critical</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                                        <div className="relative">
                                          <input
                                            type="date"
                                            value={editingStreakData.startDate}
                                            onChange={(e) => handleUpdateEditingStreakData('startDate', e.target.value)}
                                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            required
                                          />
                                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                                        <div className="relative">
                                          <input
                                            type="date"
                                            value={editingStreakData.endDate}
                                            onChange={(e) => handleUpdateEditingStreakData('endDate', e.target.value)}
                                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            required
                                          />
                                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                                        <div className="relative">
                                          <select
                                            value={editingStreakData.refreshPeriod}
                                            onChange={(e) => handleUpdateEditingStreakData('refreshPeriod', e.target.value)}
                                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          >
                                            <option value="None">None</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                          </select>
                                          <RefreshCw className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Objectives Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Zap className="w-5 h-5 mr-2 text-orange-600" />
                                      Objectives
                                    </h4>
                                    <div className="grid grid-cols-1 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Mission</label>
                                        <select
                                          value={editingStreakData.selectedMission}
                                          onChange={(e) => handleUpdateEditingStreakData('selectedMission', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                          <option value="">Select a mission</option>
                                          <option value="daily_checkin">Daily Check-in</option>
                                          <option value="social_share">Social Share</option>
                                          <option value="refer_friend">Refer a Friend</option>
                                          <option value="complete_profile">Complete Profile</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Rewards Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Star className="w-5 h-5 mr-2 text-yellow-600" />
                                      Rewards
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Points
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingStreakData.points}
                                          onChange={(e) => handleUpdateEditingStreakData('points', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter points"
                                          min="0"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Credits
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="relative">
                                          <input
                                            type="number"
                                            value={editingStreakData.credits}
                                            onChange={(e) => handleUpdateEditingStreakData('credits', e.target.value)}
                                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter credits"
                                            min="0"
                                          />
                                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Achievements
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingStreakData.achievements}
                                          onChange={(e) => handleUpdateEditingStreakData('achievements', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter achievements"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Number of Steps Granted
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingStreakData.stepsGranted}
                                          onChange={(e) => handleUpdateEditingStreakData('stepsGranted', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter steps granted"
                                          min="0"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                                    <button
                                      onClick={handleCancelEditStreak}
                                      className="px-4 py-2 border border-gray-300 rounded-3xl text-gray-700 hover:bg-gray-50"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={handleSaveEditStreak}
                                      className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                <PaginationControls currentPage={streaksPage} totalPages={getTotalPages(streaks)} onPageChange={(newPage) => setStreaksPage(newPage)} />
              </div>
            )}

            {activeTab === 'missions' && (
              <div>
                {/* Events Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search events..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4" onClick={() => setAddEventOpen(true)}>
                      Add Event
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Event
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created On
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getPageItems(eventsList, eventsPage).map((event, index) => (
                          <React.Fragment key={index}>
                            <tr
                              className="hover:bg-gray-50 cursor-pointer"
                              onClick={() => {
                                if (editingEventId === event.id) {
                                  handleCancelEditEvent();
                                } else {
                                  handleStartEditEvent(event);
                                }
                              }}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {event.image ? (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                      <img
                                        src={event.image}
                                        alt={event.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                          e.target.nextSibling.style.display = 'flex';
                                        }}
                                      />
                                      <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                        <ZapIcon className="w-4 h-4" />
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                      <ZapIcon className="w-4 h-4" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{event.name}</div>
                                    <div className="text-sm text-gray-500">{event.description}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {event.createdOn}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                <div className="flex items-center justify-center space-x-2">
                                  <button
                                    className="text-gray-600 hover:text-gray-900"
                                    onClick={() => {
                                      if (editingEventId === event.id) {
                                        handleCancelEditEvent();
                                      } else {
                                        handleStartEditEvent(event);
                                      }
                                    }}
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button className="text-red-600 hover:text-red-900">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {editingEventId === event.id && (
                              <tr>
                                <td colSpan="4" className="px-6 py-4 bg-gray-50">
                                  <div className="space-y-6">
                                    {/* Event Details Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Zap className="w-5 h-5 mr-2 text-blue-600" />
                                        Event Details
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                          <input
                                            type="text"
                                            value={editingEventData.id || ''}
                                            onChange={(e) => handleUpdateEditingEventData('id', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter event ID"
                                            required
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                          <input
                                            type="text"
                                            value={editingEventData.name || ''}
                                            onChange={(e) => handleUpdateEditingEventData('name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter event name"
                                            required
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <textarea
                                            value={editingEventData.description || ''}
                                            onChange={(e) => handleUpdateEditingEventData('description', e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter event description"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Event Image
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="space-y-4">
                                            {/* File Upload Section */}
                                            <div className="flex items-center space-x-4">
                                              <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                                <input
                                                  type="file"
                                                  accept="image/*"
                                                  onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                      const reader = new FileReader();
                                                      reader.onload = (event) => {
                                                        handleUpdateEditingEventData('image', event.target.result);
                                                      };
                                                      reader.readAsDataURL(file);
                                                    }
                                                  }}
                                                  className="hidden"
                                                />
                                                <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                                <span className="text-gray-600">Browse for image</span>
                                              </label>
                                              {editingEventData.image && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleUpdateEditingEventData('image', '')}
                                                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                                >
                                                  Remove
                                                </button>
                                              )}
                                            </div>
                                            
                                            {/* Image Preview */}
                                            {editingEventData.image && (
                                              <div className="relative">
                                                <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                  <img
                                                    src={editingEventData.image}
                                                    alt="Event preview"
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                              </div>
                                            )}
                                            
                                            {/* URL Input (fallback) */}
                                            <div>
                                              <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                              <input 
                                                name="image" 
                                                value={editingEventData.image || ''} 
                                                onChange={(e) => handleUpdateEditingEventData('image', e.target.value)} 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter image URL (optional if file uploaded)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingEventData.category || ''}
                                            onChange={(e) => handleUpdateEditingEventData('category', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input
                                              type="text"
                                              value={editingEventData.tags || ''}
                                              onChange={(e) => handleUpdateEditingEventData('tags', e.target.value)}
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Limits & Rewards Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-green-600" />
                                        Limits & Rewards
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Restrict Completions</label>
                                          <select
                                            value={editingEventData.restrictCompletions || 'unlimited'}
                                            onChange={(e) => handleUpdateEditingEventData('restrictCompletions', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          >
                                            <option value="unlimited">Unlimited</option>
                                            <option value="1">1 per user</option>
                                            <option value="3">3 per user</option>
                                            <option value="5">5 per user</option>
                                            <option value="10">10 per user</option>
                                          </select>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Points
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="number"
                                            value={editingEventData.points || ''}
                                            onChange={(e) => handleUpdateEditingEventData('points', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter points"
                                            min="0"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Credits
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input
                                              type="number"
                                              value={editingEventData.credits || ''}
                                              onChange={(e) => handleUpdateEditingEventData('credits', e.target.value)}
                                              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter credits"
                                              min="0"
                                            />
                                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Achievements Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-purple-600" />
                                        Achievements
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Achievements
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingEventData.achievements || ''}
                                            onChange={(e) => handleUpdateEditingEventData('achievements', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter achievements"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Number of Steps Granted
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="number"
                                            value={editingEventData.stepsGranted || ''}
                                            onChange={(e) => handleUpdateEditingEventData('stepsGranted', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter steps granted"
                                            min="0"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-3">
                                      <button
                                        onClick={handleCancelEditEvent}
                                        className="px-4 py-2 border border-gray-300 rounded-3xl text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={handleSaveEditEvent}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PaginationControls currentPage={eventsPage} totalPages={getTotalPages(eventsList)} onPageChange={(newPage) => setEventsPage(newPage)} />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Missions Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search missions..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-3 px-4" onClick={() => setAddMissionOpen(true)}>
                      Add Mission
                    </button>
                  </div>


                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mission
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Points
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Credits
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getPageItems(missionsList, missionsPage).map((mission, index) => (
                          <React.Fragment key={index}>
                            <tr 
                              className="hover:bg-gray-50 cursor-pointer" 
                              onClick={() => {
                                if (editingMissionId === mission.id) {
                                  handleCancelEditMission();
                                } else {
                                  handleStartEditMission(mission);
                                }
                              }}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {mission.image ? (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                      <img
                                        src={mission.image}
                                        alt={mission.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                          e.target.nextSibling.style.display = 'flex';
                                        }}
                                      />
                                      <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                        <Flag className="w-4 h-4" />
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                      <Flag className="w-4 h-4" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{mission.name}</div>
                                    <div className="text-sm text-gray-500">{mission.description}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {mission.pointsAwarded || 0}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                {mission.creditsEarned || 0}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  mission.status === 'Active' ? 'bg-green-100 text-green-800' :
                                  mission.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                                  mission.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {mission.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                <div className="flex items-center justify-center space-x-2">
                                  <button 
                                    className="text-gray-600 hover:text-gray-900"
                                    onClick={() => handleStartEditMission(mission)}
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button className="text-red-600 hover:text-red-900">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            
                            {/* Expandable Edit Section */}
                            {editingMissionId === mission.id && (
                              <tr>
                                <td colSpan="5" className="px-6 py-4 bg-gray-50">
                                  <div className="space-y-6">
                                    {/* Mission Details Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Flag className="w-5 h-5 mr-2 text-blue-600" />
                                        Mission Details
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                          <input
                                            type="text"
                                            value={editingMissionData.id || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('id', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter mission ID"
                                            required
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                          <input
                                            type="text"
                                            value={editingMissionData.name || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter mission name"
                                            required
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <textarea
                                            value={editingMissionData.description || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('description', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter mission description"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mission Image
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="space-y-4">
                                            {/* File Upload Section */}
                                            <div className="flex items-center space-x-4">
                                              <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                                <input
                                                  type="file"
                                                  accept="image/*"
                                                  onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                      const reader = new FileReader();
                                                      reader.onload = (event) => {
                                                        handleUpdateEditingMissionData('image', event.target.result);
                                                      };
                                                      reader.readAsDataURL(file);
                                                    }
                                                  }}
                                                  className="hidden"
                                                />
                                                <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                                <span className="text-gray-600">Browse for image</span>
                                              </label>
                                              {editingMissionData.image && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleUpdateEditingMissionData('image', '')}
                                                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                                >
                                                  Remove
                                                </button>
                                              )}
                                            </div>
                                            
                                            {/* Image Preview */}
                                            {editingMissionData.image && (
                                              <div className="relative">
                                                <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                  <img
                                                    src={editingMissionData.image}
                                                    alt="Mission preview"
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                              </div>
                                            )}
                                            
                                            {/* URL Input (fallback) */}
                                            <div>
                                              <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                              <input 
                                                name="image" 
                                                value={editingMissionData.image || ''} 
                                                onChange={(e) => handleUpdateEditingMissionData('image', e.target.value)} 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                placeholder="Enter image URL (optional if file uploaded)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            value={editingMissionData.category || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('category', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input
                                              type="text"
                                              value={editingMissionData.tags?.join(', ') || ''}
                                              onChange={(e) => handleUpdateEditingMissionData('tags', e.target.value.split(',').map(tag => tag.trim()))}
                                              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              placeholder="Enter tags (comma separated)"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Limits & Settings Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-green-600" />
                                        Limits & Settings
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Restrict Completions</label>
                                          <select
                                            value={editingMissionData.maxCompletions === -1 ? 'unlimited' : editingMissionData.maxCompletions || 'unlimited'}
                                            onChange={(e) => handleUpdateEditingMissionData('maxCompletions', e.target.value === 'unlimited' ? -1 : parseInt(e.target.value) || 0)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          >
                                            <option value="unlimited">Unlimited</option>
                                            <option value="1">1 per user</option>
                                            <option value="3">3 per user</option>
                                            <option value="5">5 per user</option>
                                            <option value="10">10 per user</option>
                                          </select>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Priority
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <select
                                            value={editingMissionData.priority || 'medium'}
                                            onChange={(e) => handleUpdateEditingMissionData('priority', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          >
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="critical">Critical</option>
                                          </select>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                                          <div className="relative">
                                            <input 
                                              name="startDate" 
                                              type="date" 
                                              value={editingMissionData.startDate || ''} 
                                              onChange={(e) => handleUpdateEditingMissionData('startDate', e.target.value)} 
                                              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              required 
                                            />
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                                          <div className="relative">
                                            <input 
                                              name="endDate" 
                                              type="date" 
                                              value={editingMissionData.endDate || ''} 
                                              onChange={(e) => handleUpdateEditingMissionData('endDate', e.target.value)} 
                                              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              required 
                                            />
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                                          <div className="relative">
                                            <select
                                              name="refreshPeriod"
                                              value={editingMissionData.refreshPeriod || 'none'}
                                              onChange={(e) => handleUpdateEditingMissionData('refreshPeriod', e.target.value)}
                                              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            >
                                              <option value="none">None</option>
                                              <option value="daily">Daily</option>
                                              <option value="weekly">Weekly</option>
                                              <option value="monthly">Monthly</option>
                                            </select>
                                            <RefreshCw className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Objectives Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Zap className="w-5 h-5 mr-2 text-orange-600" />
                                        Objectives
                                      </h4>
                                      <div className="grid grid-cols-1 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Event
                                          </label>
                                          <select
                                            value={editingMissionData.objectivesEvent || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('objectivesEvent', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          >
                                            <option value="">Select an event</option>
                                            <option value="daily_checkin">Daily Check-in</option>
                                            <option value="weekly_challenge">Weekly Challenge</option>
                                            <option value="monthly_goal">Monthly Goal</option>
                                            <option value="special_event">Special Event</option>
                                          </select>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Quiz
                                          </label>
                                          <select
                                            value={editingMissionData.objectivesQuiz || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('objectivesQuiz', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          >
                                            <option value="">Select a quiz</option>
                                            <option value="product_knowledge">Product Knowledge</option>
                                            <option value="safety_training">Safety Training</option>
                                            <option value="compliance_test">Compliance Test</option>
                                            <option value="skill_assessment">Skill Assessment</option>
                                          </select>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Survey
                                          </label>
                                          <select
                                            value={editingMissionData.objectivesSurvey || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('objectivesSurvey', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          >
                                            <option value="">Select a survey</option>
                                            <option value="customer_satisfaction">Customer Satisfaction</option>
                                            <option value="employee_feedback">Employee Feedback</option>
                                            <option value="market_research">Market Research</option>
                                            <option value="product_feedback">Product Feedback</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Rewards Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Star className="w-5 h-5 mr-2 text-yellow-600" />
                                        Rewards
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Points
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input 
                                            name="points" 
                                            type="number" 
                                            value={editingMissionData.pointsAwarded || ''} 
                                            onChange={(e) => handleUpdateEditingMissionData('pointsAwarded', parseInt(e.target.value) || 0)} 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter points"
                                            min="0" 
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Credits
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input 
                                              name="credits" 
                                              type="number" 
                                              value={editingMissionData.creditsEarned || ''} 
                                              onChange={(e) => handleUpdateEditingMissionData('creditsEarned', parseInt(e.target.value) || 0)} 
                                              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              placeholder="Enter credits"
                                              min="0" 
                                            />
                                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Achievements
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            name="achievements"
                                            value={editingMissionData.achievements || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('achievements', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter achievements"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Number of Steps Granted
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="number"
                                            name="stepsGranted"
                                            value={editingMissionData.stepsGranted || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('stepsGranted', parseInt(e.target.value) || 0)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter steps granted"
                                            min="0"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Requirements Section */}
                                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-purple-600" />
                                        Requirements
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            name="requirements.category"
                                            value={editingMissionData.requirementsCategory || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('requirementsCategory', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter required category"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tags
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <div className="relative">
                                            <input
                                              type="text"
                                              name="requirements.tags"
                                              value={editingMissionData.requirementsTags?.join(', ') || ''}
                                              onChange={(e) => handleUpdateEditingMissionData('requirementsTags', e.target.value.split(',').map(tag => tag.trim()))}
                                              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                              placeholder="Enter required tags"
                                            />
                                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Level
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="number"
                                            name="requirements.level"
                                            value={editingMissionData.requirementsLevel || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('requirementsLevel', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter required level"
                                            min="0"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mission
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            name="requirements.mission"
                                            value={editingMissionData.requirementsMission || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('requirementsMission', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter required mission"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Achievement
                                            <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                              (Optional)
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            name="requirements.achievement"
                                            value={editingMissionData.requirementsAchievement || ''}
                                            onChange={(e) => handleUpdateEditingMissionData('requirementsAchievement', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter required achievement"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                                      <button
                                        onClick={handleCancelEditMission}
                                        className="px-4 py-2 border border-gray-300 rounded-3xl text-gray-700 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={handleSaveEditMission}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PaginationControls currentPage={missionsPage} totalPages={getTotalPages(missionsList)} onPageChange={(newPage) => setMissionsPage(newPage)} />
                </div>
              </div>
            )}

            {activeTab === 'levels' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search levels..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setAddLevelOpen(true)}
                  >
                    Add Level
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ordinal
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points Required
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {levelsList.map((level, index) => (
                        <React.Fragment key={level.level || index}>
                          <tr 
                            className="hover:bg-gray-50 cursor-pointer" 
                            onClick={() => {
                              if (editingLevelId === level.level) {
                                handleCancelEditLevel();
                              } else {
                                handleStartEditLevel(level);
                              }
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {level.image ? (
                                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                      src={level.image}
                                      alt={level.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                      <Layers className="w-4 h-4" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                    <Layers className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{level.name}</div>
                                  <div className="text-sm text-gray-500">{level.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                              {level.level || index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {(level.requiredPoints || level.pointsRequired || 0).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button 
                                  className="text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleStartEditLevel(level);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button 
                                  className="text-red-600 hover:text-red-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteLevel(level);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                          {/* Expandable Edit Section */}
                          {editingLevelId === level.level && (
                            <tr>
                              <td colSpan="4" className="px-6 py-4 bg-gray-50">
                                <div className="space-y-6">
                                  {/* Level Details Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Layers className="w-5 h-5 mr-2 text-blue-600" />
                                      Level Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                        <input
                                          type="text"
                                          value={editingLevelData.id || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('id', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter level ID"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                          type="text"
                                          value={editingLevelData.name || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('name', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter level name"
                                          required
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Description
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <textarea
                                          value={editingLevelData.description || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('description', e.target.value)}
                                          rows={3}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter level description"
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Image
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="space-y-4">
                                          {/* File Upload Section */}
                                          <div className="flex items-center space-x-4">
                                            <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                              <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                  const file = e.target.files[0];
                                                  if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                      handleUpdateEditingLevelData('image', event.target.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                  }
                                                }}
                                                className="hidden"
                                              />
                                              <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                              <span className="text-gray-600">Browse for image</span>
                                            </label>
                                            {editingLevelData.image && (
                                              <button
                                                type="button"
                                                onClick={() => handleUpdateEditingLevelData('image', '')}
                                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                              >
                                                Remove
                                              </button>
                                            )}
                                          </div>
                                          
                                          {/* Image Preview */}
                                          {editingLevelData.image && (
                                            <div className="relative">
                                              <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                <img
                                                  src={editingLevelData.image}
                                                  alt="Level preview"
                                                  className="w-full h-full object-cover"
                                                />
                                              </div>
                                            </div>
                                          )}
                                          
                                          {/* URL Input (fallback) */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                            <input 
                                              name="image" 
                                              value={editingLevelData.image || ''} 
                                              onChange={(e) => handleUpdateEditingLevelData('image', e.target.value)} 
                                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter image URL (optional if file uploaded)"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingLevelData.category || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('category', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingLevelData.tags || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('tags', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter tags (comma separated)"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Ordinal</label>
                                        <input
                                          type="number"
                                          value={editingLevelData.ordinal || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('ordinal', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter level number"
                                          min="1"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Objectives Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                                      Objectives
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Points</label>
                                        <input
                                          type="number"
                                          value={editingLevelData.points || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('points', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter points required"
                                          min="0"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Credits</label>
                                        <input
                                          type="number"
                                          value={editingLevelData.credits || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('credits', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter credits required"
                                          min="0"
                                          required
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Achievement</label>
                                        <select
                                          value={editingLevelData.selectAchievement || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('selectAchievement', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          required
                                        >
                                          <option value="">Select an achievement</option>
                                          <option value="first_blood">First Blood</option>
                                          <option value="social_butterfly">Social Butterfly</option>
                                          <option value="team_player">Team Player</option>
                                          <option value="quiz_master">Quiz Master</option>
                                          <option value="level_50">Level 50</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Rewards Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Gift className="w-5 h-5 mr-2 text-blue-600" />
                                      Rewards
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Points
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingLevelData.rewardPoints || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('rewardPoints', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter reward points"
                                          min="0"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Credits
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingLevelData.rewardCredits || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('rewardCredits', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter reward credits"
                                          min="0"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Achievements
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingLevelData.rewardAchievements || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('rewardAchievements', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                          <option value="">Select an achievement</option>
                                          <option value="level_complete">Level Complete</option>
                                          <option value="milestone_reached">Milestone Reached</option>
                                          <option value="progress_master">Progress Master</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Steps Granted</label>
                                        <input
                                          type="number"
                                          value={editingLevelData.stepsGranted || ''}
                                          onChange={(e) => handleUpdateEditingLevelData('stepsGranted', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter steps granted"
                                          min="0"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                                    <button
                                      type="button"
                                      onClick={handleCancelEditLevel}
                                      className="px-6 py-3 text-gray-600 border border-gray-300 rounded-3xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="button"
                                      onClick={handleSaveEditLevel}
                                      className="px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'leaderboards' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search leaderboards..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setAddLeaderboardOpen(true)}
                  >
                    Add Leaderboard
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Leaderboard
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Period
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Participants
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leaderboardsList.map((leaderboard, index) => (
                        <React.Fragment key={leaderboard.id || index}>
                          <tr 
                            className="hover:bg-gray-50 cursor-pointer" 
                            onClick={(e) => {
                              // Prevent row click if clicking on a button, input, or select
                              if (
                                e.target.closest('button') ||
                                e.target.closest('input') ||
                                e.target.closest('select')
                              ) return;
                              if (editingLeaderboardId === leaderboard.id) {
                                handleCancelEditLeaderboard();
                              } else {
                                handleStartEditLeaderboard(leaderboard);
                              }
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    src={leaderboard.image}
                                    alt={leaderboard.name}
                                    className="h-10 w-10 rounded-lg object-cover"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {leaderboard.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {leaderboard.description || 'No description'}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {leaderboard.period}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {leaderboard.participants?.toLocaleString?.() ?? leaderboard.participants ?? 0}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleStartEditLeaderboard(leaderboard);
                                  }}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteLeaderboard(leaderboard);
                                  }}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                          {/* Expanded Edit Section */}
                          {editingLeaderboardId === leaderboard.id && (
                            <tr>
                              <td colSpan="4" className="px-6 py-4 bg-gray-50">
                                <div className="space-y-6">
                                              {/* Basic Information Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                Basic Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                  <input
                    type="text"
                    value={editingLeaderboardData.id || ''}
                    onChange={(e) => handleUpdateEditingLeaderboardData('id', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter leaderboard ID"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={editingLeaderboardData.name || ''}
                    onChange={(e) => handleUpdateEditingLeaderboardData('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter leaderboard name"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                    <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    value={editingLeaderboardData.description || ''}
                    onChange={(e) => handleUpdateEditingLeaderboardData('description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter leaderboard description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                    <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={editingLeaderboardData.category || ''}
                    onChange={(e) => handleUpdateEditingLeaderboardData('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter category"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                    <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={editingLeaderboardData.tags || ''}
                    onChange={(e) => handleUpdateEditingLeaderboardData('tags', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter tags (comma separated)"
                  />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
                Image
                <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                  (Optional)
                </span>
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <input
                    type="text"
                    value={editingLeaderboardData.image || ''}
                    onChange={(e) => handleUpdateEditingLeaderboardData('image', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter image URL"
                  />
                </div>
                {editingLeaderboardData.image && (
                  <div className="relative">
                    <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                      <img
                        src={editingLeaderboardData.image}
                        alt="Leaderboard preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

                                  {/* Leaderboard Configuration Section */}
                                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                                      Leaderboard Configuration
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                                        <select
                                          value={editingLeaderboardData.sortBy || 'points'}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('sortBy', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                          <option value="points">Points</option>
                                          <option value="credits">Credits</option>
                                          <option value="missions">Missions</option>
                                          <option value="achievements">Achievements</option>
                                          <option value="streaks">Streaks</option>
                                          <option value="levels">Levels</option>
                                          <option value="activity">Activity</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Leaderboard Units</label>
                                        <select
                                          value={editingLeaderboardData.leaderboardUnits || 'points'}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('leaderboardUnits', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                          <option value="points">Points</option>
                                          <option value="credits">Credits</option>
                                          <option value="missions">Missions</option>
                                          <option value="achievements">Achievements</option>
                                          <option value="streaks">Streaks</option>
                                          <option value="levels">Levels</option>
                                          <option value="percentage">Percentage</option>
                                          <option value="time">Time</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Schedule Section */}
                                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                                      Schedule
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                                        <input
                                          type="date"
                                          value={editingLeaderboardData.startDate || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('startDate', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                                        <input
                                          type="date"
                                          value={editingLeaderboardData.endDate || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('endDate', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                                        <select
                                          value={editingLeaderboardData.refreshPeriod || 'none'}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('refreshPeriod', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                          <option value="none">None</option>
                                          <option value="daily">Daily</option>
                                          <option value="weekly">Weekly</option>
                                          <option value="monthly">Monthly</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="mt-6">
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mission Specific
                                        <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                          (Optional)
                                        </span>
                                      </label>
                                      <select
                                        value={editingLeaderboardData.missionSpecific || ''}
                                        onChange={(e) => handleUpdateEditingLeaderboardData('missionSpecific', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      >
                                        <option value="">Select a mission (optional)</option>
                                        <option value="mission_1">Daily Check-in</option>
                                        <option value="mission_2">Weekly Goal</option>
                                        <option value="mission_3">Monthly Challenge</option>
                                        <option value="mission_4">Team Collaboration</option>
                                        <option value="mission_5">Learning Path</option>
                                      </select>
                                    </div>
                                  </div>

                                  {/* Requirements Section */}
                                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                                      Requirements
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingLeaderboardData.requirementsCategory || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('requirementsCategory', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="Enter requirements category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingLeaderboardData.requirementsTags || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('requirementsTags', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="Enter requirements tags"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Select Level
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingLeaderboardData.selectLevel || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('selectLevel', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                          <option value="">Select a level (optional)</option>
                                          <option value="level_1">Level 1 - Beginner</option>
                                          <option value="level_2">Level 2 - Novice</option>
                                          <option value="level_3">Level 3 - Intermediate</option>
                                          <option value="level_4">Level 4 - Advanced</option>
                                          <option value="level_5">Level 5 - Expert</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Select Mission
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingLeaderboardData.selectMission || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('selectMission', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                          <option value="">Select a mission (optional)</option>
                                          <option value="mission_1">Daily Check-in</option>
                                          <option value="mission_2">Weekly Goal</option>
                                          <option value="mission_3">Monthly Challenge</option>
                                          <option value="mission_4">Team Collaboration</option>
                                          <option value="mission_5">Learning Path</option>
                                        </select>
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Select Achievement
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingLeaderboardData.selectAchievement || ''}
                                          onChange={(e) => handleUpdateEditingLeaderboardData('selectAchievement', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                          <option value="">Select an achievement (optional)</option>
                                          <option value="first_blood">First Blood</option>
                                          <option value="social_butterfly">Social Butterfly</option>
                                          <option value="team_player">Team Player</option>
                                          <option value="quiz_master">Quiz Master</option>
                                          <option value="level_50">Level 50</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCancelEditLeaderboard();
                                      }}
                                      className="px-4 py-2 text-gray-600 border border-gray-300 rounded-3xl hover:bg-gray-50 transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSaveEditLeaderboard();
                                      }}
                                      className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'quizzes' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search quizzes..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setAddQuizOpen(true)}
                  >
                    Create Quiz
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quiz
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Questions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Participants
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {quizzesList.map((quiz, index) => (
                        <tr key={quiz.id || index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-lg">🧠</span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {editingQuizId === quiz.id ? (
                                    <input
                                      type="text"
                                      value={editingQuizData.name || ''}
                                      onChange={(e) => handleUpdateEditingQuizData('name', e.target.value)}
                                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                  ) : (
                                    quiz.name
                                  )}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {editingQuizId === quiz.id ? (
                                    <input
                                      type="text"
                                      value={editingQuizData.description || ''}
                                      onChange={(e) => handleUpdateEditingQuizData('description', e.target.value)}
                                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Description"
                                    />
                                  ) : (
                                    quiz.description || 'No description'
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {editingQuizId === quiz.id ? (
                              <input
                                type="text"
                                value={editingQuizData.category || ''}
                                onChange={(e) => handleUpdateEditingQuizData('category', e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              quiz.category || 'General'
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {editingQuizId === quiz.id ? (
                              <input
                                type="number"
                                value={editingQuizData.questions || ''}
                                onChange={(e) => handleUpdateEditingQuizData('questions', e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              quiz.questions
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {editingQuizId === quiz.id ? (
                              <input
                                type="number"
                                value={editingQuizData.participants || ''}
                                onChange={(e) => handleUpdateEditingQuizData('participants', e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              quiz.participants.toLocaleString()
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {editingQuizId === quiz.id ? (
                              <select
                                value={editingQuizData.status || 'active'}
                                onChange={(e) => handleUpdateEditingQuizData('status', e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="draft">Draft</option>
                                <option value="completed">Completed</option>
                              </select>
                            ) : (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                quiz.status === 'Active' || quiz.status === 'active' ? 'bg-green-100 text-green-800' :
                                quiz.status === 'Completed' || quiz.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                quiz.status === 'Draft' || quiz.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {quiz.status}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {editingQuizId === quiz.id ? (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={handleSaveEditQuiz}
                                  className="text-green-600 hover:text-green-900"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={handleCancelEditQuiz}
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleStartEditQuiz(quiz)}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteQuiz(quiz)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search achievements..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setAddAchievementOpen(true)}
                  >
                    Add Achievement
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Achievement
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Granted
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {achievementsList.map((achievement, index) => (
                        <React.Fragment key={index}>
                          <tr 
                            className="hover:bg-gray-50 cursor-pointer" 
                            onClick={() => {
                              if (editingAchievementId === achievement.name) {
                                handleCancelEditAchievement();
                              } else {
                                handleStartEditAchievement(achievement);
                              }
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {achievement.image ? (
                                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                      src={achievement.image} 
                                      alt={achievement.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    <div className="w-full h-full bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium" style={{ display: 'none' }}>
                                      <Medal className="w-4 h-4" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium">
                                    <Medal className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{achievement.name}</div>
                                  <div className="text-sm text-gray-500">{achievement.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {achievement.points.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {achievement.credits ? achievement.credits.toLocaleString() : '0'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {achievement.earned.toLocaleString()} players
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <button 
                                  className="text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleStartEditAchievement(achievement);
                                  }}
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          
                          {/* Expandable Edit Section */}
                          {editingAchievementId === achievement.name && (
                            <tr>
                              <td colSpan="5" className="px-6 py-4 bg-gray-50">
                                <div className="space-y-6">
                                  {/* Achievement Details Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Medal className="w-5 h-5 mr-2 text-blue-600" />
                                      Achievement Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.id || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('id', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter achievement ID"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.name || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('name', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter achievement name"
                                          required
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Description
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <textarea
                                          value={editingAchievementData.description || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('description', e.target.value)}
                                          rows={3}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter achievement description"
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Image
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <div className="space-y-4">
                                          {/* File Upload Section */}
                                          <div className="flex items-center space-x-4">
                                            <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                              <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                  const file = e.target.files[0];
                                                  if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                      handleUpdateEditingAchievementData('image', event.target.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                  }
                                                }}
                                                className="hidden"
                                              />
                                              <Upload className="w-5 h-5 mr-2 text-gray-400" />
                                              <span className="text-gray-600">Browse for image</span>
                                            </label>
                                            {editingAchievementData.image && (
                                              <button
                                                type="button"
                                                onClick={() => handleUpdateEditingAchievementData('image', '')}
                                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                              >
                                                Remove
                                              </button>
                                            )}
                                          </div>
                                          
                                          {/* Image Preview */}
                                          {editingAchievementData.image && (
                                            <div className="relative">
                                              <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                                                <img
                                                  src={editingAchievementData.image}
                                                  alt="Achievement preview"
                                                  className="w-full h-full object-cover"
                                                />
                                              </div>
                                            </div>
                                          )}
                                          
                                          {/* URL Input (fallback) */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                                            <input 
                                              name="image" 
                                              value={editingAchievementData.image || ''} 
                                              onChange={(e) => handleUpdateEditingAchievementData('image', e.target.value)} 
                                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Enter image URL (optional if file uploaded)"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.category || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('category', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.tags || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('tags', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter tags (comma separated)"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Steps Required</label>
                                        <input
                                          type="number"
                                          value={editingAchievementData.stepsRequired || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('stepsRequired', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter steps required"
                                          min="1"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Rewards Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Gift className="w-5 h-5 mr-2 text-green-600" />
                                      Rewards
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Points
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingAchievementData.points || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('points', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter points"
                                          min="0"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Credits
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          value={editingAchievementData.credits || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('credits', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter credits"
                                          min="0"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Achievements
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.achievements || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('achievements', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter achievements"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Steps Granted</label>
                                        <input
                                          type="number"
                                          value={editingAchievementData.stepsGranted || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('stepsGranted', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter steps granted"
                                          min="0"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Requirements Section */}
                                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                      <Target className="w-5 h-5 mr-2 text-purple-600" />
                                      Requirements
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Category
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.requirementsCategory || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('requirementsCategory', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter required category"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Tags
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={editingAchievementData.requirementsTags || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('requirementsTags', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Enter required tags (comma separated)"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Select Level
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingAchievementData.requirementsLevel || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('requirementsLevel', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                          <option value="">Select level</option>
                                          <option value="1">Level 1</option>
                                          <option value="2">Level 2</option>
                                          <option value="3">Level 3</option>
                                          <option value="4">Level 4</option>
                                          <option value="5">Level 5</option>
                                          <option value="10">Level 10</option>
                                          <option value="25">Level 25</option>
                                          <option value="50">Level 50</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Select Mission
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingAchievementData.requirementsMission || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('requirementsMission', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                          <option value="">Select mission</option>
                                          <option value="daily_checkin">Daily Check-in</option>
                                          <option value="social_share">Social Share</option>
                                          <option value="refer_friend">Refer a Friend</option>
                                          <option value="complete_profile">Complete Profile</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          Select Achievement
                                          <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                                            (Optional)
                                          </span>
                                        </label>
                                        <select
                                          value={editingAchievementData.requirementsAchievement || ''}
                                          onChange={(e) => handleUpdateEditingAchievementData('requirementsAchievement', e.target.value)}
                                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                          <option value="">Select achievement</option>
                                          <option value="first_blood">First Blood</option>
                                          <option value="social_butterfly">Social Butterfly</option>
                                          <option value="team_player">Team Player</option>
                                          <option value="quiz_master">Quiz Master</option>
                                          <option value="level_50">Level 50</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                    <button
                                      onClick={handleCancelEditAchievement}
                                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={handleSaveEditAchievement}
                                      className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'surveys' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search surveys..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button 
                    className="px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setAddSurveyOpen(true)}
                  >
                    Create Survey
                  </button>
                </div>

                {/* Surveys Table */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Survey
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Participants
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {surveysList.map((survey) => (
                          <React.Fragment key={survey.id}>
                            {editingSurveyId === survey.id ? (
                              <tr className="bg-blue-50">
                                <td colSpan="8" className="px-6 py-4">
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                      <div className="md:col-span-2 lg:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Survey Name</label>
                                        <input
                                          type="text"
                                          value={editingSurveyData.name || ''}
                                          onChange={(e) => handleUpdateEditingSurveyData('name', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter survey name"
                                          required
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                        <input
                                          type="text"
                                          value={editingSurveyData.category || ''}
                                          onChange={(e) => handleUpdateEditingSurveyData('category', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter category"
                                        />
                                      </div>

                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Participants</label>
                                        <input
                                          type="number"
                                          value={editingSurveyData.participants || ''}
                                          onChange={(e) => handleUpdateEditingSurveyData('participants', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter participants"
                                          min="0"
                                        />
                                      </div>

                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                                        <input
                                          type="number"
                                          value={editingSurveyData.duration || ''}
                                          onChange={(e) => handleUpdateEditingSurveyData('duration', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter duration"
                                          min="1"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                        <select
                                          value={editingSurveyData.status || 'active'}
                                          onChange={(e) => handleUpdateEditingSurveyData('status', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                          <option value="active">Active</option>
                                          <option value="inactive">Inactive</option>
                                          <option value="draft">Draft</option>
                                          <option value="completed">Completed</option>
                                        </select>
                                      </div>
                                      <div className="md:col-span-2 lg:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                          value={editingSurveyData.description || ''}
                                          onChange={(e) => handleUpdateEditingSurveyData('description', e.target.value)}
                                          rows="3"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter survey description"
                                        />
                                      </div>
                                      <div className="md:col-span-2 lg:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Rewards</label>
                                        <input
                                          type="text"
                                          value={editingSurveyData.rewards || ''}
                                          onChange={(e) => handleUpdateEditingSurveyData('rewards', e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                          placeholder="Enter rewards description"
                                        />
                                      </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                      <button
                                        onClick={handleCancelEditSurvey}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 transition-colors"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={handleSaveEditSurvey}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
                                      >
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ) : (
                              <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap max-w-xs">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                        <span className="text-lg">📊</span>
                                      </div>
                                    </div>
                                    <div className="ml-4 min-w-0 flex-1">
                                      <div className="text-sm font-medium text-gray-900 truncate">{survey.name}</div>
                                      <div className="text-sm text-gray-500 truncate">{survey.description}</div>
                                    </div>
                                  </div>
                                </td>
                                                                 <td className="px-6 py-4 whitespace-nowrap">
                                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                     {survey.category}
                                   </span>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                   {survey.participants}
                                 </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    survey.status === 'active' ? 'bg-green-100 text-green-800' :
                                    survey.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                    survey.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {survey.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <div className="flex items-center space-x-2">
                                    <button
                                      onClick={() => handleStartEditSurvey(survey)}
                                      className="text-blue-600 hover:text-blue-900"
                                    >
                                      <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteSurvey(survey)}
                                      className="text-red-600 hover:text-red-900"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Platform Settings</h3>
                <p className="text-gray-600">Configure your gamification platform settings.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <AddPrizeModal open={addPrizeOpen} onClose={() => setAddPrizeOpen(false)} onSave={handleAddPrize} />
      <AddRaffleModal open={addRaffleOpen} onClose={() => setAddRaffleOpen(false)} onSave={handleAddRaffle} />
      <AddMysteryBoxModal isOpen={addMysteryBoxOpen} onClose={() => setAddMysteryBoxOpen(false)} onAdd={handleAddMysteryBox} />
      <AddEventModal open={addEventOpen} onClose={() => setAddEventOpen(false)} onSave={handleAddEvent} />
      <AddMissionModal open={addMissionOpen} onClose={() => setAddMissionOpen(false)} onSave={handleAddMission} />
      <AddPlayerModal open={addPlayerOpen} onClose={() => setAddPlayerOpen(false)} onSave={handleAddPlayer} />
      <AddTeamModal open={addTeamOpen} onClose={() => setAddTeamOpen(false)} onSave={handleAddTeam} />
      <AddStreakModal open={addStreakOpen} onClose={() => setAddStreakOpen(false)} onSave={handleAddStreak} />
      <AddAchievementModal open={addAchievementOpen} onClose={() => setAddAchievementOpen(false)} onSave={handleAddAchievement} />
                      <AddLevelModal open={addLevelOpen} onClose={() => setAddLevelOpen(false)} onSave={handleAddLevel} />
      <AddLeaderboardModal isOpen={addLeaderboardOpen} onClose={() => setAddLeaderboardOpen(false)} onAdd={handleAddLeaderboard} />
      <AddQuizModal isOpen={addQuizOpen} onClose={() => setAddQuizOpen(false)} onAdd={handleAddQuiz} />
      <AddSurveyModal isOpen={addSurveyOpen} onClose={() => setAddSurveyOpen(false)} onAdd={handleAddSurvey} />
      
      <EditPrizeModal 
        open={editPrizeOpen} 
        onClose={() => {
          setEditPrizeOpen(false);
          setSelectedPrize(null);
        }} 
        onSave={handleEditPrize}
        onDelete={handleDeletePrize}
        prize={selectedPrize}
      />
      <EditRaffleModal 
        open={editRaffleOpen} 
        onClose={() => {
          setEditRaffleOpen(false);
          setSelectedRaffle(null);
        }} 
        onSave={handleEditRaffle}
        onDelete={handleDeleteRaffle}
        raffle={selectedRaffle}
      />
      <EditMysteryBoxModal 
        open={editMysteryBoxOpen} 
        onClose={() => {
          setEditMysteryBoxOpen(false);
          setSelectedMysteryBox(null);
        }} 
        onSave={handleEditMysteryBox}
        onDelete={handleDeleteMysteryBox}
        mysteryBox={selectedMysteryBox}
      />
      <EditEventModal 
        open={editEventOpen} 
        onClose={() => {
          setEditEventOpen(false);
          setSelectedEvent(null);
        }} 
        onSave={handleEditEvent}
        onDelete={handleDeleteEvent}
        event={selectedEvent}
      />
      <EditMissionModal 
        open={editMissionOpen} 
        onClose={() => {
          setEditMissionOpen(false);
          setSelectedMission(null);
        }} 
        onSave={handleEditMission}
        onDelete={handleDeleteMission}
        mission={selectedMission}
      />

      {/* Guide Modal */}
      {guideModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Mission Creation Guide</h2>
              <button
                onClick={() => setGuideModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {guideStep === 1 && (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Create Your First Mission</h3>
                    <p className="text-gray-600 mb-6">Follow this step-by-step guide to create engaging missions for your users.</p>
                  </div>

                  {/* Animation Container */}
                  <div className="relative bg-gray-50 rounded-xl p-8 mb-8 min-h-[400px]">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Step 1: Create an Event</h4>
                      <p className="text-gray-600">First, you'll need to create an event that will power your mission.</p>
                    </div>

                    {/* Simulated Dashboard Interface */}
                    <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
                      <div className="flex items-center space-x-3 mb-4">
                        <ZapIcon className="w-6 h-6 text-primary-600" />
                        <h5 className="text-lg font-semibold text-gray-900">Events</h5>
                      </div>
                      <p className="text-gray-600 mb-4">Use events to power your missions</p>
                      
                      <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                              placeholder="Search events..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              disabled
                      />
                    </div>
                          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm" disabled>
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                        
                        {/* Animated Create Event Button */}
                        <motion.button 
                          className="bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-2 px-4 relative"
                          animate={{
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                          onClick={handleGuideCreateEvent}
                        >
                          Add Event
                          <motion.div
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.7, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-white rounded-full"
                              animate={{
                                scale: [1, 1.2, 1]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </motion.button>
                      </div>
                </div>

                    {/* Animation Instructions */}
                    <div className="text-center mt-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg"
                      >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Click the "Add Event" button to get started
                      </motion.div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Add an Event</p>
                          <p className="text-gray-600 text-sm">Define the event that will trigger your mission completion</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Add a Mission</p>
                          <p className="text-gray-600 text-sm">Set up the mission with rewards, requirements, and duration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                          3
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Launch & Monitor</p>
                          <p className="text-gray-600 text-sm">Activate your mission and track user engagement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {guideStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Add an Event</h3>
                    <p className="text-gray-600">Let's create your first event. I'll help you fill out the form!</p>
                  </div>

                  {/* Embedded Create Event Modal */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="bg-white rounded-lg shadow-sm">
                      {/* Header */}
                      <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900">Add New Event</h2>
                        <div className="w-8 h-8"></div> {/* Spacer for alignment */}
                      </div>

                      <form className="p-6 space-y-8">
                        {/* Event Details Section */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-blue-600" />
                            Event Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'id' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'id' ? typedText : (typingProgress.id ? 'daily_checkin' : '')}
                                </span>
                                {currentTypingField === 'id' && <BlinkingCursor />}
                              </div>
                              {typingProgress.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'name' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'name' ? typedText : (typingProgress.name ? 'Daily Check-in' : '')}
                                </span>
                                {currentTypingField === 'name' && <BlinkingCursor />}
                              </div>
                              {typingProgress.name && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="md:col-span-2 relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 min-h-[80px] ${currentTypingField === 'description' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'description' ? typedText : (typingProgress.description ? 'Complete your daily check-in to earn rewards and maintain your streak' : '')}
                                </span>
                                {currentTypingField === 'description' && <BlinkingCursor />}
                              </div>
                              {typingProgress.description && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'category' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'category' ? typedText : (typingProgress.category ? 'Engagement' : '')}
                                </span>
                                {currentTypingField === 'category' && <BlinkingCursor />}
                              </div>
                              {typingProgress.category && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'tags' ? 'border-blue-500' : ''}`}>
                                <Tag className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-900">
                                  {currentTypingField === 'tags' ? typedText : (typingProgress.tags ? 'daily, check-in, engagement, streak' : '')}
                                </span>
                                {currentTypingField === 'tags' && <BlinkingCursor />}
                              </div>
                              {typingProgress.tags && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Limits & Rewards Section */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-green-600" />
                            Limits & Rewards
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Restrict Completions</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'restrictCompletions' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'restrictCompletions' ? typedText : (typingProgress.restrictCompletions ? '1 per user' : '')}
                                </span>
                                {currentTypingField === 'restrictCompletions' && <BlinkingCursor />}
                              </div>
                              {typingProgress.restrictCompletions && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                          Points
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'points' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'points' ? typedText : (typingProgress.points ? '50' : '')}
                                </span>
                                {currentTypingField === 'points' && <BlinkingCursor />}
                                  </div>
                              {typingProgress.points && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                                </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Credits
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'credits' ? 'border-blue-500' : ''}`}>
                                <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-900">
                                  {currentTypingField === 'credits' ? typedText : (typingProgress.credits ? '25' : '')}
                                </span>
                                {currentTypingField === 'credits' && <BlinkingCursor />}
                                </div>
                              {typingProgress.credits && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                              </div>
                          </div>
                        </div>

                        {/* Achievements Section */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-purple-600" />
                            Achievements
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Achievements
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'achievements' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'achievements' ? typedText : (typingProgress.achievements ? 'Daily Check-in Master' : '')}
                              </span>
                                {currentTypingField === 'achievements' && <BlinkingCursor />}
                              </div>
                              {typingProgress.achievements && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Steps Granted
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentTypingField === 'stepsGranted' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentTypingField === 'stepsGranted' ? typedText : (typingProgress.stepsGranted ? '1' : '')}
                                </span>
                                {currentTypingField === 'stepsGranted' && <BlinkingCursor />}
                              </div>
                              {typingProgress.stepsGranted && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                          <button
                            type="button"
                            onClick={() => setGuideStep(1)}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            ← Back
                                </button>
                          <div className="flex items-center space-x-4">
                            {/* Progress indicator */}
                            <div className="text-sm text-gray-500">
                              {Object.values(typingProgress).filter(Boolean).length} / {Object.keys(typingProgress).length} fields completed
                              </div>
                            <motion.button
                              type="button"
                              className={`relative ${Object.values(typingProgress).every(Boolean) ? 'bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors text-sm font-medium py-2 px-4' : 'bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-2 rounded-3xl'}`}
                              animate={Object.values(typingProgress).every(Boolean) ? {
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                ]
                              } : {}}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                              onClick={Object.values(typingProgress).every(Boolean) ? handleGuideEventCreated : undefined}
                              disabled={!Object.values(typingProgress).every(Boolean)}
                            >
                              Create Event
                              {Object.values(typingProgress).every(Boolean) && (
                                <motion.div
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                                  initial={{ scale: 0 }}
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [1, 0.7, 1],
                                    boxShadow: [
                                      "0 0 0 0 rgba(239, 68, 68, 0.7)",
                                      "0 0 0 10px rgba(239, 68, 68, 0)",
                                      "0 0 0 0 rgba(239, 68, 68, 0.7)"
                                    ]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <motion.div
                                    className="w-2 h-2 bg-white rounded-full"
                                    animate={{
                                      scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                </motion.div>
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {guideStep === 4 && (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Great! You now have an event to power your mission
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-600 mb-8"
                  >
                    Let's create a mission together
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="btn-primary relative"
                    onClick={handleGuideCreateMission}
                  >
                    Add Mission
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.7)",
                          "0 0 0 10px rgba(239, 68, 68, 0)",
                          "0 0 0 0 rgba(239, 68, 68, 0.7)"
                        ]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </motion.button>
                </div>
              )}

              {guideStep === 5 && (
                                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Add a Mission</h3>
                    <p className="text-gray-600">Now let's create a mission that uses the event we just created!</p>
                    {currentMissionTypingField && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-blue-600 font-medium"
                      >
                        ✨ Auto-filling form fields...
                      </motion.div>
                    )}
                  </div>

                  {/* Embedded Create Mission Modal */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="bg-white rounded-lg shadow-sm">
                      {/* Header */}
                      <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900">Add New Mission</h2>
                        <div className="w-8 h-8"></div> {/* Spacer for alignment */}
                      </div>

                      <form className="p-6 space-y-8">
                        {/* Mission Details Section */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Flag className="w-5 h-5 mr-2 text-blue-600" />
                            Mission Details
                          </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'id' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'id' ? missionTypedText : (missionTypingProgress.id ? 'daily_checkin_mission' : '')}
                                </span>
                                {currentMissionTypingField === 'id' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'name' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'name' ? missionTypedText : (missionTypingProgress.name ? 'Daily Check-in Mission' : '')}
                                </span>
                                {currentMissionTypingField === 'name' && <BlinkingCursor />}
                                      </div>
                              {missionTypingProgress.name && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="md:col-span-2 relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 min-h-[80px] ${currentMissionTypingField === 'description' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'description' ? missionTypedText : (missionTypingProgress.description ? 'Complete your daily check-in for 7 consecutive days to earn rewards and maintain your streak' : '')}
                                </span>
                                {currentMissionTypingField === 'description' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.description && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="md:col-span-2 relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mission Image
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'image' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'image' ? missionTypedText : (missionTypingProgress.image ? 'https://picsum.photos/400/300?random=20' : '')}
                                </span>
                                {currentMissionTypingField === 'image' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.image && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'category' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'category' ? missionTypedText : (missionTypingProgress.category ? 'Engagement' : '')}
                                </span>
                                {currentMissionTypingField === 'category' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.category && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'tags' ? 'border-blue-500' : ''}`}>
                                <Tag className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'tags' ? missionTypedText : (missionTypingProgress.tags ? 'daily, check-in, engagement, streak, consecutive' : '')}
                                </span>
                                {currentMissionTypingField === 'tags' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.tags && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Limits & Settings Section */}
                                      <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-green-600" />
                            Limits & Settings
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Restrict Completions</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'restrictCompletions' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'restrictCompletions' ? missionTypedText : (missionTypingProgress.restrictCompletions ? '1' : '')}
                                </span>
                                {currentMissionTypingField === 'restrictCompletions' && <BlinkingCursor />}
                                      </div>
                              {missionTypingProgress.restrictCompletions && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                                      </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Priority
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'priority' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'priority' ? missionTypedText : (missionTypingProgress.priority ? 'High' : '')}
                                </span>
                                {currentMissionTypingField === 'priority' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.priority && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'startDate' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'startDate' ? missionTypedText : (missionTypingProgress.startDate ? '2024-01-01' : '')}
                                </span>
                                {currentMissionTypingField === 'startDate' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.startDate && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'endDate' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'endDate' ? missionTypedText : (missionTypingProgress.endDate ? '2024-12-31' : '')}
                                </span>
                                {currentMissionTypingField === 'endDate' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.endDate && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'refreshPeriod' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'refreshPeriod' ? missionTypedText : (missionTypingProgress.refreshPeriod ? 'Daily' : '')}
                                </span>
                                {currentMissionTypingField === 'refreshPeriod' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.refreshPeriod && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Objectives Section */}
                                      <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-blue-600" />
                            Objectives
                          </h3>
                          <div className="space-y-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Event
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'objectivesEvent' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'objectivesEvent' ? missionTypedText : (missionTypingProgress.objectivesEvent ? 'Product Launch' : '')}
                                </span>
                                {currentMissionTypingField === 'objectivesEvent' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.objectivesEvent && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                                      </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Quiz
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'objectivesQuiz' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'objectivesQuiz' ? missionTypedText : (missionTypingProgress.objectivesQuiz ? 'Daily Check-in Quiz' : '')}
                                </span>
                                {currentMissionTypingField === 'objectivesQuiz' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.objectivesQuiz && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Survey
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'objectivesSurvey' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'objectivesSurvey' ? missionTypedText : (missionTypingProgress.objectivesSurvey ? 'User Satisfaction Survey' : '')}
                                </span>
                                {currentMissionTypingField === 'objectivesSurvey' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.objectivesSurvey && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Rewards Section */}
                                      <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                            Rewards
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Points
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'points' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'points' ? missionTypedText : (missionTypingProgress.points ? '100' : '')}
                                </span>
                                {currentMissionTypingField === 'points' && <BlinkingCursor />}
                                      </div>
                              {missionTypingProgress.points && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Credits
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'credits' ? 'border-blue-500' : ''}`}>
                                <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'credits' ? missionTypedText : (missionTypingProgress.credits ? '50' : '')}
                                </span>
                                {currentMissionTypingField === 'credits' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.credits && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Achievements
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'achievements' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'achievements' ? missionTypedText : (missionTypingProgress.achievements ? 'Daily Check-in Master, Streak Keeper' : '')}
                                </span>
                                {currentMissionTypingField === 'achievements' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.achievements && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Steps Granted
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'stepsGranted' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'stepsGranted' ? missionTypedText : (missionTypingProgress.stepsGranted ? '7' : '')}
                                </span>
                                {currentMissionTypingField === 'stepsGranted' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.stepsGranted && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Requirements Section */}
                                      <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-purple-600" />
                            Requirements
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'requirementsCategory' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'requirementsCategory' ? missionTypedText : (missionTypingProgress.requirementsCategory ? 'Engagement' : '')}
                                </span>
                                {currentMissionTypingField === 'requirementsCategory' && <BlinkingCursor />}
                                      </div>
                              {missionTypingProgress.requirementsCategory && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'requirementsTags' ? 'border-blue-500' : ''}`}>
                                <Tag className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'requirementsTags' ? missionTypedText : (missionTypingProgress.requirementsTags ? 'daily, check-in' : '')}
                                </span>
                                {currentMissionTypingField === 'requirementsTags' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.requirementsTags && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Level
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'requirementsLevel' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'requirementsLevel' ? missionTypedText : (missionTypingProgress.requirementsLevel ? '1' : '')}
                                </span>
                                {currentMissionTypingField === 'requirementsLevel' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.requirementsLevel && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mission
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'requirementsMission' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'requirementsMission' ? missionTypedText : (missionTypingProgress.requirementsMission ? 'daily_checkin' : '')}
                                </span>
                                {currentMissionTypingField === 'requirementsMission' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.requirementsMission && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <div className="relative">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Achievement
                                <motion.span 
                                  className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md"
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.95, 1.05, 0.95],
                                    backgroundColor: ["rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.8)", "rgba(254, 243, 199, 0.3)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  (Optional)
                                </motion.span>
                              </label>
                              <div className={`w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center ${currentMissionTypingField === 'requirementsAchievement' ? 'border-blue-500' : ''}`}>
                                <span className="text-gray-900">
                                  {currentMissionTypingField === 'requirementsAchievement' ? missionTypedText : (missionTypingProgress.requirementsAchievement ? 'First Check-in' : '')}
                                </span>
                                {currentMissionTypingField === 'requirementsAchievement' && <BlinkingCursor />}
                              </div>
                              {missionTypingProgress.requirementsAchievement && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-8 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                  <Check className="w-3 h-3 text-white" />
                                </motion.div>
                              )}
                            </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                    <button
                            type="button"
                            onClick={() => setGuideStep(4)}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                    >
                            ← Back
                                    </button>
                          <div className="flex items-center space-x-4">
                            {/* Progress indicator */}
                            <div className="text-sm text-gray-500">
                              {Object.values(missionTypingProgress).filter(Boolean).length} / {Object.keys(missionTypingProgress).length} fields completed
                            </div>
                            <motion.button
                              type="button"
                              className={`relative ${Object.values(missionTypingProgress).every(Boolean) ? 'btn-primary' : 'bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-2 rounded-xl'}`}
                              initial={Object.values(missionTypingProgress).every(Boolean) ? { scale: 0.8 } : {}}
                              animate={Object.values(missionTypingProgress).every(Boolean) ? {
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                ]
                              } : {}}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                              onClick={Object.values(missionTypingProgress).every(Boolean) ? () => {
                                setGuideStep(6);
                              } : undefined}
                              disabled={!Object.values(missionTypingProgress).every(Boolean)}
                            >
                              Create Mission
                              {Object.values(missionTypingProgress).every(Boolean) && (
                                <motion.div
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                                  initial={{ scale: 0 }}
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [1, 0.7, 1],
                                    boxShadow: [
                                      "0 0 0 0 rgba(239, 68, 68, 0.7)",
                                      "0 0 0 10px rgba(239, 68, 68, 0)",
                                      "0 0 0 0 rgba(239, 68, 68, 0.7)"
                                    ]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <motion.div
                                    className="w-2 h-2 bg-white rounded-full"
                                    animate={{
                                      scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                </motion.div>
                              )}
                            </motion.button>
                                  </div>
                                </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {guideStep === 6 && (
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-8 h-8 text-green-600" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-2xl font-bold text-gray-900 mb-3"
                    >
                      Awesome, you created your first mission!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-gray-600 text-lg mb-8"
                    >
                      Now go and create other mechanics like achievements and levels to engage your users.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="btn-primary relative"
                      onClick={() => setGuideModalOpen(false)}
                    >
                      Close
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(239, 68, 68, 0.7)",
                            "0 0 0 10px rgba(239, 68, 68, 0)",
                            "0 0 0 0 rgba(239, 68, 68, 0.7)"
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 