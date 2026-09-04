import React from 'react';
import { PIPELINE_STAGES } from '../data/processingData';
import { CheckCircle2, Loader2, Circle } from 'lucide-react';

export function ProcessingTimeline({ currentStageIndex = 0, isComplete = false }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Simulated OCR & AI Processing Pipeline
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Frontend Prototype Simulation Engine • Khordha District Cadastral Dataset
          </p>
        </div>
        <span className="px-2.5 py-1 text-xs font-bold bg-sky-100 text-sky-800 rounded-full border border-sky-300 animate-pulse">
          {isComplete ? 'Pipeline Completed' : `Stage ${currentStageIndex + 1} of ${PIPELINE_STAGES.length}`}
        </span>
      </div>

      {/* Timeline Steps Grid */}
      <div className="space-y-3">
        {PIPELINE_STAGES.map((stage, idx) => {
          let stepStatus = 'upcoming'; // 'completed', 'active', 'upcoming'
          if (idx < currentStageIndex || isComplete) {
            stepStatus = 'completed';
          } else if (idx === currentStageIndex) {
            stepStatus = 'active';
          }

          return (
            <div 
              key={stage.id} 
              className={`p-3 rounded-xl border transition-all flex items-start gap-3 text-xs ${
                stepStatus === 'completed' 
                  ? 'bg-emerald-50/60 border-emerald-200 text-slate-800' 
                  : (stepStatus === 'active' 
                      ? 'bg-sky-50 border-sky-300 text-slate-900 shadow-sm' 
                      : 'bg-slate-50/40 border-slate-200 text-slate-400')
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {stepStatus === 'completed' && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                )}
                {stepStatus === 'active' && (
                  <Loader2 className="w-4 h-4 text-sky-600 animate-spin" />
                )}
                {stepStatus === 'upcoming' && (
                  <Circle className="w-4 h-4 text-slate-300" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${stepStatus === 'upcoming' ? 'text-slate-500' : 'text-slate-900'}`}>
                    {stage.id}. {stage.name}
                  </span>
                  {stepStatus === 'completed' && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.2 rounded">
                      Passed
                    </span>
                  )}
                  {stepStatus === 'active' && (
                    <span className="text-[10px] font-semibold text-sky-700 bg-sky-100/80 px-1.5 py-0.2 rounded animate-pulse">
                      Processing...
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500 leading-tight">
                  {stage.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
