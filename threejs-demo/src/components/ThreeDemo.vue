<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { SceneManager } from '../three/core/SceneManager.js'
import { GameObject } from '../three/core/GameObject.js'

// 游戏状态
const score = ref(0)
const gameLevel = ref(1)
const gameOver = ref(false)
const gameObjects = []
let sceneManager = null
let particleSystem = null
let gameLoop = null

onMounted(() => {
  // 获取容器元素
  const container = document.getElementById('three-container')
  if (!container) return

  // 初始化场景管理器
  sceneManager = new SceneManager(container, {
    scene: {
      background: 0xf0f0f0,
      width: window.innerWidth,
      height: window.innerHeight * 0.8,
    },
    camera: {
      fov: 75,
      position: new THREE.Vector3(0, 2, 5),
    },
    light: {
      ambient: {
        color: 0xffffff,
        intensity: 0.5,
      },
      directional: {
        color: 0xffffff,
        intensity: 0.8,
        position: new THREE.Vector3(5, 10, 7.5),
      },
    },
  })

  // 创建地面
  const groundGeometry = new THREE.PlaneGeometry(10, 10)
  const groundMaterial = new THREE.MeshLambertMaterial({
    color: 0xcccccc,
    side: THREE.DoubleSide,
  })
  const ground = new GameObject(groundGeometry, groundMaterial, {
    position: new THREE.Vector3(0, 0, 0),
    rotation: new THREE.Euler(-Math.PI / 2, 0, 0),
  })
  sceneManager.addGameObject(ground)

  // 初始化粒子系统
  initParticleSystem()

  // 创建初始游戏对象
  createInitialGameObjects()

  // 绑定点击事件
  container.addEventListener('click', handleClick)

  // 启动游戏循环
  startGameLoop()
})

// 初始化粒子系统
function initParticleSystem() {
  if (!sceneManager) return

  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 1000
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00ff00,
  })

  particleSystem = new THREE.Points(particlesGeometry, particlesMaterial)
  sceneManager.getScene().add(particleSystem)
}

// 创建初始游戏对象
function createInitialGameObjects() {
  for (let i = 0; i < 5; i++) {
    createRandomGameObject()
  }
}

// 创建随机游戏对象
function createRandomGameObject() {
  if (!sceneManager) return

  const objectType = Math.floor(Math.random() * 3)
  let geometry
  let material
  const position = new THREE.Vector3((Math.random() - 0.5) * 8, 0.5, (Math.random() - 0.5) * 8)

  // 根据类型创建不同的几何体
  switch (objectType) {
    case 0: // 立方体
      geometry = new THREE.BoxGeometry(1, 1, 1)
      material = new THREE.MeshLambertMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8,
      })
      break
    case 1: // 球体
      geometry = new THREE.SphereGeometry(0.5, 32, 32)
      material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
        transparent: true,
        opacity: 0.8,
      })
      break
    case 2: // 圆柱体
      geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32)
      material = new THREE.MeshLambertMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.8,
      })
      break
    default:
      geometry = new THREE.BoxGeometry(1, 1, 1)
      material = new THREE.MeshLambertMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8,
      })
  }

  const gameObject = new GameObject(geometry, material, {
    position,
    update: (deltaTime) => {
      gameObject.mesh.rotation.x += 0.5 * deltaTime * gameLevel.value
      gameObject.mesh.rotation.y += 0.5 * deltaTime * gameLevel.value
    },
    onMouseOver: () => {
      const mat = gameObject.mesh.material
      mat.color.set(0xff0000)
    },
    onMouseOut: () => {
      const mat = gameObject.mesh.material
      switch (objectType) {
        case 0:
          mat.color.set(0x00ff00)
          break
        case 1:
          mat.color.set(0x0000ff)
          break
        case 2:
          mat.color.set(0xffff00)
          break
      }
    },
  })

  gameObjects.push(gameObject)
  sceneManager.addGameObject(gameObject)
}

// 处理点击事件
function handleClick(event) {
  if (!sceneManager || gameOver.value) return

  // 计算鼠标位置
  const canvas = sceneManager.getRenderer().domElement
  const rect = canvas.getBoundingClientRect()
  const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1

  // 创建射线
  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), sceneManager.getCamera())

  // 检测碰撞
  const intersects = raycaster.intersectObjects(
    gameObjects.map((obj) => obj.mesh),
    true,
  )

  if (intersects.length > 0) {
    // 找到被点击的物体
    const clickedObject = intersects[0].object
    const gameObject = gameObjects.find(
      (obj) => obj.mesh === clickedObject || obj.mesh.children.includes(clickedObject),
    )

    if (gameObject) {
      // 增加分数
      score.value++

      // 播放粒子效果
      createParticleEffect(gameObject.mesh.position)

      // 移除被点击的物体
      sceneManager.removeGameObject(gameObject)
      const index = gameObjects.indexOf(gameObject)
      if (index !== -1) {
        gameObjects.splice(index, 1)
      }

      // 创建新的游戏对象
      createRandomGameObject()

      // 检查是否升级
      if (score.value % 10 === 0) {
        gameLevel.value++
      }
    }
  }
}

