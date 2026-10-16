"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-cream/25 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-steel focus:border-rust-bright focus:outline-none";
const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-steel";

export default function EPIntakeForm({ successMessage }: { successMessage: string }) {
  const [fullName, setFullName] = useState("");
  const [entityName, setEntityName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [tier, setTier] = useState("");
  const [seedSparkName, setSeedSparkName] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!tier) {
      setStatus("error");
      setMessage("Select the tier you pledged.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/ep-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          entityName,
          email,
          phone,
          mailingAddress,
          tier,
          seedSparkName,
          notes,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="eyebrow text-ember" role="status">
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-5 text-left">
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full Legal Name
        </label>
        <input
          id="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="entityName" className={labelClass}>
          Company or Entity Name (optional)
        </label>
        <input
          id="entityName"
          type="text"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
          placeholder="Only if the agreement should be issued to a company instead of you personally"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mailingAddress" className={labelClass}>
          Mailing Address
        </label>
        <textarea
          id="mailingAddress"
          required
          rows={3}
          value={mailingAddress}
          onChange={(e) => setMailingAddress(e.target.value)}
          className={inputClass}
        />
      </div>

      <fieldset>
        <legend className={labelClass}>Which Tier Did You Pledge</legend>
        <div className="flex gap-3">
          {["$2,500+", "$5,000+"].map((amount) => (
            <label
              key={amount}
              className={`flex-1 cursor-pointer rounded-sm border px-4 py-3 text-center text-sm transition-colors ${
                tier === amount
                  ? "border-rust-bright bg-rust-bright/10 text-cream"
                  : "border-cream/25 text-cream-dim"
              }`}
            >
              <input
                type="radio"
                name="tier"
                value={amount}
                checked={tier === amount}
                onChange={(e) => setTier(e.target.value)}
                className="sr-only"
              />
              {amount}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="seedSparkName" className={labelClass}>
          Name Used On Your Seed&amp;Spark Pledge (optional)
        </label>
        <input
          id="seedSparkName"
          type="text"
          value={seedSparkName}
          onChange={(e) => setSeedSparkName(e.target.value)}
          placeholder="Only if different from your full legal name above"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Anything Else We Should Know (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-rust-bright px-8 py-4 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.01] hover:bg-ember disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit My Info"}
      </button>

      {status === "error" && (
        <p className="text-sm text-rust-bright" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
