"use client";

import type { FormEvent } from "react";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="font-semibold text-gray-900">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-base text-black outline-none placeholder:text-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
        placeholder={label.replace(" *", "")}
      />
    </div>
  );
}

export default function CustomerSupportForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Support form submitted (skeleton). Wire this to your handler later.");
  }

  return (
    <form
      id="support-form"
      onSubmit={onSubmit}
      className="grid max-w-3xl gap-4 rounded border border-gray-300 bg-gray-50 p-6"
    >
      <Field label="Name *" name="name" required />
      <Field label="Email *" name="email" type="email" required />
      <Field label="Phone (optional)" name="phone" type="tel" />

      <div className="grid gap-2">
        <label className="font-semibold text-gray-900">Message *</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-base text-black outline-none placeholder:text-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
          placeholder="Tell us what happened, address, service date, and any helpful details."
        />
      </div>

      <div className="grid gap-2">
        <label className="font-semibold text-gray-900">Attachments (optional)</label>
        <input
          name="files"
          type="file"
          multiple
          className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-base text-black outline-none file:mr-4 file:rounded file:border-0 file:bg-green-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-green-600 transition-colors"
        />
        <small className="text-gray-600">
          Add photos for damage claims (close-up + wide shot).
        </small>
      </div>

      <button
        type="submit"
        className="w-fit rounded bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
      >
        Send Support Request
      </button>

      <small className="text-gray-600">
        This is a placeholder submit for now. We’ll connect it to your “Request Bid”
        / email workflow later.
      </small>
    </form>
  );
}
