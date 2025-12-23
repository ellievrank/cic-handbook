<script>
  import { onMount } from 'svelte';

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All About CIC", href: "#about" },
    { name: "Support Services", href: "#support" }
  ];

  // Feature List Data
  const features = [
    { text: "Understand who can apply for Criminal Injuries Compensation" },
    { text: "Know when and how to apply" },
    { text: "Learn what injuries and losses may be covered" },
    { text: "Find support services if you need extra help" },
    { text: "Understand reviews, appeals, and next steps" },
    { text: "Avoid common mistakes that delay or refuse claims" }
  ];

  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="page-container">
  <nav class:scrolled={y > 20}>
    <div class="nav-content">
      <a href="/" class="logo">
        <img src="https://framerusercontent.com/images/wXnyZRIxNTskCYfZxaUW8sl0bo.svg?width=117&height=40" alt="CIC Handbook Logo" />
      </a>
      <div class="nav-links">
        {#each navLinks as link}
          <a href={link.href}>{link.name}</a>
        {/each}
      </div>
      <div class="mobile-menu-btn">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <h1>The Criminal Injuries Compensation guide.</h1>
      <p class="subtitle">
        CIC Handbook explains how the process works, what you may be able to claim, and what to expect without legal jargon, pressure, or confusion.
      </p>
      <div class="cta-group">
        <a href="#about" class="btn primary">
          All About CIC
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5H11.5M11.5 5L7.5 1M11.5 5L7.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
    <div class="hero-image-container">
      <img src="https://framerusercontent.com/images/d7m2VScguJ8Bzi0pVEKE6QiFs.png?width=601&height=914" alt="App Dashboard Preview" class="hero-img" />
    </div>
  </header>

  <section class="intro">
    <div class="container">
      <h2>A clear guide to Criminal Injuries Compensation in Western Australia</h2>
      <p>
        If you have been injured, harmed, or affected by a crime, you may be entitled to <strong>Criminal Injuries Compensation</strong>.
      </p>
      <p>
        CIC Handbook explains how the process works, what you may be able to claim, and what to expect — <strong>without legal jargon, pressure, or confusion</strong>.
      </p>
      <p class="highlight-text">
        This guide is free, independent, and designed to help you understand your options at your own pace.
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <p>{feature.text}</p>
          </div>
        {/each}
      </div>

      <div class="feature-images">
         <img src="https://framerusercontent.com/images/mXjFmud2eKYX0WdABUIFXgqS5G8.png?width=642&height=130" alt="UI Element" />
         <img src="https://framerusercontent.com/images/OYulHZgDcWdqRuNrBwBW0oT8.png?width=900&height=898" alt="UI Element" />
      </div>
    </div>
  </section>

  <section id="about" class="split-section">
    <div class="container">
      <div class="content-col">
        <h2>Who we are</h2>
        <p>
          CIC Handbook is a resource built for the Western Australian community to better understand the CIC process. This guide provides <strong>general information only</strong> and encourages independent legal advice where appropriate.
        </p>
        <a href="/about" class="link-btn">
          More About Us
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" stroke="currentColor"><path d="M1 5H11.5M11.5 5L7.5 1M11.5 5L7.5 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  </section>

  <section id="support" class="split-section alt-bg">
    <div class="container">
      <div class="content-col">
        <h2>See support options.</h2>
        <p>Contact details for legal help, victim support, crisis services, and specialised assistance.</p>
        <a href="/support" class="link-btn">
          Support Services
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" stroke="currentColor"><path d="M1 5H11.5M11.5 5L7.5 1M11.5 5L7.5 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  </section>

  <section class="final-cta">
    <div class="container">
      <div class="cta-box">
        <div class="text">
          <h2>Get help with CIC here.</h2>
          <p>A step-by-step explanation of eligibility, applying, decisions, reviews, and appeals — written in clear, plain English.</p>
          <a href="/start" class="btn primary">Get Started</a>
        </div>
        <div class="image-wrapper">
          <img src="https://framerusercontent.com/images/3uvceqytCHwJDIfhFyK75EuwCys.png?width=3840&height=2223" alt="Dashboard" />
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-top">
        <img src="https://framerusercontent.com/images/eDQ7HIqAK4kdYZ3DQ5CyZeQqhV0.svg?width=122&height=40" alt="Logo" class="footer-logo" />
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
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #111;
    background: #fff;
    line-height: 1.6;
  }

  .page-container {
    overflow-x: hidden;
  }

  /* Navigation */
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
  }

  nav.scrolled {
    background: #fff;
    border-bottom: 1px solid #eaeaea;
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links a {
    margin-left: 2rem;
    text-decoration: none;
    color: #555;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: #000;
  }

  /* Hero */
  .hero {
    padding: 8rem 1.5rem 4rem;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    color: #111;
  }

  .hero .subtitle {
    font-size: 1.25rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .hero-img {
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    margin-top: 3rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .btn.primary {
    background: #111;
    color: #fff;
    gap: 0.5rem;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .link-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #111;
    font-weight: 600;
    text-decoration: none;
    margin-top: 1rem;
  }

  .link-btn:hover {
    text-decoration: underline;
  }

  /* Intro */
  .intro {
    padding: 6rem 1.5rem;
    text-align: center;
    background: #fafafa;
  }

  .intro h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    letter-spacing: -0.01em;
  }

  .intro p {
    font-size: 1.15rem;
    max-width: 700px;
    margin: 0 auto 1.5rem;
    color: #444;
  }

  /* Features */
  .features {
    padding: 6rem 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 4rem;
  }

  .section-header h4 {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: #666;
    margin-bottom: 1rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .card {
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .icon-check {
    background: #e0e0e0;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .feature-images {
    display: flex;
    gap: 2rem;
    overflow: hidden;
    justify-content: center;
  }

  .feature-images img {
    max-height: 200px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  /* Split Sections */
  .split-section {
    padding: 6rem 1.5rem;
    border-top: 1px solid #eaeaea;
  }

  .split-section.alt-bg {
    background: #fafafa;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  /* Final CTA */
  .final-cta {
    padding: 4rem 1.5rem 6rem;
  }

  .cta-box {
    background: #111;
    color: #fff;
    border-radius: 20px;
    padding: 4rem 2rem 0;
    text-align: center;
    overflow: hidden;
  }

  .cta-box h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .cta-box p {
    color: #ccc;
    max-width: 500px;
    margin: 0 auto 2rem;
  }

  .cta-box .btn {
    background: #fff;
    color: #111;
    margin-bottom: 3rem;
  }

  .cta-box img {
    width: 100%;
    max-width: 900px;
    margin-bottom: -10px; /* Slight overlap hide */
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  /* Footer */
  footer {
    padding: 4rem 1.5rem;
    border-top: 1px solid #eaeaea;
    background: #fff;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .footer-links h3 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #111;
  }

  .footer-links a {
    display: block;
    color: #666;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .footer-links a:hover {
    color: #111;
  }

  .copyright {
    text-align: center;
    color: #999;
    font-size: 0.85rem;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .nav-links { display: none; }
    .mobile-menu-btn { display: block; }
    .intro h2, .section-header h2 { font-size: 2rem; }
  }
</style>