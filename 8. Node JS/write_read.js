const fs = require('fs');
const path = require('path');
const filePathRead = path.join(__dirname, "text.txt");
const filePathWrite = path.join(__dirname, "textNew.txt");

//Забирает данные из файла
async function getData(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data)
        })
    })
}

//Переворачивает данные
function reverseData(data){
    return data.split('').reverse().join('')
}

//Создает файл если его нет и записывает туда данные
async function setData(path, text){
    fs.writeFile(path, text, (err) => {
        if (err){
            return
        }
        console.log('Записаны')
    })
}

//Запуск всех функций
async function readWriteStart(pathRead, pathWrite){
    let res = await getData(pathRead)
    res = reverseData(res)
    await setData(pathWrite, res)
}

readWriteStart(filePathRead, filePathWrite)


