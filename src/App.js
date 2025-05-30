import { useState } from 'react';
import ReportHeader from './components/ReportHeader';
import LocationForm from './components/LocationForm';
import IssueChecklist from './components/IssueChecklist';
import PhotoUploader from './components/PhotoUploader';
import AdditionalComments from './components/AdditionalComments';
import SubmitButton from './components/SubmitButton';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <ReportHeader />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <LocationForm />
        <IssueChecklist />
        <PhotoUploader />
        <AdditionalComments />
        <SubmitButton />
      </main>
    </div>
  );
};

export default App;

// DONE