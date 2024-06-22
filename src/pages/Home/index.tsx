import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

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
  // 定义渲染器
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 定义相机
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // camera.position.set(0, 0, 100);
  camera.position.z = 5;
  camera.lookAt(0, 0, 0);


  // 定义一个材质
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const points = [];
  points.push(new THREE.Vector3(- 10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  // 带一些顶点的几何体
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  // 点和材质形成一条线
  const line = new THREE.Line(geometry, material);
  // scene.add(line);
  // renderer.render(scene, camera);

  // const loader = new FontLoader();

  const loader = new GLTFLoader();
  loader.load('http://127.0.0.1:5500/examples/models/gltf/Horse.glb', function (gltf) {
    scene.add(gltf.scene);
  }, undefined, function (error) {
    console.error(error);
  });

  // renderer.setAnimationLoop( animate );


  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // loader.load('fonts/helvetiker_bold.typeface.json', function (font) {
  //   const geometry1 = new TextGeometry('Hello three.js!', {
  //     font: font,
  //     size: 80,
  //     depth: 5,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 10,
  //     bevelSize: 8,
  //     bevelSegments: 5
  //   });
  // });

}

DrawLine();


const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
    </PageContainer>
  );
};

export default HomePage;
