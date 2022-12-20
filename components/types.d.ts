export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Action = "get" | "set" | "access";

export type Properties<Component extends object> = {
  [property in keyof Partial<Component>]: {
    value?: Component[property];
    writable?: boolean;
    get?: () => Component[property];
    set?: (param: Component[property]) => void;
    configurable?: boolean;
  };
};

export type ComponentType = object & { name: string };

interface ImportedComponent<Props extends object> {
  default(props: Props | object): JSX.Element | null;
}
