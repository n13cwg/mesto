const path = require('path'); // подключаем path к конфигу вебпак. const path нужна, чтобы подключить к проекту новые методы для работы с путём
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключаем плагин для работать с html-файлами
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // плагин, который будет каждый раз при сборке проекта удалять содержимое папки dist
// подключаем к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

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
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      }
      ]
  },
  plugins: [ // добавляем массив
    new HtmlWebpackPlugin({
      template: './src/index.html' // путь к файлу index.html
    }),
    new CleanWebpackPlugin(), // использовали плагин
  ]
};