"use client";

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const modes = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'system', label: 'Auto', Icon: Monitor },
  { value: 'dark', label: 'Dark', Icon: Moon },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <div className="theme-controls" role="group" aria-label="Color theme" data-ready={ready}>
      {modes.map(({ value, label, Icon }) => (
        <button key={value} type="button" className="theme-option" aria-label={`${label} theme`} title={`${label} theme`} aria-pressed={ready ? theme === value : undefined} onClick={() => setTheme(value)}>
          <Icon size={13} aria-hidden="true" /><span>{label}</span>
        </button>
      ))}
    </div>
  );
}
