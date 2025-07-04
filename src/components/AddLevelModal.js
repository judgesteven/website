import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Upload, Target, Gift } from 'lucide-react';

const AddLevelModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    ordinal: '',
    // Objectives
    points: '',
    credits: '',
    selectAchievement: '',
    // Rewards
    rewardPoints: '',
    rewardCredits: '',
    rewardAchievements: '',
    stepsGranted: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setForm(prev => ({
          ...prev,
          image: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      ordinal: parseInt(form.ordinal) || 0,
      points: parseInt(form.points) || 0,
      credits: parseInt(form.credits) || 0,
      rewardPoints: parseInt(form.rewardPoints) || 0,
      rewardCredits: parseInt(form.rewardCredits) || 0,
      stepsGranted: parseInt(form.stepsGranted) || 0
    });
    setForm({
      id: '',
      name: '',
      description: '',
      image: '',
      category: '',
      tags: '',
      ordinal: '',
      points: '',
      credits: '',
      selectAchievement: '',
      rewardPoints: '',
      rewardCredits: '',
      rewardAchievements: '',
      stepsGranted: ''
    });
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Add Level</h2>
                <p className="text-sm text-gray-500">Create a new level for your gamification system</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Level Details Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-blue-600" />
                Level Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                  <input 
                    name="id" 
                    value={form.id} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter level ID"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
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
                    name="description" 
                    value={form.description} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter level description"
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
                  <div className="space-y-4">
                    {/* File Upload Section */}
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
                      {form.image && (
                        <button
                          type="button"
                          onClick={() => setForm(prev => ({ ...prev, image: '' }))}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    {/* Image Preview */}
                    {form.image && (
                      <div className="relative">
                        <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                          <img
                            src={form.image}
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
                        value={form.image} 
                        onChange={handleChange} 
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
                    name="category" 
                    value={form.category} 
                    onChange={handleChange} 
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
                    name="tags" 
                    value={form.tags} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter tags (comma separated)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ordinal</label>
                  <input 
                    type="number"
                    name="ordinal" 
                    value={form.ordinal} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter level number"
                    min="1"
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Objectives Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Objectives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Points</label>
                  <input 
                    type="number"
                    name="points" 
                    value={form.points} 
                    onChange={handleChange} 
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
                    name="credits" 
                    value={form.credits} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter credits required"
                    min="0"
                    required 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Achievement</label>
                  <select 
                    name="selectAchievement" 
                    value={form.selectAchievement} 
                    onChange={handleChange} 
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
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-blue-600" />
                Rewards
              </h3>
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
                    name="rewardPoints" 
                    value={form.rewardPoints} 
                    onChange={handleChange} 
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
                    name="rewardCredits" 
                    value={form.rewardCredits} 
                    onChange={handleChange} 
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
                    name="rewardAchievements" 
                    value={form.rewardAchievements} 
                    onChange={handleChange} 
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
                    name="stepsGranted" 
                    value={form.stepsGranted} 
                    onChange={handleChange} 
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
                onClick={onClose}
                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-3xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Add Level
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddLevelModal; 