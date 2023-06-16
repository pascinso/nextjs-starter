import classNames from "styles/global.module.scss";
import type { LayoutProps } from "./types";

export default function useLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={classNames.html}>
      <body>
        <main className={classNames.layout}>{children}</main>
      </body>
    </html>
  );
}
