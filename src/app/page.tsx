"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [pyeong, setPyeong] = useState<string>("");
  const [squareMeters, setSquareMeters] = useState<string>("");

  const handlePyeongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPyeong(value);
    setSquareMeters((parseFloat(value) * 3.305785).toFixed(2));
  };

  const handleSquareMetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSquareMeters(value);
    setPyeong((parseFloat(value) / 3.305785).toFixed(2));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl font-bold mb-8"
      >
        평수 계산기
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-6"
        >
          <label htmlFor="pyeong" className="block text-gray-700 font-bold mb-2">
            평
          </label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="number"
            id="pyeong"
            value={pyeong}
            onChange={handlePyeongChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="평 입력"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-6"
        >
          <label htmlFor="squareMeters" className="block text-gray-700 font-bold mb-2">
            제곱미터 (m²)
          </label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="number"
            id="squareMeters"
            value={squareMeters}
            onChange={handleSquareMetersChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="제곱미터 입력"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-xl">입력한 값을 자동으로 변환합니다!</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">
          AI 이미지로 수익 창출하기
        </h2>
        <p className="text-lg font-semibold text-white mb-4">
          ludgi.ai로 AI 생성 이미지를 판매하고 수익을 창출하세요!
        </p>
        <a
          href="https://ludgi.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors text-lg"
        >
          지금 시작하기
        </a>
      </motion.div>
    </motion.div>
  );
}
