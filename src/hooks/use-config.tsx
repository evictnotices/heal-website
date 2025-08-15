import { createContext, useContext, ReactNode } from 'react';
import { siteConfig } from '@/config/site';

const ConfigContext = createContext(siteConfig);

export function ConfigProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigContext.Provider value={siteConfig}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const config = useContext(ConfigContext);
  return { config };
}