import { useEffect } from 'react';
import { useConfig } from './use-config';

export function useTheme() {
  const { config } = useConfig();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', config.theme.primary);
    root.style.setProperty('--color-background', config.theme.background);
    root.style.setProperty('--color-foreground', config.theme.foreground);
    root.style.setProperty('--color-accent', config.theme.accent);
  }, [config.theme]);
}