import {
	Center,
	ContactShadows,
	Environment,
	Float,
	Html,
	OrbitControls,
	PresentationControls,
	Text,
} from "@react-three/drei";
import Iphone from "./Iphone";
import { useFrame } from "@react-three/fiber";
import Model from "./IphoneNew";
import IphoneNew from "./IphoneNew";

export default function Experience() {
	return (
		<>
			<color args={["navajoWhite"]} attach="background" />

			<Environment preset="city" />

			<Center>
				<Iphone

				// position-x={-0.5}
				// position-z={-0.5}
				/>

				<Text
					font="./Brocklyns.woff"
					fontSize={1}
					position={[3, 2, 0.75]}
					rotation-y={-1.25}
					color={"green"}
					maxWidth={2}
				>
					gbp
				</Text>
				<Html
					// wrapperClass="htmlScreen"
					distanceFactor={5}
					position={[3, 0, 0.75]}
					// rotation-x={-0.256}
				>
					<span class="scroll-btn">
						<span class="mouse">
							<span></span>
						</span>
					</span>
				</Html>
			</Center>

			<ContactShadows position-y={-1.4} opacity={3} scale={5} blur={2.4} />
		</>
	);
}
