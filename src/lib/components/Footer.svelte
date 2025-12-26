<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="max-w-[1100px] mx-auto px-6 py-20 border-t border-gray-200">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
    >
      <img src="/book.png" alt="Book Logo" class="h-8 w-auto mr-2" />
      <div class="flex gap-6">
        <a
          href="/"
          class="text-gray-500 hover:text-[#78081C] font-medium transition-colors"
          >Facebook</a
        >
        <a
          href="/"
          class="text-gray-500 hover:text-[#78081C] font-medium transition-colors"
          >X (Twitter)</a
        >
        <a
          href="/"
          class="text-gray-500 hover:text-[#78081C] font-medium transition-colors"
          >Instagram</a
        >
        <a
          href="/"
          class="text-gray-500 hover:text-[#78081C] font-medium transition-colors"
          >LinkedIn</a
        >
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
      <div>
        <h3
          class="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6"
        >
          Quick Links
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="/"
              class="text-gray-500 hover:text-[#78081C] transition-colors"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/about-cic"
              class="text-gray-500 hover:text-[#78081C] transition-colors"
              >All about CIC</a
            >
          </li>
          <li>
            <a
              href="/support-services"
              class="text-gray-500 hover:text-[#78081C] transition-colors"
              >Support services</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h3
          class="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6"
        >
          All Pages
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="/about"
              class="text-gray-500 hover:text-[#78081C] transition-colors"
              >About us</a
            >
          </li>
          <li>
            <a
              href="/contact"
              class="text-gray-500 hover:text-[#78081C] transition-colors"
              >Contact us</a
            >
          </li>
          <li>
            <a
              href="/blog"
              class="text-gray-500 hover:text-[#78081C] transition-colors"
              >Blog</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm"
    >
      <p>Designed by Seek Legal. &copy; {currentYear}</p>
    </div>
  </div>
</footer>
