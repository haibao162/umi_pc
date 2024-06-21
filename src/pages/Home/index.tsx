import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function First() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 3, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(1000, 300);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: "blue" });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5; // 距离
  // camera.position.y = 1; // 距离
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  // animate();
}

function DrawLine() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(1000, 200);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();
}

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
    </PageContainer>
  );
};

export default HomePage;
