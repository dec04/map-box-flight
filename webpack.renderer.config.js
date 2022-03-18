const rules = require("./webpack.rules");

rules.push({
    test: /\.(css|scss|sass)$/,
    use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader"},
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        [
                            "postcss-preset-env",
                            {
                                // Options
                            },
                        ],
                    ],
                },
            },
        }
    ],
});

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules,
    },
};
