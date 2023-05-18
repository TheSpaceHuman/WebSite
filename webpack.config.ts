import {buildConfig} from "./config/build/webpack.utils";
import {EBuildMode, IBuildEnv, IBuildPaths} from "./config/build/webpack.interface";
import path from "path";

const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}


export default (env: IBuildEnv) => {
    const mode =  env.mode ?? EBuildMode.DEVELOPMENT;
    const isDev: boolean = mode === EBuildMode.DEVELOPMENT;
    const port = env.port ?? 3000;

    return buildConfig({
        mode,
        paths,
        isDev,
        port
    });
}

