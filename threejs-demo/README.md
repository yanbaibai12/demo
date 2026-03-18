# Three.js 交互游戏演示

一个使用 Three.js 和 Vue 3 构建的交互式 3D 游戏，具有物体收集、粒子效果和难度递增等功能。

## 项目概述

本项目是一个 3D 交互式游戏，展示了 Three.js 与 Vue 3 的结合使用。玩家可以点击旋转的 3D 物体来收集它们并增加分数，游戏会随着玩家等级的提升而动态增加难度。

## 功能特性

- **3D 物体交互**：点击旋转的 3D 物体来收集它们
- **多种物体类型**：不同颜色的立方体、球体和圆柱体
- **粒子效果**：收集物体时的视觉反馈
- **难度递增**：游戏速度随等级提升而增加
- **分数系统**：跟踪你的分数和当前等级
- **游戏结束条件**：当屏幕上物体过多时游戏结束
- **重新开始功能**：重置游戏并再次尝试
- **相机控制**：使用鼠标旋转和缩放相机

## 技术栈

- **前端框架**：Vue 3 with Composition API
- **3D 库**：Three.js
- **类型系统**：TypeScript
- **构建工具**：Vite
- **样式**：CSS3 with animations

## 项目结构

```
src/
├── three/
│   ├── core/          # Three.js 核心功能
│   │   ├── SceneManager.ts  # 管理场景、相机和渲染器
│   │   └── GameObject.ts    # 游戏对象类
│   ├── types/         # TypeScript 类型定义
│   └── utils/         # 工具函数
├── components/        # Vue 组件
│   └── ThreeDemo.vue  # 主游戏组件
├── App.vue            # 根组件
└── main.ts            # 应用入口点
```

## 游戏玩法说明

1. **将鼠标移到**物体上，它们会变成红色
2. **点击物体**来收集它们并增加你的分数
3. **新的物体**会自动出现
4. **使用鼠标拖动**来旋转相机
5. **使用鼠标滚轮**来放大/缩小
6. **尝试通过**收集更多物体来达到更高等级

## 项目设置

```sh
# 安装依赖
npm install

# 编译并热重载开发环境
npm run dev

# 类型检查、编译并最小化生产环境
npm run build

# 运行单元测试
npm run test:unit

# 运行端到端测试
npm run test:e2e

# 使用 ESLint 进行代码检查
npm run lint
```

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## 浏览器兼容性

- 基于 Chromium 的浏览器（Chrome、Edge、Brave 等）
- Firefox
- Safari

## 性能优化

- **对象池**：重用游戏对象以减少内存使用
- **粒子系统**：高效处理粒子效果
- **RequestAnimationFrame**：使用浏览器内置的动画循环
- **几何体和材质重用**：最小化 GPU 内存使用

## 未来增强

- 添加音效
- 实现高分系统
- 添加不同的游戏模式
- 改进移动设备兼容性
- 添加更多物体类型和障碍物

## 许可证

MIT
