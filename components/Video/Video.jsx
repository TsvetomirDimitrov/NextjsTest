import { VideoContainer } from "./elements"
import Image from 'next/image'

export const Video = () => {
	return (
		<VideoContainer>
			<Image
				src="/img/video.png"
				width={320}
				height={520}
			/>
		</VideoContainer>
	)
}