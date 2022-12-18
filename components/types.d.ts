export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

export type Action = "get" | "set" | "access";

export type Properties<Component extends object> = {
  [property in keyof Optional<Component, keyof Component>]: {
    value?: Component[property];
    writable?: boolean;
    get?: () => Component[property];
    set?: (param: Component[property]) => void;
    configurable?: boolean;
  };
};

type ComponentType = object & { name: string };

interface ImportedComponent<Props extends object> {
  default(props: Props | object): JSX.Element | null;
}
