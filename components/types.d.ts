export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type Properties<ObjectType extends object> = {
  [property in keyof ObjectType]: {
    value: ObjectType[property];
    writable?: boolean;
  };
};

type ComponentType = object & { name: string };

interface ImportedComponent<Props> {
  default(props: Props | object): JSX.Element | null;
}
