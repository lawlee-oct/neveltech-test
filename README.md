# Neveltech Test Project
[Image Project](https://github.com/user-attachments/assets/dbe60c12-1f15-4f01-ab69-429099c1ec26)



- **Dự án React + TypeScript sử dụng Vite làm build tool với các tính năng hiện đại như styled-components, Ant Design, và React Router.**
- **Dự án được deploy lên URL sau: https://neveltech-test-snowy.vercel.app/**

## 📋 Yêu cầu hệ thống

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn có:

- **Node.js** (phiên bản 18.0.0 trở lên)
- **npm** hoặc **yarn** hoặc **pnpm** (package manager)

### Kiểm tra phiên bản Node.js

```bash
node --version
npm --version
```

Nếu chưa có Node.js, hãy tải và cài đặt từ [nodejs.org](https://nodejs.org/)

## 🚀 Hướng dẫn cài đặt và chạy dự án

### Bước 1: Clone dự án (nếu chưa có)

```bash
git clone https://github.com/lawlee-oct/neveltech-test.git
cd neveltech-test
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

hoặc sử dụng yarn:
```bash
yarn install
```

hoặc sử dụng pnpm:
```bash
pnpm install
```

### Bước 3: Chạy dự án ở môi trường development

```bash
npm run dev
```

hoặc:
```bash
yarn dev
```

hoặc:
```bash
pnpm dev
```

Sau khi chạy thành công, dự án sẽ chạy tại: **http://localhost:5173**

## 📁 Cấu trúc dự án
[Image source](https://github.com/user-attachments/assets/f3aefc21-7a5c-42c6-82cf-41348b017ccc)
```
neveltech-test/
├── public/                 # Static files
├── src/
│   ├── assets/            # Images, icons, SVGs
│   ├── components/        # Reusable components
│   ├── configs/          # Configuration files
│   ├── constants/        # Constants and themes
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout components
│   ├── routers/          # Routing configuration
│   ├── screens/          # Page components
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Các lệnh có sẵn

```bash
# Chạy development server
npm run dev

# Build dự án cho production
npm run build

# Preview build production
npm run preview

# Kiểm tra lỗi ESLint
npm run lint
```

## 🎨 Công nghệ sử dụng

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool và dev server
- **Styled Components** - CSS-in-JS
- **Ant Design** - UI component library
- **React Router** - Client-side routing
- **React Slick** - Carousel component
- **Less** - CSS preprocessor

## 🔧 Cấu hình đặc biệt

### Path Aliases
Dự án sử dụng path alias `@` để import từ thư mục `src`:
```typescript
import Component from '@/components/Component'
```

### ESLint
Dự án có cấu hình ESLint để kiểm tra code quality. Chạy lệnh sau để kiểm tra:
```bash
npm run lint
```

## 📝 Ghi chú

- Dự án sử dụng **React 19** với các tính năng mới nhất
- Hỗ trợ **Hot Module Replacement (HMR)** để development nhanh hơn
- Có cấu hình **TypeScript strict mode** để đảm bảo type safety
- Sử dụng **Less** cho styling với support cho CSS modules
