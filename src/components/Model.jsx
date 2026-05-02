import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ModelView from './ModelView';
import { useEffect, useRef, useState } from 'react';

import * as THREE from 'three';
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { models, packs } from '../constants';

const Model = () => {

    const [pack, setPack] = useState('car1');

    const [model, setModel] = useState({
        title: 'Auto 1 - Black',
        color: ['#2b2b2b']
    })

    // camera control
    const cameraControlCar = useRef();

    // model
    const carGroup = useRef(new THREE.Group());

    // rotation
    const [carRotation, setCarRotation] = useState(0);

    const filteredModels = models.filter(m => m.type === pack);

    useGSAP(() => {
        gsap.to("#heading", {
            y: 0,
            opacity: 1
        })
    }, [])

    useEffect(() => {
        if (cameraControlCar.current) {
            cameraControlCar.current.setAzimuthalAngle(-0.8)
            cameraControlCar.current.setPolarAngle(1.2)
            cameraControlCar.current.update()
        }
    }, [pack])

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id="heading" className='section-heading'>Schauen Sie genauer hin.</h1>

                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                        <ModelView
                            index={1}
                            groupRef={carGroup}
                            gsapType="view1"
                            controlRef={cameraControlCar}
                            setRotationState={setCarRotation}
                            item={model}
                            pack={pack}
                        />

                        <Canvas
                            className='w-full h-full'
                            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className='mx-auto w-full '>
                        <p className='text-sm font-light text-center mb-5'>
                            {model.title}
                        </p>

                        <div className='flex-center'>
                            <ul className='color-container'>
                                {filteredModels.map((item, i) => (
                                    <li
                                        key={i}
                                        className='w-6 h-6 rounded-full mx-2 cursor-pointer'
                                        style={{ background: item.color[0] }}
                                        onClick={() => setModel(item)}
                                    />
                                ))}
                            </ul>

                            <button className='size-btn-container'>
                                {packs.map(({ label, value }) => (
                                    <span
                                        key={label}
                                        className='size-btn'
                                        style={{
                                            backgroundColor: pack === value ? 'white' : 'transparent',
                                            color: pack === value ? 'black' : 'white'
                                        }}
                                        onClick={() => {
                                            setPack(value)
                                            const firstModel = models.find(m => m.type === value)
                                            setModel(firstModel)
                                        }}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model