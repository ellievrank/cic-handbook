<script>
  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All About CIC", href: "#about" },
    { name: "Support Services", href: "#support" },
  ];

  // Feature List Data
  const features = [
    { text: "Understand who can apply for Criminal Injuries Compensation" },
    { text: "Know when and how to apply" },
    { text: "Learn what injuries and losses may be covered" },
    { text: "Find support services if you need extra help" },
    { text: "Understand reviews, appeals, and next steps" },
    { text: "Avoid common mistakes that delay or refuse claims" },
  ];

  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="page-container">
  <nav class:scrolled={y > 20}>
    <div class="nav-content">
      <a href="/" class="logo">
        <div class="logo-text">
          <span class="logo-icon">Draftr</span>
        </div>
      </a>
      <div class="nav-links">
        {#each navLinks as link}
          <a href={link.href}>{link.name}</a>
        {/each}
      </div>
      <div class="nav-actions">
        <a href="#about" class="btn primary small">All About CIC</a>
      </div>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <h1>The Criminal Injuries Compensation guide.</h1>
      <p class="subtitle">
        CIC Handbook explains how the process works, what you may be able to
        claim, and what to expect <strong
          >without legal jargon, pressure, or confusion.</strong
        >
      </p>
      <div class="cta-group">
        <a href="#about" class="btn primary">
          All About CIC
          <svg
            class="arrow-icon"
            width="16"
            height="16"
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
        </a>
      </div>
    </div>

    <div class="hero-image-container">
      <div class="gray-backdrop">
        <img
          src="https://framerusercontent.com/images/d7m2VScguJ8Bzi0pVEKE6QiFs.png?width=601&height=914"
          alt="App Dashboard Preview"
          class="hero-img"
        />
      </div>
    </div>
  </header>

  <section class="intro">
    <div class="container">
      <h2>
        A clear guide to Criminal Injuries Compensation in Western Australia
      </h2>
      <p>
        If you have been injured, harmed, or affected by a crime, you may be
        entitled to <strong>Criminal Injuries Compensation</strong>.
      </p>
      <p>
        CIC Handbook explains how the process works, what you may be able to
        claim, and what to expect — <strong
          >without legal jargon, pressure, or confusion</strong
        >.
      </p>
      <p class="highlight-text">
        This guide is free, independent, and designed to help you understand
        your options at your own pace.
      </p>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <div class="section-header">
        <h4>Why we exist</h4>
        <h2>CIC Handbook helps you:</h2>
      </div>

      <div class="grid">
        {#each features as feature}
          <div class="card">
            <div class="icon-check">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                ><polyline points="20 6 9 17 4 12"></polyline></svg
              >
            </div>
            <p>{feature.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="about" class="split-section">
    <div class="container">
      <div class="content-col">
        <h2>Who we are</h2>
        <p>
          CIC Handbook is a resource built for the Western Australian community
          to better understand the CIC process. This guide provides <strong
            >general information only</strong
          > and encourages independent legal advice where appropriate.
        </p>
        <a href="/about" class="link-btn">
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

  <section id="support" class="split-section alt-bg">
    <div class="container">
      <div class="content-col">
        <h2>See support options.</h2>
        <p>
          Contact details for legal help, victim support, crisis services, and
          specialised assistance.
        </p>
        <a href="/support" class="link-btn">
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

  <section class="final-cta">
    <div class="container">
      <div class="cta-box">
        <div class="text">
          <h2>Get help with CIC here.</h2>
          <p>
            A step-by-step explanation of eligibility, applying, decisions,
            reviews, and appeals — written in clear, plain English.
          </p>
          <a href="/start" class="btn primary">
            Get Started
            <svg
              class="arrow-icon"
              width="16"
              height="16"
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
          </a>
        </div>
        <div class="image-wrapper">
          <img
            src="https://framerusercontent.com/images/3uvceqytCHwJDIfhFyK75EuwCys.png?width=3840&height=2223"
            alt="Dashboard"
          />
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-top">
        <img
          src="https://framerusercontent.com/images/eDQ7HIqAK4kdYZ3DQ5CyZeQqhV0.svg?width=122&height=40"
          alt="Logo"
          class="footer-logo"
        />
        <div class="socials">
          <a href="#">Facebook</a>
          <a href="#">X (Twitter)</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div class="footer-links">
        <div class="col">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
        </div>
        <div class="col">
          <h3>All Pages</h3>
          <a href="/about">About us</a>
          <a href="/contact">Contact us</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
      <div class="copyright">
        <p>Designed by Webestica, Powered by Framer</p>
      </div>
    </div>
  </footer>
</div>

<style>
  /* --- Global Styles --- */
  :global(body) {
    margin: 0;
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    color: #111;
    background: #fff;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --primary-red: #78081c;
    --hover-red: #5a0615;
    --text-dark: #1f1f1f;
    --text-gray: #555;
    --bg-gray: #f4f4f5;
  }

  h1,
  h2,
  h3 {
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  /* --- Navigation --- */
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    padding: 1rem 0;
    transition: all 0.3s ease;
  }

  nav.scrolled {
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    padding: 0.8rem 0;
  }

  .nav-content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-text {
    font-weight: 800;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #000;
  }

  .logo-icon::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #6a5acd, #8a2be2);
    border-radius: 4px;
    margin-right: 8px;
    vertical-align: middle;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-gray);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--primary-red);
  }

  .nav-actions .btn.small {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }

  /* --- Hero Section --- */
  .hero {
    padding-top: 8rem;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 4rem;
  }

  .hero h1 {
    font-size: 4.5rem;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
    color: var(--primary-red);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero .subtitle {
    font-size: 1.15rem;
    color: var(--text-gray);
    max-width: 620px;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
  }

  .hero .subtitle strong {
    color: #000;
    font-weight: 600;
  }

  .hero-image-container {
    margin-top: 4rem;
    padding: 0 1.5rem;
  }

  .gray-backdrop {
    background: #f3f4f6;
    border-radius: 24px;
    padding: 3rem 2rem 0 2rem;
    overflow: hidden;
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-img {
    width: 100%;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    display: block;
  }

  /* --- Intro & General Sections --- */
  .intro {
    padding: 6rem 1.5rem;
    text-align: center;
    background: #fff;
  }

  .intro h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: var(--primary-red);
  }

  .intro p {
    font-size: 1.15rem;
    max-width: 700px;
    margin: 0 auto 1.5rem;
    color: #444;
  }

  .features {
    padding: 6rem 1.5rem;
    background: #fff;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  /* --- Buttons --- */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
    gap: 0.6rem;
  }

  .btn.primary {
    background: var(--primary-red);
    color: #fff;
    box-shadow: 0 4px 14px rgba(120, 8, 28, 0.3);
  }

  .btn.primary:hover {
    background: var(--hover-red);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(120, 8, 28, 0.4);
  }

  .arrow-icon {
    background: #fff;
    color: var(--primary-red);
    border-radius: 50%;
    padding: 3px;
    width: 14px;
    height: 14px;
    transition: transform 0.2s;
  }

  .btn:hover .arrow-icon {
    transform: translateX(3px);
  }

  .link-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #111;
    font-weight: 600;
    text-decoration: none;
    margin-top: 1rem;
    font-size: 1.1rem;
  }

  .link-btn:hover {
    text-decoration: underline;
  }

  /* --- Grid/Cards --- */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .card {
    padding: 1.5rem;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: border-color 0.2s;
  }

  .card:hover {
    border-color: #ccc;
  }

  .icon-check {
    background: var(--bg-gray);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111;
  }

  /* --- Split Sections (About & Support) --- */
  .split-section {
    padding: 6rem 1.5rem;
    border-top: 1px solid #eaeaea;
  }

  .split-section h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: var(--primary-red);
  }

  .split-section.alt-bg {
    background: var(--bg-gray);
    border-top: none;
  }

  /* --- Final CTA Section --- */
  .final-cta {
    padding: 4rem 1.5rem 6rem;
    background: #fff;
  }

  .cta-box {
    background: #0f0f0f; /* Dark background to pop the Red Button */
    color: #fff;
    border-radius: 24px;
    padding: 5rem 2rem 0;
    text-align: center;
    overflow: hidden;
  }

  .cta-box h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  .cta-box p {
    color: #ccc;
    font-size: 1.2rem;
    max-width: 500px;
    margin: 0 auto 2.5rem;
  }

  /* Image inside CTA */
  .cta-box img {
    width: 100%;
    max-width: 900px;
    margin-bottom: -10px; /* Hides bottom radius overlap */
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
  }

  /* --- Footer --- */
  footer {
    padding: 5rem 1.5rem 3rem;
    border-top: 1px solid #eaeaea;
    background: #fff;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .socials {
    display: flex;
    gap: 1.5rem;
  }

  .socials a {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .socials a:hover {
    color: var(--primary-red);
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .footer-links h3 {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: #111;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-links a {
    display: block;
    color: #666;
    text-decoration: none;
    margin-bottom: 0.8rem;
    font-size: 1rem;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: var(--primary-red);
  }

  .copyright {
    text-align: center;
    color: #999;
    font-size: 0.9rem;
    border-top: 1px solid #eaeaea;
    padding-top: 2rem;
  }

  /* --- Mobile Responsive --- */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 3rem;
    }
    .nav-links {
      display: none;
    }
    .cta-box h2 {
      font-size: 2rem;
    }

    .footer-top {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
