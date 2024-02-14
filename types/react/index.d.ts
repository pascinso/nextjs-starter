type ReactNode = import("types").ReactNode;

type Dispatch<Action> = import("types").Dispatch<Action>;

type SetStateAction<S> = import("types").SetStateAction<S>;

type ComponentProps<T> = import("types").ComponentProps<T>;

type ComponentType<Props = object> = import("types").ComponentType<Props>;

type NextPage<Props = object, InitialProps = Props> = import("types").NextPage<
  Props,
  InitialProps
>;

interface FunctionComponent<Props = object>
  extends NonNullable<import("types").FunctionComponent<Props>> {}

interface CSSProperties extends NonNullable<import("types").CSSProperties> {}
