import { useState } from 'react'
import type { FC } from 'react'

interface HealthRecord {
    id: string;
    fileName: string;
    fileType: string;
    fileSize: string;
    uploadDate: string;
    fileUrl: string;
}

const HealthRecordsList: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [records, setRecords] = useState<HealthRecord[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileUpload = (files: FileList) => {
        const newRecords: HealthRecord[] = Array.from(files).map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            fileName: file.name,
            fileType: file.type,
            fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
            uploadDate: new Date().toLocaleDateString(),
            fileUrl: URL.createObjectURL(file)
        }));

        setRecords(prev => [...prev, ...newRecords]);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileUpload(e.dataTransfer.files);
    };

    const filteredRecords = records.filter(record =>
        record.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-[97%] mx-auto mt-6 mb-8">
            <div className="bg-white rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Health Records</h2>
                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors ${
                        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                >
                    <input
                        type="file"
                        multiple
                        onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center"
                    >
                        <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-gray-600 mb-1">Drag and drop files here, or click to select files</p>
                        <p className="text-gray-500 text-sm">Upload your health records, prescriptions, or reports</p>
                    </label>
                </div>

                <div className="space-y-4">
                    {filteredRecords.map((record) => (
                        <div key={record.id} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{record.fileName}</h3>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <span>{record.fileType}</span>
                                            <span>{record.fileSize}</span>
                                            <span>{record.uploadDate}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => window.open(record.fileUrl, '_blank')}
                                        className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50"
                                    >
                                        View
                                    </button>
                                    <a
                                        href={record.fileUrl}
                                        download={record.fileName}
                                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredRecords.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No files found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HealthRecordsList