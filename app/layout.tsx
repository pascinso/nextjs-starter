import classNames from "styles/app.module.scss";

const useLayout: AppLayout = ({ children }) => {
  return (
    <html lang="en" className={classNames.html}>
      <body>
        <main className={classNames.layout}>{children}</main>
      </body>
    </html>
  );
};

export default useLayout;
