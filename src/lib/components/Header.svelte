<script>
  let y = 0;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All About CIC", href: "#about" },
    { name: "Support Services", href: "#support" },
  ];
</script>

<svelte:window bind:scrollY={y} />

<nav
  class={`fixed top-0 w-full z-50 transition-all duration-300 ${
    y > 20
      ? "bg-white border-b border-gray-200 py-3"
      : "bg-white/90 backdrop-blur-md py-4"
  }`}
>
  <div class="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
    <a href="/" class="flex items-center gap-2 group">
      <div class="font-extrabold text-xl flex items-center text-black">
        <span
          class="inline-block w-5 h-5 mr-2 rounded bg-gradient-to-br from-[#6a5acd] to-[#8a2be2]"
        ></span>
        Draftr
      </div>
    </a>

    <div class="hidden md:flex gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-gray-600 font-medium text-[0.95rem] hover:text-[#78081C] transition-colors"
        >
          {link.name}
        </a>
      {/each}
    </div>

    <div class="flex items-center">
      <a
        href="#about"
        class="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-sm text-white bg-[#78081C] hover:bg-[#5a0615] transition-all shadow-md shadow-[#78081C]/20"
      >
        All About CIC
      </a>
      <button class="md:hidden text-gray-800">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path></svg
        >
      </button>
    </div>
  </div>
</nav>
