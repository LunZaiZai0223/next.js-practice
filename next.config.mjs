/** @type {import('next').NextConfig} */

// NOTE: 之後要再看這裡是否是設定 next 專案的 config

const nextConfig = {
	experimental: {
		ppr: 'incremental',
	},
};

export default nextConfig;
