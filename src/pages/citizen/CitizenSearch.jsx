import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DashboardLayout } from '../../components/DashboardLayout';
import { SearchPanel } from '../../components/SearchPanel';
import { LandRecordCard } from '../../components/LandRecordCard';
import { LandRecordTable } from '../../components/LandRecordTable';
import { LayoutGrid, Table, Search } from 'lucide-react';

export function CitizenSearch() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const { records } = useContext(AppContext);

  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [searchResults, setSearchResults] = useState(records);

  useEffect(() => {
    if (initialQuery) {
      handleSearch({ ownerName: initialQuery });
    }
  }, [initialQuery, records]);

  const handleSearch = (filters) => {
    let filtered = [...records];

    if (filters.surveyNo) {
      filtered = filtered.filter(r => r.surveyNumber.toLowerCase().includes(filters.surveyNo.toLowerCase()));
    }
    if (filters.khataNo) {
      filtered = filtered.filter(r => r.khataNumber.toLowerCase().includes(filters.khataNo.toLowerCase()));
    }
    if (filters.ownerName) {
      filtered = filtered.filter(r => r.ownerName.toLowerCase().includes(filters.ownerName.toLowerCase()));
    }
    if (filters.village) {
      filtered = filtered.filter(r => r.village.toLowerCase().includes(filters.village.toLowerCase()));
    }
    if (filters.statusFilter && filters.statusFilter !== 'ALL') {
      filtered = filtered.filter(r => r.verificationStatus === filters.statusFilter);
    }

    setSearchResults(filtered);
  };

  const handleReset = () => {
    setSearchResults(records);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded border border-sky-200">
            Public Land Search Engine
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Search Land Records (Odisha)
          </h1>
          <p className="text-xs text-slate-500">
            Search verified land records by Survey Number, Khata Number, Owner Name, or Mouza in Khordha District.
          </p>
        </div>

        {/* Search Input Controls */}
        <SearchPanel onSearch={handleSearch} onReset={handleReset} />

        {/* Results Header & Layout Toggle */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <p className="text-xs font-bold text-slate-700">
            Showing {searchResults.length} Land Record Results
          </p>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs ${viewMode === 'grid' ? 'bg-white shadow text-sky-600 font-bold' : 'text-slate-500'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs ${viewMode === 'table' ? 'bg-white shadow text-sky-600 font-bold' : 'text-slate-500'}`}
              title="Table View"
            >
              <Table className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Render */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map(rec => (
              <LandRecordCard key={rec.id} record={rec} />
            ))}
          </div>
        ) : (
          <LandRecordTable records={searchResults} role="CITIZEN" />
        )}
      </div>
    </DashboardLayout>
  );
}
