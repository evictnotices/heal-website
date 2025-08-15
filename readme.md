# Discord Bot Website Template

A modern, responsive website template for Discord bots built with React, TypeScript, and Tailwind CSS. Features smooth animations, dynamic theming, and analytics integration.

![Animation](https://github.com/user-attachments/assets/846f4f61-c873-4474-b6aa-7a7a5ae65410)


## Features

- 🎨 Dynamic theme customization
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 📊 Discord webhook analytics
- 🔒 Privacy Policy and Terms of Service pages
- 📝 Commands documentation
- 🎮 Interactive 3D background

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/discord-bot-website.git
cd discord-bot-website
```

2. Install dependencies:
```bash
npm install
```


3. Configure your bot:
Edit `src/config/site.ts` with your bot's information:
```typescript
export const siteConfig = {
  bot: {
    name: "Your Bot Name",
    description: "Your bot description",
    avatar: "your_bot_avatar_url",
    inviteUrl: "your_bot_invite_url",
    supportServer: "your_support_server_url",
  },
  // ... other configurations
};
```

## Development

Start the development server:
```bash
npm run dev
```

## Building for Production

Build the project:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

## Customization

### Themes
Modify the theme colors in `src/config/site.ts`:
```typescript
theme: {
  primary: "#8B5CF6",
  background: "#000000",
  foreground: "#FFFFFF",
  accent: "#6D28D9",
}
```

### Features
Add or modify features in `src/config/site.ts`:
```typescript
features: [
  {
    title: "Feature Name",
    description: "Feature description",
    icon: "IconName", // from lucide-react
  }
]
```

## Analytics

Change the webhook place holder in `\src\utils\analytics.ts`
 
## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, join our [Discord server](https://discord.gg/CR7s2aEf9T) or open an issue on GitHub.
