export interface GenerationRequest {
  prompt: string;
  style?: string;
  image_size?: string;
}

export interface GenerationResult {
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  seed?: number;
  requestId?: string;
}

export type StyleOption = {
  id: string;
  name: string;
};

export type SizeOption = {
  id: string;
  name: string;
  dimensions: string;
};

export const STYLE_OPTIONS: StyleOption[] = [
  { id: "realistic_image", name: "真实图像" },
  { id: "digital_illustration", name: "数字插画" },
  { id: "vector_illustration", name: "矢量插画" },
  { id: "flat_illustration", name: "扁平插画" },
  { id: "painting", name: "绘画" },
  { id: "sketch", name: "素描" },
  { id: "3d", name: "3D" },
  { id: "comic", name: "漫画" },
  { id: "cartoon", name: "卡通" },
  { id: "abstract", name: "抽象" }
];

export const SIZE_OPTIONS: SizeOption[] = [
  { id: "square_hd", name: "正方形高清", dimensions: "1280x1280" },
  { id: "square", name: "正方形", dimensions: "1024x1024" },
  { id: "portrait_4_3", name: "竖向 4:3", dimensions: "1024x1440" },
  { id: "portrait_16_9", name: "竖向 16:9", dimensions: "1024x1792" },
  { id: "landscape_4_3", name: "横向 4:3", dimensions: "1440x1024" },
  { id: "landscape_16_9", name: "横向 16:9", dimensions: "1792x1024" }
]; 