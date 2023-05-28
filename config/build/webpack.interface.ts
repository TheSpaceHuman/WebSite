
export enum EBuildMode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: EBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
}

export interface IBuildEnv {
    mode: EBuildMode
    port: number;
}
