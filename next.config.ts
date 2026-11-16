import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera build autossuficiente (server.js) para imagem Docker enxuta
  output: "standalone",
};

export default nextConfig;
