"use client";

import { useState } from "react";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.usesentinelhealth.com";

export default function SelfReferralPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [referralId, setReferralId] = useState("");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    patient_sex: "",
    phone_number: "",
    email: "",
    diabetes_type: "",
    reason_for_referral: "",
    notes: "",
  });

  async function submitReferral(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setReferralId("");

    try {
      const res = await fetch(`${API_URL}/api/ops/self-referrals/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Unable to submit referral.");
      }

      setMessage(data.message || "Self-referral submitted successfully.");
      setReferralId(data.referral_id || "");

      setForm({
        first_name: "",
        last_name: "",
        dob: "",
        patient_sex: "",
        phone_number: "",
        email: "",
        diabetes_type: "",
        reason_for_referral: "",
        notes: "",
      });
    } catch (err: any) {
      setMessage(err.message || "Unable to submit referral.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-indigo-700 hover:underline">
          ← Back to Sentinel Health
        </Link>

        <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
            Self Referral
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Refer yourself for diabetic eye screening support
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Complete this form if you would like Sentinel Ops to review your
            details and help coordinate a diabetic eye screening pathway.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
            This form is not for emergencies. If you have sudden vision loss,
            severe eye pain, or urgent symptoms, please seek immediate medical care.
          </div>

          <form onSubmit={submitReferral} className="mt-8 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="First name"
                value={form.first_name}
                required
                onChange={(v) => setForm({ ...form, first_name: v })}
              />

              <Input
                label="Last name"
                value={form.last_name}
                required
                onChange={(v) => setForm({ ...form, last_name: v })}
              />

              <Input
                label="Date of birth"
                type="date"
                value={form.dob}
                onChange={(v) => setForm({ ...form, dob: v })}
              />

              <label className="block">
                <span className="block text-sm font-medium mb-1">Sex</span>
                <select
                  value={form.patient_sex}
                  onChange={(e) =>
                    setForm({ ...form, patient_sex: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5"
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </label>

              <Input
                label="Phone number"
                value={form.phone_number}
                required
                onChange={(v) => setForm({ ...form, phone_number: v })}
              />

              <Input
                label="Email"
                type="email"
                value={form.email}
                required
                onChange={(v) => setForm({ ...form, email: v })}
              />

              <label className="block md:col-span-2">
                <span className="block text-sm font-medium mb-1">Diabetes type</span>
                <select
                  value={form.diabetes_type}
                  onChange={(e) =>
                    setForm({ ...form, diabetes_type: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5"
                >
                  <option value="">Select if known</option>
                  <option value="type_1">Type 1</option>
                  <option value="type_2">Type 2</option>
                  <option value="gestational">Gestational</option>
                  <option value="unknown">Unknown</option>
                </select>
              </label>
            </div>

            <Textarea
              label="Reason for referral"
              value={form.reason_for_referral}
              placeholder="Tell us why you are requesting screening support."
              onChange={(v) => setForm({ ...form, reason_for_referral: v })}
            />

            <Textarea
              label="Additional notes"
              value={form.notes}
              placeholder="Any symptoms, previous screening history, preferred location, or availability."
              onChange={(v) => setForm({ ...form, notes: v })}
            />

            {message ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                <p>{message}</p>
                {referralId ? (
                  <p className="mt-2 font-semibold">Reference: {referralId}</p>
                ) : null}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit self-referral"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">{label}</span>
      <input
        value={value}
        type={type}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-3 py-2.5"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1">{label}</span>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-28 w-full rounded-xl border border-slate-300 px-3 py-2.5"
      />
    </label>
  );
}