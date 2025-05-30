import { useState } from 'react';

const IssueChecklist = () => {
  const issues = [
    'Barandas rotas',
    'Pisos oxidados', 
    'Presencia de basura',
    'Grafitis ofensivos',
    'Señalización desgastada',
    'Grietas o filtraciones'
  ];

  const [selectedIssues, setSelectedIssues] = useState([]);

  const toggleIssue = (issue) => {
    setSelectedIssues(prev => 
      prev.includes(issue)
        ? prev.filter(i => i !== issue)
        : [...prev, issue]
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Problemas detectados</h2>
      <div className="space-y-3">
        {issues.map(issue => (
          <label key={issue} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selectedIssues.includes(issue)}
              onChange={() => toggleIssue(issue)}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">{issue}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default IssueChecklist;

// DONE