"use client";

import React from "react";
import Image from "next/image";
import { GenerationResult } from "../types";

interface GeneratedImageProps {
  result: GenerationResult | null;
}

export default function GeneratedImage({ result }: GeneratedImageProps) {
  if (!result || !result.images || result.images.length === 0) {
    return null;
  }

  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `viroai-${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-2xl mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">生成结果</h2>
      <div className="grid grid-cols-1 gap-6">
        {result.images.map((image, index) => (
          <div key={index} className="relative group">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.url}
                alt={`生成的图像 ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => downloadImage(image.url)}
                className="w-full bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 py-2 rounded-md shadow-sm font-medium transition-all duration-200"
              >
                下载图像
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 