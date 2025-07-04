import React, { useState } from 'react';
import { X, Upload, Calendar, Target, Settings, Trophy, Image as ImageIcon } from 'lucide-react';

const AddLeaderboardModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
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
    selectAchievement: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          image: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newLeaderboard = {
      id: formData.id || `leaderboard_${Date.now()}`,
      name: formData.name,
      description: formData.description,
      image: formData.image || 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop&crop=center',
      category: formData.category,
      tags: formData.tags,
      sortBy: formData.sortBy,
      leaderboardUnits: formData.leaderboardUnits,
      startDate: formData.startDate,
      endDate: formData.endDate,
      refreshPeriod: formData.refreshPeriod,
      missionSpecific: formData.missionSpecific,
      requirementsCategory: formData.requirementsCategory,
      requirementsTags: formData.requirementsTags,
      selectLevel: formData.selectLevel,
      selectMission: formData.selectMission,
      selectAchievement: formData.selectAchievement,
      participants: 0,
      period: formData.refreshPeriod === 'none' ? 'All Time' : formData.refreshPeriod,
      createdAt: new Date().toISOString()
    };

    onAdd(newLeaderboard);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
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
      selectAchievement: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Add Leaderboard</h2>
              <p className="text-sm text-gray-500">Create a new leaderboard for your gamification system</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-600" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter leaderboard ID"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
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
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter tags (comma separated)"
                />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
              Image
              <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                (Optional)
              </span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Upload className="w-5 h-5 mr-2 text-gray-400" />
                  <span className="text-gray-600">Browse for image</span>
                </label>
                {formData.image && (
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              {formData.image && (
                <div className="relative">
                  <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                    <img
                      src={formData.image}
                      alt="Leaderboard preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Or enter image URL</label>
                <input 
                  name="image" 
                  value={formData.image || ''} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter image URL (optional if file uploaded)"
                />
              </div>
            </div>
          </div>

          {/* Leaderboard Configuration Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-blue-600" />
              Leaderboard Configuration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  name="sortBy"
                  value={formData.sortBy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="points">Points</option>
                  <option value="credits">Credits</option>
                  <option value="missions">Missions Completed</option>
                  <option value="achievements">Achievements Earned</option>
                  <option value="streaks">Streak Length</option>
                  <option value="levels">Level</option>
                  <option value="activity">Activity Score</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Leaderboard Units</label>
                <select
                  name="leaderboardUnits"
                  value={formData.leaderboardUnits}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="points">Points</option>
                  <option value="credits">Credits</option>
                  <option value="missions">Missions</option>
                  <option value="achievements">Achievements</option>
                  <option value="streaks">Streaks</option>
                  <option value="levels">Levels</option>
                  <option value="percentage">Percentage</option>
                  <option value="time">Time (minutes)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                <select
                  name="refreshPeriod"
                  value={formData.refreshPeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
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
                name="missionSpecific"
                value={formData.missionSpecific}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                  <span className="text-gray-600 font-normal ml-2 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  name="requirementsCategory"
                  value={formData.requirementsCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  name="requirementsTags"
                  value={formData.requirementsTags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  name="selectLevel"
                  value={formData.selectLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  name="selectMission"
                  value={formData.selectMission}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  name="selectAchievement"
                  value={formData.selectAchievement}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 text-gray-600 border border-gray-300 rounded-3xl hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors font-medium"
            >
              Add Leaderboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeaderboardModal; 