## SOCKET.IO

### Usage
run docker-compose.yml file to run mysql and phpmyadmin containers
```
docker-compose up -d --build
```
Run front
```
cd front
npm i
npm start
```

Run CRUD http server
```
cd server
npm i
npm run dev
```

Run socker server
```
cd socket-server (Not available, on process)
npm i
```


http://localhost:8080/



### Resources
* Socket.io + Hooks https://levelup.gitconnected.com/handling-socketio-rooms-with-react-hooks-4723dd44692e
* https://dev.to/aduranil/how-to-use-websockets-with-redux-a-step-by-step-guide-to-writing-understanding-connecting-socket-middleware-to-your-project-km3
* SOCKET.IO Cheatsheet: https://socket.io/docs/emit-cheatsheet/
* React / Redux / Sockets : New player connected: cw_ypQb2_Y9KMZ5QAACJ
* Tetris css grid
