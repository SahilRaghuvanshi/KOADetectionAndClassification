import React, { useEffect } from "react";
import Header from "./Header";
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

function Knee3DModel() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth /  (window.innerHeight), 0.1, 1000);
    let object;
    let controls;
    let objToRender = 'knee';
    const loader = new GLTFLoader();
    loader.load(
      `knee_joint/scene.gltf`,
      function (gltf) {
        object = gltf.scene;
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error(error);
      }
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); 
    renderer.setSize(window.innerWidth,(window.innerHeight));
    renderer.setClearColor(0x000000);
    document.getElementById("container3D").appendChild(renderer.domElement);
    camera.position.z=250;
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500)
    topLight.castShadow = false;
    scene.add(topLight);
    const ambientLight = new THREE.AmbientLight(0x333333, 4);
    scene.add(ambientLight);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.minDistance = 40;
    controls.maxDistance = 110;
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / (window.innerHeight*1.5);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth,  (window.innerHeight*1.5));
    });
    animate();
  }, []);

  return (
    <div>
      <Header headerContent="Knee 3D Model" />
      <div id="container3D" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}

export default Knee3DModel;