// 创建粒子效果
function createParticleEffect(position) {
  if (!sceneManager) return

  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 50
  const posArray = new Float32Array(particlesCount * 3)
  const velocityArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i += 3) {
    // 初始位置
    posArray[i] = position.x
    posArray[i + 1] = position.y
    posArray[i + 2] = position.z

    // 随机速度
    velocityArray[i] = (Math.random() - 0.5) * 2
    velocityArray[i + 1] = Math.random() * 2
    velocityArray[i + 2] = (Math.random() - 0.5) * 2
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocityArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0xff0000,
    transparent: true,
    opacity: 1,
  })

  const particleEffect = new THREE.Points(particlesGeometry, particlesMaterial)
  sceneManager.getScene().add(particleEffect)

  // 动画粒子效果
  const startTime = performance.now()
  const animateParticles = () => {
    const currentTime = performance.now()
    const elapsedTime = (currentTime - startTime) / 1000

    if (elapsedTime < 1) {
      requestAnimationFrame(animateParticles)

      const positions = particlesGeometry.attributes.position.array
      const velocities = particlesGeometry.attributes.velocity.array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i] * 0.1
        positions[i + 1] += velocities[i + 1] * 0.1 - 0.05 // 重力
        positions[i + 2] += velocities[i + 2] * 0.1
      }

      particlesGeometry.attributes.position.needsUpdate = true
      particlesMaterial.opacity = 1 - elapsedTime
    } else {
      sceneManager?.getScene().remove(particleEffect)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }

  animateParticles()
}

// 启动游戏循环
function startGameLoop() {
  const gameLoopFunction = () => {
    // 更新粒子系统
    if (particleSystem) {
      particleSystem.rotation.y += 0.001
    }

    // 检查游戏结束条件（示例：如果游戏对象数量超过10个）
    if (gameObjects.length > 10) {
      endGame()
      return
    }

    gameLoop = requestAnimationFrame(gameLoopFunction)
  }

  gameLoop = requestAnimationFrame(gameLoopFunction)
}

// 结束游戏
function endGame() {
  gameOver.value = true
  if (gameLoop) {
    cancelAnimationFrame(gameLoop)
  }
}

// 重新开始游戏
function restartGame() {
  if (!sceneManager) return

  // 清除所有游戏对象
  gameObjects.forEach((obj) => {
    sceneManager?.removeGameObject(obj)
  })
  gameObjects.length = 0

  // 重置游戏状态
  score.value = 0
  gameLevel.value = 1
  gameOver.value = false

  // 创建新的游戏对象
  createInitialGameObjects()

  // 重新启动游戏循环
  startGameLoop()
}

onUnmounted(() => {
  // 清理场景管理器
  if (sceneManager) {
    sceneManager.dispose()
  }

  // 清理游戏对象
  gameObjects.length = 0

  // 清理游戏循环
  if (gameLoop) {
    cancelAnimationFrame(gameLoop)
  }
})
</script>

<template>
  <div class="game-container">
    <!-- 游戏分数和等级 -->
    <div class="score-container">
      <h2>分数: {{ score }}</h2>
      <h3>等级: {{ gameLevel }}</h3>
      <p>点击物体来增加你的分数!</p>
    </div>

    <!-- 3D场景容器 -->
    <div id="three-container" class="three-container"></div>

    <!-- 游戏说明 -->
    <div class="instructions">
      <h3>游戏说明:</h3>
      <ul>
        <li>将鼠标移到物体上，它们会变成红色</li>
        <li>点击物体来收集它们并增加你的分数</li>
        <li>新的物体会自动出现</li>
        <li>使用鼠标拖动来旋转相机</li>
        <li>使用鼠标滚轮来放大/缩小</li>
      </ul>
    </div>

    <!-- 游戏结束界面 -->
    <div v-if="gameOver" class="game-over-overlay">
      <div class="game-over-panel">
        <h1>游戏结束!</h1>
        <h2>最终分数: {{ score }}</h2>
        <h3>达到等级: {{ gameLevel }}</h3>
        <button @click="restartGame" class="restart-button">重新开始</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.game-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .score-container {
    top: 10px;
    left: 10px;
    padding: 10px;
  }

  .score-container h2 {
    font-size: 20px;
  }

  .score-container h3 {
    font-size: 16px;
  }

  .instructions {
    bottom: 10px;
    right: 10px;
    padding: 10px;
    max-width: 250px;
  }

  .three-container {
    height: 70vh;
  }

  .game-over-panel {
    padding: 30px;
    margin: 0 20px;
  }

  .game-over-panel h1 {
    font-size: 28px;
  }

  .game-over-panel h2 {
    font-size: 20px;
  }
}

/* 分数容器 */
.score-container {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.score-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.score-container h2 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 28px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.score-container h3 {
  margin: 0 0 12px 0;
  color: #34495e;
  font-size: 20px;
  font-weight: 500;
}

.score-container p {
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 400;
}

/* 3D场景容器 */
.three-container {
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.three-container:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* 游戏说明 */
.instructions {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.instructions:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.instructions h3 {
  margin: 0 0 12px 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
}

.instructions ul {
  margin: 0;
  padding-left: 20px;
  color: #555;
  font-size: 14px;
  line-height: 1.5;
}

.instructions li {
  margin-bottom: 6px;
  transition: color 0.2s ease;
}

.instructions li:hover {
  color: #3498db;
}

/* 游戏结束界面 */
.game-over-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 30, 30, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.6s ease-in-out;
}

.game-over-panel {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.4);
  text-align: center;
  animation: scaleIn 0.4s ease-out;
  max-width: 500px;
  width: 90%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.game-over-panel:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.5);
}

.game-over-panel h1 {
  margin: 0 0 25px 0;
  color: #e74c3c;
  font-size: 42px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: pulse 1s ease-in-out infinite;
}

.game-over-panel h2 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 28px;
  font-weight: 600;
}

.game-over-panel h3 {
  margin: 0 0 40px 0;
  color: #7f8c8d;
  font-size: 20px;
  font-weight: 500;
}

/* 重新开始按钮 */
.restart-button {
  background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.restart-button:hover {
  background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
}

.restart-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* 加载动画 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  animation: fadeIn 0.3s ease-in-out;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
