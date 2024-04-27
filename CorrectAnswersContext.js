// CorrectAnswersContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CorrectAnswersContext = createContext();

export const CorrectAnswersProvider = ({ children }) => {
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0);

  useEffect(() => {
    const storedTotal = localStorage.getItem('correctAnswersTotal');
    if (storedTotal) {
      setCorrectAnswersTotal(parseInt(storedTotal, 10));
    }
  }, []);

  const updateCorrectAnswersTotal = (value) => {
    setCorrectAnswersTotal((prevTotal) => {
      const newTotal = prevTotal + value;
      localStorage.setItem('correctAnswersTotal', newTotal.toString());
      return newTotal;
    });
  };

  return (
    <CorrectAnswersContext.Provider value={{ correctAnswersTotal, updateCorrectAnswersTotal }}>
      {children}
    </CorrectAnswersContext.Provider>
  );
};

export const useCorrectAnswers = () => useContext(CorrectAnswersContext);
