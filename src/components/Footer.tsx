
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#ff914d] relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-14 -bottom-14 w-64 h-64 rounded-full border-[36px] border-[#004aad]/10 pointer-events-none" />
            <div className="absolute -left-12 -top-12 w-44 h-44 rounded-full border-[26px] border-[#004aad]/6 pointer-events-none" />

            {/* Main content */}
            <div className="max-w-5xl mx-auto px-10 pt-14 pb-10">
                <div className="flex flex-wrap items-start justify-between gap-10">

                    {/* Brand */}
                    <div className="flex-1 min-w-[240px] max-w-sm">
                        <h2 className="font-black text-[#004aad] text-3xl tracking-tight mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                            MAVNT<span className="opacity-30">.</span>
                        </h2>
                        <p className="text-[#004aad]/75 text-sm leading-relaxed">
                            {t("footerTagline")}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-12">

                        {/* Location */}
                        <div>
                            <p className="text-[#004aad] font-bold text-[0.7rem] tracking-[0.14em] uppercase mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {t("footerLocation")}
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-[#004aad]/75 text-sm">
                                    <svg className="w-4 h-4 fill-[#004aad]/70 flex-shrink-0" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    {t("footerCity")}
                                </div>
                                <div className="flex items-center gap-2 text-[#004aad]/75 text-sm">
                                    <svg className="w-4 h-4 fill-[#004aad]/70 flex-shrink-0" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    {t("footerEmail")}
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-[#004aad] font-bold text-[0.7rem] tracking-[0.14em] uppercase mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {t("footerFollow")}
                            </p>
                            <div className="flex flex-col gap-3">
                                {[
                                    {
                                        label: " X", href: "https://twitter.com/mavnt",
                                        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    },
                                    {
                                        label: "LinkedIn", href: "https://linkedin.com/company/mavnt",
                                        path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    },
                                    {
                                        label: "Instagram", href: "https://instagram.com/mavnt",
                                        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                    }, {
                                        label: "TikTok", href: "https://www.tiktok.com/@mavnt.sa?_r=1&_t=ZS-95pUX5karrB",
                                        path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"
                                    },
                                ].map(({ label, href, path }) => (
                                    <  a

                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 text-[#004aad]/75 text-sm no-underline hover:opacity-100 opacity-75 transition-all hover:gap-4"
                                    >
                                        <svg className="w-4 h-4 fill-[#004aad] flex-shrink-0" viewBox="0 0 24 24">
                                            <path d={path} />
                                        </svg>
                                        {label}
                                    </a>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-5xl mx-auto px-10 py-3 flex flex-row justify-between items-center">
                <span className="text-[#004aad]/55 text-[10px] sm:text-xs">
                    © 2026 <strong className="text-[#004aad]/80">MAVNT</strong>. All rights reserved.
                </span>
                <a
                    href="https://aljazy.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004aad]/55 text-[10px] sm:text-xs hover:opacity-100 transition-opacity"
                >
                    {t("footerDeveloped")} <strong className="text-[#004aad]/80">Aljazy</strong>
                </a>
            </div>


        </footer >
    );
}