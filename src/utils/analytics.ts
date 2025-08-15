import { useEffect } from 'react';

const WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL';

interface VisitorData {
  ip: string;
  timestamp: number;
  userAgent: string;
}

export async function trackVisitor() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    
    const visitorData: VisitorData = {
      ip: data.ip,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: '🎉 New Website Visitor',
          fields: [
            { name: 'IP Address', value: visitorData.ip, inline: true },
            { name: 'User Agent', value: visitorData.userAgent, inline: true },
            { name: 'Time', value: new Date(visitorData.timestamp).toLocaleString(), inline: true }
          ],
          color: 0x8B5CF6
        }]
      })
    });
  } catch (error) {
    console.error('Failed to track visitor:', error);
  }
}

export function useVisitorTracking() {
  useEffect(() => {
    trackVisitor();
  }, []);
}