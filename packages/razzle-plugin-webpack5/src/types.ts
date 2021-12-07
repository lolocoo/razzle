import { Configuration } from "webpack";
import {
  BaseRazzleConfig,
  BaseRazzlePlugin,
  RazzleConfigInt,
  RazzleContext,
  RazzleContextInt,
  RazzlePathNames,
  RazzlePaths,
  RazzlePluginInt,
} from "razzle/types";
import { type } from "os";

export interface Webpack5RazzleConfigInt<T, U, Q> {
  modifyWebpackOptions?: (
    razzleConfig: T,
    razzleContext: U,
    webpackOptions: Q
  ) => Promise<Q> | Q;
  modifyWebpackConfig?: (
    razzleConfig: T,
    razzleContext: U,
    webpackOptions: Q,
    webpackConfig: Configuration
  ) => Promise<Configuration> | Configuration;
}

export interface Webpack5RazzlePluginInt<S, T, U, Q>
  extends RazzlePluginInt<S, T, U> {
  modifyWebpackOptions?: (
    pluginOptions: S,
    razzleConfig: T,
    razzleContext: U,
    webpackOptions: Q
  ) => Promise<Q> | Q;
  modifyWebpackConfig?: (
    pluginOptions: S,
    razzleConfig: T,
    razzleContext: U,
    webpackOptions: Q,
    webpackConfig: Configuration
  ) => Promise<Configuration> | Configuration;
}

export interface Webpack5RazzleContextInt<U extends string>
  extends RazzleContextInt<U> {
  devBuild: string;
  webBuilds: Array<string>;
  nodeBuilds: Array<string>;
}

export interface Webpack5OptionsInt<T extends string> {
  readonly isWeb: boolean;
  readonly isNode: boolean;
  buildName: string;
  definePluginOptions: Record<T, string>;
}

export interface Webpack5PluginOptions {
  devBuild: string;
  webBuilds: Array<string>;
  nodeBuilds: Array<string>;
}

export type Webpack5RazzlePathNames =
  | RazzlePathNames
  | "srcPath"
  | "appServerIndex"
  | "appServerPath"
  | "appClientPath";

export type Webpack5RazzleContext =
  Webpack5RazzleContextInt<Webpack5RazzlePathNames>;

export type Webpack5DefinePluginDefines = "process.env.NODE_ENV";

export type Webpack5Options = Webpack5OptionsInt<Webpack5DefinePluginDefines>;

export type Webpack5RazzleConfig = RazzleConfigInt<
  Webpack5RazzleConfig,
  Webpack5RazzleContext
>;

export type Webpack5RazzlePlugin = RazzlePluginInt<
  Webpack5PluginOptions,
  Webpack5RazzleConfig,
  Webpack5RazzleContext
>;

export type Webpack5ChildConfig = Webpack5RazzleConfigInt<
  Webpack5ChildConfig,
  Webpack5RazzleContext,
  Webpack5Options
>;

export type Webpack5ChildPlugin = Webpack5RazzlePluginInt<
  Record<string, unknown>,
  Webpack5ChildConfig,
  Webpack5RazzleContext,
  Webpack5Options
>;