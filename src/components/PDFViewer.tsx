'use client';

// Import the main component
import { Worker, Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PDFViewer({fileUrl}:{fileUrl: string}) {
    return <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
    <Viewer fileUrl={fileUrl} />
  </Worker>;
}