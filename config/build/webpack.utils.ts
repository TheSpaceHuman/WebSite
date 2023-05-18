import webpack from "webpack";
import { Configuration } from "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {EBuildMode, IBuildOptions} from "./webpack.interface";


export function buildLoaders(): webpack.RuleSetRule[] {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ];
}

export function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = options;
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
    ]
}

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
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
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}

export function buildDevServer(options: IBuildOptions): Configuration {
    return {
        port: options.port,
        open: true
    }
}
