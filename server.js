const app = require("./src/app");

const PORT = 3005;

const server = app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit server'))
})