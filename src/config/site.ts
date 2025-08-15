// check /utils/analytics.ts for visit counter


export const siteConfig = {
  bot: {
    name: "heal",
    description: "An all-in-one aesthetic Discord bot",
    avatar: "https://cdn.discordapp.com/attachments/1405346822137839637/1405726565781868565/Julie_Sigtuna.jpeg?ex=689fe062&is=689e8ee2&hm=cc28fc11d9065fe02c910e648c7db573b9ed58c6d9a2e565e08b9e465843fe09&",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1405145063067091076&permissions=8&integration_type=0&scope=bot",
    supportServer: "https://discord.gg/your-server",
  },
  theme: {
    primary: "#3F474A",
    background: "#000000",
    foreground: "#FFFFFF",
    accent: "#5d6b70ff",
  },
  features: [
    {
      title: "Moderation",
      description: "Keep your server safe with powerful moderation tools",
      icon: "Terminal",
    },
    {
      title: "Information",
      description: "Get all the information you need about your server",
      icon: "Terminal",
    },
    {
      title: "Invites",
      description: "Invite tracking and reward system",
      icon: "Terminal",
    },
    {
      title: "More coming soon",
      description: "weekly updates and more features!",
      icon: "Terminal",
    },
    
  ],
  navigation: {
    showDashboard: false,
    dashboardUrl: "/dashboard",
  },
  legal: {
    privacyPolicy: {
      lastUpdated: "August 2025",
      sections: [
        {
          title: "Data Collection",
          content: "We collect minimal data necessary for heal to function properly. This includes: server IDs, channel IDs, and user IDs for command functionality."
        },
        {
          title: "Data Usage",
          content: "The collected data is used solely for providing bot functionality and is not shared with third parties."
        },
        {
          title: "Data Retention",
          content: "We retain data only for as long as necessary to provide our services. You can request data deletion at any time."
        }
      ]
    },
    termsOfService: {
      lastUpdated: "August 2025",
      sections: [
        {
          title: "Acceptance of Terms",
          content: "By inviting heal to your server, you agree to these terms of service and any future modifications."
        },
        {
          title: "Usage Guidelines",
          content: "You agree not to:\n- Use heal for malicious purposes\n- Attempt to exploit bugs or vulnerabilities\n- Resell or redistribute heal's services"
        },
        {
          title: "Service Availability",
          content: "We strive to maintain high uptime but do not guarantee 100% availability. The service may be interrupted for maintenance or updates."
        }
      ]
    }
  }
};