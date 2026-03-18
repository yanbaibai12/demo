import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { calculateMousePosition, isMouseInCanvas } from '../utils'

export class SceneManager {
  constructor(container, config) {
    // 初始化场景
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(config?.scene?.background || 0xf0f0f0)

    // 初始化相机
    const width = config?.scene?.width || window.innerWidth
    const height = config?.scene?.height || window.innerHeight
    this.camera = new THREE.PerspectiveCamera(
      config?.camera?.fov || 75,
      width / height,
      config?.camera?.near || 0.1,
      config?.camera?.far || 1000
    )
    this.camera.position.z = config?.camera?.position?.z || 5
    if (config?.camera?.position) {
      this.camera.position.set(
        config.camera.position.x || 0,
        config.camera.position.y || 0,
        config.camera.position.z || 5
      )
    }

    // 初始化渲染器
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(width, height)
    this.renderer.shadowMap.enabled = true
    container.appendChild(this.renderer.domElement)

    // 初始化控制器
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.minDistance = 2
    this.controls.maxDistance = 10
    this.controls.enablePan = false // 禁用平移，防止页面横移

    // 初始化游戏对象数组
    this.gameObjects = []

    // 初始化射线投射器和鼠标向量
    this.raycaster = new THREE.Raycaster()
    this.raycaster.params.Points.threshold = 0.01
    this.raycaster.params.Line.threshold = 0.01
    this.mouse = new THREE.Vector2()

    // 添加光源
    this.addLights(config?.light)

    // 绑定事件
    this.bindEvents()

    // 启动动画循环
    this.startAnimation()
  }

  addLights(config) {
    // 环境光
    const ambientLight = new THREE.AmbientLight(
      config?.ambient?.color || 0xffffff,
      config?.ambient?.intensity || 0.5,
    )
    this.scene.add(ambientLight)

    // 平行光
    if (config?.directional) {
      const directionalLight = new THREE.DirectionalLight(
        config.directional.color,
        config.directional.intensity,
      )
      directionalLight.position.copy(config.directional.position)
      directionalLight.castShadow = true
      this.scene.add(directionalLight)
    } else {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(5, 10, 7.5)
      directionalLight.castShadow = true
      this.scene.add(directionalLight)
    }
  }

  bindEvents() {
    // 鼠标移动事件
    window.addEventListener('mousemove', (event) => {
      if (!isMouseInCanvas(event, this.renderer.domElement)) {
        // 鼠标移出画布，重置所有物体状态
        this.gameObjects.forEach((obj) => {
          obj.onMouseOut?.()
        })
        return
      }

      // 计算鼠标位置
      this.mouse = calculateMousePosition(event, this.renderer.domElement)

      // 更新射线
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 检测碰撞
      const intersects = this.raycaster.intersectObjects(
        this.gameObjects.map((obj) => obj.mesh),
        true,
      )

      // 处理碰撞结果
      this.gameObjects.forEach((obj) => {
        const isIntersected = intersects.some(
          (intersect) =>
            intersect.object === obj.mesh || obj.mesh.children.includes(intersect.object),
        )
        if (isIntersected) {
          obj.onMouseOver?.()
        } else {
          obj.onMouseOut?.()
        }
      })
    })

    // 窗口大小变化事件
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight

      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    })
  }

  addGameObject(gameObject) {
    this.gameObjects.push(gameObject)
    this.scene.add(gameObject.mesh)
  }

  removeGameObject(gameObject) {
    const index = this.gameObjects.findIndex((obj) => obj === gameObject)
    if (index !== -1) {
      this.gameObjects.splice(index, 1)
      this.scene.remove(gameObject.mesh)
    }
  }

  startAnimation() {
    const animate = (currentTime) => {
      this.animationId = requestAnimationFrame(animate)

      const deltaTime = (currentTime - this.lastTime) / 1000
      this.lastTime = currentTime

      // 更新控制器
      this.controls.update()

      // 更新游戏对象
      this.gameObjects.forEach((obj) => {
        obj.update?.(deltaTime)
      })

      // 渲染场景
      this.renderer.render(this.scene, this.camera)
    }

    this.lastTime = performance.now()
    this.animationId = requestAnimationFrame(animate)
  }

  dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }

    // 清理控制器
    this.controls.dispose()

    // 清理渲染器
    this.renderer.dispose()

    // 清理游戏对象
    this.gameObjects.forEach((obj) => {
      this.scene.remove(obj.mesh)
    })
    this.gameObjects = []
  }

  getScene() {
    return this.scene
  }

  getCamera() {
    return this.camera
  }

  getRenderer() {
    return this.renderer
  }
}
