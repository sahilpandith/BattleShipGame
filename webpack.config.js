const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'development',
	entry : "./index.js",
	output : {
		filename : 'main.js',
		path : path.resolve(__dirname,'dist'),
		clean: true,
	},
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
			{
				test: /\.(png|svg|jpg)$/,
				type: 'asset/resource',
			}
		],
	  },
	  plugins: [
        new HtmlWebpackPlugin({
            title: 'BattleShip',
			hash: true,
            filename: 'index.html',
			template: './index.html',
        }),
      ],
      devtool: 'inline-source-map',	
}
