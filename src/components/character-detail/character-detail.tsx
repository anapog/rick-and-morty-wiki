import { StyledReactLink } from './character-detail.style';
import { FaArrowLeft } from "react-icons/fa";

const CharacterDetail = () => (
	<>
        <StyledReactLink to="../.." relative="path">
			<FaArrowLeft /> Go back
		</StyledReactLink>
	</>
);

export default CharacterDetail;
