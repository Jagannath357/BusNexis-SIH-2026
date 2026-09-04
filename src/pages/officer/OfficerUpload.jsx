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

export function OfficerUpload() {
  const { addRecord } = useContext(AppContext);
  const { user } = useAuth();
  const { addToast } = useToast();

  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [extractedRecord, setExtractedRecord] = useState(null);

  const startPipeline = () => {
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
          ownerName: "Subhashree Jena",
          fatherName: "Bibhuti Jena",
          surveyNumber: `${Math.floor(70 + Math.random() * 80)}/${Math.floor(1 + Math.random() * 5)}`,
          khataNumber: `${Math.floor(10 + Math.random() * 90)}`,
          khasraNumber: `${Math.floor(70 + Math.random() * 80)}/A`,
          area: 1.65,
          areaUnit: "Acres",
          village: "BhuNexis Demo Village",
          tehsil: "Jatni",
          district: "Khordha",
          state: "Odisha",
          landClassification: "Homestead (Gharabari)",
          documentType: selectedFile.name.endsWith('.pdf') ? "Scanned PDF Deed" : "Legacy Image Patta",
          verificationStatus: "UNDER REVIEW",
          overallConfidence: 81.2,
          extractedFields: {
            ownerName: { value: "Subhashree Jena", confidence: 94, edited: false },
            surveyNumber: { value: "76/3", confidence: 78, edited: false },
            khataNumber: { value: "32", confidence: 82, edited: false },
            area: { value: "1.65 Acres", confidence: 75, edited: false },
            village: { value: "BhuNexis Demo Village", confidence: 98, edited: false }
          },
          parcelGeoJsonRef: "PARCEL-106",
          uploadedBy: user?.name || "Arun Kumar Mohanty",
          uploadedAt: new Date().toLocaleString(),
          verifiedBy: null,
          verifiedAt: null,
          conflictDetails: null,
          documentUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3pp.pdf"
        };

        setExtractedRecord(newRec);
        addRecord(newRec, user?.name);
        addToast("Document upload & simulated extraction complete.", "success");
      }
    }, 450);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded border border-blue-200">
            Document Ingestion
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Upload Land Record File
          </h1>
          <p className="text-xs text-slate-500">
            Select scanned legacy deeds, Record of Rights (Patta), or Khasra documents for simulated OCR processing.
          </p>
        </div>

        {/* Upload Drop Zone Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <FileUpload onFileSelect={(file) => setSelectedFile(file)} disabled={isProcessing} />

          {selectedFile && !isProcessing && !isComplete && (
            <div className="flex justify-end pt-2">
              <button
                onClick={startPipeline}
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-2"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Start Ingestion & OCR Processing</span>
              </button>
            </div>
          )}
        </div>

        {/* Processing Timeline Progress */}
        {(isProcessing || isComplete) && (
          <ProcessingTimeline currentStageIndex={currentStage} isComplete={isComplete} />
        )}

        {/* Extracted Output Result */}
        {isComplete && extractedRecord && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Simulated Extraction Successful</span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-emerald-100 text-xs space-y-1">
              <p><strong>Record ID:</strong> {extractedRecord.id}</p>
              <p><strong>Owner:</strong> {extractedRecord.ownerName}</p>
              <p><strong>Survey No:</strong> {extractedRecord.surveyNumber} | <strong>Khata No:</strong> {extractedRecord.khataNumber}</p>
              <p><strong>Confidence:</strong> {extractedRecord.overallConfidence}%</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
