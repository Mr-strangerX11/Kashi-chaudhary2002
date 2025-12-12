import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    console.log('Form data:', {
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message: formRef.current.message.value,
    })

    // EmailJS credentials configured
    emailjs
      .sendForm(
        'service_6uaj1sk',
        'template_jccwej5',
        formRef.current,
        'KD8PYSkFbR4TgHijc'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response)
          setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
          formRef.current.reset()
          setLoading(false)
        },
        (error) => {
          console.error('EmailJS error details:', error)
          console.error('Error code:', error.status)
          console.error('Error text:', error.text)
          setStatus({ type: 'error', message: `Failed to send: ${error.text}. Email me directly at kashichaudhary2002@gmail.com` })
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let&apos;s collaborate"
            description="Feel free to reach out for project work, collaboration, or a quick chat."
          />
          <div className="space-y-3 text-slate-700 dark:text-slate-200">
            <p>Email: <a className="text-primary" href="mailto:kashichaudhary2002@gmail.com">kashichaudhary2002@gmail.com</a></p>
            <p>GitHub: <a className="text-primary" href="https://github.com/Mr-strangerX11" target="_blank" rel="noopener noreferrer">github.com/Mr-strangerX11</a></p>
            <p>LinkedIn: <a className="text-primary" href="https://linkedin.com/in/stranger-x21" target="_blank" rel="noopener noreferrer">linkedin.com/in/stranger-x21</a></p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 space-y-4">
          {status.message && (
            <div className={`rounded-lg p-3 text-sm ${status.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
              {status.message}
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                name="from_name"
                required
                disabled={loading}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-3 py-2 disabled:opacity-50"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="from_email"
                required
                disabled={loading}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-3 py-2 disabled:opacity-50"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="space-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              required
              disabled={loading}
              rows="4"
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-3 py-2 disabled:opacity-50"
              placeholder="How can I help?"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-4 py-3 text-white font-semibold shadow-card hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
