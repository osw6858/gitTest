import { useRecoilState } from "recoil";
import { textState } from "../atom/todos";
import { Container } from "./index.styles";

const IndexPage = () => {
  const [text, setText] = useRecoilState(textState);

  return (
    <Container>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>{text}</h2>
    </Container>
  );
};

export default IndexPage;
