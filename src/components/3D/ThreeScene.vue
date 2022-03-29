<template>
	<canvas class="webgl"></canvas>
</template>


<script>
import * as THREE from 'three'
import * as jsonScene from '../../../public/data/Scene.json'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
	name: "ThreeScene",
	components: {
	},
	data () {
		return {
		}
	},
	methods: {
		animate() {
			requestAnimationFrame(this.animate)
			this.renderer.render(this.scene, this.camera)
		}
	},
	mounted () {
		// Build renderer
		const canvas = document.querySelector('canvas.webgl')
		this.renderer  = new THREE.WebGLRenderer({
			canvas: canvas, 
			alpha: true,
			antialias: true,
			powerPreference: "high-performance",
		})
		this.renderer.setClearColor(0xff0000, 0)

		const width = window.innerWidth * 0.56
		const height = window.innerHeight * 0.96
		this.camera = new THREE.PerspectiveCamera(50, width/height, 1, 500)
		this.camera.position.set(200, 60, 200)
		this.camera.lookAt(20, 0, 0)
		this.renderer.setSize(width, height)
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
		this.renderer.physicallyCorrectLights = true
		this.renderer.outputEncoding = THREE.sRGBEncoding
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping
		this.renderer.toneMappingExposure = 0.8

		// Controls
		const controls = new OrbitControls(this.camera, canvas)
		controls.maxPolarAngle = Math.PI * 0.495
		controls.target.set( 0, 10, 0 )
		controls.minDistance = 20
		controls.maxDistance = 800
		controls.update()

		const loader = new THREE.ObjectLoader()
		this.scene = loader.parse(jsonScene.default)
		console.log("Scene: ", this.scene)
		this.animate()
	}
}
</script>
