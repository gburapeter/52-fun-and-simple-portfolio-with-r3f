import { Float, Html, Mask, useGLTF, useHelper } from "@react-three/drei";

import React from "react";

function Iphone(props) {
	const { scene, nodes, materials } = useGLTF(
		"https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
	);

	return (
		// <Float rotationIntensity={0.1}>
		<primitive
			rotation-x={-0.5}
			rotation-z={-0.2}
			rotation-y={-0.1}
			position-y={-0.9}
			object={scene}
			{...props}
		>
			{/* <Html
				// scale={0.99}
				transform
				wrapperClass="htmlScreen"
				distanceFactor={1}
				position={[0.48, 1.6, -1]}
				// rotation-x={-0.256}
			>
				<iframe src="https://www.lipsum.com/" />
			</Html> */}

			<Mask
				id={1}
				colorWrite={false}
				depthWrite={false}
				geometry={nodes.SCREEN.geometry}
				castShadow
				receiveShadow
			>
				{/* We can drop the HTML inside, make it a 3d-transform and portal it to the dom container above */}
				<Html
					// scale={0.99}
					transform
					wrapperClass="htmlScreen"
					distanceFactor={1}
					position={[0.52, 1.65, -1]}
					// rotation-x={-0.256}
				>
					<iframe src="https://bruno-simon.com/html/" />
					{/* <iframe src="https://landing-page-lac-theta.vercel.app/" /> */}
				</Html>
			</Mask>
		</primitive>
		// </Float>
	);
}

export default Iphone;
