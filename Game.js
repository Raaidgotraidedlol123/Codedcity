// Import Three.js
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add joystick and jump button functionality
const joystick = document.getElementById('joystick');
const jumpBtn = document.getElementById('jumpBtn');
let touchStartX = 0;
let touchStartY = 0;

joystick.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

joystick.addEventListener('touchmove', (event) => {
    const deltaX = event.touches[0].clientX - touchStartX;
    const deltaY = event.touches[0].clientY - touchStartY;
    camera.position.x += deltaX * 0.01;
    camera.position.y -= deltaY * 0.01;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

jumpBtn.addEventListener('touchstart', () => {
    // Add jump functionality (e.g., move camera up)
    camera.position.y += 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
