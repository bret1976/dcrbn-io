"use client";

import { useState } from "react";
import { GROWTH_LAYERS } from "@/lib/copy";

const FRONTIERS = ["AI", "Blockchain", "Quantum", "Adjacent frontier"] as const;
const STRUCTURES = ["Advisory", "Retainer", "Equity", "Hybrid"] as const;

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.support = data.getAll("support").join(", ");
    payload.structure = data.getAll("structure").join(", ");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to submit");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Unable to submit");
    }
  }

  if (status === "done") {
    return (
      <p className="home-band__intro">
        Application received. We review selectively and will be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="d-form" id="apply-form">
      <div className="row">
        <label>
          Founder name
          <input name="founderName" required />
        </label>
        <label>
          Company name
          <input name="companyName" required />
        </label>
        <label>
          Website
          <input name="website" type="url" />
        </label>
        <label>
          Work email
          <input name="email" type="email" required />
        </label>
      </div>
      <label>
        What problem are you solving?
        <textarea name="problem" required rows={4} />
      </label>
      <label>
        Why does this problem matter?
        <textarea name="whyItMatters" required rows={4} />
      </label>
      <label>
        Are you building in AI, blockchain, quantum, or an adjacent frontier?
        <select name="frontier" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {FRONTIERS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        What traction do you have?
        <textarea name="traction" required rows={4} />
      </label>
      <fieldset>
        <legend>Where do you need the most support?</legend>
        <div className="checks">
          {GROWTH_LAYERS.map((item) => (
            <label key={item}>
              <input type="checkbox" name="support" value={item} />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        Why DCRBN?
        <textarea name="whyDcrbn" required rows={3} />
      </label>
      <fieldset>
        <legend>Open to advisory, retainer, equity, or hybrid?</legend>
        <div className="checks">
          {STRUCTURES.map((item) => (
            <label key={item}>
              <input type="checkbox" name="structure" value={item} />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
      {status === "error" ? <p>{message}</p> : null}
    </form>
  );
}
