import React from 'react';

const WordPlayIndicators = () => {
  const indicators = [
    {
      category: 'Anagrams',
      description: 'Words that suggest rearrangement or disorder',
      examples: [
        'confused', 'wild', 'strange', 'unusual', 'broken', 'damaged',
        'crazy', 'mixed up', 'wrong', 'bad', 'drunk', 'out', 'about',
        'developed', 'arranged', 'sorted', 'working'
      ]
    },
    {
      category: 'Hidden Words',
      description: 'Words that suggest concealment or partial visibility',
      examples: [
        'in', 'within', 'hiding', 'some of', 'part of', 'buried in',
        'held by', 'embraced by', 'concealed in', 'among'
      ]
    },
    {
      category: 'Reversals',
      description: 'Words that suggest backwards movement or direction',
      examples: [
        'back', 'returning', 'reversed', 'up', 'north', 'ascending',
        'rising', 'overturned', 'reflected', 'about turn'
      ]
    },
    {
      category: 'Containers',
      description: 'Words that suggest one thing being inside another',
      examples: [
        'in', 'inside', 'containing', 'around', 'about', 'swallowing',
        'embracing', 'surrounding', 'within', 'holds'
      ]
    },
    {
      category: 'Deletions',
      description: 'Words that suggest removal or loss',
      examples: [
        'shortened', 'cut', 'reduced', 'trimmed', 'beheaded', 'endless',
        'bottomless', 'curtailed', 'lacking', 'missing'
      ]
    },
    {
      category: 'Homophones',
      description: 'Words that suggest sound or hearing',
      examples: [
        'sounds like', 'heard', 'say', 'spoken', 'aloud', 'audibly',
        'by the sound of it', 'reportedly', 'broadcast'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Cryptic Crossword Word Play Indicators
        </h1>
        <div className="space-y-8">
          {indicators.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {category.category}
              </h2>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordPlayIndicators; 