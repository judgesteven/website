import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag, DollarSign, Box, Target, Upload } from 'lucide-react';

const EditMysteryBoxModal = ({ open, onClose, onSave, onDelete, mysteryBox }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    credits: '',
    redemptionLimit: 'unlimited',
    selectedPrize: '',
    units: '',
    startDate: '',
    endDate: '',
    refreshPeriod: 'none',
    reqCategory: '',
    reqTags: '',
    reqLevel: '',
    reqMission: '',
    reqAchievement: ''
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (mysteryBox) {
      setForm({
        id: mysteryBox.id || '',
        name: mysteryBox.name || '',
        description: mysteryBox.description || '',
        image: mysteryBox.image || '',
        category: mysteryBox.category || '',
        tags: mysteryBox.tags || '',
        credits: mysteryBox.credits || mysteryBox.price || '',
        redemptionLimit: mysteryBox.redemptionLimit || 'unlimited',
        selectedPrize: mysteryBox.selectedPrize || '',
        units: mysteryBox.units || '',
        startDate: mysteryBox.startDate || '',
        endDate: mysteryBox.endDate || '',
        refreshPeriod: mysteryBox.refreshPeriod || 'none',
        reqCategory: mysteryBox.reqCategory || '',
        reqTags: mysteryBox.reqTags || '',
        reqLevel: mysteryBox.reqLevel || '',
        reqMission: mysteryBox.reqMission || '',
        reqAchievement: mysteryBox.reqAchievement || '',
      });
      // Set image preview if mystery box has an image
      if (mysteryBox.image) {
        setImagePreview(mysteryBox.image);
      }
    }
  }, [mysteryBox]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
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
    onSave({ ...mysteryBox, ...form });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this mystery win? This action cannot be undone.')) {
      onDelete(mysteryBox);
    }
  };

  const prizes = [
    'Gift Card $50',
    'Company Swag',
    'Premium Subscription',
    'Conference Ticket',
    'Amazon Gift Card',
    'Tech Gadgets'
  ];

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
            <h2 className="text-2xl font-bold text-gray-900">Edit Mystery Win</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Mystery Win Details Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Box className="w-5 h-5 mr-2 text-blue-600" />
                Mystery Win Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                  <input
                    type="text"
                    name="id"
                    value={form.id}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter box ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter box name"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter box description"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mystery Win Image</label>
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
                            alt="Mystery Win preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          {uploadedImage?.name || 'Current image'}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter category"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="tags"
                      value={form.tags}
                      onChange={handleChange}
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
                      name="credits"
                      value={form.credits}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter credits cost"
                    />
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Limits & Timers Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-600" />
                Limits & Timers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Redemption Limit</label>
                  <select
                    name="redemptionLimit"
                    value={form.redemptionLimit}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Prize</label>
                  <select
                    name="selectedPrize"
                    value={form.selectedPrize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a prize</option>
                    {prizes.map((prize, index) => (
                      <option key={index} value={prize}>{prize}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Units</label>
                  <input
                    type="number"
                    name="units"
                    value={form.units}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter units"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
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
                      name="endDate"
                      value={form.endDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Period</label>
                  <select
                    name="refreshPeriod"
                    value={form.refreshPeriod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="none">None</option>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    name="reqCategory"
                    value={form.reqCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Required category"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="reqTags"
                      value={form.reqTags}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Required tags (comma separated)"
                    />
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                  <input
                    type="number"
                    name="reqLevel"
                    value={form.reqLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Minimum level required"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mission</label>
                  <input
                    type="text"
                    name="reqMission"
                    value={form.reqMission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Required mission"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Achievement</label>
                  <input
                    type="text"
                    name="reqAchievement"
                    value={form.reqAchievement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Required achievement"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleDelete}
                className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
              >
                Delete Mystery Win
              </button>
              <div className="flex space-x-4">
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
                  Update Mystery Win
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EditMysteryBoxModal; 