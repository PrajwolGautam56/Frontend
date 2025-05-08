import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import earthMapTexture from "/texture/earthmap1k.jpg";
import earthBumpTexture from "/texture/earthbump.jpg";
import earthCloudTexture from "/texture/earthCloud.png";
import galaxyTexture from "/texture/galaxy.png";
import "../CSS/earth.css";
import "../index.css"


function Earth() {
  const canvasRef = useRef(null);
  let scene, camera, renderer, controls;

  useEffect(() => {
    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    const width = window.innerWidth;
    const height = window.innerWidth < 768 ? window.innerHeight * 0.7 : window.innerHeight;
    
    // Camera setup
    const fov = 55;
    const aspect = width / height;
    const near = 0.2;
    const far = 2000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 2);
    scene.add(camera);
    
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.autoClear = false;

    // Orbit control setup - moved after camera initialization
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    // Earth geometry
    const earthGeometry = new THREE.SphereGeometry(0.5, 30, 30);

    // Earth material
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(earthMapTexture),
      bumpMap: new THREE.TextureLoader().load(earthBumpTexture),
      bumpScale: 0.3,
    });

    // Earth mesh
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);
    earthMesh.position.x = 1;

    // Cloud geometry
    const cloudGeometry = new THREE.SphereGeometry(0.53, 32, 32);

    // Cloud material
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(earthCloudTexture),
      transparent: true,
    });

    // Cloud mesh
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);
    cloudMesh.position.x = 1;

    // Galaxy geometry
    const starGeometry = new THREE.SphereGeometry(80, 64, 64);

    // Galaxy material
    const starMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(galaxyTexture),
      side: THREE.BackSide,
    });

    // Galaxy mesh
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);

    // Ambient light
    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);

    // Point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Point light helper
    const Helper = new THREE.PointLightHelper(pointLight);
    scene.add(Helper);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerWidth < 768 ? window.innerHeight * 0.7 : window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // For Adjusting the size of the Earth geometry based on the screen width
      const scaleFactor = width < 1250 ? 0.6 : 1;
      earthMesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

      const cloudScaleFactor = width < 1250 ? 0.63 : 1;
      cloudMesh.scale.set(cloudScaleFactor, cloudScaleFactor, cloudScaleFactor);
      
      // Adjust positions based on screen width
      if (width < 768) { // Mobile view
        camera.position.set(0, 0, 2);
        earthMesh.position.set(0, 0, 0);
        cloudMesh.position.set(0, 0, 0);
      } else { // Laptop view
        const padding = width < 1200 ? -0.5 : 0;
        camera.position.set(0, 0, 2);
        earthMesh.position.set(1 + padding, 0.1, 0);
        cloudMesh.position.set(1 + padding, 0.1, 0);
      }
      
      render();
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      starMesh.rotation.y -= 0.002;
      earthMesh.rotation.y -= 0.0015;
      cloudMesh.rotation.y -= 0.001;
      controls.update();
      render();
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const render = () => {
    if (renderer) {
      renderer.render(scene, camera);
    }
  };

  return (
    <div className="webgl earth min-h-[50vh] sm:min-h-screen bg-black z-49 relative w-full">
      <canvas
        ref={canvasRef}
        className="webgl earth w-full lg:w-2/3 lg:mx-auto"
      />
    </div>
  );
}

export default Earth;
