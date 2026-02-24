import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {

    const projects = [
        {
            id: 1,
            title: 'Vegaz Audio',
            desc: 'A premium E-commerce platform for high-quality audio equipment rental system.',
            image: project1,
            tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
            github: 'https://github.com/thilina1999904/kv-audio-frontend-n.git', // Replace with actual project link
            live: 'https://kv-audio-frontend-n.vercel.app/' // Replace with actual live link
        },
        {
            id: 2,
            title: 'Bimthanna Flora Website',
            desc: 'Designed and developed a beautiful frontend for an online flower delivery system with real-time tracking.',
            image: project2,
            tags: ['Html', 'CSS', 'Javascript'],
            github: 'https://github.com/thilina1999904',
            live: 'https://bimthannaflora.lk'
        },
        {
            id: 3,
            title: 'Ceylon Tours Travel Site',
            desc: 'Comprehensive travel booking system focused on Sri Lankan tourism with itinerary planning features.',
            image: project3,
            tags: ['Html', 'CSS', 'Javascript'],
            github: 'https://github.com/thilina1999904',
            live: '#'
        },
        {
            id: 4,
            title: 'Safari Sri Lanka Travel Site',
            desc: 'Adventure-focused booking site with specialized tours for wildlife enthusiasts and safari bookings.',
            image: project4,
            tags: ['Html', 'CSS', 'Javascript'],
            github: 'https://github.com/thilina1999904',
            live: '#'
        },
        {
            id: 5,
            title: 'Best Udawalawa Safari',
            desc: 'Direct booking engine for Udawalawa safari tours with dynamic pricing and review management.',
            image: project5,
            tags: ['Html', 'CSS', 'Javascript'],
            github: 'https://github.com/thilina1999904',
            live: '#'
        },
        {
            id: 6,
            title: 'Ceylon Tours UI/UX Design',
            desc: 'A user-centric design approach for a travel agency, focusing on conversion rates and mobile responsiveness.',
            image: project6,
            tags: ['Figma', 'Adobe XD', 'Prototyping'],
            github: '#', // Usually design projects don't have github
            live: '#' 
        },
        {
            id: 7,
            title: 'Bimthanna Flora UI/UX Design',
            desc: 'Design system and visual identity for an eco-friendly florist, emphasizing clean and natural aesthetics.',
            image: project1, 
            tags: ['Figma', 'UI Design', 'Branding'],
            github: '#',
            live: '#'
        },
    ];

    return (
        <section id="projects"
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{ color: darkMode ? 'white' : '#1f2937' }}>
                        My <span style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>Projects</span>
                    </h2>
                    <p className='max-w-xl mx-auto' style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                        A Showcase of my Recent Work
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div key={project.id}
                            style={{
                                background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : '#ffffff',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }} 
                            className='group rounded-2xl border overflow-hidden duration-300 hover:border-orange-500/50 transition-all shadow-sm hover:shadow-xl'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}
                        >
                            {/* Image with Overlay effect */}
                            <div className='h-48 overflow-hidden relative'>
                                <img src={project.image} alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300'></div>
                            </div>

                            <div className='p-5'>
                                <h3 className='text-lg font-bold mb-2'
                                    style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                    {project.title}
                                </h3>
                                <p className='text-sm mb-4 line-clamp-2'
                                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                    {project.desc}
                                </p>

                                <div className='flex flex-wrap gap-1.5 mb-6'>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }} className='px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-md'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex gap-3 mt-auto'>
                                    <a href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? 'white' : '#374151'
                                        }} className='flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300'>
                                        <Github size={16} />
                                        <span>CODE</span>
                                    </a>

                                    <a href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                        }} className='flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300'>
                                        <ExternalLink size={16} />
                                        <span>LIVE DEMO</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className='text-center mt-16'>
                    <a href="https://github.com/thilina1999904"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                        }} className='inline-flex items-center justify-center font-bold gap-2 px-8 py-4 text-white rounded-full hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300'>
                        <Github size={20}/>
                        <span>VIEW ALL PROJECTS</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;