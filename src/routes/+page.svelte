<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte"; // Import the footer

  // Feature List Data
  const features = [
    { text: "Understand who can apply for Criminal Injuries Compensation" },
    { text: "Know when and how to apply" },
    { text: "Learn what injuries and losses may be covered" },
    { text: "Find support services if you need extra help" },
    { text: "Understand reviews, appeals, and next steps" },
    { text: "Avoid common mistakes that delay or refuse claims" },
  ];
</script>

<div class="overflow-x-hidden font-sans text-gray-900 bg-white antialiased">
  <Header />

  <header class="pt-40 pb-24 text-center px-6">
    <div class="max-w-[1000px] mx-auto">
      <h1
        class="text-5xl md:text-[4.5rem] leading-none font-bold tracking-tight text-[#78081C] mb-6 max-w-4xl mx-auto"
      >
        The Criminal Injuries Compensation guide.
      </h1>
      <p
        class="text-lg md:text-[1.15rem] leading-relaxed text-gray-600 max-w-2xl mx-auto mb-10"
      >
        CIC Handbook explains how the process works, what you may be able to
        claim, and what to expect <strong class="text-black font-semibold"
          >without legal jargon, pressure, or confusion.</strong
        >
      </p>

      <div class="flex justify-center">
        <a
          href="#about"
          class="group inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-[#78081C] hover:bg-[#5a0615] transition-transform hover:-translate-y-0.5 shadow-lg shadow-[#78081C]/30 gap-2.5"
        >
          All About CIC
          <div
            class="bg-white text-[#78081C] rounded-full p-[3px] transition-transform group-hover:translate-x-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
                points="12 5 19 12 12 19"
              ></polyline></svg
            >
          </div>
        </a>
      </div>
    </div>
  </header>

  <section class="py-16 md:pb-32 px-6 bg-white">
    <div class="max-w-[1000px] mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        <div class="order-1 md:order-1 flex justify-center">
          <div
            class="bg-gray-100 rounded-3xl pt-12 px-8 flex justify-center overflow-hidden relative w-full max-w-[400px]"
          >
            <img
              src="https://framerusercontent.com/images/d7m2VScguJ8Bzi0pVEKE6QiFs.png?width=601&height=914"
              alt="App Dashboard Preview"
              class="w-full rounded-t-xl shadow-xl block -mb-2"
            />
          </div>
        </div>
        <div class="text-center md:text-left order-2 md:order-2">
          <h2
            class="text-4xl md:text-[2.8rem] leading-tight font-bold text-[#111] mb-8"
          >
            A clear guide to Criminal Injuries Compensation in Western Australia
          </h2>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            If you have been injured, harmed, or affected by a crime, you may be
            entitled to <strong class="font-semibold text-gray-900"
              >Criminal Injuries Compensation</strong
            >.
          </p>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            CIC Handbook explains how the process works, what you may be able to
            claim, and what to expect — <strong
              class="font-semibold text-gray-900"
              >without legal jargon, pressure, or confusion</strong
            >.
          </p>
          <p class="text-lg text-gray-600">
            This guide is free, independent, and designed to help you understand
            your options at your own pace.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 px-6 bg-white">
    <div class="max-w-[1000px] mx-auto">
      <div class="mb-16">
        <h4
          class="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4"
        >
          Why we exist
        </h4>
        <h2 class="text-4xl md:text-[2.8rem] font-bold text-[#78081C]">
          CIC Handbook helps you:
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each features as feature}
          <div
            class="p-6 bg-white border border-gray-200 rounded-2xl flex flex-col gap-4 hover:border-gray-400 transition-colors duration-200"
          >
            <div
              class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >
            </div>
            <p class="text-gray-800 leading-snug">{feature.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="about" class="py-24 px-6 border-t border-gray-200">
    <div class="max-w-[1000px] mx-auto">
      <div class="max-w-2xl">
        <h2 class="text-4xl md:text-[2.8rem] font-bold text-[#78081C] mb-6">
          Who we are
        </h2>
        <p class="text-lg text-gray-700 mb-4 leading-relaxed">
          CIC Handbook is a resource built for the Western Australian community
          to better understand the CIC process. This guide provides <strong
            class="font-semibold text-gray-900">general information only</strong
          > and encourages independent legal advice where appropriate.
        </p>
        <a
          href="/about"
          class="inline-flex items-center gap-2 text-[#111] font-semibold text-lg hover:underline mt-4"
        >
          More About Us
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            stroke="currentColor"
            ><path
              d="M1 5H11.5M11.5 5L7.5 1M11.5 5L7.5 9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >
        </a>
      </div>
    </div>
  </section>

  <section id="support" class="py-24 px-6 bg-gray-50">
    <div class="max-w-[1000px] mx-auto">
      <div class="max-w-2xl">
        <h2 class="text-4xl md:text-[2.8rem] font-bold text-[#78081C] mb-6">
          See support options.
        </h2>
        <p class="text-lg text-gray-700 mb-4 leading-relaxed">
          Contact details for legal help, victim support, crisis services, and
          specialised assistance.
        </p>
        <a
          href="/support"
          class="inline-flex items-center gap-2 text-[#111] font-semibold text-lg hover:underline mt-4"
        >
          Support Services
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            stroke="currentColor"
            ><path
              d="M1 5H11.5M11.5 5L7.5 1M11.5 5L7.5 9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >
        </a>
      </div>
    </div>
  </section>

  <section class="pt-16 pb-24 px-6 bg-white">
    <div class="max-w-[1000px] mx-auto">
      <div
        class="bg-[#0f0f0f] text-white rounded-3xl pt-20 px-8 text-center overflow-hidden"
      >
        <div class="max-w-2xl mx-auto mb-10">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Get help with CIC here.
          </h2>
          <p class="text-gray-300 text-lg md:text-xl mb-10 max-w-lg mx-auto">
            A step-by-step explanation of eligibility, applying, decisions,
            reviews, and appeals — written in clear, plain English.
          </p>
          <a
            href="/start"
            class="group inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-[#78081C] hover:bg-[#5a0615] transition-transform hover:-translate-y-0.5 shadow-lg shadow-[#78081C]/30 gap-2.5"
          >
            Get Started
            <div
              class="bg-white text-[#78081C] rounded-full p-[3px] transition-transform group-hover:translate-x-1"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
                  points="12 5 19 12 12 19"
                ></polyline></svg
              >
            </div>
          </a>
        </div>

        <div class="flex justify-center">
          <img
            src="https://framerusercontent.com/images/3uvceqytCHwJDIfhFyK75EuwCys.png?width=3840&height=2223"
            alt="Dashboard"
            class="w-full max-w-[900px] rounded-t-xl shadow-2xl -mb-2"
          />
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>
