//entry -> output
// console.log(__dirname); __dirname give and absoulte path , to try use node webpack.config.js 
const path=require('path') // here we are requiring path function provided by node to use below
// console.log();

module.exports={
entry:'./src/app.js',
output:{
    path: path.join(__dirname,'public'),
    filename:'bundle.js'
},
module:{
    rules:[{
        loader:'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
    }]
}
};

//loader