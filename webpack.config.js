const path = require('path'); // подключаем path к конфигу вебпак. const path нужна, чтобы подключить к проекту новые методы для работы с путём

module.exports = { // module.exports — это синтаксис экспорта в Node.js
  entry: { main: './src/index.js' }, // указали первое место, куда заглянет webpack, — файл index.js в папке src
  output: { // указали в какой файл будет собираться весь js и дали ему имя
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
      publicPath: ''
  },
  mode: 'development', // добавили режим разработчика
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
}