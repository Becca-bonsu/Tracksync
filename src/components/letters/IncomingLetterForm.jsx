import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  DocumentTextIcon, 
  UserIcon, 
  BuildingOfficeIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline';

const letterTypes = {
  'Business Letters': [
    'Inquiry Letters',
    'Proposal/Offer Letters',
    'Complaint and Response Letters',
    'Order Letters',
    'Confirmation Letters',
    'Invitation Letters',
    'Thank You Letters',
    'Recommendation Letters'
  ],
  'Employment Letters': [
    'Job Application Letters',
    'Offer Letters',
    'Resignation Letters',
    'Termination Letters'
  ],
  'Internal Correspondence': [
    'Memorandums (Memos)',
    'Interoffice Letters',
    'Notification Letters'
  ],
  'Specialized Letters': [
    'Legal and Compliance Letters',
    'Financial Letters',
    'Policy and Notice Letters'
  ]
};

const departments = [
  'Administration',
  'Human Resources',
  'Finance',
  'Research and Innovation',
  'Corporate',
  'IT',
  'Consultancy',
  'Faculty'
];

const letterSchema = Yup.object().shape({
  senderName: Yup.string().required('Sender name is required'),
  senderProffession: Yup.string().required('Sender proffession is required'),
  organization: Yup.string().required('Organization is required'),
  letterType: Yup.string().required('Letter type is required'),
  department: Yup.string().required('Department is required'),
  hostName: Yup.string().required('Host name is required'),
  subject: Yup.string().required('Subject is required'),
  dateReceived: Yup.date().required('Date received is required'),
});

function IncomingLetterForm({ onSubmit, isLoading }) {
  return (
    <Formik
      initialValues={{
        senderName: '',
        senderProffession: '',
        organization: '',
        letterType: '',
        department: '',
        hostName: '',
        subject: '',
        dateReceived: new Date().toISOString().split('T')[0]
      }}
      validationSchema={letterSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div className="space-y-4">
            {/* Letter ID */}
            <div className="relative">
              <DocumentTextIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <Field
                name="senderName"
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="sender's name"
              />
              {errors.senderName && touched.senderName && (
                <div className="text-red-500 text-xs mt-1">{errors.senderName}</div>
              )}
            </div>

            {/* Sender Name */}
            <div className="relative">
              <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <Field
                name="senderProffession"
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="sender's Proffession"
              />
              {errors.senderProffession && touched.senderProffession && (
                <div className="text-red-500 text-xs mt-1">{errors.senderProffession}</div>
              )}
            </div>

            {/* Organization */}
            <div className="relative">
              <BuildingOfficeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <Field
                name="organization"
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Organization/Profession"
              />
              {errors.organization && touched.organization && (
                <div className="text-red-500 text-xs mt-1">{errors.organization}</div>
              )}
            </div>

            {/* Letter Type */}
            <div>
              <Field
                as="select"
                name="letterType"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
              >
                <option value="">Select Letter Type</option>
                {Object.entries(letterTypes).map(([category, types]) => (
                  <optgroup key={category} label={category}>
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </optgroup>
                ))}
              </Field>
              {errors.letterType && touched.letterType && (
                <div className="text-red-500 text-xs mt-1">{errors.letterType}</div>
              )}
            </div>

            {/* Department */}
            <div>
              <Field
                as="select"
                name="department"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </Field>
              {errors.department && touched.department && (
                <div className="text-red-500 text-xs mt-1">{errors.department}</div>
              )}
            </div>

            {/* Host Name */}
            <div className="relative">
              <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <Field
                name="hostName"
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Host Name"
              />
              {errors.hostName && touched.hostName && (
                <div className="text-red-500 text-xs mt-1">{errors.hostName}</div>
              )}
            </div>

            {/* Subject */}
            <div>
              <Field
                name="subject"
                as="textarea"
                rows="3"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Letter Subject"
              />
              {errors.subject && touched.subject && (
                <div className="text-red-500 text-xs mt-1">{errors.subject}</div>
              )}
            </div>

            {/* Date Received */}
            <div className="relative">
              <CalendarIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <Field
                name="dateReceived"
                type="date"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.dateReceived && touched.dateReceived && (
                <div className="text-red-500 text-xs mt-1">{errors.dateReceived}</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Record Letter'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default IncomingLetterForm;
