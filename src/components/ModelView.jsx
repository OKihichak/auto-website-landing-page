import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense, useEffect, useState } from 'react'
import Lights from './Lights'
import Rs5 from './Rs5'
import * as THREE from 'three'

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  pack,
  item
}) => {

  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScale(0.6)
      } else {
        setScale(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full ${
        index === 2 ? 'right-[-100%]' : ''
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(controlRef.current.getAzimuthalAngle())
        }
      />

      <group
        ref={groupRef}
        name={pack}
        position={[0, 0, 0]}
      >
        <Suspense fallback={null}>
          <Rs5 scale={[scale, scale, scale]} color={item.color[0]} />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView