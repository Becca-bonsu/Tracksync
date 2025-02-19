import { ClockIcon, UsersIcon, ClipboardIcon } from '@heroicons/react/24/outline';

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
          <p className="text-sm text-gray-500 mt-1">Course Code: {course.code}</p>
        </div>
        <div className="p-2 rounded-full bg-blue-100">
          <ClipboardIcon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <ClockIcon className="w-4 h-4 mr-2" />
          <span>{course.time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <UsersIcon className="w-4 h-4 mr-2" />
          <span>{course.students} Students</span>
        </div>
      </div>
      <div className="mt-4">
        <button 
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          onClick={() => console.log('Take attendance for:', course.name)}
        >
          <ClipboardIcon className="w-4 h-4" />
          <span>Take Attendance</span>
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
