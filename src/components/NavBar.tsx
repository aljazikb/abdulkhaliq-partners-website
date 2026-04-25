import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import i18n from "../i18n";
import logo from "../assets/MAVNT.png";




const styles = {
  link: "text-white hover:text-blue-300 transition-colors duration-700",
  smallLink: "block w-full py-3 text-white hover:bg-white/10 transition"

}


export default function NavBar() {

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const [isOpenGlobe, setIsOpenGlobe] = React.useState(false);
  const toggleGlobe = () => {
    setIsOpenGlobe(prev => !prev);
  };


  type Lang = "en" | "ar";
  const changeLanguage = (lang: Lang) => {
    i18n.changeLanguage(lang);
    setIsOpenGlobe(false);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="bg-[#004aad]  text-white p-4 relative z-50">

      <div className="flex items-center justify-between mx-auto container z-50">
        <img src={logo} alt="Logo" className="w-36" />
        {/* for large screens */}
        <ul className="md:flex gap-6 hidden">
          <li>
            <a href="#home" className={styles.link}>{t("home")}</a>
          </li>
          <li >
            <a href="#about" className={styles.link}>{t("about")}</a>
          </li>
          <li>
            <a href="#services" className={styles.link}>{t("services")}</a>
          </li>
          <li >
            <a href="#portfolio" className={styles.link}>{t("portfolio")}</a>
          </li>
          <li >
            <a href="#contact" className={styles.link}>{t("contact")}</a>
          </li>

          {/*  ----------------------------------------------    */}
          <li className="relative z-50">

            <button onClick={toggleGlobe} className="cursor-pointer">
              <FaGlobe size={20} />
            </button>

            {/*                    */}
            {isOpenGlobe && (
              <div className="absolute top-full mt-2 end-0 bg-white shadow-lg rounded-md p-2 flex flex-col gap-2 z-[9999] min-w-[120px]">                <button
                onClick={() => changeLanguage("en")}
                className="px-3 py-1 text-black hover:bg-gray-300 rounded"
              >
                English
              </button>

                <button
                  onClick={() => changeLanguage("ar")}
                  className="px-3 py-1 text-black hover:bg-gray-300 rounded"
                >
                  العربية
                </button>
              </div>
            )}
          </li>
          {/*  ----------------------------------------------    */}
        </ul>

        {/* hamburger menu for small screens */}
        <div className="cursor-pointer md:hidden z-50" onClick={toggleMenu}>
          {isOpen ? <RiCloseLargeFill size={23} /> : <GiHamburgerMenu size={23} />}
        </div>
      </div>



      {/* for small screens */}
      {isOpen && (<ul className="flex flex-col mt-4 text-center md:hidden ">
        <li>
          <a href="#home" onClick={toggleMenu} className={`${styles.smallLink} block`}> {t("home")}</a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu} className={`${styles.smallLink} block`}> {t("about")}</a>
        </li>
        <li>
          <a href="#services" onClick={toggleMenu} className={`${styles.smallLink} block`}> {t("services")}</a>
        </li>
        <li>
          <a href="#portfolio" onClick={toggleMenu} className={`${styles.smallLink} block`}> {t("portfolio")}</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu} className={`${styles.smallLink} block`}> {t("contact")}</a>
        </li>
        {/*  ----------------------------------------------    */}
        <li className="relative">

          <button onClick={toggleGlobe} className="cursor-pointer">
            <FaGlobe size={20} />
          </button>


          {/*                    */}
          {isOpenGlobe && (
            <div className="fixed top-16 right-4 bg-white shadow-lg rounded-md p-2 flex flex-col gap-2 z-999">
              <button
                onClick={() => changeLanguage("en")}
                className="px-3 py-1  text-black hover:bg-gray-300 rounded"
              >
                English
              </button>

              <button
                onClick={() => changeLanguage("ar")}
                className="px-3 py-1 text-black hover:bg-gray-300 rounded"
              >
                العربية
              </button>
            </div>
          )}
        </li>
        {/*  ----------------------------------------------    */}
      </ul>)}

    </nav>
  )
}