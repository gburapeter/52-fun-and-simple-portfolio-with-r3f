import {
	Center,
	ContactShadows,
	Environment,
	Html,
	Text,
} from "@react-three/drei";
import Iphone from "./Iphone";

export default function Experience() {
	return (
		<>
			<color args={["navajoWhite"]} attach="background" />

			<Environment preset="city" />

			<Center position={[0, 0.2, 0]} scale={0.9}>
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
