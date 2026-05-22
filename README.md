# 🤖 Discord Handler JS (v14)

<p align="center">
  <img src="https://img.shields.io/github/license/agonkolgeci/discord-handler-js?style=for-the-badge&color=blue" alt="License" />
  <img src="https://img.shields.io/badge/node.js-%3E%3D%2016.9.1-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/discord.js-v14.26.4-5865F2?style=for-the-badge&logo=discord" alt="Discord.js Version" />
  <img src="https://img.shields.io/badge/database-mongoose-red?style=for-the-badge&logo=mongodb" alt="Database Mongoose" />
</p>

---

**Discord Handler JS** is an ultra-optimized, production-ready Discord bot structure/template designed for **Discord.js v14**. Utilizing **ES6 modules**, this boilerplate handles commands, components (buttons, modals, select menus), and events dynamically, enabling you to build stable, scalable, and responsive Discord bots in minutes.

## ✨ Key Features

*   ⚡ **Full ES6 Module Support**: Modern import/export syntax throughout the codebase.
*   📦 **Dynamic Command Loading**: Full support for Slash commands, User contexts, and Message contexts.
*   🧩 **Interactive Components Handler**: Seamless routing for Buttons, Modals, and Select Menus.
*   📡 **Automated REST Command Deployments**: Automatic registration of application commands to the Discord API.
*   💎 **Sharding Out-of-the-Box**: Effortlessly scale your application with a built-in Sharding Manager.
*   🎨 **Custom Logger**: Beautiful, colored console logging powered by `Chalk`.
*   🛠️ **JSDoc Type Definitions**: Full IDE auto-completion suggestions for faster development.
*   🍃 **Mongoose Integration**: Ready-to-go MongoDB connection configuration (completely optional).

---

## 📂 Project Structure

```text
discord-handler-js/
├── .github/
│   └── dependabot.yml       # Automatic weekly dependency updates
├── src/
│   ├── commands/            # Bot Commands (Slash, Context Menus)
│   │   └── utilities/       # Grouped command folders
│   ├── components/          # UI Components (Buttons, Modals, Selects)
│   ├── events/              # Event Listeners (client ready, interaction, etc.)
│   ├── handlers/            # Core loaders (commands, components, events, rest, DB)
│   ├── resources/           # Configuration files
│   ├── structure/           # Custom Client class & formatting helpers
│   ├── utils/               # Logger & error structures
│   ├── index.js             # Main entry point (Normal Mode)
│   └── shard.js             # Sharding entry point (Sharding Mode)
├── .env                     # Private credentials (Token, IDs, DB URI)
├── package.json             # App dependencies & scripts
└── README.md                # This beautiful documentation
```

---

## 🚀 Getting Started

### 📋 Prerequisites
*   [Node.js](https://nodejs.org/) **v16.9.1** or newer (Recommended: v20+ / v24+)
*   A Discord Bot Token (Create one on the [Discord Developer Portal](https://discord.com/developers/applications))

### 🔧 Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/agonkolgeci/discord-handler-js.git
    cd discord-handler-js
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Setup Environment Variables**:
    Create a `.env` file in the root directory (or edit the existing one) with your credentials:
    ```env
    CLIENT_TOKEN=YOUR_DISCORD_BOT_TOKEN
    CLIENT_ID=YOUR_APPLICATION_ID
    MONGO_DB_URI=YOUR_MONGODB_ATLAS_URI # Optional
    ```
4.  **Configure Bot Settings**:
    Adjust non-sensitive settings in [src/resources/config.js](file:///Users/agon/Development/discord-handler-js/src/resources/config.js):
    ```javascript
    export default {
        project: {
            title: "discord-handler-js",
            description: "An optimized Discord bot structure...",
            version: "v14"
        },
        messages: {
            formatter: {
                success: "✅ {message}",
                info: "📌 {message}",
                error: "❌ {message}"
            }
        },
        remotes: {
            mongodb: false // Set to true to connect using MONGO_DB_URI
        }
    };
    ```

---

## 🏃 Run Modes

### 🟢 Normal Mode
Ideal for development and standard single-process bots:
```bash
node src/index.js
```

### 🌀 Sharding Mode
Recommended for production and larger bots to manage multi-process scaling:
```bash
node src/shard.js
```

---

## 🛠️ Usage & Architecture

### 1. Application Commands
Add files containing command objects exported as an array inside any subfolder under `src/commands/`.

```javascript
import { SlashCommandBuilder } from "discord.js";

export default [
    {
        structure: new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Replies with Pong!"),
      
        /**
         * @param client {ExtendedClient} - Custom Client instance
         * @param interaction {CommandInteraction} - The command interaction
         */
        onCommand: async (client, interaction) => {
            await interaction.reply("🏓 Pong!");
        }
    }
];
```

### 2. Interactive Components
Components are captured by their `customId` and handled dynamically inside any subfolder under `src/components/`.

```javascript
export default [
    {
        customId: "example-button",

        /**
         * @param client {ExtendedClient}
         * @param interaction {ButtonInteraction}
         */
        onButton: async (client, interaction) => {
            await interaction.reply({
                content: "You clicked the button!",
                ephemeral: true
            });
        }
    }
];
```
> Supported listeners: `onButton`, `onModalSubmit`, `onSelectMenu`.

### 3. Event Handling
Events are dynamically registered on the client. Place event files under subfolders of `src/events/`.

```javascript
export default [
    {
        name: "ready",
        once: true,

        /**
         * @param client {ExtendedClient}
         */
        onEvent: async (client) => {
            client.logger.log("success", `Logged in as @${client.user.tag}!`);
        }
    }
];
```

---

## 🎨 Utilities & Helpers

### 📝 Client Message Formatter
Use the built-in formatter from the client to unify the visual style of your user-facing responses:
```javascript
await interaction.reply({
    content: client.formatter.format("success", "Operation completed successfully!"),
    ephemeral: true
});
```

### 🪵 Custom Logger
Use the client-level color-coded logging system directly in your code:
```javascript
client.logger.log("info", "Synchronizing cache...");
client.logger.log("success", "Caching complete!");
client.logger.log("warn", "High memory usage detected >> Optimization recommended.");
```

---

## 📄 License
This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

## 🤝 Credits & Support
*   Created by [Agon KOLGECI](https://github.com/agonkolgeci)
*   Inspired by [DiscordJS-V14-Bot-Template](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template)