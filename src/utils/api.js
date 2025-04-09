// מידע מדומה לפיתוח ובדיקות - בהמשך יוחלף בשרת אמיתי

// קבוצות מדומות
export const getGroups = () => {
  return [
    {
      id: '1',
      name: 'Trail Explorers',
      nextEvent: 'Next hike: Green Valley',
      actionText: 'Join Event',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
      lastActive: '2h ago',
    },
    {
      id: '2',
      name: 'Game Night',
      nextEvent: 'Next event: Catan show',
      actionText: 'RSVP Now',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      lastActive: '5h ago',
    },
    {
      id: '3',
      name: 'Book Club',
      nextEvent: 'Reading: The Alchemist',
      actionText: 'Join Discussion',
      image: 'https://images.unsplash.com/photo-1530538987395-032d1800fdd4',
      lastActive: '1d ago',
    },
    {
      id: '4',
      name: 'Foodie Friends',
      nextEvent: 'Dinner at Sunset Cafe',
      actionText: 'View Details',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
      lastActive: '3d ago',
    },
    {
      id: '5',
      name: 'Coding Club',
      nextEvent: 'Hackathon planning',
      actionText: 'Join Meeting',
      image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5',
      lastActive: '6h ago',
    },
  ];
};

// מיקומים מדומים
export const getLocations = () => {
  return [
    {
      id: '1',
      name: 'Green Haven',
      description: 'Luxury hotel with spa',
      distance: '2.5',
      actionText: 'View Offers',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    },
    {
      id: '2',
      name: 'Sunset Cafe',
      description: 'Casual dining spot',
      distance: '1.2',
      actionText: 'View Menu',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    },
    {
      id: '3',
      name: 'City Museum',
      description: 'Art & history exhibits',
      distance: '3.8',
      actionText: 'Explore Exhibits',
      image: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993',
    },
    {
      id: '4',
      name: 'Urban Fitness',
      description: 'Gym & yoga classes',
      distance: '0.8',
      actionText: 'Join Now',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    },
  ];
};

// הצעות מדומות
export const getSuggestions = () => {
  return [
    {
      id: '1',
      text: 'Meet Nelson at the game.',
      time: '5:30',
    },
    {
      id: '2',
      text: 'Lunch with Steve?',
      time: '12:30',
    },
    {
      id: '3',
      text: 'Meet up with Jen and Chris.',
      time: '1:00',
    },
  ];
};

// פונקציה מדומה לחיבור לקלנדר - במציאות תשתמשי ב-API של גוגל
export const addEventToCalendar = async (eventDetails) => {
  console.log('Adding event to calendar:', eventDetails);
  return { success: true, message: 'Event added to calendar successfully' };
};

// פונקציה מדומה לקבלת זמנים פנויים
export const getAvailableTimes = (date) => {
  return [
    { id: '1', time: '11:00 AM' },
    { id: '2', time: '12:00 PM' },
    { id: '3', time: '1:00 PM' },
    { id: '4', time: '2:00 PM' },
    { id: '5', time: '3:00 PM' },
  ];
};
