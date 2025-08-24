// Dashboard Data Constants
// This file contains all the mock data used in the Dashboard component

export const prizes = [
  { id: 'prize1', name: 'Gift Card $50', description: 'Amazon gift card', value: 50, stock: 25, redeemed: 8, startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active', image: 'https://picsum.photos/400/300?random=1' },
  { id: 'prize2', name: 'Company Swag', description: 'T-shirt and water bottle', value: 15, stock: 100, redeemed: 45, startDate: '2024-02-01', endDate: '2024-11-30', status: 'Active', image: 'https://picsum.photos/400/300?random=2' },
  { id: 'prize3', name: 'Premium Subscription', description: '1 month premium access', value: 29, stock: 50, redeemed: 12, startDate: '2024-03-01', endDate: '2024-10-31', status: 'Active', image: 'https://picsum.photos/400/300?random=3' },
  { id: 'prize4', name: 'Conference Ticket', description: 'Annual conference pass', value: 299, stock: 10, redeemed: 3, startDate: '2024-01-15', endDate: '2024-06-30', status: 'Limited', image: 'https://picsum.photos/400/300?random=4' }
];

export const raffles = [
  { id: 'raffle1', name: 'Monthly Grand Prize', description: 'Win a MacBook Pro', credits: 1000, entries: 1247, drawDate: '2024-02-29', startDate: '2024-01-01', endDate: '2024-02-29', status: 'Active', image: 'https://picsum.photos/400/300?random=5' },
  { id: 'raffle2', name: 'Weekly Draw', description: 'Win $100 gift card', credits: 500, entries: 567, drawDate: '2024-02-07', startDate: '2024-01-29', endDate: '2024-02-07', status: 'Active', image: 'https://picsum.photos/400/300?random=6' },
  { id: 'raffle3', name: 'Holiday Special', description: 'Win vacation package', credits: 2000, entries: 234, drawDate: '2024-12-25', startDate: '2024-11-01', endDate: '2024-12-25', status: 'Upcoming', image: 'https://picsum.photos/400/300?random=7' },
  { id: 'raffle4', name: 'Tech Bundle', description: 'Win iPhone + AirPods', credits: 1500, entries: 89, drawDate: '2024-01-15', startDate: '2024-01-01', endDate: '2024-01-15', status: 'Ended', image: 'https://picsum.photos/400/300?random=8' }
];

export const mysteryBoxes = [
  { id: 'mystery1', name: 'Common Box', description: 'Basic rewards', credits: 100, available: 1000, redeemed: 753, startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active', image: 'https://picsum.photos/400/300?random=9' },
  { id: 'mystery2', name: 'Rare Box', description: 'Better rewards', credits: 250, available: 500, redeemed: 433, startDate: '2024-02-01', endDate: '2024-11-30', status: 'Active', image: 'https://picsum.photos/400/300?random=10' },
  { id: 'mystery3', name: 'Epic Box', description: 'Premium rewards', credits: 500, available: 200, redeemed: 166, startDate: '2024-03-01', endDate: '2024-10-31', status: 'Active', image: 'https://picsum.photos/400/300?random=11' },
  { id: 'mystery4', name: 'Legendary Box', description: 'Ultimate rewards', credits: 1000, available: 50, redeemed: 11, startDate: '2024-01-15', endDate: '2024-06-30', status: 'Limited', image: 'https://picsum.photos/400/300?random=12' }
];

export const missions = [
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
    category: 'Engagement',
    tags: ['daily', 'check-in', 'streak'],
    priority: 'Medium',
    maxCompletions: 1,
    refreshPeriod: 'daily'
  }
];

export const teams = [
  { id: 'team1', name: 'Alpha Squad', members: 12, points: 45600, level: 'Gold', avatar: 'AS', image: 'https://picsum.photos/400/300?random=50', description: 'Elite team of top performers' },
  { id: 'team2', name: 'Beta Force', members: 8, points: 38900, level: 'Silver', avatar: 'BF', image: 'https://picsum.photos/400/300?random=51', description: 'Innovation and creativity focused team' },
  { id: 'team3', name: 'Gamma Team', members: 15, points: 52300, level: 'Platinum', avatar: 'GT', image: 'https://picsum.photos/400/300?random=52', description: 'Largest and most diverse team' },
  { id: 'team4', name: 'Delta Unit', members: 6, points: 28700, level: 'Bronze', avatar: 'DU', image: 'https://picsum.photos/400/300?random=53', description: 'Specialized task force' }
];

export const streaks = [
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

export const achievements = [
  { id: 'achievement1', name: 'First Blood', description: 'Complete your first mission', icon: '🩸', image: 'https://picsum.photos/400/300?random=60', earned: 1247, points: 50, credits: 25 },
  { id: 'achievement2', name: 'Social Butterfly', description: 'Share 10 posts on social media', icon: '🦋', image: 'https://picsum.photos/400/300?random=61', earned: 567, points: 100, credits: 50 },
  { id: 'achievement3', name: 'Team Player', description: 'Join 5 different teams', icon: '👥', image: 'https://picsum.photos/400/300?random=62', earned: 234, points: 200, credits: 100 },
  { id: 'achievement4', name: 'Quiz Master', description: 'Score 100% on 5 quizzes', icon: '🧠', image: 'https://picsum.photos/400/300?random=63', earned: 89, points: 500, credits: 250 },
  { id: 'achievement5', name: 'Level 50', description: 'Reach level 50', icon: '⭐', image: 'https://picsum.photos/400/300?random=64', earned: 12, points: 1000, credits: 500 }
];

export const levels = [
  { id: 'level1', name: 'Beginner', description: 'Starting level', minPoints: 0, maxPoints: 999, rewards: 'Basic access', image: 'https://picsum.photos/400/300?random=70' },
  { id: 'level2', name: 'Intermediate', description: 'Growing user', minPoints: 1000, maxPoints: 4999, rewards: 'Enhanced features', image: 'https://picsum.photos/400/300?random=71' },
  { id: 'level3', name: 'Advanced', description: 'Experienced user', minPoints: 5000, maxPoints: 19999, rewards: 'Premium features', image: 'https://picsum.photos/400/300?random=72' },
  { id: 'level4', name: 'Expert', description: 'Power user', minPoints: 20000, maxPoints: 99999, rewards: 'VIP access', image: 'https://picsum.photos/400/300?random=73' },
  { id: 'level5', name: 'Master', description: 'Elite user', minPoints: 100000, maxPoints: 999999, rewards: 'Exclusive features', image: 'https://picsum.photos/400/300?random=74' }
];

export const leaderboards = [
  { id: 'leaderboard1', name: 'Weekly Points', period: 'This Week', participants: 1247, image: 'https://picsum.photos/400/300?random=80' },
  { id: 'leaderboard2', name: 'Monthly Activity', period: 'This Month', participants: 892, image: 'https://picsum.photos/400/300?random=81' },
  { id: 'leaderboard3', name: 'Team Competition', period: 'Ongoing', participants: 234, image: 'https://picsum.photos/400/300?random=82' },
  { id: 'leaderboard4', name: 'Mission Completion', period: 'All Time', participants: 567, image: 'https://picsum.photos/400/300?random=83' }
];

export const quizzes = [
  { name: 'Product Knowledge', questions: 10, participants: 234, avgScore: 85, status: 'Active' },
  { name: 'Company History', questions: 15, participants: 156, avgScore: 78, status: 'Active' },
  { name: 'Safety Training', questions: 20, participants: 445, avgScore: 92, status: 'Completed' },
  { name: 'Customer Service', questions: 12, participants: 89, avgScore: 81, status: 'Draft' }
];

export const surveys = [
  { id: '1', name: 'Employee Satisfaction', category: 'HR', type: 'annual', duration: 15, rewards: '50 points' },
  { id: '2', name: 'Product Feedback', category: 'Product', type: 'post-launch', duration: 10, rewards: '25 points' },
  { id: '3', name: 'Exit Interview', category: 'HR', type: 'exit', duration: 20, rewards: '100 points' }
];
