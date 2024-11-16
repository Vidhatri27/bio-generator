import React, { useState } from 'react';

const BioGenerator = () => {
  const [preferences, setPreferences] = useState({
    career: '',
    personality: '',
    interests: [],
    relationshipGoals: ''
  });
  const [generatedBio, setGeneratedBio] = useState('');
  const [loading, setLoading] = useState(false);

  const careers = [
    'Software Engineer',
    'Artist',
    'Entrepreneur',
    'Chef',
    'Teacher',
    'Musician'
  ];

  const personalities = [
    'Adventurous',
    'Creative',
    'Compassionate',
    'Outgoing',
    'Introverted'
  ];

  const interestOptions = [
    'Cooking',
    'Traveling',
    'Fitness',
    'Music',
    'Literature',
    'Technology',
    'Gaming'
  ];

  const relationshipGoals = [
    'Casual',
    'Long-term',
    'Adventurous',
    'Seeking Deep Connection'
  ];

  const handleInterestToggle = (interest) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const generateBio = () => {
    setLoading(true);
    setTimeout(() => {
      const templates = [
        "{personality} {career} with a passion for {interests}. {relationshipGoal} who shares my enthusiasm for {mainInterest}.",
        "As a {personality} {career}, I find joy in {interests}. {relationshipGoal} to explore life's adventures together.",
        "By day, I'm a {career} who brings {personality} energy to everything I do. When I'm not working, you'll find me {interests}.",
      ];

      const template = templates[Math.floor(Math.random() * templates.length)];
      const mainInterest = preferences.interests[0] || 'trying new things';
      const interestString = preferences.interests.length > 0 
        ? `exploring ${preferences.interests.join(' and ')}` 
        : 'discovering new experiences';

      const bio = template
        .replace('{personality}', preferences.personality || 'Unique')
        .replace('{career}', preferences.career || 'professional')
        .replace('{interests}', interestString)
        .replace('{relationshipGoal}', preferences.relationshipGoals || 'Looking for someone special')
        .replace('{mainInterest}', mainInterest);

      setGeneratedBio(bio);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">DinnerTonight Bio Generator</h1>
      
      <div className="space-y-6">
        {/* Career Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Career</h3>
          <div className="flex flex-wrap gap-2">
            {careers.map(career => (
              <button
                key={career}
                onClick={() => setPreferences(prev => ({ ...prev, career }))}
                className={`px-4 py-2 rounded-full ${
                  preferences.career === career
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {career}
              </button>
            ))}
          </div>
        </div>

        {/* Personality Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Personality</h3>
          <div className="flex flex-wrap gap-2">
            {personalities.map(personality => (
              <button
                key={personality}
                onClick={() => setPreferences(prev => ({ ...prev, personality }))}
                className={`px-4 py-2 rounded-full ${
                  preferences.personality === personality
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {personality}
              </button>
            ))}
          </div>
        </div>

        {/* Interests Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Interests (Select multiple)</h3>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map(interest => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-full ${
                  preferences.interests.includes(interest)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Relationship Goals */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Relationship Goals</h3>
          <div className="flex flex-wrap gap-2">
            {relationshipGoals.map(goal => (
              <button
                key={goal}
                onClick={() => setPreferences(prev => ({ ...prev, relationshipGoals: goal }))}
                className={`px-4 py-2 rounded-full ${
                  preferences.relationshipGoals === goal
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={generateBio}
            disabled={loading}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Bio'}
          </button>
        </div>

        {/* Generated Bio Display */}
        {generatedBio && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Your Generated Bio:</h3>
            <p className="text-lg italic text-gray-700">{generatedBio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BioGenerator;