import about from '../assets/about.png'

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 ${darkMode ? 'bg-[#111827]' : 'bg-[#f9fafb]'}`}
    >

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border ${darkMode ? 'border-orange-500/10' : 'border-orange-300/30'}`} />
        <div className={`absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full border ${darkMode ? 'border-orange-500/10' : 'border-orange-300/20'}`} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(${darkMode ? '#f97316' : '#c2410c'} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] ${darkMode ? 'bg-orange-600/15' : 'bg-orange-300/25'}`} />
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] ${darkMode ? 'bg-amber-500/10' : 'bg-amber-300/20'}`} />
      </div>

      <div className="container mx-auto w-full max-w-6xl relative z-10">

        {/* Section label */}
        <div
          className="flex items-center gap-3 mb-16 justify-center lg:justify-start"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <span className={`h-px w-10 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'}`} />
          <span className={`text-xs font-semibold tracking-[0.25em] uppercase ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
            Who I Am
          </span>
          <span className={`h-px flex-1 max-w-[40px] ${darkMode ? 'bg-orange-500/30' : 'bg-orange-300'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* IMAGE SIDE */}
          <figure
            className="flex justify-center items-center order-2 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-136 lg:h-136">

              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-400/40 animate-spin"
                style={{ animationDuration: '18s' }}
              />

              <div className={`absolute -bottom-4 -right-4 w-full h-full rounded-3xl ${darkMode ? 'bg-orange-500/15 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`} />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-orange-400/30 shadow-2xl">
                <img
                  src={about}
                  alt="About me"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-black/40 via-transparent to-transparent' : 'bg-gradient-to-t from-orange-900/10 via-transparent to-transparent'}`} />
              </div>

              {/* Experience badge */}
              <div
                className={`absolute -top-5 -left-5 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-[-6deg] border ${darkMode ? 'bg-[#1f2937] border-[#374151]' : 'bg-white border-orange-200'}`}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <span className="text-2xl font-black text-orange-400 leading-none">2+</span>
                <span className={`text-[9px] font-semibold uppercase tracking-widest mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Years</span>
              </div>

              {/* Projects badge */}
              <div
                className={`absolute -bottom-5 -left-5 w-24 h-14 rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-[4deg] border ${darkMode ? 'bg-[#1f2937] border-[#374151]' : 'bg-white border-orange-200'}`}
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span className="text-xl font-black text-orange-400 leading-none">5+</span>
                <span className={`text-[9px] font-semibold uppercase tracking-widest mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Projects</span>
              </div>

            </div>
          </figure>

          {/* TEXT SIDE */}
          <article className="order-1 lg:order-2 text-center lg:text-left">

            <h1
              className="sm:text-4xl text-3xl font-bold mb-4"
              style={{ color: darkMode ? "white" : "#1f2937" }}
            >
              About{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #f97316, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent"
                }}
              >
                Me
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              data-aos="fade-up"
              data-aos-delay="350"
            >
              I'm a passionate Full-Stack Developer with hands-on experience in building
              modern web applications using React, Laravel, and Java-based technologies.
              I enjoy transforming ideas into real-world digital solutions with clean UI,
              efficient backend logic, and scalable architecture.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Over the past few years, I've worked on projects such as inventory systems,
              flower shop site, and tourism websites. My focus is always on
              performance, usability, and creating responsive, modern user experiences.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              data-aos="fade-up"
              data-aos-delay="450"
            >
              I'm continuously learning and improving my skills in full-stack development,
              cloud technologies, and software architecture. My goal is to build impactful,
              scalable solutions that solve real-world problems.
            </p>

            {/* Stats row */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-px mb-10 rounded-2xl overflow-hidden border ${darkMode ? 'border-[#374151]' : 'border-orange-100'}`}
              data-aos="fade-up"
              data-aos-delay="450"
            >
              {[
                { value: '5+', label: 'Education' },
                { value: '2+', label: 'Years Exp.' },
                { value: '5+', label: 'Projects' },
              ].map(({ value, label }, i) => (
                <div
                  key={i}
                  className={`flex-1 min-w-[90px] py-5 px-4 flex flex-col items-center gap-1 ${darkMode ? 'bg-[#1f2937] hover:bg-[#374151]' : 'bg-orange-50 hover:bg-orange-100'} transition-colors duration-300`}
                >
                  <span className="text-3xl font-black text-orange-400">{value}</span>
                  <span className={`text-xs font-medium tracking-wide uppercase ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
            </div>

          </article>

        </div>
      </div>
    </section>
  )
}

export default About;