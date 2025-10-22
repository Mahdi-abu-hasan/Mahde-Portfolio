import LogoLoop from '../../animations/loopAnimation';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiSpringboot, SiPostgresql, SiMongodb, SiJavascript, SiAstro
} from 'react-icons/si';

const techLogos = [
    { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss color="#38BDF8" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiSpringboot color="#339933" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
    { node: <SiPostgresql color="#336791" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiMongodb color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://www.javascript.com" },
    { node: <SiAstro color="#0EA5E9" />, title: "Astro", href: "https://astro.build" },
];



function SkillsAnimatedLoop() {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={55}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="My skills and technologies"
            />
        </div>
    );
}

export default SkillsAnimatedLoop;
