# Dashboard Icons Reference

## Icon Source: Lucide React

All icons used in the dashboard_admin page are sourced from **Lucide React**, a popular icon library for React applications.

### Official Documentation
- **Website**: https://lucide.dev/
- **GitHub**: https://github.com/lucide-icons/lucide
- **NPM Package**: https://www.npmjs.com/package/lucide-react

### Installation
```bash
npm install lucide-react
```

### Usage Example
```jsx
import { Users, Trophy, Settings } from 'lucide-react';

// In your component
<Users className="w-6 h-6" />
<Trophy className="w-4 h-4" />
<Settings className="w-5 h-5" />
```

## Complete List of Icons Used in Dashboard

### Navigation Tabs Icons
- `User` - Players tab
- `Users2` - Teams tab  
- `Flag` - Missions tab
- `Activity` - Streaks tab
- `Trophy` - Rewards tab
- `Medal` - Achievements tab
- `Layers` - Levels tab
- `Crown` - Leaderboards tab
- `HelpCircle` - Quizzes tab
- `ClipboardCheck` - Surveys tab
- `Settings` - Settings tab

### Statistics Icons
- `Users` - Players Registered
- `Flag` - Missions Started
- `Trophy` - Prizes Claimed
- `Medal` - Achievements Unlocked
- `Layers` - Level-Ups
- `Zap` - Points Awarded
- `DollarSign` - Credits Earned
- `Activity` - Streaks Started
- `BookOpen` - Quizzes Completed
- `ClipboardCheck` - Surveys Completed

### Action Icons
- `Search` - Search functionality
- `Filter` - Filter options
- `Edit` - Edit actions
- `Trash2` - Delete actions
- `Bell` - Notifications
- `Gift` - Gift/Prize actions
- `Box` - Mystery box actions
- `Ticket` - Raffle actions
- `Star` - Star ratings
- `Target` - Target/goal actions
- `Tag` - Tagging
- `Check` - Confirmations
- `Upload` - File uploads
- `Calendar` - Date/time
- `RefreshCw` - Refresh/reload
- `Clock` - Time-related
- `X` - Close/cancel
- `ChevronLeft` - Navigation left
- `ChevronRight` - Navigation right
- `Image` - Image handling

### Special Usage
- `ZapIcon` (aliased from `Zap`) - Used for special UI elements
- `ImageIcon` (aliased from `Image`) - Used for image-related features

## Adding New Icons

1. **Browse Available Icons**: Visit https://lucide.dev/icons to see all available icons
2. **Import the Icon**: Add it to your imports in Dashboard.js
3. **Use the Icon**: Add it to your component with appropriate className

### Example: Adding a New Icon
```jsx
// 1. Add to imports
import { Heart, Share2 } from 'lucide-react';

// 2. Use in component
<Heart className="w-6 h-6 text-red-500" />
<Share2 className="w-4 h-4" />
```

## Icon Styling Guidelines

### Common Class Names Used
- `w-4 h-4` - Small icons (16px)
- `w-5 h-5` - Medium icons (20px)  
- `w-6 h-6` - Large icons (24px)
- `text-gray-600` - Default gray color
- `text-primary-600` - Primary brand color
- `text-blue-600` - Blue accent
- `text-green-600` - Green accent
- `text-red-600` - Red accent
- `text-yellow-600` - Yellow accent

### Color Classes Used
- `text-blue-600` - Users, Image
- `text-green-600` - Missions
- `text-yellow-600` - Prizes, Points
- `text-purple-600` - Achievements
- `text-indigo-600` - Levels
- `text-orange-600` - Points
- `text-emerald-600` - Credits
- `text-red-600` - Streaks
- `text-teal-600` - Quizzes
- `text-cyan-600` - Surveys

## File Structure
```
dashboard-icons/
├── README.md (this file)
├── icon-list.txt (complete list)
└── usage-examples.jsx (code examples)
```

