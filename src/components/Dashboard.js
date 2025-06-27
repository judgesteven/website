import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Trophy, 
  TrendingUp, 
  Settings, 
  Bell,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Target,
  Award,
  Users2,
  Flag,
  Layers,
  Crown,
  HelpCircle,
  Medal,
  Gift,
  Box,
  Ticket
} from 'lucide-react';
import AddPrizeModal from './AddPrizeModal';

const prizes = [
  { name: 'Gift Card $50', description: 'Amazon gift card', value: 50, stock: 25, claimed: 8, status: 'Active' },
  { name: 'Company Swag', description: 'T-shirt and water bottle', value: 15, stock: 100, claimed: 45, status: 'Active' },
  { name: 'Premium Subscription', description: '1 month premium access', value: 29, stock: 50, claimed: 12, status: 'Active' },
  { name: 'Conference Ticket', description: 'Annual conference pass', value: 299, stock: 10, claimed: 3, status: 'Limited' }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [addPrizeOpen, setAddPrizeOpen] = useState(false);
  const [prizesList, setPrizesList] = useState(prizes);

  const stats = [
    { title: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Active Users', value: '8,234', change: '+8%', icon: TrendingUp, color: 'text-green-600' },
    { title: 'Points Awarded', value: '2.4M', change: '+15%', icon: Trophy, color: 'text-yellow-600' },
    { title: 'Engagement Rate', value: '87%', change: '+5%', icon: Target, color: 'text-purple-600' }
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'earned 100 points', time: '2 minutes ago', type: 'points' },
    { user: 'Jane Smith', action: 'achieved "First Blood" badge', time: '5 minutes ago', type: 'badge' },
    { user: 'Mike Johnson', action: 'reached level 5', time: '10 minutes ago', type: 'level' },
    { user: 'Sarah Wilson', action: 'completed daily challenge', time: '15 minutes ago', type: 'challenge' }
  ];

  const topUsers = [
    { name: 'John Doe', points: 15420, level: 15, avatar: 'JD' },
    { name: 'Jane Smith', points: 12850, level: 12, avatar: 'JS' },
    { name: 'Mike Johnson', points: 11230, level: 10, avatar: 'MJ' },
    { name: 'Sarah Wilson', points: 9870, level: 8, avatar: 'SW' },
    { name: 'Alex Brown', points: 8540, level: 7, avatar: 'AB' }
  ];

  const teams = [
    { name: 'Alpha Squad', members: 12, points: 45600, level: 'Gold', avatar: 'AS' },
    { name: 'Beta Force', members: 8, points: 38900, level: 'Silver', avatar: 'BF' },
    { name: 'Gamma Team', members: 15, points: 52300, level: 'Platinum', avatar: 'GT' },
    { name: 'Delta Unit', members: 6, points: 28700, level: 'Bronze', avatar: 'DU' }
  ];

  const missions = [
    { name: 'Daily Check-in', description: 'Complete daily check-in for 7 days', points: 100, status: 'Active', participants: 234 },
    { name: 'Social Share', description: 'Share content on social media', points: 50, status: 'Active', participants: 156 },
    { name: 'Refer a Friend', description: 'Invite 3 friends to join', points: 200, status: 'Active', participants: 89 },
    { name: 'Complete Profile', description: 'Fill out your complete profile', points: 75, status: 'Completed', participants: 445 }
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

  const raffles = [
    { name: 'Monthly Grand Prize', description: 'Win a MacBook Pro', entries: 1247, endDate: '2024-02-29', status: 'Active' },
    { name: 'Weekly Draw', description: 'Win $100 gift card', entries: 567, endDate: '2024-02-07', status: 'Active' },
    { name: 'Holiday Special', description: 'Win vacation package', entries: 234, endDate: '2024-12-25', status: 'Upcoming' },
    { name: 'Tech Bundle', description: 'Win iPhone + AirPods', entries: 89, endDate: '2024-01-15', status: 'Ended' }
  ];

  const mysteryBoxes = [
    { name: 'Common Box', description: 'Basic rewards', price: 100, contents: 'Points, Badges', opened: 1247, status: 'Active' },
    { name: 'Rare Box', description: 'Better rewards', price: 250, contents: 'Points, Badges, Prizes', opened: 567, status: 'Active' },
    { name: 'Epic Box', description: 'Premium rewards', price: 500, contents: 'Points, Badges, Prizes, Gift Cards', opened: 234, status: 'Active' },
    { name: 'Legendary Box', description: 'Ultimate rewards', price: 1000, contents: 'Everything + Special Items', opened: 89, status: 'Limited' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'players', name: 'Players', icon: Users },
    { id: 'teams', name: 'Teams', icon: Users2 },
    { id: 'missions', name: 'Missions', icon: Flag },
    { id: 'rewards', name: 'Rewards', icon: Trophy },
    { id: 'achievements', name: 'Achievements', icon: Medal },
    { id: 'levels', name: 'Levels', icon: Layers },
    { id: 'leaderboards', name: 'Leaderboards', icon: Crown },
    { id: 'quizzes', name: 'Quizzes', icon: HelpCircle },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const handleAddPrize = (prize) => {
    setPrizesList((prev) => [...prev, prize]);
    setAddPrizeOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your gamification platform.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
            <button className="btn-primary">
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <span className="font-semibold">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Top Users */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Top Players</h3>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View leaderboard
                    </button>
                  </div>
                  <div className="space-y-3">
                    {topUsers.map((user, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {user.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">Level {user.level}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-900">{user.points.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">points</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prizesList.map((prize, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-6"
                      >
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
                            <span className="text-gray-500">Value:</span>
                            <span className="font-medium">${prize.value}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Stock:</span>
                            <span className="font-medium">{prize.stock ? prize.stock - (prize.claimed || 0) : (prize.unlimitedStock ? 'Unlimited' : 0)} remaining</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Claimed:</span>
                            <span className="font-medium">{prize.claimed || 0}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <AddPrizeModal open={addPrizeOpen} onClose={() => setAddPrizeOpen(false)} onSave={handleAddPrize} />
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
                    <button className="btn-primary">
                      Create Raffle
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {raffles.map((raffle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-6"
                      >
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
                            <span className="text-gray-500">Entries:</span>
                            <span className="font-medium">{raffle.entries}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">End Date:</span>
                            <span className="font-medium">{raffle.endDate}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Divider between Raffles and Mystery Boxes */}
                <hr className="my-10 border-t-2 border-blue-100" />

                {/* Mystery Boxes Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Box className="w-6 h-6 text-primary-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Mystery Boxes</h3>
                    </div>
                    <button className="btn-primary">
                      Create Box
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mysteryBoxes.map((box, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-6"
                      >
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
                            <span className="text-gray-500">Price:</span>
                            <span className="font-medium">{box.price} points</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Contents:</span>
                            <span className="font-medium">{box.contents}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Opened:</span>
                            <span className="font-medium">{box.opened}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">View detailed analytics and performance metrics.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Platform Settings</h3>
                <p className="text-gray-600">Configure your gamification platform settings.</p>
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Missions</h3>
                  <button className="btn-primary">
                    Create Mission
                  </button>
                </div>
                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{mission.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              mission.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {mission.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{mission.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span>{mission.points} points</span>
                            <span>{mission.participants} participants</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 