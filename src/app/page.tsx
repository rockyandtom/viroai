"use client";

import { useState } from "react";
import GenerationForm from "../components/GenerationForm";
import GeneratedImage from "../components/GeneratedImage";
import { GenerationRequest, GenerationResult } from "../types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: GenerationRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "图像生成失败");
      }

      const resultData = await response.json();
      setResult(resultData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "图像生成过程中发生错误");
      console.error("生成错误:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          ViroAI.art
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          使用先进的AI技术，将您的创意文字转换为精美图像
        </p>
      </section>

      <section className="flex flex-col items-center justify-center mb-10">
        <GenerationForm onSubmit={handleSubmit} isLoading={isLoading} />
        
        {error && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg w-full max-w-2xl">
            <p>{error}</p>
          </div>
        )}
        
        <GeneratedImage result={result} />
      </section>

      <section className="my-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          如何使用
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">01</div>
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">输入描述</h3>
            <p className="text-gray-600 dark:text-gray-400">
              在文本框中描述您想要生成的图像内容，越详细越好
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">02</div>
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">选择风格和尺寸</h3>
            <p className="text-gray-600 dark:text-gray-400">
              选择适合您需求的图像风格和尺寸
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">03</div>
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">获取图像</h3>
            <p className="text-gray-600 dark:text-gray-400">
              等待几秒钟，AI就会生成您的图像，然后您可以下载并使用
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
