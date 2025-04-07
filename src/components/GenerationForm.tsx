"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GenerationRequest, STYLE_OPTIONS, SIZE_OPTIONS, StyleOption, SizeOption } from "../types";

interface GenerationFormProps {
  onSubmit: (data: GenerationRequest) => Promise<void>;
  isLoading: boolean;
}

export default function GenerationForm({ onSubmit, isLoading }: GenerationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenerationRequest>({
    defaultValues: {
      style: "realistic_image",
      image_size: "square_hd",
    },
  });

  const onFormSubmit: SubmitHandler<GenerationRequest> = async (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="w-full max-w-2xl space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {/* 表单内容将在这里 */}
      <div className="space-y-2">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">提示词</label>
        <textarea id="prompt" rows={4} placeholder="描述你想要生成的图像，例如：一只红熊猫在竹林中吃竹子" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" {...register("prompt", { required: "提示词是必填的" })} />
        {errors.prompt && (<p className="text-red-500 text-sm">{errors.prompt.message}</p>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 风格选择 */}
        <div className="space-y-2">
          <label htmlFor="style" className="block text-sm font-medium text-gray-700 dark:text-gray-300">图像风格</label>
          <select id="style" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" {...register("style")}>
            {STYLE_OPTIONS.map((style: StyleOption) => (
              <option key={style.id} value={style.id}>{style.name}</option>
            ))}
          </select>
        </div>
        {/* 尺寸选择 */}
        <div className="space-y-2">
          <label htmlFor="image_size" className="block text-sm font-medium text-gray-700 dark:text-gray-300">图像尺寸</label>
          <select id="image_size" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" {...register("image_size")}>
            {SIZE_OPTIONS.map((size: SizeOption) => (
              <option key={size.id} value={size.id}>{size.name} ({size.dimensions})</option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-md shadow-sm text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            生成中...
          </span>
        ) : (
          "生成图像"
        )}
      </button>
    </form>
  );
}
