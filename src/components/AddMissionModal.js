import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Tag, DollarSign, Target, Flag, Calendar, Star, RefreshCw, Upload, Zap } from 'lucide-react';

const AddMissionModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    restrictCompletions: 'unlimited',
    priority: 'medium',
    startDate: '',
    endDate: '',
    refreshPeriod: 'none',
    points: '',
    credits: '',
    achievements: '',
    stepsGranted: '',
    objectives: {
      event: '',
      quiz: '',
      survey: ''
    },
    requirements: {
      category: '',
      tags: '',
      level: '',
      mission: '',
      achievement: ''
    }
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('requirements.')) {
      const requirementField = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        requirements: {
          ...prev.requirements,
          [requirementField]: value
        }
      }));
    } else if (name.startsWith('objectives.')) {
      const objectiveField = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        objectives: {
          ...prev.objectives,
          [objectiveField]: value
        }
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        // Also update the form image field with the base64 data
        setForm(prev => ({
          ...prev,
          image: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeUploadedImage = () => {
    setUploadedImage(null);
    setImagePreview('');
    setForm(prev => ({
      ...prev,
      image: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
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
            <h2 className="text-2xl font-bold text-gray-900">Create New Mission</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Mission Details Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Flag className="w-5 h-5 mr-2 text-blue-600" />
                Mission Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                  <input 
                    name="id" 
                    value={form.id} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter mission ID"
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
                    name="description" 
                    value={form.description} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter mission description"
                    rows="3"
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
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <Upload className="w-5 h-5 mr-2 text-gray-400" />
                        <span className="text-gray-600">Browse for image</span>
                      </label>
                      {uploadedImage && (
                        <button
                          type="button"
                          onClick={removeUploadedImage}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="relative">
                        <div className="w-full max-w-xs h-48 border border-gray-200 rounded-xl overflow-hidden">
                          <img
                            src={imagePreview}
                            alt="Mission preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          {uploadedImage?.name}
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
                    type="text"
                    name="requirements.category"
                    value={form.requirements.category}
                    onChange={handleChange}
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
                  <div className="relative">
                    <input
                      type="text"
                      name="requirements.tags"
                      value={form.requirements.tags}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter required tags"
                    />
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Restrict Completions</label>
                  <select
                    name="restrictCompletions"
                    value={form.restrictCompletions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      value={form.startDate} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      value={form.endDate} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      value={form.refreshPeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                Objectives
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Event
                  </label>
                  <select
                    name="objectives.event"
                    value={form.objectives.event}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    name="objectives.quiz"
                    value={form.objectives.quiz}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    name="objectives.survey"
                    value={form.objectives.survey}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-600" />
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
                    name="points" 
                    type="number" 
                    value={form.points} 
                    onChange={handleChange} 
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
                  <div className="relative">
                    <input 
                      name="credits" 
                      type="number" 
                      value={form.credits} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={form.achievements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={form.stepsGranted}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter steps granted"
                    min="0"
                  />
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
                    type="text"
                    name="requirements.category"
                    value={form.requirements.category}
                    onChange={handleChange}
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
                  <div className="relative">
                    <input
                      type="text"
                      name="requirements.tags"
                      value={form.requirements.tags}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={form.requirements.level}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={form.requirements.mission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={form.requirements.achievement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter required achievement"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Create Mission
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddMissionModal; 