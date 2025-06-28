import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  Settings, 
  Bell,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Users2,
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
  X
} from 'lucide-react';
import AddPrizeModal from './AddPrizeModal';
import AddRaffleModal from './AddRaffleModal';
import AddMysteryBoxModal from './AddMysteryBoxModal';
import AddEventModal from './AddEventModal';
import AddMissionModal from './AddMissionModal';
import EditPrizeModal from './EditPrizeModal';
import EditRaffleModal from './EditRaffleModal';
import EditMysteryBoxModal from './EditMysteryBoxModal';
import EditEventModal from './EditEventModal';
import EditMissionModal from './EditMissionModal';

const prizes = [
  { name: 'Gift Card $50', description: 'Amazon gift card', value: 50, stock: 25, redeemed: 8, startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active', image: 'https://picsum.photos/400/300?random=1' },
  { name: 'Company Swag', description: 'T-shirt and water bottle', value: 15, stock: 100, redeemed: 45, startDate: '2024-02-01', endDate: '2024-11-30', status: 'Active', image: 'https://picsum.photos/400/300?random=2' },
  { name: 'Premium Subscription', description: '1 month premium access', value: 29, stock: 50, redeemed: 12, startDate: '2024-03-01', endDate: '2024-10-31', status: 'Active', image: 'https://picsum.photos/400/300?random=3' },
  { name: 'Conference Ticket', description: 'Annual conference pass', value: 299, stock: 10, redeemed: 3, startDate: '2024-01-15', endDate: '2024-06-30', status: 'Limited', image: 'https://picsum.photos/400/300?random=4' }
];

const raffles = [
  { name: 'Monthly Grand Prize', description: 'Win a MacBook Pro', credits: 1000, entries: 1247, drawDate: '2024-02-29', startDate: '2024-01-01', endDate: '2024-02-29', status: 'Active', image: 'https://picsum.photos/400/300?random=5' },
  { name: 'Weekly Draw', description: 'Win $100 gift card', credits: 500, entries: 567, drawDate: '2024-02-07', startDate: '2024-01-29', endDate: '2024-02-07', status: 'Active', image: 'https://picsum.photos/400/300?random=6' },
  { name: 'Holiday Special', description: 'Win vacation package', credits: 2000, entries: 234, drawDate: '2024-12-25', startDate: '2024-11-01', endDate: '2024-12-25', status: 'Upcoming', image: 'https://picsum.photos/400/300?random=7' },
  { name: 'Tech Bundle', description: 'Win iPhone + AirPods', credits: 1500, entries: 89, drawDate: '2024-01-15', startDate: '2024-01-01', endDate: '2024-01-15', status: 'Ended', image: 'https://picsum.photos/400/300?random=8' }
];

const mysteryBoxes = [
  { name: 'Common Box', description: 'Basic rewards', credits: 100, available: 1000, redeemed: 753, startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active', image: 'https://picsum.photos/400/300?random=9' },
  { name: 'Rare Box', description: 'Better rewards', credits: 250, available: 500, redeemed: 433, startDate: '2024-02-01', endDate: '2024-11-30', status: 'Active', image: 'https://picsum.photos/400/300?random=10' },
  { name: 'Epic Box', description: 'Premium rewards', credits: 500, available: 200, redeemed: 166, startDate: '2024-03-01', endDate: '2024-10-31', status: 'Active', image: 'https://picsum.photos/400/300?random=11' },
  { name: 'Legendary Box', description: 'Ultimate rewards', credits: 1000, available: 50, redeemed: 11, startDate: '2024-01-15', endDate: '2024-06-30', status: 'Limited', image: 'https://picsum.photos/400/300?random=12' }
];

const missions = [
  { 
    name: 'Daily Check-in', 
    description: 'Complete daily check-in for 7 days', 
    image: 'https://picsum.photos/400/300?random=13',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    createdOn: '2024-01-01',
    status: 'Active',
    pointsAwarded: 100,
    creditsEarned: 50
  },
  { 
    name: 'Social Share', 
    description: 'Share content on social media', 
    image: 'https://picsum.photos/400/300?random=14',
    startDate: '2024-02-01',
    endDate: '2024-11-30',
    createdOn: '2024-02-01',
    status: 'Active',
    pointsAwarded: 250,
    creditsEarned: 100
  },
  { 
    name: 'Refer a Friend', 
    description: 'Invite 3 friends to join', 
    image: 'https://picsum.photos/400/300?random=15',
    startDate: '2024-03-01',
    endDate: '2024-10-31',
    createdOn: '2024-03-01',
    status: 'Upcoming',
    pointsAwarded: 500,
    creditsEarned: 200
  },
  { 
    name: 'Complete Profile', 
    description: 'Fill out your complete profile', 
    image: 'https://picsum.photos/400/300?random=16',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    createdOn: '2024-01-15',
    status: 'Completed',
    pointsAwarded: 150,
    creditsEarned: 75
  }
];

const levels = [
  { level: 1, name: 'Beginner', pointsRequired: 0, users: 1247, rewards: 'Welcome Badge' },
  { level: 2, name: 'Explorer', pointsRequired: 100, users: 892, rewards: 'Bronze Medal' },
  { level: 3, name: 'Adventurer', pointsRequired: 500, users: 567, rewards: 'Silver Medal' },
  { level: 4, name: 'Champion', pointsRequired: 1000, users: 234, rewards: 'Gold Medal' },
  { level: 5, name: 'Master', pointsRequired: 2500, users: 89, rewards: 'Diamond Crown' }
];

const leaderboards = [
  { name: 'Weekly Points', period: 'This Week', participants: 1247, topUser: 'John Doe', topScore: 15420 },
  { name: 'Monthly Activity', period: 'This Month', participants: 892, topUser: 'Jane Smith', topScore: 12850 },
  { name: 'Team Competition', period: 'Ongoing', participants: 234, topUser: 'Alpha Squad', topScore: 45600 },
  { name: 'Mission Completion', period: 'All Time', participants: 567, topUser: 'Mike Johnson', topScore: 45 }
];

const quizzes = [
  { name: 'Product Knowledge', questions: 10, participants: 234, avgScore: 85, status: 'Active' },
  { name: 'Company History', questions: 15, participants: 156, avgScore: 78, status: 'Active' },
  { name: 'Safety Training', questions: 20, participants: 445, avgScore: 92, status: 'Completed' },
  { name: 'Customer Service', questions: 12, participants: 89, avgScore: 81, status: 'Draft' }
];

const achievements = [
  { name: 'First Blood', description: 'Complete your first mission', icon: '🩸', rarity: 'Common', earned: 1247, points: 50 },
  { name: 'Social Butterfly', description: 'Share 10 posts on social media', icon: '🦋', rarity: 'Rare', earned: 567, points: 100 },
  { name: 'Team Player', description: 'Join 5 different teams', icon: '👥', rarity: 'Epic', earned: 234, points: 200 },
  { name: 'Quiz Master', description: 'Score 100% on 5 quizzes', icon: '🧠', rarity: 'Legendary', earned: 89, points: 500 },
  { name: 'Level 50', description: 'Reach level 50', icon: '⭐', rarity: 'Mythic', earned: 12, points: 1000 }
];

const tabs = [
  { id: 'players', name: 'Players', icon: Users },
  { id: 'teams', name: 'Teams', icon: Users2 },
  { id: 'missions', name: 'Missions', icon: Flag },
  { id: 'rewards', name: 'Rewards', icon: Trophy },
  { id: 'achievements', name: 'Achievements', icon: Medal },
  { id: 'levels', name: 'Levels', icon: Layers },
  { id: 'leaderboards', name: 'Leaderboards', icon: Crown },
  { id: 'quizzes', name: 'Quizzes', icon: HelpCircle },
  { id: 'settings', name: 'Settings', icon: Settings }
];

const teams = [
  { name: 'Alpha Squad', members: 12, points: 45600, level: 'Gold', avatar: 'AS' },
  { name: 'Beta Force', members: 8, points: 38900, level: 'Silver', avatar: 'BF' },
  { name: 'Gamma Team', members: 15, points: 52300, level: 'Platinum', avatar: 'GT' },
  { name: 'Delta Unit', members: 6, points: 28700, level: 'Bronze', avatar: 'DU' }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('players');
  const [addPrizeOpen, setAddPrizeOpen] = useState(false);
  const [addRaffleOpen, setAddRaffleOpen] = useState(false);
  const [addMysteryBoxOpen, setAddMysteryBoxOpen] = useState(false);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [addMissionOpen, setAddMissionOpen] = useState(false);
  const [editPrizeOpen, setEditPrizeOpen] = useState(false);
  const [editRaffleOpen, setEditRaffleOpen] = useState(false);
  const [editMysteryBoxOpen, setEditMysteryBoxOpen] = useState(false);
  const [editEventOpen, setEditEventOpen] = useState(false);
  const [editMissionOpen, setEditMissionOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [selectedRaffle, setSelectedRaffle] = useState(null);
  const [selectedMysteryBox, setSelectedMysteryBox] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const [prizesList, setPrizesList] = useState(prizes);
  const [rafflesList, setRafflesList] = useState(raffles);
  const [mysteryBoxesList, setMysteryBoxesList] = useState(mysteryBoxes);
  const [missionsList, setMissionsList] = useState(missions);
  const [eventsList, setEventsList] = useState([
    { name: 'Product Launch', description: 'Launch event for new product', createdOn: '2024-02-15' },
    { name: 'Holiday Campaign', description: 'Special holiday promotion', createdOn: '2024-12-01' },
    { name: 'Team Building', description: 'Team building activities', createdOn: '2024-03-01' }
  ]);
  
  // Pagination states
  const [prizesPage, setPrizesPage] = useState(0);
  const [rafflesPage, setRafflesPage] = useState(0);
  const [mysteryBoxesPage, setMysteryBoxesPage] = useState(0);
  const [eventsPage, setEventsPage] = useState(0);
  const [missionsPage, setMissionsPage] = useState(0);
  const itemsPerPage = 3;

  const stats = [
    { title: 'Players Registered', value: '12,847', subtitle: '8,234 Active', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Missions Started', value: '5,234', subtitle: '3,456 Completed', change: '+18%', icon: Flag, color: 'text-green-600' },
    { title: 'Prizes Claimed', value: '2,847', subtitle: 'Total Claims', change: '+25%', icon: Trophy, color: 'text-yellow-600' },
    { title: 'Achievements Unlocked', value: '8,456', subtitle: '6,234 Granted', change: '+15%', icon: Medal, color: 'text-purple-600' },
    { title: 'Level-Ups', value: '1,234', subtitle: 'Total Promotions', change: '+22%', icon: Star, color: 'text-indigo-600' },
    { title: 'Points Awarded', value: '2.4M', subtitle: 'Total Points', change: '+30%', icon: Zap, color: 'text-orange-600' },
    { title: 'Credits Earned', value: '1.8M', subtitle: 'Total Credits', change: '+28%', icon: DollarSign, color: 'text-emerald-600' },
    { title: 'Streaks Started', value: '3,456', subtitle: '2,123 Active', change: '+8%', icon: Activity, color: 'text-red-600' },
    { title: 'Quizzes Completed', value: '4,567', subtitle: 'Total Quizzes', change: '+12%', icon: BookOpen, color: 'text-teal-600' },
    { title: 'Surveys Completed', value: '2,345', subtitle: 'Total Surveys', change: '+15%', icon: ClipboardCheck, color: 'text-cyan-600' }
  ];

  const topUsers = [
    { name: 'John Doe', points: 15420, level: 15, avatar: 'JD' },
    { name: 'Jane Smith', points: 12850, level: 12, avatar: 'JS' },
    { name: 'Mike Johnson', points: 11230, level: 10, avatar: 'MJ' },
    { name: 'Sarah Wilson', points: 9870, level: 8, avatar: 'SW' },
    { name: 'Alex Brown', points: 8540, level: 7, avatar: 'AB' }
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

  const handlePrizeClick = (prize) => {
    setSelectedPrize(prize);
    setEditPrizeOpen(true);
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

  const handleRaffleClick = (raffle) => {
    setSelectedRaffle(raffle);
    setEditRaffleOpen(true);
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

  const handleMysteryBoxClick = (box) => {
    setSelectedMysteryBox(box);
    setEditMysteryBoxOpen(true);
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

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setEditEventOpen(true);
  };

  const handleAddMission = (mission) => {
    setMissionsList((prev) => [...prev, mission]);
    setAddMissionOpen(false);
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

  const handleMissionClick = (mission) => {
    setSelectedMission(mission);
    setEditMissionOpen(true);
  };

  const handleGuideMe = () => {
    setGuideModalOpen(true);
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
            <button className="btn-primary">
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
                  <p className="text-green-600 text-sm font-medium">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'players' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search players..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <button className="btn-primary">
                    Add Player
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
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
                      {topUsers.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                {user.avatar}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">user@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Level {user.level}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.points.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-primary-600 hover:text-primary-900">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-900">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
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
                    <div className="flex items-center space-x-3">
                      <Gift className="w-6 h-6 text-primary-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Prizes</h3>
                    </div>
                    <button className="btn-primary" onClick={() => setAddPrizeOpen(true)}>
                      Add Prize
                    </button>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search prizes..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getPageItems(prizesList, prizesPage).map((prize, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-0 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handlePrizeClick(prize)}
                      >
                        {prize.image && (
                          <div className="w-full h-48 bg-gray-200 overflow-hidden">
                            <img 
                              src={prize.image} 
                              alt={prize.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <Gift className="w-16 h-16 text-gray-400" />
                            </div>
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-900">{prize.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              prize.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {prize.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{prize.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Credits:</span>
                              <span className="font-medium">${prize.value}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Available:</span>
                              <span className="font-medium">{prize.stock || 0}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Start Date:</span>
                              <span className="font-medium">{prize.startDate || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">End Date:</span>
                              <span className="font-medium">{prize.endDate || 'N/A'}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <PaginationControls currentPage={prizesPage} totalPages={getTotalPages(prizesList)} onPageChange={(newPage) => setPrizesPage(newPage)} />
                </div>

                {/* Divider between Prizes and Raffles */}
                <hr className="my-10 border-t-2 border-blue-100" />

                {/* Raffles Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Ticket className="w-6 h-6 text-primary-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Raffles</h3>
                    </div>
                    <button className="btn-primary" onClick={() => setAddRaffleOpen(true)}>
                      Create Raffle
                    </button>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search raffles..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getPageItems(rafflesList, rafflesPage).map((raffle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-0 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleRaffleClick(raffle)}
                      >
                        {raffle.image && (
                          <div className="w-full h-48 bg-gray-200 overflow-hidden">
                            <img 
                              src={raffle.image} 
                              alt={raffle.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <Ticket className="w-16 h-16 text-gray-400" />
                            </div>
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-900">{raffle.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              raffle.status === 'Active' ? 'bg-green-100 text-green-800' :
                              raffle.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {raffle.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{raffle.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Credits:</span>
                              <span className="font-medium">{raffle.credits}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Entries:</span>
                              <span className="font-medium">{raffle.entries}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Draw Date:</span>
                              <span className="font-medium">{raffle.drawDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Start Date:</span>
                              <span className="font-medium">{raffle.startDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">End Date:</span>
                              <span className="font-medium">{raffle.endDate}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <PaginationControls currentPage={rafflesPage} totalPages={getTotalPages(rafflesList)} onPageChange={(newPage) => setRafflesPage(newPage)} />
                </div>

                {/* Divider between Raffles and Mystery Wins */}
                <hr className="my-10 border-t-2 border-blue-100" />

                {/* Mystery Wins Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Box className="w-6 h-6 text-primary-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Mystery Wins</h3>
                    </div>
                    <button className="btn-primary" onClick={() => setAddMysteryBoxOpen(true)}>
                      Create Mystery Win
                    </button>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search mystery wins..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getPageItems(mysteryBoxesList, mysteryBoxesPage).map((box, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-0 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleMysteryBoxClick(box)}
                      >
                        {box.image && (
                          <div className="w-full h-48 bg-gray-200 overflow-hidden">
                            <img 
                              src={box.image} 
                              alt={box.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <Box className="w-16 h-16 text-gray-400" />
                            </div>
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-900">{box.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              box.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {box.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{box.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Credits:</span>
                              <span className="font-medium">{box.credits}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Available:</span>
                              <span className="font-medium">{box.available}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Start Date:</span>
                              <span className="font-medium">{box.startDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">End Date:</span>
                              <span className="font-medium">{box.endDate}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <PaginationControls currentPage={mysteryBoxesPage} totalPages={getTotalPages(mysteryBoxesList)} onPageChange={(newPage) => setMysteryBoxesPage(newPage)} />
                </div>
              </div>
            )}

            {activeTab === 'teams' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Teams</h3>
                  <button className="btn-primary">
                    Create Team
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teams.map((team, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {team.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{team.name}</h4>
                            <p className="text-sm text-gray-500">{team.members} members</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          team.level === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                          team.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                          team.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {team.level}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{team.points.toLocaleString()}</span>
                        <span className="text-sm text-gray-500">points</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'missions' && (
              <div>
                {/* Events Section */}
                <div className="mb-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <ZapIcon className="w-6 h-6 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Events</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Use events to power your missions</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search events..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <button className="btn-primary" onClick={() => setAddEventOpen(true)}>
                      Create Event
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getPageItems(eventsList, eventsPage).map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-6 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{event.name}</h4>
                          <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <PaginationControls currentPage={eventsPage} totalPages={getTotalPages(eventsList)} onPageChange={(newPage) => setEventsPage(newPage)} />
                </div>

                {/* Divider between Events and Missions */}
                <hr className="my-10 border-t-2 border-blue-100" />

                {/* Missions Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Flag className="w-6 h-6 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Missions</h3>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search missions..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-xl text-sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors" onClick={handleGuideMe}>
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Guide me
                      </button>
                      <button className="btn-primary" onClick={() => setAddMissionOpen(true)}>
                        Create Mission
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getPageItems(missionsList, missionsPage).map((mission, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleMissionClick(mission)}
                      >
                        {mission.image && (
                          <div className="w-full h-48 bg-gray-200 overflow-hidden">
                            <img 
                              src={mission.image} 
                              alt={mission.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <Flag className="w-16 h-16 text-gray-400" />
                            </div>
                          </div>
                        )}
                        <div className="p-6">
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{mission.name}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                mission.status === 'Active' ? 'bg-green-100 text-green-800' :
                                mission.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                                mission.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {mission.status}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{mission.description}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Points Awarded:</span>
                              <span className="font-medium">{mission.pointsAwarded || 0}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Credits Earned:</span>
                              <span className="font-medium">{mission.creditsEarned || 0}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Start Date:</span>
                              <span className="font-medium">{mission.startDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">End Date:</span>
                              <span className="font-medium">{mission.endDate}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <PaginationControls currentPage={missionsPage} totalPages={getTotalPages(missionsList)} onPageChange={(newPage) => setMissionsPage(newPage)} />
                </div>
              </div>
            )}

            {activeTab === 'levels' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Levels</h3>
                  <button className="btn-primary">
                    Add Level
                  </button>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points Required
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Users
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rewards
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {levels.map((level, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                              Level {level.level}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {level.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {level.pointsRequired.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {level.users.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {level.rewards}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'leaderboards' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Leaderboards</h3>
                  <button className="btn-primary">
                    Create Leaderboard
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leaderboards.map((leaderboard, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{leaderboard.name}</h4>
                          <p className="text-sm text-gray-500">{leaderboard.period}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{leaderboard.participants} participants</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                              🏆
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{leaderboard.topUser}</p>
                              <p className="text-sm text-gray-500">Top Score</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">{leaderboard.topScore.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'quizzes' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Quizzes</h3>
                  <button className="btn-primary">
                    Create Quiz
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quizzes.map((quiz, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">{quiz.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          quiz.status === 'Active' ? 'bg-green-100 text-green-800' :
                          quiz.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {quiz.status}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Questions:</span>
                          <span className="font-medium">{quiz.questions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Participants:</span>
                          <span className="font-medium">{quiz.participants}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Avg Score:</span>
                          <span className="font-medium">{quiz.avgScore}%</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <button className="text-primary-600 hover:text-primary-900 text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 text-sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
                  <button className="btn-primary">
                    Create Achievement
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{achievement.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              achievement.rarity === 'Common' ? 'bg-gray-100 text-gray-800' :
                              achievement.rarity === 'Rare' ? 'bg-blue-100 text-blue-800' :
                              achievement.rarity === 'Epic' ? 'bg-purple-100 text-purple-800' :
                              achievement.rarity === 'Legendary' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {achievement.rarity}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Points:</span>
                          <span className="font-medium">{achievement.points}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Earned:</span>
                          <span className="font-medium">{achievement.earned} players</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
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
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      className="btn-primary relative"
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
                      onClick={() => {
                        // Simulate opening the event modal
                        setTimeout(() => {
                          setGuideModalOpen(false);
                          setAddEventOpen(true);
                        }, 500);
                      }}
                    >
                      Create Event
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity
                        }}
                      />
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
                    Click the "Create Event" button to get started
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
                      <p className="font-medium text-gray-900">Create an Event</p>
                      <p className="text-gray-600 text-sm">Define the event that will trigger your mission completion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Create a Mission</p>
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
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 