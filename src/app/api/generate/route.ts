import { fal } from "@fal-ai/client";
import { NextRequest, NextResponse } from "next/server";

// 配置API密钥
fal.config({
  credentials: "832ae5ff-8a5e-4128-a6b5-80e155b1d254:cae760154339e972192cac0e2dd19158"
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, style, image_size } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "提示词(prompt)是必需的" },
        { status: 400 }
      );
    }

    const result = await fal.subscribe("fal-ai/recraft-v3", {
      input: {
        prompt,
        style: style || "realistic_image",
        image_size: image_size || "square_hd"
      }
    });

    return NextResponse.json(result.data);
  } catch (error) {
    console.error("图像生成错误:", error);
    return NextResponse.json(
      { error: "图像生成失败" },
      { status: 500 }
    );
  }
} 