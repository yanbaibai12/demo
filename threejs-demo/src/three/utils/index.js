import * as THREE from 'three'

// 计算鼠标在画布上的坐标（归一化设备坐标）
export function calculateMousePosition(event, canvas) {
  const rect = canvas.getBoundingClientRect()
  return new THREE.Vector2(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  )
}

// 检查鼠标是否在画布内
export function isMouseInCanvas(event, canvas) {
  const rect = canvas.getBoundingClientRect()
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  )
}

// 生成随机颜色
export function getRandomColor() {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

// 防抖函数
export function debounce(func, wait) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// 节流函数
export function throttle(func, limit) {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
