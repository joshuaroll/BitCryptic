import React, { useState } from 'react';

const WordPlayIndicators = () => {
  const [revealedSpoilers, setRevealedSpoilers] = useState({});

  const toggleSpoiler = (category, index, type) => {
    setRevealedSpoilers(prev => ({
      ...prev,
      [`${category}-${index}-${type}`]: !prev[`${category}-${index}-${type}`]
    }));
  };

  const scrollToSection = (category) => {
    const element = document.getElementById(category.toLowerCase());
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const indicators = [
    {
      category: 'Anagrams',
      description: 'Words that suggest rearrangement or disorder',
      examples: [
        'confused', 'wild', 'strange', 'unusual', 'broken', 'damaged',
        'crazy', 'mixed up', 'wrong', 'bad', 'drunk', 'about',
        'arranged', 'sorted', 'working'
      ],
      exampleClues: [
        {
          clue: 'Confused rats are popular (4)',
          answer: 'STAR',
          explanation: 'Rearrange "RATS" to get "STAR" (also works as a reversal here)',
          highlight: 'RATS → STAR',
          definition: 'popular'
        },
        {
          clue: 'Strange care runs fast (4)',
          answer: 'RACE',
          explanation: 'Rearrange "CARE" to get "RACE"',
          highlight: 'CARE → RACE',
          definition: 'runs fast'
        }
      ]
    },
    {
      category: 'Hidden Words',
      description: 'Words that suggest concealment or partial visibility',
      examples: [
        'in', 'within', 'hiding', 'some of', 'part of', 'buried in',
        'held by', 'embraced by', 'concealed in', 'among'
      ],
      exampleClues: [
        {
          clue: 'A foreign car buried in the tennis sand (6)',
          answer: 'NISSAN',
          explanation: '"NISSAN" is hidden within "tennis sand"',
          highlight: 'ten[NIS SAN]d',
          definition: 'A foreign car'
        },
        {
          clue: 'Refined portion of garden within hedge shearing (5)',
          answer: 'EDGES',
          explanation: '"EDGE" is hidden within "hedge" with the final letter from "shearing"',
          highlight: 'h[EDGE S]hearing',
          definition: 'Refined portion of garden'
        },
      ]
    },
    {
      category: 'Reversals',
      description: 'Words that suggest backwards movement or direction',
      examples: [
        'back', 'returning', 'reversed', 'up', 'north', 'east', 'south', 'west','ascending',
        'rising', 'overturned', 'reflected', 'upside down'
      ],
      exampleClues: [
        {
          clue: 'Take back the night by witholding first gold light (4)',
          answer: 'THIN',
          explanation: '"NIGHT" reversed becomes "THGIN" and when "G" (first letter of gold) is removed it becomes THIN',
          highlight: 'NIGHT → THIN',
          definition: 'light'
        },
        {
          clue: 'Northbound cablecar sells food (4)',
          answer: 'MART',
          explanation: '"TRAM" (another name for cablecar) reversed becomes "MART" (market)',
          highlight: 'MART → TRAM',
          definition: 'sells food'
        }
      ]
    },
    {
      category: 'Deletions',
      description: 'Words that suggest removal or loss',
      examples: [
        'shortened', 'cut', 'reduced', 'trimmed', 'beheaded', 'endless',
        'bottomless', 'curtailed', 'lacking', 'missing'
      ],
      exampleClues: [
        {
          clue: 'Beheaded monarch is still bowed (4)',
          answer: 'ARCH',
          explanation: 'Monarch without the first three letter gives ARCH which a shape that is bowed',
          highlight: 'mon[ARCH] → arch',
          definition: 'bowed'
        },
        {
          clue: 'Half lycanthrope is still twisted (4)',
          answer: 'ROPE',
          explanation: 'The latter portion of lycanthrope is ROPE which is twisted string',
          highlight: 'lycanth[ROPE]',
          definition: 'twisted'
        }
      ]
    },
    {
      category: 'Letter Index',
      description: 'Words that suggest selecting specific letters from words',
      examples: [
        'even', 'odd', 'prime', 'first', 'last', 'middle', 'every other',
        'alternate', 'initial', 'final', 'central', 'beginning', 'end'
      ],
      exampleClues: [
        {
          clue: 'Even stripes can be formal wear (3)',
          answer: 'TIE',
          explanation: 'Take the even-numbered letters from "STRIPES" (T, I, E) to get "TIE"',
          highlight: 's[T]r[I]p[E]s',
          definition: 'formal wear'
        },
        {
          clue: 'Ones wearing red, orange, yellow, and lilac can be crowned (5)',
          answer: 'ROYAL',
          explanation: 'Take the first letter of each word: Red, Orange, Yellow, And Lilac',
          highlight: '[R]ed [O]range [Y]ellow [A]nd [L]ilac',
          definition: 'crowned'
        }
      ]
    },
    {
      category: 'Homophones',
      description: 'Words that suggest sound or hearing',
      examples: [
        'sounds like', 'heard', 'say', 'spoken', 'aloud', 'audibly',
        'by the sound of it', 'reportedly', 'broadcast'
      ],
      exampleClues: [
        {
          clue: 'The number sounded not against it (4)',
          answer: 'FOUR',
          explanation: 'Sounds like "FOR" which is not against it',
          highlight: 'FOUR (sounds like FOR)',
          definition: 'The number'
        },
        {
          clue: 'The Mountain heard a noble title (3)',
          answer: 'SUR',
          explanation: 'Sounds like "SIR"',
          highlight: 'SUR (sounds like SIR)',
          definition: 'The Mountain'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Cryptic Crossword Word Play Indicators
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Index</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {indicators.map((category) => (
              <button
                key={category.category}
                onClick={() => scrollToSection(category.category)}
                className="text-blue-600 hover:text-blue-800 hover:underline text-left"
              >
                {category.category}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Understanding Cryptic Clues</h3>
            <p className="text-gray-600">
              Every cryptic crossword clue contains two parts: a definition and a word play element. The definition is usually at the start or end of the clue, while the word play uses various techniques (like anagrams, reversals, or hidden words) to arrive at the same answer. The word play indicators help you identify which technique is being used. The answer must satisfy both the definition and the word play.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          {indicators.map((category) => (
            <div key={category.category} id={category.category.toLowerCase()} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
                {category.category}
              </h2>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Common Indicators:</h3>
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
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Example Clues:</h3>
                <ul className="space-y-4">
                  {category.exampleClues.map((example, index) => (
                    <li key={index} className="text-gray-600">
                      <div className="mb-1 text-lg font-medium text-gray-800 ml-8">{example.clue}</div>
                      <div className="ml-12">
                        <button
                          onClick={() => toggleSpoiler(category.category, index, 'all')}
                          className={`w-full text-left transition-all duration-200 ${
                            revealedSpoilers[`${category.category}-${index}-all`]
                              ? 'text-gray-700'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {revealedSpoilers[`${category.category}-${index}-all`] ? (
                            <>
                              <div className="text-orange-600 font-medium text-base">Definition: {example.definition}</div>
                              <div className="text-green-600 font-medium text-base">Answer: {example.answer}</div>
                              <div className="text-blue-600 text-base">Explanation: {example.explanation}</div>
                              <div className="text-purple-600 font-mono mt-1 text-base">{example.highlight}</div>
                            </>
                          ) : (
                            <span className="text-base">Click to reveal solution</span>
                          )}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordPlayIndicators; 