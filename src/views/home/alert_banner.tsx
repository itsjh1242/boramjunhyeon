import { motion } from "framer-motion";
import React from "react";

interface AlertBannerProps {
  top_date: string;
  icon_src: string;
  title: string;
  text: string;
  img_src: string;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  top_date,
  icon_src,
  title,
  text,
  img_src,
}) => {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ y: -50, opacity: 0 }} // 초기 상태
      animate={{ y: 0, opacity: 1 }} // 최종 상태
      exit={{ y: -50, opacity: 0 }} // 종료 상태
      transition={{ duration: 0.5, ease: "easeOut" }} // 애니메이션 설정
    >
      {/* 배경 블러 및 색상 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-gray-100/60 to-gray-50/70 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/60 z-0"></div>

      {/* 컨텐츠 */}
      <div className="relative px-4 py-3 w-full rounded-xl flex justify-between items-center z-10">
        {/* 메인 컨텐츠 - 좌 */}
        <div className="flex justify-start items-start mt-1 gap-[8px]">
          {/* 아이콘 */}
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src={icon_src}
              alt="Icon"
              className="w-full h-full object-contain"
            />
          </div>
          {/* 텍스트 */}
          <div className="flex flex-col items-start flex-grow px-2">
            <p className="font-semibold text-sm text-gray-900">{title}</p>
            <p className="font-normal text-xs text-gray-700 mt-1">{text}</p>
          </div>
        </div>
        {/* 메인 컨텐츠 - 우 */}
        <div className="flex flex-col items-end">
          {/* 상단 날짜 */}
          <p className="text-xs text-gray-700 text-right">{top_date}</p>
          {/* 배너 이미지 */}
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src={img_src}
              alt="banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
