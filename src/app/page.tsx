import ThreeBackground from "@/components/background";
import Header from "@/components/header";
import { Title, Subtitle, Hero, Main } from "./style";

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Header />
      <Main>
        <Hero>
          <Title>Jorge W P Nagakura</Title>
          <Subtitle>Full Stack Developer</Subtitle>
          <p>Building innovative solutions with modern technologies</p>
        </Hero>
      </Main>
    </>
  );
}
