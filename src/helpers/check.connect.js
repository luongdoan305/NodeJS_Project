'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _Second = 5000
//count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connection::${numConnection}`)
}
//check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnections = numCores * 5

        console.log(`Active connections:${numConnection}`)
        console.log(`Memory Usage:: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnections) {
            console.log("Connections overload detected")
        }
    }, _Second);
}

module.exports = {
    countConnect,
    checkOverload
}