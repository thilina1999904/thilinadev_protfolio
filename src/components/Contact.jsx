import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowRight, Facebook } from 'lucide-react'

const Contact = ({ darkMode }) => {

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [focused, setFocused] = useState('')
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputBase = `w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 border`

  const inputStyle = (name) => `${inputBase} ${
    darkMode
      ? `bg-[#374151] text-white placeholder-gray-500 ${focused === name ? 'border-orange-400 shadow-[0_0_0_3px_rgba(251,146,60,0.12)]' : 'border-[#4b5563]'}`
      : `bg-orange-50/60 text-gray-800 placeholder-gray-400 ${focused === name ? 'border-orange-400 shadow-[0_0_0_3px_rgba(251,146,60,0.12)] bg-white' : 'border-orange-100'}`
  }`

  const contacts = [
    { icon: Mail, label: 'Email', value: 'thilinanirmalhl@gmail.com', href: 'mailto:thilinanirmalhl@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+94 71 35 95 423', href: 'tel:+94713595423' },
    { icon: MapPin, label: 'Location', value: 'Galle, Sri Lanka', href: '#' },
  ]

  const socials = [
    { icon: Github, href: 'https://github.com/thilina1999904', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/thilina-nirmal-aa488322a/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://web.facebook.com/thilina.malshan.568', label: 'Facebook' },
  ]

  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">

        {/* ── HEADER — matches Skills/Projects style ── */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Contacts
            </span>
          </h2>
          <p style={{ color: darkMode ? '#9ca3af' : '#6b7280' }} className="max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something great.
          </p>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-10">

          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right" data-aos-delay="100">

            {/* Contact info */}
            <div
              className="rounded-xl border p-6"
              style={{
                background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: darkMode ? '#fb923c' : '#f97316' }}
              >
                Contact Info
              </h3>
              <div className="space-y-4">
                {contacts.map(({ icon: Icon, label, value, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center gap-4 group transition-all duration-300"
                    data-aos="fade-right"
                    data-aos-delay={200 + i * 80}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: darkMode ? 'rgba(249,115,22,0.15)' : '#ffedd5', color: '#f97316' }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div
                        className="text-[10px] font-semibold uppercase tracking-widest"
                        style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}
                      >{label}</div>
                      <div
                        className="text-sm font-medium mt-0.5"
                        style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                      >{value}</div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      style={{ color: '#f97316' }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="rounded-xl border p-5 flex items-center gap-4"
              style={{
                background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : '#fff7ed',
                borderColor: darkMode ? '#374151' : '#fed7aa'
              }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: darkMode ? 'white' : '#1f2937' }}>
                  Available for freelance
                </div>
                <div className="text-xs mt-0.5" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
                  Open to new opportunities
                </div>
              </div>
            </div>

            {/* Socials */}
            <div data-aos="fade-up" data-aos-delay="380">
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}
              >Follow Me</div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#ffffff',
                      border: `1px solid ${darkMode ? '#4b5563' : '#e5e7eb'}`,
                      color: darkMode ? '#9ca3af' : '#6b7280'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = darkMode ? 'rgba(249,115,22,0.2)' : '#fff7ed'
                      e.currentTarget.style.borderColor = '#f97316'
                      e.currentTarget.style.color = '#f97316'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = darkMode ? '#374151' : '#ffffff'
                      e.currentTarget.style.borderColor = darkMode ? '#4b5563' : '#e5e7eb'
                      e.currentTarget.style.color = darkMode ? '#9ca3af' : '#6b7280'
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div
            className="lg:col-span-3 rounded-xl border p-6 sm:p-8"
            style={{
              background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: darkMode ? '#fb923c' : '#f97316' }}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className={inputStyle('name')}
                    required
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className={inputStyle('email')}
                    required
                  />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <label className="block text-xs font-semibold mb-1.5" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  className={inputStyle('subject')}
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="350">
                <label className="block text-xs font-semibold mb-1.5" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  className={`${inputStyle('message')} resize-none`}
                  required
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-lg font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                  style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
                >
                  {sent ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={15} className="group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Footer strip */}
        <div
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? '#6b7280' : '#9ca3af' }}
          data-aos="fade-up"
        >
          <span>© {new Date().getFullYear()} ThilinaDev. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Crafted with <span style={{ color: '#f97316' }}>♥</span> in Sri Lanka
          </span>
        </div>

      </div>
    </section>
  )
}

export default Contact