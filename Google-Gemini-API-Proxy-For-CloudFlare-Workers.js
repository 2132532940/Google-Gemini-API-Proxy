// Google Gemini API 反代 Workers 脚本
// 部署时请在 Workers 环境变量中设置 GEMINI_API_KEY

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const targetPath = url.pathname + url.search;

		// 只允许代理到 Gemini API 相关路径
		if (!targetPath.startsWith('/models/')) {
			return new Response('Not Found', { status: 404 });
		}

		const targetUrl = `${GEMINI_API_BASE}${targetPath}`;

		// 复制原始请求头，并加入 Gemini API Key
		const headers = new Headers(request.headers);
		headers.set('x-goog-api-key', env.GEMINI_API_KEY);
		headers.set('Content-Type', 'application/json');

		// 构建新请求
		const newRequest = new Request(targetUrl, {
			method: request.method,
			headers: headers,
			body: request.body,
			redirect: 'follow',
		});

		try {
			const response = await fetch(newRequest);
			return response;
		} catch (err) {
			return new Response(`Proxy error: ${err.message}`, { status: 500 });
		}
	},
};

