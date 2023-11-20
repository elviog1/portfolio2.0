import React from "react";
import { useTranslation } from "react-i18next";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiGithub,
  SiSqlite,
  SiNestjs,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
export default function Tecnology() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center my-10 gap-10 max-w-6xl mx-auto">
      <div className="w-full">
        <span className="flex justify-center font-serif text-5xl pb-5 mb-5">
          {t("technologies-title")}
        </span>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex flex-col overflow-hidden items-center group">
            <DiHtml5 className="text-orange-600 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-orange-600">
              HTML
            </span>
          </div>

          <div className="flex flex-col overflow-hidden items-center group">
            <DiCss3 className="text-blue-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-500">
              CSS
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiJavascript className="text-yellow-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-yellow-500">
              Javascript
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiReact className="text-blue-800 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-800">
              React
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiReact className="text-blue-300 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-300">
              React Native
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <FaVuejs className="text-green-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-green-500">
              Vue
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiNestjs className="text-red-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-red-500">
              NestJs
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <TbBrandNextjs className="text-gray-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-gray-500">
              NextJs
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiTailwindcss className="text-blue-300 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-300">
              Tailwind
            </span>
          </div>

          <div className="flex flex-col overflow-hidden items-center group">
            <SiMongodb className="text-green-700 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-green-700">
              MongoDB
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiPostman className="text-orange-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-orange-500">
              Postman
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiGithub className="text-gray-700 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-gray-700">
              Github
            </span>
          </div>
          <div className="flex flex-col overflow-hidden items-center group">
            <SiSqlite className="text-blue-500 duration-300 text-9xl relative group-hover:-translate-y-32" />
            <span className="relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-500">
              SQLite
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
