"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SceneRefs = {
  scene: THREE.Scene | null;
  camera: THREE.OrthographicCamera | null;
  renderer: THREE.WebGLRenderer | null;
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.RawShaderMaterial> | null;
  uniforms: Record<string, THREE.IUniform<unknown>> | null;
  animationId: number | null;
};

export default function SolarExchangeLight({ variant = "exchange" }: { variant?: "exchange" | "hub" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneRefs>({ scene: null, camera: null, renderer: null, mesh: null, uniforms: null, animationId: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;

    const refs = sceneRef.current;
    const vertexShader = `attribute vec3 position; void main() { gl_Position = vec4(position, 1.0); }`;
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution; uniform float time; uniform float xScale; uniform float yScale; uniform float distortion;
      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y); p.y += 0.16;
        float d = length(p - vec2(0.42, 0.34)) * distortion;
        float longWave = p.y + sin((p.x + time) * xScale) * yScale;
        float glowWave = p.y + sin((p.x + time * 0.92 + d) * xScale) * yScale;
        float r = 0.070 / max(abs(longWave), 0.012);
        float g = 0.034 / max(abs(glowWave), 0.020);
        float b = 0.0;
        float sun = smoothstep(0.98, 0.02, length(p - vec2(0.43, 0.32)));
        float horizon = smoothstep(-0.82, 0.46, p.y);
        float rayStrength = min(1.0, (r + g + b) * 0.68);
        vec3 rays = mix(vec3(1.0, 0.66, 0.14), vec3(1.0), 0.72) * rayStrength;
        vec3 glow = mix(vec3(1.0, 0.78, 0.20), vec3(1.0), sun) * sun * 1.8;
        vec3 base = mix(vec3(0.067, 0.078, 0.063), vec3(0.088, 0.102, 0.076), horizon);
        gl_FragColor = vec4(clamp(base + rays + glow, 0.0, 1.0), 1.0);
      }`;

    refs.scene = new THREE.Scene();
    refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true });
    refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    refs.renderer.setClearColor(new THREE.Color(0x111410));
    refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    refs.uniforms = { resolution: { value: new THREE.Vector2(1, 1) }, time: { value: 0 }, xScale: { value: 0.72 }, yScale: { value: 0.76 }, distortion: { value: 0.025 } };
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1,-1,0, 1,-1,0, -1,1,0, 1,-1,0, -1,1,0, 1,1,0]), 3));
    const material = new THREE.RawShaderMaterial({ vertexShader, fragmentShader, uniforms: refs.uniforms, side: THREE.DoubleSide });
    refs.mesh = new THREE.Mesh(geometry, material);
    refs.scene.add(refs.mesh);

    const resize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const { width, height } = frame.getBoundingClientRect();
      refs.renderer.setSize(width, height, false);
      (refs.uniforms.resolution.value as THREE.Vector2).set(width, height);
    };
    const animate = () => {
      if (refs.uniforms) (refs.uniforms.time.value as number) += 0.006;
      if (refs.renderer && refs.scene && refs.camera) refs.renderer.render(refs.scene, refs.camera);
      refs.animationId = window.requestAnimationFrame(animate);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(frame);
    resize(); animate();
    return () => {
      observer.disconnect();
      if (refs.animationId !== null) window.cancelAnimationFrame(refs.animationId);
      if (refs.mesh) { refs.scene?.remove(refs.mesh); refs.mesh.geometry.dispose(); refs.mesh.material.dispose(); }
      refs.renderer?.dispose();
    };
  }, []);

  return <div className={`exchange-light ${variant === "hub" ? "hub-light" : ""}`} ref={frameRef} aria-label="نمایش جریان نور خورشید و انتقال انرژی">
    <canvas ref={canvasRef} className="exchange-light__canvas" aria-hidden="true" />
    <div className="exchange-light__shade" aria-hidden="true" />
    {variant === "exchange" && <div className="exchange-light__content"><i>بورس انرژی</i></div>}
  </div>;
}
