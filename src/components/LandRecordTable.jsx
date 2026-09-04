import React from 'react';
import { Link } from 'react-router-dom';
import { StatusBadge } from './StatusBadge';
import { ConfidenceBar } from './ConfidenceBar';
import { Eye, Edit3, Download, MapPin } from 'lucide-react';
import { downloadMockCertifiedRecord } from '../utils/downloadMockRecord';

export function LandRecordTable({ records = [], showActions = true, role = 'CITIZEN' }) {
  if (!records || records.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
        <p className="text-sm font-semibold text-slate-700">No land records match the filter criteria.</p>
        <p className="text-xs text-slate-400 mt-1">Try adjusting search parameters or clear active filters.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <th className="py-3 px-4">Record ID</th>
              <th className="py-3 px-4">Landowner</th>
              <th className="py-3 px-4">Survey / Khata</th>
              <th className="py-3 px-4">Area</th>
              <th className="py-3 px-4">Mouza / Tehsil</th>
              <th className="py-3 px-4">Confidence</th>
              <th className="py-3 px-4">Status</th>
              {showActions && <th className="py-3 px-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {records.map((rec) => (
              <tr key={rec.id} className="hover:bg-slate-50/80 transition-colors">
                {/* ID */}
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 whitespace-nowrap">
                  {rec.id}
                  <span className="block text-[10px] text-slate-400 font-normal">{rec.documentId}</span>
                </td>

                {/* Owner */}
                <td className="py-3 px-4">
                  <span className="font-bold text-slate-900 block">{rec.ownerName}</span>
                  <span className="text-[10px] text-slate-500">s/o {rec.fatherName || 'N/A'}</span>
                </td>

                {/* Survey / Khata */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-semibold text-slate-800 block">Sur: {rec.surveyNumber}</span>
                  <span className="text-[10px] text-slate-500">Kha: {rec.khataNumber}</span>
                </td>

                {/* Area */}
                <td className="py-3 px-4 font-medium text-slate-700 whitespace-nowrap">
                  {rec.area} {rec.areaUnit}
                  <span className="block text-[10px] text-slate-400">{rec.landClassification}</span>
                </td>

                {/* Mouza */}
                <td className="py-3 px-4 text-slate-600">
                  <span className="font-medium text-slate-800 block">{rec.village}</span>
                  <span className="text-[10px] text-slate-400">{rec.tehsil}, Odisha</span>
                </td>

                {/* Confidence Bar */}
                <td className="py-3 px-4 w-32">
                  <ConfidenceBar score={rec.overallConfidence} showValue={true} />
                </td>

                {/* Status Badge */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <StatusBadge status={rec.verificationStatus} size="sm" />
                </td>

                {/* Action Buttons */}
                {showActions && (
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        to={`/u/records/${rec.id}`}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-slate-200 transition-colors"
                        title="View Full Record Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      {(role === 'REVIEWER' || role === 'ADMIN') && (
                        <Link
                          to={`/r/review?id=${rec.id}`}
                          className="p-1.5 rounded-lg text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
                          title="Human Review Editor"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                      )}

                      {rec.verificationStatus === 'VERIFIED' && (
                        <button
                          onClick={() => downloadMockCertifiedRecord(rec)}
                          className="p-1.5 rounded-lg text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                          title="Download Certified Copy"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
