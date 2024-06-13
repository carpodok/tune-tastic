# Tune Tastic

![Frame 6](https://github.com/carpodok/tune-tastic/assets/64840495/5a897df8-4786-4813-b7d6-dee5f4a0f4b6)


Tune-Tastic is a Discord bot designed to bring music to your server. With simple commands, you can play YouTube videos, create playlists, and manage your music queue. This bot enhances the audio experience for all server members, making it easy to listen to your favorite tunes together.

## Features

- ***Play Music:*** Play YouTube videos directly in your Discord server.
- ***Add to Playlist:*** Add videos to a playlist for continuous playback.
- ***Manage Playback:*** Skip to the next or previous video, or clear the playlist entirely.
- ***Queue Display:*** View the current music queue.
- ***Help Command:*** Display a list of available commands.

## Bot Commands

- ***!play*** *[YouTube video URL or search query]*: Play a video or add it to the queue.
- ***!add*** *[YouTube video URL or search query]*: Add a video to the playlist.
- ***!next:*** Play the next video in the playlist.
- ***!prev:*** Play the previous video in the playlist.
- ***!clear:*** Clear the current playlist.
- ***!queue:*** Display the current music queue.
- ***!help:*** Show this help message.

## Folder Structure
The project folder structure is organized as follows:

```java
TUNE-TASTIC
├── src
│   ├── commands
│   │   ├── add.js
│   │   ├── clear.js
│   │   ├── commandHandler.js
│   │   ├── help.js
│   │   ├── next.js
│   │   ├── play.js
│   │   ├── previous.js
│   │   └── queue.js
│   ├── utils
│   │   ├── isURL.js
│   │   ├── playlistManager.js
|   |- index.js
├── .env
├── package.json
```


## Technologies Used

- ***Node.js:*** JavaScript runtime for building the bot.
- ***Discord.js:*** Library for interacting with the Discord API.
- ***@discordjs/voice:*** Library for handling audio in Discord.
- ***dotenv:*** Module to load environment variables.
- ***play-dl:*** Module to handle YouTube playback.
- ***yt-search:*** Library for searching YouTube videos.

## Installation

To set up and run the Tune-Tastic bot, follow these steps:



#### 1. Clone the Repository

```bash
git clone https://github.com/your-carpodok/tune-tastic.git
cd tune-tastic
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables
Create a .env file in the root directory and add your Discord bot token:

```bash
CLIENT_TOKEN=your_discord_bot_token
```


#### 4. Run the Bot
 
To start the bot, use the following command:

```bash
npm start
```

For development purpose with live reload, use:

```bash
npm run dev
```

## Contributing

Feel free to submit issues and enhancement requests.



## License

This project is licensed under the MIT License.
