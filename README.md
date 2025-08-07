# Google-Gemini-API-Proxy
CloudFlare Workers中转Google Gemini API

---

### 🛠️ 功能说明

- 将客户端请求转发至 Google Gemini API
- 支持设置 Gemini API Key（通过 Workers 的环境变量）
- 支持多种请求方式（GET/POST）
- 错误处理与状态码返回
- 支持流式响应（streaming）

---



### 🔧 部署步骤

1. **登录 Cloudflare Dashboard**，进入 Workers & Pages。
2. **创建一个新的 Worker**，命名为 `gemini-proxy` 或类似。
3. **粘贴上述代码**到编辑器中。
4. **设置环境变量**：
   - 在“设置” > “环境变量”中添加：
     - `GEMINI_API_KEY` = 你的 Google Gemini API Key
5. **部署并测试**：
   - 部署后访问 `https://<your-worker>.workers.dev/models/gemini-pro:generateContent` 进行测试。


---

### ✅ 安全建议

- **限制访问来源**：可加入 `CF-IPCountry` 或自定义请求头鉴权，防止滥用。
- **监控日志**：开启 Workers 日志记录，便于排查问题。
- **API Key 管理**：定期更换 API Key 或使用密钥轮换机制。

---

如需支持流式响应或更复杂的鉴权机制（如 OAuth2），我可以进一步帮你扩展代码。是否需要我继续实现这些进阶功能？
