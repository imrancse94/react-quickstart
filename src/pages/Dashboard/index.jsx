import { lazy } from 'react';

const Table = lazy(() => import('@/components/admin/Table'))
const ActionButton = lazy(() => import('@/components/admin/ActionButton'))
const PageHeader = lazy(() => import('@/components/admin/PageHeader'))
const Card = lazy(() => import('@/pages/Dashboard/Card'))

const Dashboard = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      department: "Web dev",
      status: "Active",
      role: "Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
    },
    // ... other employee data
  ];

  return (
    <div>
      {/* STATISTICS */}
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4"
        bis_skin_checked={1}
      >
        <Card
            title="Projects"
            icon={<svg
              className="w-12 h-12 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>}
          >
            <h1 className="text-xl font-semibold">$13,500</h1>
              <p className="text-xs bg-green-50 text-green-500 px-1 rounded">
                +4.5
              </p>
          </Card>
          <Card
            title="Users"
            icon={ <svg
              className="w-12 h-12 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>}
          >
            <h1 className="text-xl font-semibold">$819</h1>
              <p className="text-xs bg-green-50 text-green-500 px-1 rounded">
                +7.4
              </p>
          </Card>
       
      </div>
      {/* END OF STATISTICS */}
      {/* TABLE */}

      <Table
        headers={['Project', 'Client', 'Users', 'Status']}
        actionHeader={<th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Actions
        </th>}

      >
        <tr>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center" bis_skin_checked={1}>
              <div className="flex-shrink-0 w-10 h-10" bis_skin_checked={1}>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4" bis_skin_checked={1}>
                <div
                  className="text-sm font-medium leading-5 text-gray-900"
                  bis_skin_checked={1}
                >
                  John Doe
                </div>
                <div
                  className="text-sm leading-5 text-gray-500"
                  bis_skin_checked={1}
                >
                  john@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-900" bis_skin_checked={1}>
              Software Engineer
            </div>
            <div className="text-sm leading-5 text-gray-500" bis_skin_checked={1}>
              Web dev
            </div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
              Active
            </span>
          </td>
          <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
            Owner
          </td>
          <td className="py-3 px-6 text-center">
            <ActionButton />
          </td>
        </tr>
      </Table>

      {/* END OF TABLE */}
    </div>

  );
};



export default Dashboard;