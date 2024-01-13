import webpack from "webpack";
import {Configuration} from "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {EBuildMode, IBuildOptions} from "./webpack.interface";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildLoaders({isDev}: IBuildOptions): webpack.RuleSetRule[] {
    const tsxLoader = {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
      };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\w+\.module\.scss$/,
                        localIdentName: '[local]--[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    };

    const svgLoader = {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
      };

    const fileLoader = {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
              {
                  loader: 'file-loader',
              },
          ],
      };

    return [
        fileLoader,
        svgLoader,
        tsxLoader,
        styleLoader
    ];
}

export function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = options;
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}

export function buildResolvers(options: IBuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}

export function buildConfig(options: IBuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode: mode ?? EBuildMode.DEVELOPMENT,
        entry: paths.entry,
        output: {
            filename: '[name].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}

export function buildDevServer(options: IBuildOptions): Configuration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
    }
}
