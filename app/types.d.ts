import type {
  ReactNode,
  NextPage,
  FunctionComponent,
  ComponentType,
  SVGProps,
} from "types";

interface LayoutProps {
  children: ReactNode;
}

interface Home extends NextPage, FunctionComponent {
  readonly Vercel?: ComponentType<SVGProps<SVGSVGElement>>;
}
