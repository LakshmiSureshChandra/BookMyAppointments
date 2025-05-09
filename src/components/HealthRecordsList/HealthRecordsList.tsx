import { useState } from 'react'
import type { FC } from 'react'

interface HealthRecord {
    id: string;
    type: 'prescriptions' | 'labReports' | 'vaccinations' | 'diagnosis';
    title: string;
    date: string;
    doctorName: string;
    hospital: string;
    fileUrl: string;
}

const HealthRecordsList: FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'prescriptions' | 'labReports' | 'vaccinations'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const records: HealthRecord[] = [
        {
            id: '1',
            type: 'prescriptions',  // Changed from 'prescription'
            title: 'General Checkup Prescription',
            date: 'Mar 15, 2024',
            doctorName: 'Dr. James Deen Avora',
            hospital: 'Apollo Super Speciality Hospital',
            fileUrl: '/records/prescription1.pdf'
        },
    ];

    const filteredRecords = records.filter(record => 
        (activeTab === 'all' || record.type === activeTab) &&
        (searchQuery === '' ||
            record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.doctorName.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const getTypeIcon = (type: HealthRecord['type']) => {
        switch(type) {
            case 'prescriptions':  // Changed from 'prescription'
                return (
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                );
            case 'labReports':  // Changed from 'labReport'
                return (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                );
            case 'vaccinations':
                return (
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                );
        }
    };

    return (
        <div className="w-[97%] mx-auto mt-6 mb-8">
            <div className="bg-white rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Health Records</h2>

                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search records..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            activeTab === 'all'
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        All Records
                    </button>
                    <button
                        onClick={() => setActiveTab('prescriptions')}
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            activeTab === 'prescriptions'
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        Prescriptions
                    </button>
                    <button
                        onClick={() => setActiveTab('labReports')}
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            activeTab === 'labReports'
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        Lab Reports
                    </button>
                    <button
                        onClick={() => setActiveTab('vaccinations')}
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            activeTab === 'vaccinations'
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        Vaccinations
                    </button>
                </div>

                <div className="space-y-4">
                    {filteredRecords.map((record) => (
                        <div key={record.id} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200">
                            <div className="flex items-start gap-4">
                                {getTypeIcon(record.type)}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">{record.title}</h3>
                                            <p className="text-gray-600">{record.doctorName}</p>
                                            <p className="text-gray-500 text-sm">{record.hospital}</p>
                                        </div>
                                        <span className="text-sm text-gray-500">{record.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end gap-3">
                                <button
                                    onClick={() => window.open(record.fileUrl, '_blank')}
                                    className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50"
                                >
                                    View Record
                                </button>
                                <button
                                    onClick={() => {/* Handle download */}}
                                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                                >
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}

                    {filteredRecords.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No records found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HealthRecordsList