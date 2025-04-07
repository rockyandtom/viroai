# ViroAI.art - AI图像生成网站

ViroAI.art是一个使用fal.ai API构建的AI图像生成网站，提供简单易用的文本到图像生成功能。

## 功能特点

- 文本到图像生成
- 支持多种图像风格
- 支持多种图像尺寸
- 简洁美观的用户界面
- 图像下载功能

## 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [React](https://reactjs.org/) - JavaScript UI库
- [TypeScript](https://www.typescriptlang.org/) - JavaScript的超集
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [React Hook Form](https://react-hook-form.com/) - 表单处理
- [fal.ai API](https://fal.ai/) - AI图像生成服务

## 开始使用

### 前提条件

- Node.js 18.0.0或更高版本
- npm或yarn包管理器

### 安装

1. 克隆此仓库：

```bash
git clone https://github.com/yourusername/viroai.git
cd viroai
```

2. 安装依赖：

```bash
npm install
# 或
yarn install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 部署

本项目可以轻松部署到Vercel或其他支持Next.js的平台。

## 环境变量

如需自定义API密钥，请创建一个`.env.local`文件，包含以下内容：

```
FAL_API_KEY=your-api-key
```

## 许可证

MIT

## 联系方式

如有任何问题或建议，请联系[您的邮箱]。
