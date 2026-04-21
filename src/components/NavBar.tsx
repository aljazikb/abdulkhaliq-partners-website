import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import i18n from "../i18n";

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
    <nav className=" bg-[#004aad] text-white p-4">
      <div className="flex items-center gap-2">


      </div>

      <div className="flex items-center justify-between mx-auto container  z-50">
        <img src="/src/assets/MAVNT.png" alt="Logo" className="w-36" />
        {/* for large screens */}
        <ul className="md:flex gap-6 hidden">
          <li>
            <a href="#" className={styles.link}>{t("home")}</a>
          </li>
          <li >
            <a href="#" className={styles.link}>{t("about")}</a>
          </li>
          <li>
            <a href="#" className={styles.link}>{t("services")}</a>
          </li>
          <li >
            <a href="#" className={styles.link}>{t("portfolio")}</a>
          </li>
          <li >
            <a href="#" className={styles.link}>{t("contact")}</a>
          </li>

          {/*  ----------------------------------------------    */}
          <li className="relative">

            <button onClick={toggleGlobe} className="cursor-pointer">
              <FaGlobe size={20} />
            </button>

            {/*                    */}
            {isOpenGlobe && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 flex flex-col gap-2  z-50">
                <button
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
        <div className="cursor-pointer md:hidden" >
          {isOpen ? <RiCloseLargeFill size={23} onClick={toggleMenu} /> :
            <GiHamburgerMenu size={23} onClick={toggleMenu} />}

        </div>
      </div>



      {/* for small screens */}
      {isOpen && (<ul className="flex flex-col mt-4 text-center md:hidden">
        <li>
          <a href="#" className={`${styles.smallLink} block`}> {t("home")}</a>
        </li>
        <li>
          <a href="#" className={`${styles.smallLink} block`}> {t("about")}</a>
        </li>
        <li>
          <a href="#" className={`${styles.smallLink} block`}> {t("services")}</a>
        </li>
        <li>
          <a href="#" className={`${styles.smallLink} block`}> {t("portfolio")}</a>
        </li>
        <li>
          <a href="#" className={`${styles.smallLink} block`}> {t("contact")}</a>
        </li>
        {/*  ----------------------------------------------    */}
        <li className="relative">

          <button onClick={toggleGlobe} className="cursor-pointer">
            <FaGlobe size={20} />
          </button>

          {/*                    */}
          {isOpenGlobe && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 flex flex-col gap-2">
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