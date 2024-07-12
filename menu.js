//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x00000);
renderer.setPixelRatio(widow.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4,5,11);
// camera.lookAt(0,0,0);

/* const groundGeometry = new THREE.PlaneGeometry(20,20,32,32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({color: 0x55555, side: THREE.DoubleSide});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(groundMesh); */

/* const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.2, 0.5);
spotLight.position.set(0,25,0);
scene.add(spotLight); */

const loader = new GLTFLoader().setPath("./coffee_shop_cup");
loader.load('scene.gltf', (gltf) => {
    const mesh = gltf.scene;
    mesh.posiiton.set(0, 1.05, -1);
    scene.add(mesh);
});

document.getElementById("coffeemodel").appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();