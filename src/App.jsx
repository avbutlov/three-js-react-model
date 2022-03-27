import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Suspense} from "react";
import {Scene} from "./Scene";

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={null}>
                <Canvas>
                    <fog attach="fog" args={["white", 0, 40]}/>
                    <ambientLight intensity={0.2}/>
                    <directionalLight
                        intensity={0.5}
                        position={[0, 0, 1]}
                        color="red"
                    />
                    <directionalLight
                        intensity={0.5}
                        position={[0, 0, -1]}
                        color="red"
                    />
                    <Scene/>
                    <OrbitControls/>
                </Canvas>
            </Suspense>
        </div>
    );
}

export default App;
