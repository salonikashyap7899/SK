import { Layout } from "@/components/layout";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { GithubRepos } from "@/components/sections/github-repos";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GithubRepos />
      <Contact />
    </Layout>
  );
}
