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
      text: "Hospitals submit diabetic eye screening referrals through a simple intake form without needing access to the clinic portal.",
    },
    {
      title: "Operations Routing",
      text: "Sentinel Ops manages triage, routing, assignment, and oversight across the referral pathway.",
    },
    {
      title: "Clinic Execution",
      text: "Clinics receive only assigned patients, supporting secure encounters, uploads, reports, and consent workflows.",
    },
  ];

  const benefits = [
    "Built for diabetic eye screening referral pathways",
    "Structured for hospitals, operations teams, and clinics",
    "Tenant-scoped clinic visibility and patient privacy",
    "End-to-end audit trail across referral and care delivery",
    "Designed to become care network infrastructure, not just a referral pass-through",
  ];

  const workflow = [
    "Hospital referral submitted",
    "Referral enters Sentinel Ops",
    "Operations team assigns the right clinic",
    "Patient syncs into Sentinel Clinic",
    "Clinic completes screening workflow and reporting",
  ];

  return (
    <div className="min-h-screen bg-[#ececec] text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,0,185,0.10),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(36,0,185,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-black/10 bg-white/70 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/sentinel.png"
              alt="Sentinel logo"
              width={220}
              height={90}
              className="h-auto w-[150px] sm:w-[180px] md:w-[220px]"
              priority
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2400b9]">
                Sentinel Health
              </p>
              <h1 className="mt-1 text-2xl font-black tracking-tight text-black">
                Diabetic Eye Screening Referral Infrastructure
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={links.hospitalReferralForm}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#2400b9] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Hospital Referral Form
            </a>
            <a
              href={links.clinicPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Clinic Portal
            </a>
          </div>
        </header>

        <section className="grid gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#2400b9]/15 bg-[#2400b9]/8 px-3 py-1 text-sm text-[#2400b9]">
              Referral coordination for hospitals, ops teams, and clinics
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-black sm:text-6xl">
              A clean, connected pathway for diabetic eye screening referrals.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              Sentinel connects hospital referral intake, operations routing, and
              clinic execution into one secure workflow. Built for diabetic eye
              screening programmes, it brings together patient intake,
              assignment, visibility, and reporting across the full care
              pathway.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links.hospitalReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#2400b9] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2400b9]/20 transition hover:opacity-90"
              >
                Start a Referral
              </a>
              <a
                href={links.opsWorkspace}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Open Sentinel Ops
              </a>
              <a
                href={links.backendApi}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Backend API
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5">
                <div className="text-3xl font-black text-[#2400b9]">3</div>
                <div className="mt-1 text-sm text-black/60">Core user groups</div>
              </div>
              <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5">
                <div className="text-3xl font-black text-[#2400b9]">1</div>
                <div className="mt-1 text-sm text-black/60">
                  Connected referral pathway
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5">
                <div className="text-3xl font-black text-[#2400b9]">100%</div>
                <div className="mt-1 text-sm text-black/60">
                  Clinic-scoped visibility
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f7] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-black/60">Referral Flow</p>
                <span className="rounded-full bg-[#2400b9]/10 px-3 py-1 text-xs font-semibold text-[#2400b9]">
                  Live model
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2400b9] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-black/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="inline-flex rounded-full bg-[#2400b9]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2400b9]">
                  Module
                </div>
                <h3 className="mt-4 text-xl font-black text-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2400b9]">
              Why Sentinel
            </p>
            <h3 className="mt-4 text-3xl font-black text-black">
              Minimal, trusted, operationally strong
            </h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              Sentinel is built to support diabetic eye screening referral
              pathways with clarity, control, and strong operational flow. The
              experience is designed to feel clean and modern while supporting
              hospitals, operations teams, and clinics through one connected
              infrastructure layer.
            </p>

            <div className="mt-6 space-y-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-black/10 bg-[#f7f7f7] p-4 text-sm text-black/80"
                >
                  <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2400b9]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#2400b9]/15 bg-gradient-to-br from-white to-[#f1efff] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2400b9]">
              Quick Access
            </p>
            <h3 className="mt-4 text-3xl font-black text-black">
              Operational links
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href={links.hospitalReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-black/10 bg-white p-5 transition hover:border-[#2400b9]/30"
              >
                <div className="text-sm font-semibold text-[#2400b9]">
                  Hospital referral form
                </div>
                <div className="mt-1 text-sm text-black/65">
                  Public Baserow intake form for hospital referrals
                </div>
                <div className="mt-3 text-xs text-black/40">
                  {links.hospitalReferralForm}
                </div>
              </a>

              <a
                href={links.opsWorkspace}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-black/10 bg-white p-5 transition hover:border-[#2400b9]/30"
              >
                <div className="text-sm font-semibold text-[#2400b9]">
                  Sentinel Ops
                </div>
                <div className="mt-1 text-sm text-black/65">
                  Internal Baserow operations workspace for routing and oversight
                </div>
                <div className="mt-3 text-xs text-black/40">
                  {links.opsWorkspace}
                </div>
              </a>

              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-black/10 bg-white p-5 transition hover:border-[#2400b9]/30"
              >
                <div className="text-sm font-semibold text-[#2400b9]">
                  Sentinel Clinic
                </div>
                <div className="mt-1 text-sm text-black/65">
                  Clinic portal for assigned patients, encounters, uploads,
                  reports, and consents
                </div>
                <div className="mt-3 text-xs text-black/40">
                  {links.clinicPortal}
                </div>
              </a>

              <a
                href={links.backendApi}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-black/10 bg-white p-5 transition hover:border-[#2400b9]/30"
              >
                <div className="text-sm font-semibold text-[#2400b9]">
                  Sentinel Clinic backend API
                </div>
                <div className="mt-1 text-sm text-black/65">
                  Backend endpoint layer for sync, clinic access, and workflow
                  execution
                </div>
                <div className="mt-3 text-xs text-black/40">
                  {links.backendApi}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-[2rem] border border-black/10 bg-black px-8 py-10 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              Launch-ready next step
            </p>
            <h3 className="mt-4 text-4xl font-black tracking-tight text-white">
              Publish the Sentinel front door
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70">
              A single public experience for hospitals, operations teams, and
              clinics, with clear navigation into the right workflow at the
              right time.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={links.hospitalReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Open Referral Form
              </a>
              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
              >
                Clinic Login
              </a>
              <a
                href={links.opsWorkspace}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
              >
                Ops Workspace
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}