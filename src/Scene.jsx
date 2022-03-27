import {Model} from "./Model";
import {Plane} from "@react-three/drei";
import {DoubleSide} from "three";

export const Scene = () => {
    return (
        <group>
            <Model/>
            <Plane
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                args={[1000, 1000]}
            >
                <meshStandardMaterial side={DoubleSide} attach="material" color="white"/>
            </Plane>
        </group>
    )
}