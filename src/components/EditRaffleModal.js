import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag, DollarSign, Image as ImageIcon, Ticket, Target } from 'lucide-react';

const refreshOptions = [
  { value: '', label: 'None' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

const prizeOptions = [
  { value: 'gift-card-50', label: 'Gift Card $50', units: 1 },
  { value: 'company-swag', label: 'Company Swag', units: 5 },
  { value: 'premium-subscription', label: 'Premium Subscription', units: 1 },
  { value: 'conference-ticket', label: 'Conference Ticket', units: 1 },
  { value: 'tech-bundle', label: 'Tech Bundle', units: 1 },
];

const EditRaffleModal = ({ open, onClose, onSave, onDelete, raffle }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    category: '',
    tags: '',
    credits: '',
    redemptionLimit: '',
    unlimitedRedemption: false,
    selectedPrize: '',
    prizeUnits: 1,
    startDate: '',
    endDate: '',
    drawDate: '',
    refreshPeriod: '',
    reqCategory: '',
    reqTags: '',
    level: '',
    mission: '',
    achievement: '',
  });

  useEffect(() => {
    if (raffle) {
      setForm({
        id: raffle.id || '',
        name: raffle.name || '',
        description: raffle.description || '',
        image: raffle.image || '',
        category: raffle.category || '',
        tags: raffle.tags || '',
        credits: raffle.credits || '',
        redemptionLimit: raffle.redemptionLimit || '',
        unlimitedRedemption: raffle.unlimitedRedemption || false,
        selectedPrize: raffle.selectedPrize || '',
        prizeUnits: raffle.prizeUnits || 1,
        startDate: raffle.startDate || '',
        endDate: raffle.endDate || '',
        drawDate: raffle.drawDate || '',
        refreshPeriod: raffle.refreshPeriod || '',
        reqCategory: raffle.reqCategory || '',
        reqTags: raffle.reqTags || '',
        level: raffle.level || '',
        mission: raffle.mission || '',
        achievement: raffle.achievement || '',
      });
    }
  }, [raffle]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'unlimitedRedemption' && checked ? { redemptionLimit: '' } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...raffle, ...form });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this raffle? This action cannot be undone.')) {
      onDelete(raffle);
    }
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
            <h2 className="text-2xl font-bold text-gray-900">Edit Raffle</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Raffle Details Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Ticket className="w-5 h-5 mr-2 text-blue-600" />
                Raffle Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                  <input 
                    name="id" 
                    value={form.id} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter raffle ID"
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
                    placeholder="Enter raffle name"
                    required 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter raffle description"
                    rows="3"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <div className="relative">
                    <input 
                      name="image" 
                      value={form.image} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter image URL"
                    />
                    <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input 
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
                      name="credits" 
                      type="number" 
                      value={form.credits} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter credits cost"
                      min="0" 
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
                  <div className="flex items-center space-x-2">
                    <input 
                      name="redemptionLimit" 
                      type="number" 
                      value={form.unlimitedRedemption ? '' : form.redemptionLimit} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter limit"
                      min="0" 
                      disabled={form.unlimitedRedemption} 
                    />
                    <label className="flex items-center text-sm">
                      <input type="checkbox" name="unlimitedRedemption" checked={form.unlimitedRedemption} onChange={handleChange} className="mr-1" />
                      Unlimited
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Prize</label>
                  <select
                    name="selectedPrize"
                    value={form.selectedPrize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Prize</option>
                    {prizeOptions.map((prize) => (
                      <option key={prize.value} value={prize.value}>{prize.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prize Units</label>
                  <input 
                    name="prizeUnits" 
                    type="number" 
                    value={form.prizeUnits} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter units"
                    min="1" 
                  />
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
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Draw Date</label>
                  <div className="relative">
                    <input 
                      name="drawDate" 
                      type="date" 
                      value={form.drawDate} 
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
                    {refreshOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
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
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Minimum level required"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mission</label>
                  <input
                    type="text"
                    name="mission"
                    value={form.mission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Required mission"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Achievement</label>
                  <input
                    type="text"
                    name="achievement"
                    value={form.achievement}
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
                Delete Raffle
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
                  Update Raffle
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EditRaffleModal; 