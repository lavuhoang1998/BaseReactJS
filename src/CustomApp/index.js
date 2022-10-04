import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import EkycDocuments from '../CustomApp/EkycDocuments';
import FaceDetection from '../CustomApp/FaceDetection';
import OCR from '../CustomApp/OCR';
import RubySwing from '../CustomApp/RubySwing';
import './index.css';

const CustomApp = () => {
  return (
    <div className="app-content">
      <Routes>
        <Route
          path="ekyc-documents"
          element={
            <React.Suspense fallback={<>...</>}>
              <EkycDocuments />
            </React.Suspense>
          }
        />
        <Route
          path="ocr"
          element={
            <React.Suspense fallback={<>...</>}>
              <OCR />
            </React.Suspense>
          }
        />
        <Route
          path="face-detection"
          element={
            <React.Suspense fallback={<>...</>}>
              <FaceDetection />
            </React.Suspense>
          }
        />
        <Route
          path="ruby-swing"
          element={
            <React.Suspense fallback={<>...</>}>
              <RubySwing />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
};
export default CustomApp;
