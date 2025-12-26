<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // Accordion States
  let showReportInfo = false;
  let showTimeLimitInfo = false;
  let showInterimInfo = false;
  let showSafetyInfo = false;

  // Sidebar Links Data
  const sections = [
    { id: "what-is-cic", title: "What is CIC?" },
    { id: "who-can-apply", title: "Who can apply?" },
    { id: "what-is-covered", title: "What is covered?" },
    { id: "reporting", title: "Reporting to police" },
    { id: "time-limits", title: "Time limits" },
    { id: "when-to-apply", title: "When to apply" },
    { id: "how-to-apply", title: "How to apply" },
    { id: "statement", title: "Writing your statement" },
    { id: "interim", title: "Interim payments" },
    { id: "after-applying", title: "After applying" },
    { id: "offender", title: "The offender" },
    { id: "disagree", title: "If you disagree" },
    { id: "help", title: "Getting help" },
  ];
</script>

<div
  class="overflow-x-hidden font-sans text-gray-900 bg-white antialiased scroll-smooth"
>
  <Header />

  <main class="pt-32 pb-24 px-6 md:px-8 bg-white">
    <div
      class="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 relative"
    >
      <aside class="hidden lg:block">
        <div
          class="sticky top-40 flex flex-col gap-8 max-h-[calc(100vh-12rem)] overflow-y-auto pb-8 pr-2"
        >
          <div>
            <h5
              class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4"
            >
              Jump To
            </h5>
            <nav class="space-y-1 border-l border-gray-200">
              {#each sections as section}
                <a
                  href="#{section.id}"
                  class="block pl-4 py-2 text-sm text-gray-600 hover:text-[#78081C] hover:border-l-2 hover:border-[#78081C] -ml-[1px] transition-all"
                >
                  {section.title}
                </a>
              {/each}
            </nav>
          </div>

          <div class="pt-6 border-t border-gray-100">
            <button
              on:click={() => window.print()}
              class="w-full flex items-center justify-center gap-2 bg-[#1f1f1f] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-black transition-colors shadow-md"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Download Page as PDF
            </button>
          </div>
        </div>
      </aside>

      <div class="min-w-0">
        <div class="mb-16 border-b border-gray-200 pb-10">
          <h1
            class="text-4xl md:text-5xl font-bold text-[#78081C] mb-6 leading-tight"
          >
            Criminal Injuries Compensation (CIC) in Western Australia
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed">
            This page explains Criminal Injuries Compensation (CIC) in Western
            Australia.
          </p>
          <p class="text-xl text-gray-700 leading-relaxed mt-4">
            It is written in plain language and designed to be read slowly, in
            your own time. You do not need legal knowledge to read this page.
          </p>
          <div
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 bg-gray-50 px-4 py-2 rounded-lg"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path></svg
            >
            You can scroll, pause, and come back later.
          </div>
        </div>

        <section id="what-is-cic" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            What is Criminal Injuries Compensation?
          </h2>
          <div class="prose prose-lg text-gray-700">
            <p class="mb-4">
              Criminal Injuries Compensation is a payment that may be available
              if you were harmed because of a crime that happened in Western
              Australia.
            </p>
            <p class="mb-4">
              The scheme is run by the <strong
                >Office of Criminal Injuries Compensation (OCIC)</strong
              >.
            </p>
            <p class="mb-4">You may still be able to apply even if:</p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>the offender was never identified</li>
              <li>the offender was not charged</li>
              <li>the offender was found not guilty</li>
            </ul>
            <p
              class="font-semibold bg-[#78081C]/5 p-4 rounded-lg border-l-4 border-[#78081C]"
            >
              Compensation is assessed individually. It is <strong
                >not automatic</strong
              >.
            </p>
          </div>
        </section>

        <section id="who-can-apply" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">Who can apply?</h2>

          <div class="mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Victims of crime
            </h3>
            <p class="text-lg text-gray-700 mb-4">
              You may be able to apply if you were injured because of a criminal
              offence.
            </p>
            <p class="text-gray-700 mb-2">“Injury” can include:</p>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>physical injury</li>
              <li>psychological or mental harm</li>
              <li>pregnancy resulting from an offence</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Close relatives (in some situations)
            </h3>
            <p class="text-lg text-gray-700 mb-4">
              A close relative may be able to apply if:
            </p>
            <ul class="list-disc pl-6 space-y-1 mb-4 text-gray-700">
              <li>the victim died as a result of the offence, or</li>
              <li>
                they suffered psychological harm because of what happened to the
                victim
              </li>
            </ul>
            <p class="text-gray-700 mb-2">A close relative can include:</p>
            <ul class="list-disc pl-6 space-y-1 mb-6 text-gray-700">
              <li>a parent, grandparent, or step-parent</li>
              <li>a spouse or de facto partner</li>
              <li>a child, grandchild, or step-child</li>
            </ul>

            <div
              class="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg"
            >
              <p class="text-orange-900 font-medium">
                ⚠️ Brothers and sisters are <strong>not</strong> considered close
                relatives under the scheme.
              </p>
            </div>
            <p class="mt-4 text-gray-600 italic">
              If you are unsure whether you qualify, legal advice can help.
            </p>
          </div>
        </section>

        <section id="what-is-covered" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            What can compensation cover?
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            Compensation may include payment for:
          </p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-[#78081C] font-bold">•</span> medical or psychological
              treatment
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#78081C] font-bold">•</span> the cost of medical
              or specialist reports
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#78081C] font-bold">•</span> loss of income while
              injured
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#78081C] font-bold">•</span> travel costs for treatment
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#78081C] font-bold">•</span> clothing damaged during
              the offence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#78081C] font-bold">•</span> funeral expenses (for
              eligible close relatives)
            </li>
          </ul>
          <p class="mt-6 text-gray-600">
            You usually need proof, such as receipts or reports.
          </p>
        </section>

        <section id="reporting" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            Do I need to report the crime to police?
          </h2>
          <p class="text-lg text-gray-700 font-semibold mb-4">
            In most cases, yes.
          </p>
          <p class="text-lg text-gray-700 mb-4">You are expected to:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>report the offence to police as soon as reasonably possible</li>
            <li>assist police where you can</li>
          </ul>
          <p class="text-gray-700 mb-6">
            Even if no one is charged or convicted, you may still be able to
            apply. When reporting, it helps to keep the <strong
              >police report number</strong
            >
            and the <strong>name of the officer</strong>.
          </p>

          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <button
              on:click={() => (showReportInfo = !showReportInfo)}
              class="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            >
              <span class="font-semibold text-gray-900"
                >What if I didn’t report the offence?</span
              >
              <span
                class="text-[#78081C] text-xl transform transition-transform {showReportInfo
                  ? 'rotate-180'
                  : ''}">▼</span
              >
            </button>
            {#if showReportInfo}
              <div class="p-6 bg-white border-t border-gray-200 text-gray-700">
                <p class="mb-3">
                  If you did not report the offence, you may still be able to
                  apply, but you will usually need a strong reason.
                </p>
                <p class="mb-3">
                  This might include fear, trauma, or safety concerns.
                </p>
                <p class="font-medium text-[#78081C]">
                  Legal advice is strongly recommended in this situation.
                </p>
              </div>
            {/if}
          </div>
        </section>

        <section id="time-limits" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            Time limits (very important)
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            In most cases, you must apply within <strong>3 years</strong> of:
          </p>
          <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>the date of the offence, or</li>
            <li>
              the date of the last offence if there were multiple incidents by
              the same offender
            </li>
          </ul>
          <p class="text-gray-700 mb-6">
            The time limit applies even if you were a child at the time.
          </p>

          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <button
              on:click={() => (showTimeLimitInfo = !showTimeLimitInfo)}
              class="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            >
              <span class="font-semibold text-gray-900"
                >Can the time limit be extended?</span
              >
              <span
                class="text-[#78081C] text-xl transform transition-transform {showTimeLimitInfo
                  ? 'rotate-180'
                  : ''}">▼</span
              >
            </button>
            {#if showTimeLimitInfo}
              <div class="p-6 bg-white border-t border-gray-200 text-gray-700">
                <p class="mb-3 font-semibold">Yes, sometimes.</p>
                <p class="mb-3">
                  An extension may be granted if there is a good reason for the
                  delay, such as:
                </p>
                <ul class="list-disc pl-6 space-y-1 mb-4">
                  <li>childhood abuse</li>
                  <li>mental health impacts</li>
                  <li>lack of access to information or services</li>
                </ul>
                <p>
                  If you are outside the time limit, get legal advice as soon as
                  possible.
                </p>
              </div>
            {/if}
          </div>
        </section>

        <section id="when-to-apply" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            When should I apply?
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            It is usually best to apply after your injuries have stabilised.
          </p>
          <p class="text-gray-700 mb-4">
            If the time limit is approaching and your injuries are ongoing:
          </p>
          <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-700">
            <li>submit the application before the deadline</li>
            <li>
              include a short letter explaining that your injuries are not yet
              settled
            </li>
          </ul>
          <p class="text-gray-700">
            This can protect your right to claim later.
          </p>
        </section>

        <section id="how-to-apply" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            How do I apply?
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            You apply by completing the appropriate application form and lodging
            it with the Office of Criminal Injuries Compensation. There are <strong
              >two different forms</strong
            >.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 class="text-xl font-bold text-[#78081C] mb-4">
                Form 1 – Victim of Crime
              </h3>
              <p class="text-gray-700 mb-4 min-h-[50px]">
                Complete Form 1 if you are the person who was directly injured
                by the offence.
              </p>
              <div class="flex flex-col gap-3">
                <a
                  href="/"
                  class="inline-flex justify-center items-center px-4 py-2 bg-[#78081C] text-white rounded-lg font-semibold hover:bg-[#5a0615] transition-colors"
                >
                  Apply online (eCourts)
                </a>
                <a
                  href="/"
                  class="inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Download Form 1 (PDF)
                </a>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 class="text-xl font-bold text-[#78081C] mb-4">
                Form 2 – Close Relative
              </h3>
              <p class="text-gray-700 mb-4 min-h-[50px]">
                Complete Form 2 if you are a close relative applying because the
                victim died or you suffered psychological harm.
              </p>
              <div class="flex flex-col gap-3">
                <a
                  href="/"
                  class="inline-flex justify-center items-center px-4 py-2 bg-[#78081C] text-white rounded-lg font-semibold hover:bg-[#5a0615] transition-colors"
                >
                  Apply online (eCourts)
                </a>
                <a
                  href="/"
                  class="inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Download Form 2 (PDF)
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              What you will usually need to include
            </h3>
            <ul class="list-disc pl-6 space-y-1 text-gray-700">
              <li>police incident details</li>
              <li>medical or psychological reports</li>
              <li>a written statement in your own words</li>
              <li>receipts or proof of expenses</li>
            </ul>
            <p class="mt-4 font-medium text-gray-900">
              There is <strong>no fee</strong> to lodge an application.
            </p>
          </div>
        </section>

        <section id="statement" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            Writing your statement
          </h2>
          <p class="text-lg text-gray-700 mb-4">Your statement explains:</p>
          <ul class="list-disc pl-6 space-y-1 mb-4 text-gray-700">
            <li>what happened</li>
            <li>how you were injured</li>
            <li>how your life has been affected</li>
          </ul>
          <p class="text-gray-700 mb-4">
            This can include changes to work, relationships, daily functioning,
            and emotional wellbeing.
          </p>
          <p class="text-gray-700">
            You can use your police statement as a starting point. There is no
            required format.
            <span class="font-semibold">Clear and honest is enough.</span>
          </p>
        </section>

        <section id="interim" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            Can I get money before a final decision?
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            In some cases, you may be able to request an <strong
              >interim payment</strong
            >.
          </p>
          <p class="text-gray-700 mb-6">
            This may help cover medical treatment, reports, or funeral expenses.
          </p>

          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <button
              on:click={() => (showInterimInfo = !showInterimInfo)}
              class="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            >
              <span class="font-semibold text-gray-900"
                >Important things to know about interim payments</span
              >
              <span
                class="text-[#78081C] text-xl transform transition-transform {showInterimInfo
                  ? 'rotate-180'
                  : ''}">▼</span
              >
            </button>

            {#if showInterimInfo}
              <div class="p-6 bg-white border-t border-gray-200 text-gray-700">
                <ul class="list-disc pl-6 space-y-2">
                  <li>
                    interim payments are part of the final compensation amount
                  </li>
                  <li>
                    if your claim is refused, the interim payment may need to be
                    repaid
                  </li>
                  <li>legal advice is recommended before requesting one</li>
                </ul>
              </div>
            {/if}
          </div>
        </section>

        <section id="after-applying" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            What happens after I apply?
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            Most applications are decided based on documents only.
          </p>
          <p class="text-gray-700 mb-2">Sometimes:</p>
          <ul class="list-disc pl-6 space-y-1 mb-4 text-gray-700">
            <li>more information is requested</li>
            <li>a medical assessment is arranged</li>
            <li>a hearing is scheduled (less common)</li>
          </ul>
          <p class="text-gray-700">You will receive the decision in writing.</p>
        </section>

        <section id="offender" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            Will the offender be told?
          </h2>
          <p class="text-lg text-gray-700 font-semibold mb-4">Usually, yes.</p>
          <p class="text-gray-700 mb-4">
            The offender may receive an edited copy of your application and
            relevant medical reports.
          </p>
          <p
            class="bg-gray-100 inline-block px-3 py-1 rounded text-gray-800 font-medium mb-6"
          >
            They will <strong>not</strong> be given your address.
          </p>

          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <button
              on:click={() => (showSafetyInfo = !showSafetyInfo)}
              class="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            >
              <span class="font-semibold text-gray-900"
                >What if I’m worried about my safety?</span
              >
              <span
                class="text-[#78081C] text-xl transform transition-transform {showSafetyInfo
                  ? 'rotate-180'
                  : ''}">▼</span
              >
            </button>
            {#if showSafetyInfo}
              <div class="p-6 bg-white border-t border-gray-200 text-gray-700">
                <p class="mb-3">
                  You can ask the Assessor not to recover compensation from the
                  offender.
                </p>
                <p class="mb-3">
                  You will need to explain your safety concerns in writing.
                </p>
                <p>The Assessor will decide whether recovery is appropriate.</p>
              </div>
            {/if}
          </div>
        </section>

        <section id="disagree" class="mb-16 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            If you disagree with the decision
          </h2>
          <p class="text-lg text-gray-700 mb-4">You may be able to:</p>
          <ul class="list-disc pl-6 space-y-1 mb-4 text-gray-700">
            <li>request a review, or</li>
            <li>appeal to the District Court</li>
          </ul>
          <p class="text-gray-700 mb-2">
            Appeals usually must be lodged within <strong>21 days</strong>.
          </p>
          <p class="font-medium text-[#78081C]">
            Legal advice is strongly recommended.
          </p>
        </section>

        <section class="mb-16">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">
            Other options that may exist
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            Depending on your situation, you may also have access to:
          </p>
          <ul class="list-disc pl-6 space-y-1 mb-4 text-gray-700">
            <li>court compensation or restitution orders</li>
            <li>a common law claim</li>
            <li>
              the National Redress Scheme (for institutional child sexual abuse)
            </li>
          </ul>
          <p class="text-gray-700">
            You generally cannot receive compensation twice for the same harm.
          </p>
        </section>

        <section id="help" class="mb-20 scroll-mt-40">
          <h2 class="text-3xl font-bold text-[#78081C] mb-6">Getting help</h2>
          <p class="text-lg text-gray-700 mb-4">
            This process can be emotionally difficult.
          </p>
          <p class="text-gray-700 mb-4">Legal advice is recommended if:</p>
          <ul class="list-disc pl-6 space-y-1 mb-6 text-gray-700">
            <li>the offence was not reported</li>
            <li>you are outside the time limit</li>
            <li>you suffered psychological injury</li>
            <li>you are a close relative</li>
            <li>your claim is refused or reduced</li>
          </ul>
        </section>
      </div>
    </div>
  </main>

  <Footer />
</div>
