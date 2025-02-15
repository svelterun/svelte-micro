import { Readable } from 'svelte/store';

export declare class Route {
  $$prop_def: {
    path?: string;

    fallback?: boolean;
  };

  $$slot_def: { default: {} };
}

export declare const router: {
  push(href: string): void;

  replace(href: string): void;

  setOptions(changedOptions: { reloadPrevent: boolean }): void;
};

export declare function pathToArray(path: string): string[];

export declare const path: Readable<string>;

export declare const query: Readable<string>;

export declare const hash: Readable<string>;
