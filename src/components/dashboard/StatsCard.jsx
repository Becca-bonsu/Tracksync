import { 
  AcademicCapIcon, 
  UsersIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const icons = {
  'academic-cap': AcademicCapIcon,
  'users': UsersIcon,
  'clock': ClockIcon,
};

function StatsCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
