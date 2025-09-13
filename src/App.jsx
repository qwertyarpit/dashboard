import React, { useState } from 'react';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// === Helper Components & Data ===

// --- Icons (using lucide-react, inlined as SVGs for single-file) ---
const ChevronLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);
const Plus = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);
const Crown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
);
const Calendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const ChevronDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);
const Bell = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);
const Edit2 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
);

// --- Mock Data ---
const chartData = [
  { name: 'Jan', income: 3800, momGrowth: -20 },
  { name: 'Feb', income: 4800, momGrowth: 26 },
  { name: 'Mar', income: 6800, momGrowth: 41 },
  { name: 'Apr', income: 3200, momGrowth: -52 },
  { name: 'May', income: 5100, momGrowth: 59 },
  { name: 'Jun', income: 4500, momGrowth: -11 },
];

const invoicesData = [
    { id: 1, client: 'Client Name', amount: '1,25,000', due: '2024-06-15', status: 'Update Status' },
    { id: 2, client: 'Client Name', amount: '1,25,000', due: '2024-06-15', status: 'Unpaid' },
    { id: 3, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Disputed' },
    { id: 4, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
    { id: 5, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Partially Paid' },
    { id: 6, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
    { id: 7, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Overdue' },
    { id: 8, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Awaited' },
    { id: 9, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Draft' },
    { id: 10, client: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
];

// --- Recharts Chart Component (requires recharts to be installed) ---
// This component is a placeholder. For it to work, you need to install recharts.
// Since this environment doesn't support installation, this is a conceptual component.
// To run locally: npm install recharts
const IncomeTrendChart = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" tickFormatter={(value) => `$${value / 1000}k`} tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" tickFormatter={(value) => `${value}%`} tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <Tooltip
                        contentStyle={{
                            background: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem',
                        }}
                        labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                    />
                    <Legend iconType="circle" />
                    <Bar dataKey="income" yAxisId="left" barSize={20} fill="#a78bfa" name="income" />
                    <Line type="monotone" dataKey="momGrowth" yAxisId="right" stroke="#7c3aed" strokeWidth={2} name="momGrowth" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

// === UI Components ===

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-purple-50">
    <button className="flex items-center text-gray-700">
      <ChevronLeft className="w-6 h-6" />
      <span className="ml-2 font-semibold">Back</span>
    </button>
    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
    <img
      src="https://placehold.co/40x40/E9D5FF/3730A3?text=A"
      alt="User Avatar"
      className="w-10 h-10 rounded-full"
    />
  </header>
);

const CreateInvoiceCard = () => (
  <div className="p-6 text-center bg-white border-2 border-purple-200 rounded-2xl shadow-sm" style={{boxShadow: '0 4px 30px rgba(167, 139, 250, 0.1)'}}>
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
      <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full">
        <Plus className="w-8 h-8 text-white" />
      </div>
    </div>
    <h2 className="text-xl font-bold text-purple-700">Create New Invoice</h2>
    <p className="text-sm text-gray-500">Start by creating and sending new invoice</p>
  </div>
);

const TimePeriodFilter = () => {
    const [active, setActive] = useState('3Months');
    const periods = ['1Month', '3Months', '1 Year', 'Custom'];

    return (
        <div className="p-4 bg-white rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">Time Period</h3>
                <p className="text-sm text-gray-400">dd:mm:yyyy - dd:mm:yyyy</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {periods.map(period => (
                    <button 
                        key={period} 
                        onClick={() => setActive(period)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center justify-center transition-all duration-200 ${
                            active === period 
                            ? 'bg-purple-200 text-purple-700' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {period}
                        {period === '1 Year' && <Crown className="w-4 h-4 ml-1 text-purple-500" />}
                        {period === 'Custom' && <Calendar className="w-4 h-4 mr-1" />}
                    </button>
                ))}
            </div>
        </div>
    );
};

const StatCard = ({ title, value, children }) => (
    <div className="p-4 bg-white rounded-2xl shadow-sm">
        <p className="text-sm text-gray-500">{title}</p>
        <div className="flex items-center justify-between mt-1">
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            {children}
        </div>
    </div>
);

const StatusBadge = ({ status }) => {
    const statusStyles = {
        'Update Status': 'bg-purple-600 text-white',
        'Unpaid': 'bg-gray-200 text-gray-700',
        'Disputed': 'bg-red-100 text-red-600',
        'Paid': 'bg-green-100 text-green-600',
        'Partially Paid': 'bg-yellow-100 text-yellow-600',
        'Overdue': 'bg-red-200 text-red-700',
        'Awaited': 'bg-yellow-200 text-yellow-800',
        'Draft': 'bg-gray-100 text-gray-500',
    };
    const style = statusStyles[status] || 'bg-gray-200 text-gray-700';

    return (
        <div className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center justify-center text-center whitespace-nowrap ${style}`}>
            {status}
            {status === 'Update Status' && <ChevronDown className="w-4 h-4 ml-1" />}
        </div>
    );
};

const InvoiceItem = ({ invoice }) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-2xl shadow-sm mb-3">
        <div className="mb-3 sm:mb-0">
            <h4 className="font-semibold text-gray-800">{invoice.client}</h4>
            <p className="text-sm text-gray-500">₹{invoice.amount}, Due: {invoice.due}</p>
        </div>
        <div className="flex items-center w-full sm:w-auto">
            <StatusBadge status={invoice.status} />
            {(invoice.status === 'Overdue' || invoice.status === 'Awaited') && (
                <Bell className="w-5 h-5 ml-3 text-gray-400" />
            )}
            {invoice.status === 'Draft' && (
                <Edit2 className="w-5 h-5 ml-3 text-gray-400" />
            )}
        </div>
    </div>
);

// === Main App Component ===
export default function App() {
  return (
    <>
      {/* Script for Recharts library. In a real app, you'd use npm/yarn. */}
      <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
      
      <div className="min-h-screen bg-gray-50 font-sans">
        <div className="max-w-4xl mx-auto">
          <Header />
          <main className="p-4 space-y-6">
            <CreateInvoiceCard />
            <p className="text-center text-sm text-gray-500">
                Or <a href="#" className="font-semibold text-purple-600">Upload an existing invoice</a> and set payment reminder
            </p>

            <TimePeriodFilter />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <StatCard title="Total Earnings" value="$1,25,000">
                    <div className="flex -space-x-2">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/32x32/3B82F6/FFFFFF?text=B" alt="User 1"/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/32x32/F97316/FFFFFF?text=H" alt="User 2"/>
                    </div>
                </StatCard>
              </div>
              <StatCard title="Payment Awaited" value="$25,000" />
              <StatCard title="Payment Overdue" value="$25,000" />
            </div>

            <div className="p-4 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-800">Income Trend</h3>
                <p className="text-sm text-gray-500 mb-4">Your monthly income and growth for the last 6 months.</p>
                <IncomeTrendChart />
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Your Invoices</h3>
                    <ChevronDown className="w-6 h-6 text-gray-500"/>
                </div>
                <div>
                    {invoicesData.map(invoice => (
                        <InvoiceItem key={invoice.id} invoice={invoice} />
                    ))}
                </div>
            </div>

            <footer className="py-8 text-center">
                <p className="text-lg font-semibold text-gray-800">Sparkonomy</p>
                <p className="text-sm text-gray-500">sparking the creator economy</p>
            </footer>

          </main>
        </div>
      </div>
    </>
  );
}
