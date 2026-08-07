import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DESKTOP_NODES = 46;
const MOBILE_NODES = 22;
const DESKTOP_LINK_DISTANCE = 140;
const MOBILE_LINK_DISTANCE = 110;
const MOUSE_RADIUS = 90;
const MAX_SPEED = 0.5;

// Decorative constellation background for the Hero. Runs a plain three.js
// loop (no react-three-fiber) so it stays lightweight and easy to gate
// behind prefers-reduced-motion / viewport / tab-visibility checks.
export default function NetworkCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const isSmall = window.innerWidth < 640;

    const nodeCount = isSmall ? MOBILE_NODES : DESKTOP_NODES;
    const linkDistance = isSmall ? MOBILE_LINK_DISTANCE : DESKTOP_LINK_DISTANCE;
    const interactive = !isCoarsePointer && !reduceMotion;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmall ? 1.5 : 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const nodes = Array.from({ length: nodeCount }, () => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nodeCount * 3), 3));
    const points = new THREE.Points(
      pointsGeometry,
      new THREE.PointsMaterial({
        color: new THREE.Color('#7dd3fc'),
        size: 2.6,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(points);

    const maxPairs = (nodeCount * (nodeCount - 1)) / 2;
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxPairs * 6), 3));
    const lines = new THREE.LineSegments(
      linesGeometry,
      new THREE.LineBasicMaterial({
        color: new THREE.Color('#3b82f6'),
        transparent: true,
        opacity: 0.14,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(lines);

    const mouse = { x: 0, y: 0, active: false };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        mouse.active = false;
        return;
      }
      mouse.x = e.clientX - rect.left - width / 2;
      mouse.y = -(e.clientY - rect.top - height / 2);
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };

    if (interactive) {
      window.addEventListener('mousemove', onPointerMove, { passive: true });
      window.addEventListener('mouseleave', onPointerLeave, { passive: true });
    }

    let rafId = null;
    let running = true;

    const step = () => {
      const halfW = width / 2;
      const halfH = height / 2;

      if (!reduceMotion) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x > halfW || n.x < -halfW) n.vx *= -1;
          if (n.y > halfH || n.y < -halfH) n.vy *= -1;

          if (mouse.active) {
            const dx = n.x - mouse.x;
            const dy = n.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MOUSE_RADIUS && dist > 0.001) {
              const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.04;
              n.vx += (dx / dist) * force;
              n.vy += (dy / dist) * force;
            }
          }

          const speed = Math.hypot(n.vx, n.vy);
          if (speed > MAX_SPEED) {
            n.vx = (n.vx / speed) * MAX_SPEED;
            n.vy = (n.vy / speed) * MAX_SPEED;
          }
        }
      }

      const posAttr = pointsGeometry.attributes.position;
      for (let i = 0; i < nodeCount; i++) {
        posAttr.setXYZ(i, nodes[i].x, nodes[i].y, 0);
      }
      posAttr.needsUpdate = true;

      const linePosAttr = linesGeometry.attributes.position;
      let vertexIdx = 0;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            linePosAttr.setXYZ(vertexIdx++, nodes[i].x, nodes[i].y, 0);
            linePosAttr.setXYZ(vertexIdx++, nodes[j].x, nodes[j].y, 0);
          }
        }
      }
      linesGeometry.setDrawRange(0, vertexIdx);
      linePosAttr.needsUpdate = true;

      renderer.render(scene, camera);

      if (!reduceMotion && running) {
        rafId = requestAnimationFrame(step);
      }
    };

    step();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduceMotion) return;
        if (entry.isIntersecting && !running) {
          running = true;
          step();
        } else if (!entry.isIntersecting && running) {
          running = false;
          if (rafId) cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.05 }
    );
    io.observe(container);

    const onVisibility = () => {
      if (reduceMotion) return;
      if (document.hidden) {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        running = true;
        step();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      for (const n of nodes) {
        n.x = Math.max(-width / 2, Math.min(width / 2, n.x));
        n.y = Math.max(-height / 2, Math.min(height / 2, n.y));
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
      if (interactive) {
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('mouseleave', onPointerLeave);
      }
      pointsGeometry.dispose();
      points.material.dispose();
      linesGeometry.dispose();
      lines.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
