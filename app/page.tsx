import Image from "next/image";

export default function Home() {
  const links = {
    clinicPortal: "https://clinic.usesentinelhealth.com",
    backendApi: "https://api.usesentinelhealth.com",
    opsWorkspace: "https://ops.usesentinelhealth.com",
    hospitalReferralForm:
      "https://baserow.io/form/bUn_c-54L5pFFNz8fBsliDXoLPQwaYKOCIn4Qyi_Rx4",
  };

  const pillars = [
    {
      title: "Hospital Intake",
      text: "Hospitals submit diabetic eye screening referrals through a simple, structured digital intake form.",
    },
    {
      title: "Operations Routing",
      text: "Sentinel Ops manages referral flow, triage, assignment, and visibility across the pathway.",
    },
    {
      title: "Clinic Execution",
      text: "Clinics receive only assigned patients, enabling secure encounters, reports, and streamlined care delivery.",
    },
  ];

  const benefits = [
    "Built for diabetic eye screening referral pathways",
    "Clear separation between hospital, operations, and clinic workflows",
    "Secure clinic-scoped visibility and patient privacy",
    "Supports operational control, audit trail, and service scale-up",
    "Designed as infrastructure, not just a referral pass-through",
  ];

  const workflow = [
    "Referral submitted by hospital",
    "Referral enters Sentinel Ops",
    "Operations assigns the patient to a clinic",
    "Patient syncs into Sentinel Clinic",
    "Clinic manages the screening pathway and reports",
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] text-slate-800">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(96,165,250,0.08),transparent_25%),linear-gradient(to_bottom,#fbfbfe,#f4f6fb)]" />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="flex flex-col gap-4 rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/sentinel.png"
              alt="Sentinel logo"
              width={220}
              height={90}
              className="h-auto w-[150px] sm:w-[180px] md:w-[210px]"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">
                Sentinel Health
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Diabetic eye screening referral infrastructure
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={links.hospitalReferralForm}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Hospital Referral Form
            </a>
            <a
              href={links.clinicPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clinic Portal
            </a>
          </div>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-700">
              Connected referral management for hospitals, operations teams, and clinics
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              A calmer, smarter way to manage diabetic eye screening referrals.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Sentinel brings hospital intake, operations routing, and clinic
              execution into one secure workflow. Built for diabetic eye
              screening programmes, it improves visibility, coordination, and
              continuity across the referral pathway.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links.hospitalReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.22)] transition hover:bg-indigo-500"
              >
                Start a Referral
              </a>
              <a
                href={links.opsWorkspace}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Open Sentinel Ops
              </a>
              <a
                href={links.backendApi}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Backend API
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="text-3xl font-semibold text-indigo-600">3</div>
                <div className="mt-1 text-sm text-slate-500">Core user groups</div>
              </div>
              <div className="rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="text-3xl font-semibold text-indigo-600">1</div>
                <div className="mt-1 text-sm text-slate-500">Connected pathway</div>
              </div>
              <div className="rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="text-3xl font-semibold text-indigo-600">100%</div>
                <div className="mt-1 text-sm text-slate-500">Clinic-scoped access</div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="rounded-[24px] border border-slate-100 bg-slate-50/70 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Referral Flow</p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Active model
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.03)]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[28px] border border-white/80 bg-white/85 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  Module
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
              Why Sentinel
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">
              Designed for clarity, trust, and scale
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Sentinel is designed to feel structured, calm, and dependable.
              Rather than overwhelming teams with fragmented workflows, it
              creates a cleaner pathway for managing referrals, clinic
              assignments, and diabetic eye screening delivery.
            </p>

            <div className="mt-6 space-y-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm text-slate-700"
                >
                  <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/60 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
              Quick Access
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">
              Portal links
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href={links.hospitalReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Hospital referral form
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Public intake form for hospital referrals
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.hospitalReferralForm}
                </div>
              </a>

              <a
                href={links.opsWorkspace}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Sentinel Ops
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Operations workspace for routing and workflow coordination
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.opsWorkspace}
                </div>
              </a>

              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Sentinel Clinic
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Clinic portal for assigned patients, reports, and care workflow
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.clinicPortal}
                </div>
              </a>

              <a
                href={links.backendApi}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Sentinel Clinic backend API
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  API layer supporting sync, clinic access, and workflow services
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.backendApi}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="pb-10 pt-4">
          <div className="rounded-[32px] border border-indigo-100 bg-gradient-to-r from-indigo-600 to-sky-500 px-8 py-10 text-center text-white shadow-[0_20px_50px_rgba(79,70,229,0.25)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
              Sentinel Health
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">
              A unified front door for diabetic eye screening delivery
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/85">
              Bring together hospital referrals, operational coordination, and
              clinic execution in one connected system designed to scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={links.hospitalReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-slate-100"
              >
                Open Referral Form
              </a>
              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Clinic Login
              </a>
              <a
                href={links.opsWorkspace}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Ops Workspace
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}