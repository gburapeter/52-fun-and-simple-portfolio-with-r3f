import { Float, Html, useGLTF, useHelper } from "@react-three/drei";

import React, { useRef } from "react";

function Iphone(props) {
	const { scene } = useGLTF(
		"https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
	);

	return (
		// <Float rotationIntensity={0.1}>
		<primitive
			scale={1.1}
			rotation-x={-0.5}
			rotation-z={-0.2}
			rotation-y={-0.1}
			object={scene}
			{...props}
		>
			<Html
				// scale={0.99}
				transform
				wrapperClass="htmlScreen"
				distanceFactor={1}
				position={[0.48, 1.6, -1]}
				// rotation-x={-0.256}
			>
				<iframe src="https://www.lipsum.com/" />
			</Html>
		</primitive>
		// </Float>
	);
}

export default Iphone;
