import * as THREE from 'three'

export class GameObject {
  constructor(
    geometry,
    material,
    options
  ) {
    this.mesh = new THREE.Mesh(geometry, material)

    // 设置位置
    if (options?.position) {
      this.mesh.position.copy(options.position)
    }

    // 设置旋转
    if (options?.rotation) {
      this.mesh.rotation.copy(options.rotation)
    }

    // 设置缩放
    if (options?.scale) {
      this.mesh.scale.copy(options.scale)
    }

    // 设置更新函数
    this.update = options?.update

    // 设置鼠标事件回调
    this.onMouseOver = options?.onMouseOver
    this.onMouseOut = options?.onMouseOut
  }
}
