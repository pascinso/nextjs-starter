type RemoveProp<T, K extends keyof T> = import("types").RemoveProp<T, K>;

type DeepReadonly<T> = import("types").DeepReadonly<T>;

type DeepWritable<T> = import("types").DeepWritable<T>;

type Writable<T> = import("types").Writable<T>;

type DeepPartial<T> = import("types").DeepPartial<T>;

type Tuple<T, N extends number> = import("types").Tuple<T, N>;
