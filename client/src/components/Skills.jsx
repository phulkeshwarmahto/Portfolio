import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiFigma } from "react-icons/si";
import { TbBrandCpp, TbBrandThreejs } from "react-icons/tb";

const SkillCard = ({ title, children, className = "" }) => (
    <div className={`bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-3xl border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none ${className}`}>
        <h3 className="text-gray-600 dark:text-gray-400 font-medium mb-4 text-sm uppercase tracking-wider">{title}</h3>
        <div className="flex flex-wrap gap-4">
            {children}
        </div>
    </div>
);

const IconWrapper = ({ icon: Icon, color, name }) => (
    <div className="group flex flex-col items-center gap-2">
        <div className={`p-3 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm dark:shadow-none group-hover:bg-gray-50 dark:group-hover:bg-neutral-700 transition-colors ${color}`}>
            <Icon size={24} />
        </div>
    </div>
);

const Skills = () => {
    return (
        <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-24 px-6 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">My Expertise</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                        Skills that fuel my passion
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Frontend - Large Card */}
                    <SkillCard title="Front-End Development" className="md:col-span-2 md:row-span-2">
                        <div className="flex flex-wrap gap-4 w-full">
                            <IconWrapper icon={FaHtml5} color="text-orange-500" name="HTML" />
                            <IconWrapper icon={FaCss3Alt} color="text-blue-500" name="CSS" />
                            <IconWrapper icon={FaJs} color="text-yellow-400" name="JS" />
                            <IconWrapper icon={SiTypescript} color="text-blue-400" name="TS" />
                            <IconWrapper icon={FaReact} color="text-cyan-400" name="React" />
                            <IconWrapper icon={SiNextdotjs} color="text-gray-900 dark:text-white" name="Next.js" />
                            <IconWrapper icon={SiTailwindcss} color="text-cyan-300" name="Tailwind" />
                            <IconWrapper icon={TbBrandThreejs} color="text-gray-900 dark:text-white" name="Three.js" />
                        </div>
                        <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.
                        </p>
                    </SkillCard>

                    {/* Backend */}
                    <SkillCard title="Back-End Development" className="md:col-span-2">
                        <IconWrapper icon={FaNodeJs} color="text-green-500" name="Node" />
                        <IconWrapper icon={SiExpress} color="text-gray-900 dark:text-white" name="Express" />
                        <IconWrapper icon={SiMongodb} color="text-green-400" name="Mongo" />
                        <IconWrapper icon={SiPostgresql} color="text-blue-300" name="Postgres" />
                    </SkillCard>

                    {/* Styling & Design */}
                    <SkillCard title="Styling & Design" className="md:col-span-2">
                        <IconWrapper icon={SiTailwindcss} color="text-cyan-400" name="Tailwind" />
                        <IconWrapper icon={SiFigma} color="text-purple-400" name="Figma" />
                    </SkillCard>

                    {/* Programming Languages */}
                    <SkillCard title="Programming Languages" className="md:col-span-2">
                        <IconWrapper icon={FaPython} color="text-yellow-300" name="Python" />
                        <IconWrapper icon={TbBrandCpp} color="text-blue-500" name="C++" />
                        <IconWrapper icon={FaJs} color="text-yellow-400" name="JS" />
                    </SkillCard>

                    {/* Cloud & Deployment */}
                    <SkillCard title="Cloud & Deployment" className="md:col-span-2">
                        <IconWrapper icon={FaDocker} color="text-blue-500" name="Docker" />
                        <IconWrapper icon={FaAws} color="text-orange-400" name="AWS" />
                        <IconWrapper icon={SiFirebase} color="text-yellow-500" name="Firebase" />
                    </SkillCard>

                    {/* Version Control */}
                    <SkillCard title="Version Control" className="md:col-span-2">
                        <IconWrapper icon={FaGitAlt} color="text-orange-600" name="Git" />
                    </SkillCard>
                </div>

                {/* CTA */}
                <div className="mt-20 flex justify-center">
                    <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                        <a href="/contact" className="relative flex items-center justify-center w-32 h-32 bg-blue-600 rounded-full text-white font-medium hover:scale-105 transition duration-300">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
