export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

export type Action = "get" | "set" | "access";

export type Properties<ObjectType extends object> = {
  [property in keyof Optional<ObjectType, keyof ObjectType>]: {
    value?: ObjectType[property];
    writable?: boolean;
    get?: () => ObjectType[property];
    set?: (param: ObjectType[property]) => void;
    configurable?: boolean;
  };
};

type ComponentType = object & { name: string };

interface ImportedComponent<Props extends object> {
  default(props: Props | object): JSX.Element | null;
}
