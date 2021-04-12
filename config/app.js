var dbHost = process.env.dbHost || "localhost";
module.exports = {
    name: "GCURacing",
    title: "GCURacing",
    commands: {
        package: "electron-packager electron.js GCU --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
        build: ""
    },
    http: {
        host: "localhost",
        port: 8000
    },
    author: "iP3",
    version: "2.0.0",
    db: {
        connectionUri: "mongodb+srv://euan1:MANofMAN1@webdev.ip5ff.mongodb.net/WebDev?retryWrites=true&w=majority",
        params: {},
        collections: ["moment", "user", "feeling", "ask"]
    }
};