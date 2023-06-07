import React from 'react'
import { easing } from 'maath'; // 引入 easing 函数
import { useSnapshot } from 'valtio'; // 引入 useSnapshot 钩子
import { useFrame } from '@react-three/fiber'; // 引入 useFrame 钩子
import { Decal, useGLTF, useTexture } from '@react-three/drei'; // 引入 Decal、useGLTF 和 useTexture 钩子

import state from '../store'; // 引入 store

const Shirt = () => {
  const snap = useSnapshot(state); // 获取 store 中的快照
  const { nodes, materials } = useGLTF('/shirt_baked.glb'); // 加载 glTF 模型

  const logoTexture = useTexture(snap.logoDecal); // 加载 store 中的 logo 纹理
  const fullTexture = useTexture(snap.fullDecal); // 加载 store 中的全图纹理
  const screen1Texture = useTexture(snap.screen1); // 加载 store 中的全图纹理
  const screen2Texture = useTexture(snap.screen2); // 加载 store 中的全图纹理
  const screen3Texture = useTexture(snap.screen3); // 加载 store 中的全图纹理
  const screen4Texture = useTexture(snap.screen4); // 加载 store 中的全图纹理

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)); // 在每一帧更新材质的颜色

  const stateString = JSON.stringify(snap); // 将 store 中的快照转换为字符串

  console.log(stateString);
  console.log(useTexture(snap.logoDecal));


  return (
    <group key={stateString}>


      {/* 1///////////////////////////////////////////////////////////////////////////////// */}
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        scale={0.5}
        position={[0.21, 0, 0]}
      >
        {/* 如果 store 中的 isFullTexture 为 true，则添加全图贴花 */}
        {snap.isFullTexture && (
          <Decal
            position={[0.15, -0.42, 0]}
            rotation={[0, 0, 0]}
            scale={0.10}
            map={fullTexture}
          />
        )}

        {/* 如果 store 中的 isLogoTexture 为 true，则添加 logo 贴花 */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, -0.2, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.25}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}

        {/* 添加屏幕显示内容 */}
        <Decal
          position={[0, 0.4, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.36, 0.66, 0.5]}
          map={screen1Texture}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={true}
        />

      </mesh>

      {/* 2///////////////////////////////////////////////////////////////////////////////// */}
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        scale={0.5}
        position={[0, 0, 0]}
      >
         {/* 如果 store 中的 isFullTexture 为 true，则添加全图贴花 */}
         {snap.isFullTexture && (
          <Decal
            position={[0.15, -0.42, 0]}
            rotation={[0, 0, 0]}
            scale={0.10}
            map={fullTexture}
          />
        )}

        {/* 如果 store 中的 isLogoTexture 为 true，则添加 logo 贴花 */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, -0.2, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.25}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
        {/* 添加屏幕显示内容 */}
        <Decal
          position={[0, 0.4, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.36, 0.66, 0.5]}
          map={screen2Texture}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={true}
        />
      </mesh>

      {/* 3///////////////////////////////////////////////////////////////////////////////// */}
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        scale={0.5}
        position={[0.42, 0, 0]}
      >
        {/* 如果 store 中的 isFullTexture 为 true，则添加全图贴花 */}
        {snap.isFullTexture && (
          <Decal
            position={[0.15, -0.42, 0]}
            rotation={[0, 0, 0]}
            scale={0.10}
            map={fullTexture}
          />
        )}

        {/* 如果 store 中的 isLogoTexture 为 true，则添加 logo 贴花 */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, -0.2, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.25}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}

        {/* 添加屏幕显示内容 */}
        <Decal
          position={[0, 0.4, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.36, 0.66, 0.5]}
          map={screen3Texture}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={true}
        />

      </mesh>

      
      {/* 4///////////////////////////////////////////////////////////////////////////////// */}
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        scale={0.5}
        position={[-0.21, 0, 0]}
      >
        {/* 如果 store 中的 isFullTexture 为 true，则添加全图贴花 */}
        {snap.isFullTexture && (
          <Decal
            position={[0.15, -0.42, 0]}
            rotation={[0, 0, 0]}
            scale={0.10}
            map={fullTexture}
          />
        )}

        {/* 如果 store 中的 isLogoTexture 为 true，则添加 logo 贴花 */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, -0.2, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.25}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}

        {/* 添加屏幕显示内容 */}
        <Decal
          position={[0, 0.4, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.36, 0.66, 0.5]}
          map={screen4Texture}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={true}
        />

      </mesh>
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
    </group>
  )
}

export default Shirt

//这段代码是一个 React 组件，用于渲染一个 T 恤模型。组件中使用了 useSnapshot 钩子获取了 store 中的快照，
//useGLTF 钩子加载了一个 glTF 模型，useTexture 钩子加载了 store
 //中的纹理。在每一帧中，使用 useFrame 钩子更新了材质的颜色。组件中还使用了 Decal 组件，用于在模型上添加纹理。