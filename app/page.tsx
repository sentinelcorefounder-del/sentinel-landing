import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const links = {
    hospitalPortal: "https://clinic.usesentinelhealth.com/login",
    clinicPortal: "https://clinic.usesentinelhealth.com/login",
    opsWorkspace: "https://ops.usesentinelhealth.com/login",
    selfReferralForm: "/self-referral",
  };

  const pathways = [
    {
      title: "Patient self-referral",
      text: "Patients can submit their details directly through Sentinel when they need retinal assessment support.",
    },
    {
      title: "Hospital referral intake",
      text: "Hospitals can submit and track patient referrals through a structured referral portal.",
    },
    {
      title: "Sentinel Ops coordination",
      text: "Ops manages routing, payment visibility, clinic assignment, notifications, and workflow oversight.",
    },
    {
      title: "Clinic assessment workflow",
      text: "Clinics receive assigned patients, complete encounters, upload retinal images, and submit reports.",
    },
  ];

  const workflow = [
    "Patient or hospital submits a referral",
    "Sentinel Ops reviews the referral",
    "Payment and eligibility steps are coordinated",
    "A clinic is matched to the patient",
    "The clinic completes retinal image capture and assessment",
    "AI-assisted retinal analysis supports clinical review",
    "A structured outcome report is completed and tracked",
  ];

  const benefits = [
    "Simple access for self-referring patients",
    "Clear referral routing for hospitals and clinics",
    "AI-assisted retinal analysis to support clinical review",
    "Operational oversight across payments, assignments, and reports",
    "Built for scalable eye health coordination",
  ];

  return (
    <main className="min-h-screen overflow-hidden text-slate-900">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.14),transparent_28%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <header className="flex flex-col gap-4 rounded-[30px] border border-white/80 bg-white/80 p-5 shadow-xl shadow-slate-200/50 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/sentinel.png"
                alt="Sentinel Health logo"
                width={220}
                height={90}
                className="h-auto w-[150px] sm:w-[180px] md:w-[210px]"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">
                  Sentinel Health
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Retinal assessment coordination platform
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={links.selfReferralForm}
                className="rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
              >
                Self Referral
              </Link>
              <a
                href={links.hospitalPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Partner Sign In
              </a>
            </div>
          </header>

          <section className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-indigo-100 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
                Eye health referrals, retinal imaging, and care coordination
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                A smarter way to coordinate retinal assessment pathways.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Sentinel connects patients, hospitals, clinics, and operations
                teams into one structured workflow for retinal assessment,
                image review support, referral tracking, and outcome reporting.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={links.selfReferralForm}
                  className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(79,70,229,0.25)] transition hover:bg-indigo-500"
                >
                  Start Self Referral
                </Link>
                <a
                  href={links.hospitalPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Hospital / Clinic Sign In
                </a>
                <a
                  href={links.opsWorkspace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Ops Sign In
                </a>
              </div>

              <div className="mt-8 rounded-[26px] border border-sky-100 bg-sky-50/80 p-5">
                <p className="text-sm font-semibold text-sky-900">
                  AI-assisted retinal analysis
                </p>
                <p className="mt-2 text-sm leading-7 text-sky-900/80">
                  Sentinel may support clinicians with AI-assisted retinal image
                  observations. AI output is used for decision support only and
                  does not replace assessment by qualified eye care professionals.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Stat value="4" label="Connected user groups" />
                <Stat value="1" label="Coordinated pathway" />
                <Stat value="AI" label="Retinal analysis support" />
              </div>
            </div>

            <div className="rounded-[36px] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="rounded-[28px] border border-slate-100 bg-slate-50/90 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500">
                    Sentinel Workflow
                  </p>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Coordinated care
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {workflow.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
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

          <section className="grid gap-6 lg:grid-cols-4">
            {pathways.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/40 backdrop-blur"
              >
                <div className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
                  Pathway
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] border border-white/80 bg-white/85 p-8 shadow-xl shadow-slate-200/50">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-indigo-600">
                Why Sentinel
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Built for clearer eye health coordination
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Sentinel is designed to reduce fragmentation between patient
                intake, referral routing, clinic assessment, image review, and
                operational follow-up. It gives every team a clearer view of
                where each patient is in the pathway.
              </p>

              <div className="mt-6 space-y-3">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-sm text-slate-700"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/70 p-8 shadow-xl shadow-slate-200/50">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-indigo-600">
                Access Sentinel
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Choose the right entry point
              </h2>

              <div className="mt-6 space-y-4">
                <AccessCard
                  title="Self Referral"
                  text="For patients who want to submit their details directly to Sentinel."
                  href={links.selfReferralForm}
                />

                <AccessCard
                  title="Hospital Sign In"
                  text="For onboarded hospital partners submitting and tracking referrals."
                  href={links.hospitalPortal}
                  external
                />

                <AccessCard
                  title="Clinic Sign In"
                  text="For clinics managing assigned patients, retinal images, assessment workflows, and reports."
                  href={links.clinicPortal}
                  external
                />

                <AccessCard
                  title="Sentinel Ops"
                  text="For the Sentinel operations team managing routing, payments, notifications, and workflow control."
                  href={links.opsWorkspace}
                  external
                />
              </div>
            </div>
          </section>

          <section className="pb-12 pt-2">
            <div className="rounded-[38px] border border-indigo-100 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 px-8 py-12 text-center text-white shadow-[0_24px_70px_rgba(79,70,229,0.28)]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">
                Sentinel Health
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight">
                One connected platform for retinal assessment referrals and care coordination.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/85">
                Patients can self-refer, hospitals can submit referrals, clinics
                can complete assessments, and Sentinel Ops can coordinate the
                full pathway from intake to outcome.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={links.selfReferralForm}
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-slate-100"
                >
                  Start Self Referral
                </Link>
                <a
                  href={links.hospitalPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Partner Sign In
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[26px] border border-white/80 bg-white/85 p-5 shadow-lg shadow-slate-200/40">
      <div className="text-3xl font-semibold text-indigo-600">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function AccessCard({
  title,
  text,
  href,
  external = false,
}: {
  title: string;
  text: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "block rounded-3xl border border-white/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <div className="text-sm font-semibold text-indigo-600">{title}</div>
        <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
        <div className="mt-3 text-xs text-slate-400">{href}</div>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <div className="text-sm font-semibold text-indigo-600">{title}</div>
      <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
      <div className="mt-3 text-xs text-slate-400">usesentinelhealth.com{href}</div>
    </Link>
  );
}