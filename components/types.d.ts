export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

export type Action = "get" | "set" | "access";

export type Properties<ObjectType extends object> = {
  [property in keyof MakeOptional<ObjectType, keyof ObjectType>]: {
    value?: ObjectType[property];
    writable?: boolean;
    get?: () => ObjectType[property];
    set?: (param: ObjectType[property]) => void;
    configurable?: boolean;
  };
};

type ComponentType = object & { name: string };

interface ImportedComponent<Props> {
  default(props: Props | object): JSX.Element | null;
}
