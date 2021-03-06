import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      return setMode(newMode);
    }

    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }

    const newHistory = history.slice(0, -1);
    setHistory(newHistory);

    setMode(newHistory[newHistory.length - 1]);
  };

  return { mode, transition, back };
};