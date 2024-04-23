// import 'aframe';
// import 'ar.js';

function ARView({ modelUrl }) {
    console.log(`${modelUrl}/scene.gltf`);
    return (
        <a-scene>
            <a-marker preset="hiro">
                <a-entity position="0 0.1 0" scale="2 2 2">
                    <a-entity
                        gltf-model={`${modelUrl}/scene.gltf`}
                        scale="0.5 0.5 0.5  "
                        position=""
                        rotation="-90 0 0"
                    ></a-entity>
                </a-entity>
                
            </a-marker>
            <a-entity camera look-controls position="0 1.6 0"></a-entity>
        </a-scene>
        // <a-scene 
        //     vr-mode-ui="enabled: false;"
        //     renderer="logarithmicDepthBuffer: true;"
        //     embedded
        //     arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;"
        // >
        //     <a-nft
        //         type="nft"
        //         url="/trex/"
        //         smooth="true"
        //         smoothCount="10"
        //         smoothTolerance=".01"
        //         smoothThreshold="5"
        //     >
        //         <a-entity
        //             gltf-model="/milk.gltf"
        //             scale="2 2 2"
        //             position="0 0 -5"
        //         ></a-entity>
        //     </a-nft>
        //     <a-entity camera></a-entity>
        // </a-scene>
    );
}

export default ARView;