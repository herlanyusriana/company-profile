'use client';

import { useState } from 'react';

const initialStatus = { type: 'idle', message: '' };

export default function ContactForm() {
  const [status, setStatus] = useState(initialStatus);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your inquiry…' });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to send your inquiry.');
      form.reset();
      setStatus({ type: 'success', message: 'Thank you. Your inquiry has been sent to our team.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="sr-only" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm">Name<input required maxLength="100" name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black" /></label>
        <label className="text-sm">Company<input maxLength="120" name="company" autoComplete="organization" className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black" /></label>
      </div>
      <label className="text-sm">Email<input required maxLength="254" name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black" /></label>
      <label className="text-sm">Project details<textarea required maxLength="5000" name="message" rows="6" className="mt-2 w-full resize-none rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black" /></label>
      <button disabled={status.type === 'loading'} type="submit" className="justify-self-start rounded-md bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-wait disabled:opacity-55">{status.type === 'loading' ? 'Sending…' : 'Send inquiry →'}</button>
      {status.message ? <p role="status" className={`text-sm ${status.type === 'success' ? 'text-emerald-700' : status.type === 'error' ? 'text-red-700' : 'text-zinc-500'}`}>{status.message}</p> : null}
    </form>
  );
}

