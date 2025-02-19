import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  TrashIcon,
  Cog6ToothIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { useState } from 'react';

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
    { name: 'My Class List', icon: UserGroupIcon, path: '/class-list' },
    {
      name: 'Course Registration',
      icon: ClipboardDocumentIcon,
      path: '/course-registration',
      subItems: [
        { name: 'Regular', path: '/course-registration/regular' },
        { name: 'Evening', path: '/course-registration/evening' },
        { name: 'Weekends', path: '/course-registration/weekends' },
      ]
    },
    { name: 'Delete Course', icon: TrashIcon, path: '/delete-course' }
  ];

  return (
    <aside className="w-64 min-h-screen bg-blue-600 text-white">
      <div className="p-4 border-b border-blue-500">
        <h1 className="text-xl font-bold">TrackSync</h1>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.subItems ? (
              // Menu item with dropdown
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Dropdown items */}
                <div className={`overflow-hidden transition-all duration-200 ${
                  isDropdownOpen ? 'max-h-48' : 'max-h-0'
                }`}>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block py-2 px-4 pl-12 text-sm hover:bg-blue-700 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              // Regular menu item
              <Link
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-700 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="absolute bottom-0 w-64 border-t border-blue-500">
        <Link
          to="/settings"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-700 transition-colors"
        >
          <Cog6ToothIcon className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
