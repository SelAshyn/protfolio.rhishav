'use client'

import React, { useState } from 'react'
import { useTheme } from '@/app/providers'

const Contact = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')
        try {
            const res = await fetch('https://formspree.io/f/mzezrqzw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            })
            if (res.ok) {
                setStatus('sent')
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const inputBase = `w-full rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 focus:ring-2 focus:ring-orange-500/40
        ${isDark
            ? 'bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-orange-500/60'
            : 'bg-white/60 border-orange-200 text-black placeholder-black/30 focus:border-orange-400'
        }`

    return (
        <section
            id="contact"
            className="w-full flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-28 relative"
        >
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4
                        ${isDark ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'}`}>
                        Contact
                    </p>
                    <h2 className={`text-4xl md:text-5xl font-bold font-syne ${isDark ? 'text-orange-500' : 'text-orange-400'}`}>
                        Let&apos;s Work Together
                    </h2>
                    <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-black/55'}`}>
                        Got a project idea, a job offer, or just want to say hi? Drop me a message and I&apos;ll get back to you.
                    </p>
                </div>

                {/* Form */}
                {status === 'sent' ? (
                    <div className={`rounded-2xl p-8 text-center border ${isDark ? 'bg-white/5 border-white/10' : 'bg-orange-50 border-orange-100'}`}>
                        <p className="text-2xl font-bold font-syne mb-2">Message sent 🎉</p>
                        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/55'}`}>I&apos;ll get back to you as soon as I can.</p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className={`rounded-2xl p-6 sm:p-8 border space-y-5
                            ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-orange-100'}`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/50' : 'text-black/50'}`}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={inputBase}
                                />
                            </div>
                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/50' : 'text-black/50'}`}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@email.com"
                                    className={inputBase}
                                />
                            </div>
                        </div>
                        <div>
                            <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/50' : 'text-black/50'}`}>Message</label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me what's on your mind..."
                                className={`${inputBase} resize-none`}
                            />
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm">Something went wrong — please try emailing me directly.</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] text-white
                                shadow-md hover:shadow-orange-400/40 hover:scale-[1.02] active:scale-95
                                transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending…' : 'Send Message →'}
                        </button>
                    </form>
                )}

                {/* Alternate contact */}
                <p className={`mt-6 text-center text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    Or reach me at{' '}
                    <a href="mailto:rhishavlamichhane@gmail.com" className="text-orange-500 hover:underline">
                        rhishavlamichhane@gmail.com
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Contact
