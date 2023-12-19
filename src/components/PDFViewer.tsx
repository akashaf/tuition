'use client';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PDFViewer() {
    return <Viewer fileUrl="/dummy.pdf" />;
}