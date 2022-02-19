The goal was to build the website where I can show my abilities to work with complicated logic, so I decided to build game website.

To build this project I used the "create-react-app" boilerplate. I chose this to minimize initial setup and invest more time in learning main technologies. Also, I use TypeScript to add type definitions and catch errors and bugs at build time. In addition to this, I use "react-router-dom" to implement dynamic routing.

This was the first project where I started using "styled components", and I realized that it`s way more easier to style my application than using SCSS or basic CSS.

On the intro page you can choose one of three games: "Memory game", card game called "Durak" and "Tic Tac Toe" game. This list of games on mobile devices becomes into a slider which works with the help of "framer-motion" and "react-swipeable" libraries.

The "Memory game" is the simple card game, where a user has to flip cards and find the same cards. I created a flip effect using basic CSS.

The "Durak" game is the most complicated one, it takes a lot of time to build the game logic. I tried to comment all stuff, so if you wanna see how it works, you should go to the "durakReducer" file. Also, if you wanna see AI`s cards, you can turn it on in settings button. Actually, I animated this game using "framer-motion" library.

And the last game is "Tic Tac Toe". This game was not so complicated as the "Durak", but it also takes a lot of time to create the AI logic. Here user can choose who will go first and of course select "X" or "0". In addition to this I implemented draw effect with the help of "framer-motion" library and SVG.

Besides, I created the "useSound" hook and added some sound effects to the "Durak" and "Tic Tac Toe" games. And of course this project is full responsive.