"use client";
import useTheme from "@/contexts/theme/ThemeContext";
import Footer from "@/layouts/main/footer/Footer";
import Header from "@/layouts/main/header/Header";

const Main = ({ children }) => {
  const { hideHeader, hideFooter } = useTheme();
  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Main;
