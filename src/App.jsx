import { useEffect, useState } from 'react';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const services = [
  {
    title: 'Rope access',
    image: 'rope-access.jpg',
    description: 'Specialist access for maintenance in hard-to-reach places.',
  },
  {
    title: 'Window cleaning',
    image: 'window-clean.jpg',
    description: 'A clearer view for exterior glass and building facades.',
  },
  {
    title: 'Repainting',
    image: 'painting.jpg',
    description: 'Refresh exterior walls and building surfaces.',
  },
  {
    title: 'Resealant',
    image: 'resealant.jpg',
    description: 'Renew worn sealant around joints and facade details.',
  },
  {
    title: 'Grouting',
    image: 'growting.jpg',
    description: 'Careful grouting for exposed and hard-to-reach areas.',
  },
  {
    title: 'Waterproofing',
    image: 'wp.jpg',
    description: 'Targeted waterproofing for building surfaces.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Tell us about your building',
    description: 'Share the location, the work you need, and any access details.',
  },
  {
    number: '02',
    title: 'Talk through the scope',
    description: 'We will discuss the right service for your building’s needs.',
  },
  {
    number: '03',
    title: 'Plan your next step',
    description: 'Get in touch directly to talk through timing and details.',
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const whatsappLink = (message) =>
    `https://wa.me/6281808825858?text=${encodeURIComponent(message)}`;

  return (
    <>
      <header className="site-header">
        <nav className="navigation" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img src={asset('img/logo.png')} alt="" />
            <span>KIARA <b>ROPE ACCESS</b></span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="navigation-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <div
            className={`navigation-links${menuOpen ? ' is-open' : ''}`}
            id="navigation-links"
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let’s talk <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo" role="img" aria-label="Rope access specialist working on a building facade" />
          <div className="hero-content">
            <p className="eyebrow"><span /> Building care, Yogyakarta</p>
            <h1>Building care.<br /><em>Without limits.</em></h1>
            <p className="hero-description">
              Professional rope access for the places traditional methods
              can’t reach.
            </p>
            <div className="hero-actions">
              <a className="button button-amber" href={whatsappLink('Hello Kiara, I would like to discuss building maintenance.') } target="_blank" rel="noreferrer">
                Discuss your project <ArrowIcon />
              </a>
              <a className="hero-secondary" href="#services">Explore services <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="hero-note-mark">K</span>
              <span><b>Built for the hard-to-reach.</b><br />Planned with care. Done with purpose.</span>
            </div>
          </div>
          <div className="hero-index"><span>01</span> / YOGYAKARTA</div>
          <a className="hero-scroll" href="#about" aria-label="Scroll to About Us"><span /></a>
        </section>

        <div className="service-ribbon" aria-label="Building care services">
          <div className="ribbon-track">
            {[0, 1].map((copy) => (
              <div className="ribbon-group" aria-hidden={copy === 1 ? 'true' : undefined} key={copy}>
                <span>Rope access</span><i />
                <span>Facade care</span><i />
                <span>Window cleaning</span><i />
                <span>Building maintenance</span><i />
              </div>
            ))}
          </div>
        </div>

        <section className="about section-wrap" id="about">
          <div className="about-visual" data-reveal>
            <img src={asset('img/img-aboutus.jpg')} alt="Rope access building maintenance in action" />
            <div className="about-stamp">
              <span>ACCESS</span>
              <strong>WITH<br />PURPOSE</strong>
              <i />
            </div>
            <span className="image-index">FIELD WORK / 001</span>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow"><span /> Who we are</p>
            <h2>Some work is<br />better <em>done on rope.</em></h2>
            <p>
              Kiara is a Yogyakarta-based building care company with specialist
              climbers for work at height. We help building owners look after
              glass, walls, and exterior details using rope access and
              climbing-specific safety equipment.
            </p>
            <p className="about-indonesian">
              Perawatan gedung dengan tenaga ahli climbing dan peralatan yang
              dirancang khusus untuk bekerja di ketinggian.
            </p>
            <a className="text-link" href="#approach">Get to know our approach <ArrowIcon /></a>
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-inner section-wrap">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow"><span /> What we do</p>
                <h2>Reach further.<br /><em>Care for more.</em></h2>
              </div>
              <p>Practical building maintenance, delivered with a rope-access approach.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  className="service-card"
                  data-reveal
                  key={service.title}
                  style={{ '--reveal-delay': `${(index % 3) * 80}ms` }}
                >
                  <a
                    className="service-card-link"
                    href={whatsappLink(`Hello Kiara, I would like to ask about ${service.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Discuss ${service.title} with Kiara on WhatsApp`}
                  >
                    <div className="service-image">
                      <img src={asset(`img/services/${service.image}`)} alt="" loading="lazy" />
                      <span className="service-number">0{index + 1}</span>
                      <span className="service-arrow"><ArrowIcon /></span>
                    </div>
                    <div className="service-info">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <p className="services-note" data-reveal>
              Have a specific project in mind? <a href="#contact">Tell us about it <ArrowIcon /></a>
            </p>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="approach-inner section-wrap">
            <div className="approach-heading" data-reveal>
              <p className="eyebrow"><span /> A clear way forward</p>
              <h2>Good work starts<br />with a <em>conversation.</em></h2>
              <p>Every building is different. Start with what you need, and we’ll take it from there.</p>
              <a className="button button-red" href={whatsappLink('Hello Kiara, I would like to discuss a building maintenance project.')} target="_blank" rel="noreferrer">
                Start a conversation <ArrowIcon />
              </a>
            </div>
            <div className="steps-list">
              {steps.map((step) => (
                <article className="step" data-reveal key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span className="step-arrow"><ArrowIcon /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="location" data-reveal>
          <div className="location-inner section-wrap">
            <div className="location-copy">
              <p className="eyebrow"><span /> On the ground in Yogyakarta</p>
              <h2>Local knowledge.<br /><em>High-level care.</em></h2>
              <p>Based in Yogyakarta and ready to talk about your building.</p>
              <a className="location-link" href="https://maps.app.goo.gl/69MqEs9dysGq7AjW9" target="_blank" rel="noreferrer">
                Find our location <ArrowIcon />
              </a>
            </div>
            <div className="map-frame">
              <iframe
                title="Kiara Rope Access location in Yogyakarta"
                src="https://maps.google.com/maps?q=-7.7592222%2C110.4470833&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="map-tag" href="https://maps.app.goo.gl/69MqEs9dysGq7AjW9" target="_blank" rel="noreferrer">
                <i /> OPEN IN GOOGLE MAPS <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-lead">
            <p className="eyebrow"><span /> The next move is yours</p>
            <h2>Let’s get your<br /><em>project moving.</em></h2>
            <p>Tell us what your building needs. We’ll take it from there.</p>
          </div>
          <div className="contact-panel">
            <a href="https://wa.me/6281808825858" target="_blank" rel="noreferrer">
              <span className="contact-icon">01</span>
              <span><small>Call or WhatsApp</small>+62 818-0882-5858</span>
              <ArrowIcon />
            </a>
            <a href="mailto:kiaracareindonesia@gmail.com">
              <span className="contact-icon">02</span>
              <span><small>Email our team</small>kiaracareindonesia@gmail.com</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="footer-bottom">
            <a className="footer-brand" href="#home">
              <img src={asset('img/logo.png')} alt="" />
              <span>KIARA <b>ROPE ACCESS</b></span>
            </a>
            <span>Building care, Yogyakarta</span>
            <a className="back-to-top" href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-button"
        href={whatsappLink('Hello Kiara, I would like to discuss a building maintenance project.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Kiara on WhatsApp"
      >
        <span className="whatsapp-dot" />
        <span>Chat with our team</span>
        <ArrowIcon />
      </a>
    </>
  );
}

export default App;
