export interface lazyData {
    attr: string;
    errorCallback?: any;
    placeholder?: string;
    callback?: any;
}
export interface lazyImageInterface {
    (obj: lazyData): void;
}
