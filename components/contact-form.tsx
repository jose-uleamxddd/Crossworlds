'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/i18n';

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language].contact.form;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-3xl font-bold text-foreground mb-6">
        {language === 'en' ? 'Send us a Message' : 'Envíanos un mensaje'}
      </h2>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">{t.name}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t.namePlaceholder}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">{t.email}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">{t.subject}</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{t.subjectPlaceholder}</option>
          <option value="enrollment">{t.subjectEnrollment}</option>
          <option value="volunteering">{t.subjectVolunteering}</option>
          <option value="donation">{t.subjectDonation}</option>
          <option value="other">{t.subjectOther}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">{t.message}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? t.sending : submitted ? t.sent : t.send}
      </button>

      {submitted && (
        <div className="p-4 bg-green-100 text-green-800 rounded-lg">
          {t.successMessage}
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}
    </form>
  );
}
