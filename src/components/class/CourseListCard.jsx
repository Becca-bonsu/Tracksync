import { ClockIcon, UsersIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function CourseListCard({ course }) {
  const navigate = useNavigate();

  const viewClassList = () => {
    navigate(`/class-list/${course.id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-full bg-blue-100">
          <ClipboardIcon className="w-6 h-6 text-blue-500" />
        </div>
        <span className="text-sm font-medium text-gray-500">{course.code}</span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1" />
          {course.time}
        </div>
        <div className="flex items-center">
          <UsersIcon className="w-4 h-4 mr-1" />
          {course.students} students
        </div>
      </div>
      
      <button
        onClick={viewClassList}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        View Class List
      </button>
    </div>
  );
}

export default CourseListCard; 