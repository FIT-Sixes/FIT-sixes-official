import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
function Trophy(props) {
  const { nodes, materials } = useGLTF("/logo3d.gltf");
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group ref={meshRef} position={[0, -250, -500]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve.geometry}
        material={materials["Material.003"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve001.geometry}
        material={materials["Material.001"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve002.geometry}
        material={materials["Material.004"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve003.geometry}
        material={materials["Material.008"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve005.geometry}
        material={materials["SVGMat.006"]}
        position={[-0.6, 252.029, 179.649]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve006.geometry}
        material={materials["SVGMat.007"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve007.geometry}
        material={materials["Material.007"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve009.geometry}
        material={materials["Material.006"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve010.geometry}
        material={materials["Material.002"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve013.geometry}
        material={materials["Material.005"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve016.geometry}
        material={materials["SVGMat.017"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve017.geometry}
        material={materials["SVGMat.018"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve019.geometry}
        material={materials["Material.011"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve020.geometry}
        material={materials["Material.010"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve021.geometry}
        material={materials["SVGMat.022"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve023.geometry}
        material={materials["Material.009"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve025.geometry}
        material={materials["SVGMat.026"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve026.geometry}
        material={materials["SVGMat.027"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve027.geometry}
        material={materials["SVGMat.028"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve028.geometry}
        material={materials["SVGMat.029"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve029.geometry}
        material={materials["SVGMat.030"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve030.geometry}
        material={materials["SVGMat.031"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve031.geometry}
        material={materials["SVGMat.032"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve032.geometry}
        material={materials["SVGMat.033"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve033.geometry}
        material={materials["SVGMat.034"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve034.geometry}
        material={materials["SVGMat.035"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve035.geometry}
        material={materials["SVGMat.036"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve036.geometry}
        material={materials["SVGMat.037"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve037.geometry}
        material={materials["SVGMat.038"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve038.geometry}
        material={materials["SVGMat.039"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve039.geometry}
        material={materials["SVGMat.040"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve040.geometry}
        material={materials["SVGMat.041"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve041.geometry}
        material={materials["SVGMat.042"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve042.geometry}
        material={materials["SVGMat.043"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve043.geometry}
        material={materials["SVGMat.044"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve044.geometry}
        material={materials["SVGMat.045"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve045.geometry}
        material={materials["SVGMat.046"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve046.geometry}
        material={materials["SVGMat.047"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve047.geometry}
        material={materials["SVGMat.048"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve048.geometry}
        material={materials["SVGMat.049"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve049.geometry}
        material={materials["SVGMat.050"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve050.geometry}
        material={materials["SVGMat.051"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve051.geometry}
        material={materials["SVGMat.052"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve052.geometry}
        material={materials["SVGMat.053"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Curve053.geometry}
        material={materials["SVGMat.054"]}
        position={[-0.6, 514.563, 173.371]}
        rotation={[-0.254, Math.PI / 2, 0]}
        scale={442.916}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials.wire_088144225}
        position={[-3.774, -306.657, -6.278]}
        scale={1.061}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.wire_088144225}
        position={[-3.774, -306.657, -6.278]}
        scale={1.061}
      />
      <mesh
        geometry={nodes.Object003.geometry}
        material={materials.wire_027177088}
        position={[-3.774, -306.657, -6.278]}
        scale={1.061}
      />
      <mesh
        geometry={nodes.Shape1.geometry}
        material={materials.wire_027177088}
        position={[-3.774, -306.657, -6.278]}
        scale={1.061}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.013"]}
        position={[0, 16.404, -1.182]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[97.597, 96.291, 36.255]}
      />
      <mesh
        geometry={nodes.Text.geometry}
        material={materials["Material.012"]}
        position={[98.536, 14.502, -3.663]}
        rotation={[0, Math.PI / 2, 0]}
        scale={100}
      />
      <pointLight position={[0, 0, -50]} intensity={1} color="#ffffff" />
    </group>
  );
}
useGLTF.preload("/logo.gltf");
export default Trophy;
