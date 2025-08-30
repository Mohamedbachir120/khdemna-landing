import { useEffect, useRef, useState } from "react";
import { useLanguage, useTranslations } from "./../hooks/useTranslation";
import { MdChevronLeft, MdChevronRight, MdSpeed, MdVerifiedUser, MdGroups } from "react-icons/md";

// Updated services array with translation keys
const services = [
  { key: "services.0" },
  { key: "services.1" },
  { key: "services.2" },
];

const Benefits = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations("Benefits");

  const updateEdges = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateEdges();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges);
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  return (
    <section className="pt-16 bg-white relative mt-28 md:mt-0" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-gray-900 md:text-4xl font-bold text-center mb-10 mt-6">
          {t("slider.title")}
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {services.map((s, i) => (
              <article
                key={i}
                className="relative snap-center shrink-0 w-[300px] h-[420px] rounded-2xl overflow-hidden bg-neutral-200"
              >
                <img
                  src={t(`${s.key}.image`)}
                  alt={t(`${s.key}.title`)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{t(`${s.key}.title`)}</h3>
                  <p className="mt-2 text-sm">{t(`${s.key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation arrows */}
          {!atStart && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100"
            >
              <MdChevronLeft className="text-gray-700 text-2xl" />
            </button>
          )}
          {!atEnd && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100"
            >
              <MdChevronRight className="text-gray-700 text-2xl" />
            </button>
          )}
        </div>
      </div>

      {/* Existing Benefits Section */}
      <div className="pt-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">{t("benefits.title")}</h2>
            <p className="text-gray-600 mt-2">{t("benefits.description")}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="bg-pink-100 inline-block p-4 rounded-full">
                <MdSpeed className="text-secondary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">{t("benefits.fastConnections.title")}</h3>
              <p className="mt-2 text-gray-600">{t("benefits.fastConnections.description")}</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="bg-pink-100 inline-block p-4 rounded-full">
                <MdVerifiedUser className="text-secondary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">{t("benefits.vettedProfessionals.title")}</h3>
              <p className="mt-2 text-gray-600">{t("benefits.vettedProfessionals.description")}</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="bg-pink-100 inline-block p-4 rounded-full">
                <MdGroups className="text-secondary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">{t("benefits.communityPartnerships.title")}</h3>
              <p className="mt-2 text-gray-600">{t("benefits.communityPartnerships.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS to hide scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default Benefits;