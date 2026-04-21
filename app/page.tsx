import Image from "next/image";

export default function Home() {
  const links = {
    hospitalPortal: "https://clinic.usesentinelhealth.com",
    clinicPortal: "https://clinic.usesentinelhealth.com",
    backendApi: "https://api.usesentinelhealth.com",
    opsWorkspace: "https://ops.usesentinelhealth.com",
    selfReferralForm: "https://baserow.io/form/bUn_c-54L5pFFNz8fBsliDXoLPQwaYKOCIn4Qyi_Rx4",
  };

  const pillars = [
    {
      title: "Hospital Referral Intake",
      text: "Partner hospitals log in to submit referrals and track progress through a secure Sentinel portal.",
    },
    {
      title: "Operational Coordination",
      text: "Sentinel Ops manages intake, assignment, tracking, and workflow visibility across the pathway.",
    },
    {
      title: "Clinic Delivery",
      text: "Clinics receive assigned patients only, supporting secure screening encounters, reporting, and follow-up.",
    },
  ];

  const benefits = [
    "Built specifically for diabetic eye screening referral pathways",
    "Clear separation between hospital, operations, and clinic workflows",
    "Simple, secure access for each user type",
    "Supports service scale, oversight, and continuity of care",
  ];

  const workflow = [
    "Hospital submits referral in Sentinel",
    "Sentinel Ops reviews and routes the referral",
    "Clinic is matched and patient is assigned",
    "Clinic performs screening and completes report",
    "Hospital tracks progress and receives completed outcome",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.07),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.06),transparent_25%),linear-gradient(to_bottom,#fbfbfe,#f4f6fb)]" />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="flex flex-col gap-4 rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur md:flex-row md:items-center md:justify-between">
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
              href={links.hospitalPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Hospital Sign In
            </a>
            <a
              href={links.clinicPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clinic Sign In
            </a>
          </div>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-700">
              Connected referral management for hospitals, operations teams, and clinics
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              A clearer way to manage diabetic eye screening referrals.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Sentinel connects hospital referral intake, operational routing,
              and clinic delivery into one structured workflow, helping teams
              move patients through screening pathways with more visibility,
              coordination, and trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links.hospitalPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.22)] transition hover:bg-indigo-500"
              >
                Hospital Sign In
              </a>
              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Clinic Sign In
              </a>
              <a
                href={links.selfReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Self Referral Form
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-800">
                New hospital or clinic?
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-900/90">
                Access to Sentinel is only available to onboarded partner hospitals
                and clinics. If your organization is new and needs access, please
                contact Sentinel for onboarding before attempting to sign in.
              </p>
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
                <div className="mt-1 text-sm text-slate-500">Role-based access</div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="rounded-[24px] border border-slate-100 bg-slate-50/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Care Pathway</p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live workflow
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

        <section className="py-4">
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
              Built for calm, clear coordination
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Sentinel is designed to reduce fragmentation across the referral
              pathway. It gives hospitals, operations teams, and clinics a
              cleaner structure for submitting, routing, tracking, and completing
              diabetic eye screening referrals.
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
              Sign in and support links
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href={links.hospitalPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Hospital Sign In
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  For onboarded hospital partners to submit and track referrals
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.hospitalPortal}
                </div>
              </a>

              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Clinic Sign In
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  For onboarded clinics managing assigned patients and reports
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.clinicPortal}
                </div>
              </a>

              <a
                href={links.selfReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl border border-white/80 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-indigo-600">
                  Self Referral Form
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Public referral form for patient self-referral
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.selfReferralForm}
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
                  Operations workspace for workflow control and coordination
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {links.opsWorkspace}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="pb-10 pt-2">
          <div className="rounded-[32px] border border-indigo-100 bg-gradient-to-r from-indigo-600 to-sky-500 px-8 py-10 text-center text-white shadow-[0_20px_50px_rgba(79,70,229,0.25)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
              Sentinel Health
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight">
              One connected entry point for diabetic eye screening referrals
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/85">
              Sign in through the appropriate portal if your organization has
              already been onboarded, or contact Sentinel to begin onboarding.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={links.hospitalPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-slate-100"
              >
                Hospital Sign In
              </a>
              <a
                href={links.clinicPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Clinic Sign In
              </a>
              <a
                href={links.selfReferralForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Self Referral
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}