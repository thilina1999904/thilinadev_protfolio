import laravel from '../assets/laravel.png'
import framer_motion from '../assets/framer_motion.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import nodejs from '../assets/nodejs.svg'
import express from '../assets/express.svg'
import java from '../assets/java.svg'
import mysql from '../assets/mysql.svg'
import mongodb from '../assets/mongodb.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import figma from '../assets/figma.svg'

const Skills = ({ darkMode }) => {
    const skills = [
        // Frontend
        { name: 'React.Js', icon: react, level: 95, color: 'from-cyan-500 to-blue-500' },
        { name: 'HTML5', icon: html, level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', icon: js, level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'CSS3', icon: css, level: 85, color: 'from-blue-500 to-indigo-600' },
        { name: 'Tailwind CSS', icon: tailwind, level: 88, color: 'from-teal-500 to-cyan-500' },

        // Backend
        { name: 'Laravel', icon: laravel, level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'Node.Js', icon: nodejs, level: 90, color: 'from-green-500 to-emerald-500' },
        { name: 'Express.Js', icon: express, level: 88, color: 'from-gray-500 to-gray-700' },
        { name: 'Java', icon: java, level: 85, color: 'from-blue-500 to-indigo-500' },

        // Database
        { name: 'MySQL', icon: mysql, level: 90, color: 'from-yellow-500 to-orange-500' },
        { name: 'MongoDB', icon: mongodb, level: 88, color: 'from-green-500 to-lime-500' },

        // Tools
        { name: 'Figma', icon: figma, level: 85, color: 'from-purple-500 to-pink-500' 
  },
        { name: 'Git', icon: git, level: 90, color: 'from-orange-600 to-red-600' },
        { name: 'GitHub', icon: github, level: 90, color: 'from-gray-700 to-black' },

        // Animation
        { name: 'Framer Motion', icon: framer_motion, level: 85, color: 'from-purple-500 to-pink-500' },
    ];
    return (
        <section
            id="skills"
            className="py-20 relative overflow-hidden transition-all duration-500"
            style={{
                backgroundColor: darkMode ? "#111827" : "#f9fafb"
            }}
        >
            <div className="container px-6 mx-auto">

                {/* Section Title */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1
                        className="sm:text-4xl text-3xl font-bold mb-4"
                        style={{ color: darkMode ? "white" : "#1f2937" }}
                    >
                        My{" "}
                        <span
                            style={{
                                background: "linear-gradient(to right, #f97316, #f59e0b)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            Skills
                        </span>
                    </h1>

                    <p
                        className="text-lg max-w-2xl mx-auto leading-relaxed"
                        style={{
                            color: darkMode ? "#d1d5db" : "#4b5563"
                        }}
                    >
                        I specialize in modern web technologies and build high-performance,
                        scalable, and visually appealing applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap -m-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="p-4 lg:w-1/4 md:w-1/2 w-full"
                            data-aos="fade-up"
                            data-aos-delay={300 + index * 100}
                        >
                            <div
                                className="h-full p-6 rounded-2xl border transition-all duration-300 
                                hover:-translate-y-2 hover:border-orange-500/50 
                                hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group"
                                style={{
                                    background: darkMode
                                        ? "linear-gradient(to bottom right, #1f2937, #111827)"
                                        : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                                    borderColor: darkMode ? "#374151" : "#e5e7eb"
                                }}
                            >
                                {/* Icon + Title */}
                                <div className="flex items-center mb-6">
                                    <div
                                        className="w-16 h-16 rounded-xl p-3 flex items-center justify-center 
                                        transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            background: darkMode
                                                ? "linear-gradient(to bottom right, #374151, #1f2937)"
                                                : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)"
                                        }}
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <h3
                                        className="text-xl font-bold ml-4"
                                        style={{ color: darkMode ? "white" : "#1f2937" }}
                                    >
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Progress Info */}
                                <div className="mb-2 flex justify-between items-center">
                                    <span
                                        className="font-medium"
                                        style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                                    >
                                        Proficiency
                                    </span>

                                    <span
                                        className="font-bold"
                                        style={{
                                            background: "linear-gradient(to right, #f97316, #f59e0b)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent"
                                        }}
                                    >
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div
                                    className="w-full rounded-full h-3 overflow-hidden"
                                    style={{
                                        backgroundColor: darkMode ? "#374151" : "#e5e7eb"
                                    }}
                                >
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} 
                                        transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>

                                {/* Bottom Hover Line */}
                                <div
                                    className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"
                                        }`}
                                >
                                    <div
                                        className="h-1 rounded-full opacity-70 group-hover:w-full 
                                        transition-all duration-500 w-1/3"
                                        style={{
                                            background: "linear-gradient(to right, #f97316, #f59e0b)"
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills