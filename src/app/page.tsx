import ThreeBackground from "@/components/background";
import Header from "@/components/header";
import {
  Title,
  Subtitle,
  Hero,
  Main,
  AboutContainer,
  ProfileImage,
  ProfilePlaceholder,
  AboutText,
  About,
  Skills,
  SkillsGrid,
  SkillCategory,
  Contact,
  ContactLinks,
} from "./style";
import Footer from "@/components/footer";

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
        <About id="about">
          <h2>Sobre mim</h2>
          <AboutContainer>
            <ProfileImage>
              <ProfilePlaceholder
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </ProfilePlaceholder>
              {/* <input type="file" id="profile-upload" accept="image/*" aria-label="Upload profile picture"> */}
            </ProfileImage>
            <AboutText>
              <p>
                I'm a passionate full stack developer with expertise in building
                scalable web applications. With a strong foundation in both
                frontend and backend technologies, I create seamless user
                experiences while ensuring robust server-side functionality.
              </p>
            </AboutText>
          </AboutContainer>
        </About>

        <Skills id="skills">
          <h2>Habilidades Técnicas</h2>
          <SkillsGrid>
            <SkillCategory>
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5/CSS3</li>
              </ul>
            </SkillCategory>
            <SkillCategory>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>.NET & ASP.NET</li>
                <li>Django & Flask</li>
                <li>REST & SOAP</li>
              </ul>
            </SkillCategory>
            <SkillCategory>
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>PostgreSQL</li>
              </ul>
            </SkillCategory>
            <SkillCategory>
              <h3>DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Microsoft Azure</li>
              </ul>
            </SkillCategory>
            <SkillCategory>
              <h3>Corporative Tools</h3>
              <ul>
                <li>Power Platform</li>
                <li>CRM Dynamics 365</li>
                <li>Office 365</li>
              </ul>
            </SkillCategory>
          </SkillsGrid>
        </Skills>

        {/* <section id="projects">
          <h2>Projetos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-featured online shopping platform built with React and
                Node.js
              </p>
              <div className="project-tech">
                React • Node.js • MongoDB • AWS
              </div>
            </div>
            <div className="project-card">
              <h3>Task Management System</h3>
              <p>Enterprise task management solution with real-time updates</p>
              <div className="project-tech">
                Vue.js • Python • PostgreSQL • Docker
              </div>
            </div>
            <div className="project-card">
              <h3>Social Media Analytics</h3>
              <p>
                Data analytics platform for social media engagement tracking
              </p>
              <div className="project-tech">
                TypeScript • Java • Redis • Kubernetes
              </div>
            </div>
          </div>
        </section> */}

        <Contact id="contact">
          <h2>Entre em contato</h2>
          <ContactLinks>
            <a href="https://github.com/JorgeWillianPaez" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jorgenagakura/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="mailto:jorgewillianpaez@gmail.com">Email</a>
          </ContactLinks>
        </Contact>
      </Main>
      <Footer />
    </>
  );
}
