var fs = require('fs');

const dir = './Logs'

let createDir = () => {
    if (fs.existsSync(dir) == false) {
        fs.mkdir(dir, (err) => {
            if (err) {
                throw err;
            }
            console.log("Logs directory was created")
        })
    }
    
}

let fileCreator = () => {
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            fs.open('./Logs/log' + i + '.txt', 'w', function (err) {
                if (err) throw err;
                console.log('log' + i + '.txt')
            })
        } 
    }, 100)
}

let fileDelete = () => {
    setTimeout(()  => {
        for (let i = 0; i < 10; i++) {
            fs.unlink('./Logs/log' + i + '.txt', function (err) {
                if (err) throw err;
                console.log('Delete files... log' + i + '.txt')
            })
        }
    }, 1000)
}

createDir()
fileCreator()
fileDelete()