<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="overflow-x-hidden font-sans text-gray-900 bg-white antialiased">
  <Header />

  <main class="pt-40 pb-24 px-6">
    <div class="max-w-[800px] mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-[#78081C] mb-8">
        About Us
      </h1>

      <div class="prose prose-lg text-gray-700">
        <p class="mb-6 text-xl leading-relaxed">
          We are dedicated to helping victims of crime understand their rights
          and access the support they need.
        </p>

        <p class="mb-6">
          The Criminal Injuries Compensation (CIC) process can be complex and
          overwhelming. Our mission is to simplify this process, providing
          clear, jargon-free information to the Western Australian community.
        </p>

        <h3 class="text-2xl font-bold text-black mt-10 mb-4">Our Mission</h3>
        <p class="mb-6">
          To provide a free, independent resource that empowers individuals to
          navigate the compensation system with confidence.
        </p>
      </div>
    </div>
  </main>
</div>
