import { chromium } from '@playwright/test';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../..');
// 使用青色版简历（与参考图片样式一致）
const htmlPath = path.join(projectRoot, '简历-前端实习-青色版.html');
const pdfPath = path.join(projectRoot, '简历-前端实习-青色版.pdf');
const htmlUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage();
await page.goto(htmlUrl, { waitUntil: 'networkidle' });
await page.pdf({
  path: pdfPath,
  format: 'A4',
  margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' },
  printBackground: true,
});
await browser.close();
console.log('PDF 已生成:', pdfPath);
