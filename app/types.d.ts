interface AppLayoutProps {
  children: ReactNode;
}

interface AppLayout extends NextPage, FunctionComponent<AppLayoutProps> {}

interface Home
  extends NextPage,
    FunctionComponent,
    Partial<
      Readonly<{ Vercel: ComponentType<ComponentProps<SVGComponent>> }>
    > {}
