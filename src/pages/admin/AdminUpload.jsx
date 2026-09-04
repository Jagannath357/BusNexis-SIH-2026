import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { DashboardLayout } from '../../components/DashboardLayout';
import { FileUpload } from '../../components/FileUpload';
import { ProcessingTimeline } from '../../components/ProcessingTimeline';
import { PIPELINE_STAGES } from '../../data/processingData';
import { UploadCloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminUpload() {
  const { addRecord } = useContext(AppContext);
  const { user } = useAuth();
  const { addToast } = useToast();

  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [extractedRecord, setExtractedRecord] = useState(null);

  const startSimulatedPipeline = () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setCurrentStage(0);
    setIsComplete(false);

    let stage = 0;
    const interval = setInterval(() => {
      stage += 1;
      if (stage < PIPELINE_STAGES.length) {
        setCurrentStage(stage);
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        setIsComplete(true);

        const newRec = {
          id: `LR-2026-${Math.floor(100 + Math.random() * 900)}`,
          documentId: `DOC-${Math.floor(1000 + Math.random() * 9000)}`,
          ownerName: "Harish Chandra Mohapatra",
          fatherName: "Kishore Chandra Mohapatra",
          surveyNumber: `${Math.floor(100 + Math.random() * 200)}/${Math.floor(1 + Math.random() * 9)}`,
          khataNumber: `${Math.floor(20 + Math.random() * 150)}`,
          khasraNumber: `${Math.floor(100 + Math.random() * 200)}/A`,
          area: 2.75,
          areaUnit: "Acres",
          village: "BhuNexis Demo Village",
          tehsil: "Jatni",
          district: "Khordha",
          state: "Odisha",
          landClassification: "Agricultural (Rayati)",
          documentType: selectedFile.name.endsWith('.pdf') ? "Scanned PDF Record" : "Digital Image Deed",
          verificationStatus: "UNDER REVIEW",
          overallConfidence: 84.5,
          extractedFields: {
            ownerName: { value: "Harish Chandra Mohapatra", confidence: 96, edited: false },
            surveyNumber: { value: "145/2", confidence: 88, edited: false },
            khataNumber: { value: "72", confidence: 85, edited: false },
            area: { value: "2.75 Acres", confidence: 79, edited: false },
            village: { value: "BhuNexis Demo Village", confidence: 98, edited: false }
          },
          parcelGeoJsonRef: "PARCEL-101",
          uploadedBy: user?.name || "System Admin",
          uploadedAt: new Date().toLocaleString(),
          verifiedBy: null,
          verifiedAt: null,
          conflictDetails: null,
          documentUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3pp.pdf"
        };

        setExtractedRecord(newRec);
        addRecord(newRec, user?.name);
        addToast("Document processed through simulated pipeline & added to record repository.", "success");
      }
    }, 400);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
            System Ingestion Pipeline
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Admin Document Ingestion Oversight
          </h1>
          <p className="text-xs text-slate-500">
            Test and monitor simulated document OCR preprocessing and field extraction stages.
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <FileUpload onFileSelect={(file) => setSelectedFile(file)} disabled={isProcessing} />

          {selectedFile && !isProcessing && !isComplete && (
            <div className="flex justify-end pt-2">
              <button
                onClick={startSimulatedPipeline}
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-2"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Execute Simulated Pipeline</span>
              </button>
            </div>
          )}
        </div>

        {/* Processing Timeline */}
        {(isProcessing || isComplete) && (
          <ProcessingTimeline currentStageIndex={currentStage} isComplete={isComplete} />
        )}

        {/* Extracted Record Review */}
        {isComplete && extractedRecord && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Simulated Extraction Complete — Record Generated</span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-emerald-100 text-xs space-y-2">
              <p><strong>Record ID:</strong> {extractedRecord.id}</p>
              <p><strong>Landowner:</strong> {extractedRecord.ownerName}</p>
              <p><strong>Survey / Khata:</strong> {extractedRecord.surveyNumber} / Khata No. {extractedRecord.khataNumber}</p>
              <p><strong>Overall Confidence:</strong> {extractedRecord.overallConfidence}%</p>
            </div>

            <div className="flex justify-end gap-2">
              <Link
                to={`/r/review?id=${extractedRecord.id}`}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5"
              >
                <span>Open in Human Verification Editor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
