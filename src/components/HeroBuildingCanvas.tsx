"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Layers, Eye, Sparkles } from "lucide-react";

export default function HeroBuildingCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // References for three.js manipulation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialsRef = useRef<{
    solids: THREE.Material[];
    wires: THREE.Material[];
  }>({ solids: [], wires: [] });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability safely
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(7.5, 5.5, 8.5);
    camera.lookAt(0, 1.2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff3d6, 1.8);
    sunLight.position.set(10, 15, 8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const warmAccentLight = new THREE.PointLight(0xd4af37, 2.5, 12);
    warmAccentLight.position.set(0, 2.2, 1.5);
    scene.add(warmAccentLight);

    const blueFill = new THREE.DirectionalLight(0x4a6fa5, 0.6);
    blueFill.position.set(-8, 6, -6);
    scene.add(blueFill);

    // Material definitions
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e2430,
      roughness: 0.35,
      metalness: 0.1,
    });
    const accentGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.25,
      metalness: 0.7,
    });
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.65,
    });
    const foundationMaterial = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.8,
    });
    const solarMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.9,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    materialsRef.current.solids = [
      wallMaterial,
      accentGoldMaterial,
      glassMaterial,
      foundationMaterial,
      solarMaterial,
    ];
    materialsRef.current.wires = [wireframeMaterial];

    // Building Group
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // 1. Foundation & Terrace
    const foundationGeo = new THREE.BoxGeometry(6.2, 0.4, 5.2);
    const foundationMesh = new THREE.Mesh(foundationGeo, foundationMaterial);
    foundationMesh.position.y = 0.2;
    foundationMesh.receiveShadow = true;
    buildingGroup.add(foundationMesh);

    // 2. Ground Floor Main Volume
    const groundFloorGeo = new THREE.BoxGeometry(4.4, 2.0, 3.8);
    const groundFloor = new THREE.Mesh(groundFloorGeo, wallMaterial);
    groundFloor.position.set(-0.2, 1.4, 0);
    groundFloor.castShadow = true;
    groundFloor.receiveShadow = true;
    buildingGroup.add(groundFloor);

    // 3. Ground Floor Entrance & Porch Column (Gold accent)
    const columnGeo = new THREE.BoxGeometry(0.35, 2.0, 0.35);
    const columnMesh = new THREE.Mesh(columnGeo, accentGoldMaterial);
    columnMesh.position.set(2.1, 1.4, 1.7);
    columnMesh.castShadow = true;
    buildingGroup.add(columnMesh);

    // 4. Cantilevered Upper Floor (Modern Duplex Style)
    const upperFloorGeo = new THREE.BoxGeometry(4.8, 1.8, 4.2);
    const upperFloor = new THREE.Mesh(upperFloorGeo, wallMaterial);
    upperFloor.position.set(0.2, 3.3, 0.2);
    upperFloor.castShadow = true;
    upperFloor.receiveShadow = true;
    buildingGroup.add(upperFloor);

    // 5. Architectural Gold Feature Wall / Pergola
    const featureWallGeo = new THREE.BoxGeometry(0.25, 3.8, 1.8);
    const featureWall = new THREE.Mesh(featureWallGeo, accentGoldMaterial);
    featureWall.position.set(2.55, 2.4, 0.4);
    featureWall.castShadow = true;
    buildingGroup.add(featureWall);

    // 6. Large Front Windows (Ground Floor)
    const windowGFGeo = new THREE.BoxGeometry(2.4, 1.2, 0.15);
    const windowGF = new THREE.Mesh(windowGFGeo, glassMaterial);
    windowGF.position.set(-0.2, 1.4, 1.95);
    buildingGroup.add(windowGF);

    // 7. Upper Floor Panoramic Glazing & Balcony Door
    const windowUFGeo = new THREE.BoxGeometry(3.0, 1.1, 0.15);
    const windowUF = new THREE.Mesh(windowUFGeo, glassMaterial);
    windowUF.position.set(0.3, 3.3, 2.32);
    buildingGroup.add(windowUF);

    // 8. Glass Balcony Railing
    const railingGeo = new THREE.BoxGeometry(3.2, 0.5, 0.08);
    const railing = new THREE.Mesh(railingGeo, glassMaterial);
    railing.position.set(0.3, 2.7, 2.45);
    buildingGroup.add(railing);

    // 9. Modern Parapet Flat Roof
    const roofGeo = new THREE.BoxGeometry(5.2, 0.25, 4.6);
    const roof = new THREE.Mesh(roofGeo, foundationMaterial);
    roof.position.set(0.2, 4.3, 0.2);
    roof.castShadow = true;
    buildingGroup.add(roof);

    // 10. Rooftop Solar Panel Arrays (Highlights Bularcrest Solar capability)
    for (let i = 0; i < 3; i++) {
      const panelGeo = new THREE.BoxGeometry(1.2, 0.06, 0.8);
      const panel = new THREE.Mesh(panelGeo, solarMaterial);
      panel.position.set(-1.2 + i * 1.3, 4.5, -0.4);
      panel.rotation.x = -0.15;
      buildingGroup.add(panel);

      // Gold panel border
      const pBorderGeo = new THREE.BoxGeometry(1.24, 0.04, 0.84);
      const pBorder = new THREE.Mesh(pBorderGeo, accentGoldMaterial);
      pBorder.position.set(-1.2 + i * 1.3, 4.47, -0.4);
      pBorder.rotation.x = -0.15;
      buildingGroup.add(pBorder);
    }

    // 11. Subtle Paved Driveway and Grass Edge
    const grassGeo = new THREE.BoxGeometry(8.5, 0.1, 7.5);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x090c12,
      roughness: 0.9,
    });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.position.y = 0.0;
    grass.receiveShadow = true;
    buildingGroup.add(grass);

    // Wireframe overlay clone for smooth transitions
    const wireframeGroup = new THREE.Group();
    buildingGroup.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        const wireMesh = new THREE.Mesh(child.geometry, wireframeMaterial);
        wireMesh.position.copy(child.position);
        wireMesh.rotation.copy(child.rotation);
        wireMesh.scale.copy(child.scale);
        wireframeGroup.add(wireMesh);
      }
    });
    scene.add(wireframeGroup);
    wireframeGroup.visible = false;

    setIsLoaded(true);

    // Interactive Drag / Rotation
    let isDragging = false;
    let prevMouseX = 0;
    let autoRotationSpeed = 0.0035;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      buildingGroup.rotation.y += deltaX * 0.008;
      wireframeGroup.rotation.y += deltaX * 0.008;
      prevMouseX = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Touch interaction for mobile phones
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      buildingGroup.rotation.y += deltaX * 0.008;
      wireframeGroup.rotation.y += deltaX * 0.008;
      prevMouseX = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Render loop with IntersectionObserver optimization
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Gentle continuous rotation
      if (!isDragging) {
        buildingGroup.rotation.y += autoRotationSpeed;
        wireframeGroup.rotation.y = buildingGroup.rotation.y;
      }

      // Gentle floating breathing effect
      buildingGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      wireframeGroup.position.y = buildingGroup.position.y;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Toggle wireframe blueprint vs solid finished building
  const toggleMode = (finished: boolean) => {
    setIsFinished(finished);
    if (!sceneRef.current) return;
    const scene = sceneRef.current;
    const solidGroup = scene.children[scene.children.length - 2];
    const wireGroup = scene.children[scene.children.length - 1];

    if (solidGroup && wireGroup) {
      solidGroup.visible = finished;
      wireGroup.visible = !finished;
    }
  };

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-[#141822] via-[#0f1219] to-[#0d1017] border border-[#232b3c] shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-transparent to-transparent pointer-events-none" />

      {/* 3D Canvas Container */}
      {webglSupported ? (
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
          title="Drag to rotate building view"
        />
      ) : (
        /* Fallback for devices without WebGL */
        <div className="flex flex-col items-center justify-center p-8 text-center text-slate-300">
          <div className="w-20 h-20 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4 text-[#d4af37]">
            <Sparkles className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Modern Nigerian Architecture</h3>
          <p className="text-sm max-w-md text-slate-400">
            Engineered for durability, modern aesthetics, and uninterrupted solar power.
          </p>
        </div>
      )}

      {/* Interactive Reveal Toggle (Blueprint vs Finished Building) */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-20 flex items-center justify-between sm:justify-end gap-2 bg-[#0d1017]/85 backdrop-blur-md px-3 py-2 rounded-xl border border-[#2a3347] shadow-lg">
        <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
          Architecture View:
        </span>
        <div className="flex items-center gap-1 bg-[#141924] p-1 rounded-lg border border-[#232b3b]">
          <button
            type="button"
            onClick={() => toggleMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              !isFinished
                ? "bg-[#d4af37] text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Blueprint Structure
          </button>
          <button
            type="button"
            onClick={() => toggleMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              isFinished
                ? "bg-[#d4af37] text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Finished Building
          </button>
        </div>
      </div>

      {/* Badge / Gentle indicator */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0d1017]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2a3347] text-xs text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Drag to rotate 3D view</span>
      </div>

      {/* Trust pill */}
      <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 bg-[#0d1017]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#d4af37]/30 text-xs text-[#d4af37]">
        <Sparkles className="w-3.5 h-3.5" />
        <span>From Blueprint to Reality</span>
      </div>
    </div>
  );
}
