import React from 'react';
import { FaClock, FaUser, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';

const DashboardCards = () => {
  const cards = [
    {
      title: 'Check-In/Out',
      icon: <FaClock size={24} />,
      color: 'bg-blue-100 text-blue-800',
      value: '09:00 AM - 06:00 PM',
    },
    {
      title: 'Leave Status',
      icon: <FaCalendarAlt size={24} />,
      color: 'bg-yellow-100 text-yellow-800',
      value: '2 Days Left',
    },
    {
      title: 'Profile Summary',
      icon: <FaUser size={24} />,
      color: 'bg-green-100 text-green-800',
      value: 'Software Engineer',
    },
    {
      title: 'Salary Info',
      icon: <FaMoneyBill size={24} />,
      color: 'bg-purple-100 text-purple-800',
      value: '$4000 / month',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded shadow flex items-center justify-between ${card.color}`}
        >
          <div>
            <h2 className="text-sm font-medium">{card.title}</h2>
            <p className="text-lg font-bold">{card.value}</p>
          </div>
          <div>{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
