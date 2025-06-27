import React, { useState } from 'react';
import { X } from 'lucide-react';

const refreshOptions = [
  { value: '', label: 'None' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

const AddPrizeModal = ({ open, onClose, onSave }) => {
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
    stockLimit: '',
    unlimitedStock: false,
    startDate: '',
    endDate: '',
    refreshPeriod: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'unlimitedRedemption' && checked ? { redemptionLimit: '' } : {}),
      ...(name === 'unlimitedStock' && checked ? { stockLimit: '' } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl shadow-2xl w-full max-w-2xl p-0 relative animate-fadeInUp overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-primary-600 hover:bg-blue-100 rounded-full p-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-300"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>
        <div className="p-10 pb-6">
          <h2 className="text-3xl font-extrabold mb-2 text-primary-700 tracking-tight">Add New Prize</h2>
          <p className="text-gray-500 mb-8">Fill out the details below to create a new prize.</p>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Prize Details */}
            <div>
              <h3 className="text-lg font-bold text-primary-600 mb-3 tracking-wide">Prize Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Unique ID</label>
                  <input 
                    name="id" 
                    value={form.id} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                    required 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Description</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                    rows={2} 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Image URL</label>
                  <input 
                    name="image" 
                    value={form.image} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                  />
                  {form.image && (
                    <div className="mt-3 flex justify-center">
                      <img src={form.image} alt="Prize Preview" className="h-24 rounded-xl shadow-lg border-2 border-blue-200 object-contain bg-white" onError={e => e.target.style.display='none'} />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Category</label>
                  <input 
                    name="category" 
                    value={form.category} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Tags (comma separated)</label>
                  <input 
                    name="tags" 
                    value={form.tags} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Credits</label>
                  <input 
                    name="credits" 
                    type="number" 
                    value={form.credits} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                    min="0" 
                  />
                </div>
              </div>
            </div>
            <hr className="my-2 border-blue-200" />
            {/* Limits & Dates */}
            <div>
              <h3 className="text-lg font-bold text-primary-600 mb-3 tracking-wide">Limits & Dates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Redemption Limit</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      name="redemptionLimit" 
                      type="number" 
                      value={form.unlimitedRedemption ? '' : form.redemptionLimit} 
                      onChange={handleChange} 
                      className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
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
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Stock Limit</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      name="stockLimit" 
                      type="number" 
                      value={form.unlimitedStock ? '' : form.stockLimit} 
                      onChange={handleChange} 
                      className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                      min="0" 
                      disabled={form.unlimitedStock} 
                    />
                    <label className="flex items-center text-sm">
                      <input type="checkbox" name="unlimitedStock" checked={form.unlimitedStock} onChange={handleChange} className="mr-1" />
                      Unlimited
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Start Date</label>
                  <input 
                    name="startDate" 
                    type="date" 
                    value={form.startDate} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">End Date</label>
                  <input 
                    name="endDate" 
                    type="date" 
                    value={form.endDate} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Refresh Period</label>
                  <select 
                    name="refreshPeriod" 
                    value={form.refreshPeriod} 
                    onChange={handleChange} 
                    className="w-full border border-blue-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition shadow-sm bg-white placeholder-gray-400"
                  >
                    {refreshOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-8">
              <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .btn-primary {
          @apply bg-primary-600 text-white px-6 py-2.5 rounded-xl font-bold shadow hover:bg-primary-700 hover:scale-105 active:scale-95 transition-all duration-150;
        }
        .btn-secondary {
          @apply bg-blue-100 text-primary-700 px-6 py-2.5 rounded-xl font-bold shadow hover:bg-blue-200 hover:scale-105 active:scale-95 transition-all duration-150;
        }
      `}</style>
    </div>
  );
};

export default AddPrizeModal; 