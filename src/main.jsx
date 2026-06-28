import React from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, GlassWater, HeartHandshake, MapPin, ShieldCheck, Sparkles, UsersRound, MessageCircle, ExternalLink, Camera } from 'lucide-react';
import './styles.css';

const links = {
  instagram: 'https://www.instagram.com/liquidconvo/',
  meetup: 'https://www.meetup.com/liquid-convo/',
  tessera: 'https://www.yourtessera.com/e/liquidconvo',
  eventbrite: 'https://www.eventbrite.sg/o/liquid-convo-115142497721',
  luma: 'https://luma.com/hnyzgmxi',
  telegram: 'https://t.me/liquid_convo',
};

const platforms = [
  ['Instagram', links.instagram, 'Photos, stories, and community updates'],
  ['Meetup', links.meetup, 'Join the 2,200+ member Singapore group'],
  ['Tessera', links.tessera, 'Event tickets and launch page'],
  ['Eventbrite', links.eventbrite, 'Organizer profile and ticketing'],
  ['Luma', links.luma, 'Featured event details and RSVP'],
];

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Connections over conquests',
    copy: 'A social community for genuine friendships and professional networking — not a dating or hookup group.',
  },
  {
    icon: Sparkles,
    title: 'Hosted warm welcomes',
    copy: 'Hosts act as social catalysts. Come solo, find a host, and get introduced to a friendly group immediately.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe, high-quality rooms',
    copy: 'Zero tolerance for harassment, solicitation, insurance pitches, MLM pitching, or behaviour that makes guests uncomfortable.',
  },
];

const eventFormats = [
  {
    title: 'Sip & Mix',
    meta: 'Curated cocktail nights',
    copy: 'Private-space social experiences over food and drinks, built for organic conversation and cosy Saturday-night energy.',
  },
  {
    title: 'After-work wind downs',
    meta: 'Young professionals, 20s to 30s',
    copy: 'Relaxed bar nights for people new to Singapore, expanding their circle, or decompressing after a long week.',
  },
  {
    title: 'Solo-friendly socials',
    meta: 'About 70% come alone',
    copy: 'Designed so nobody has to stand awkwardly alone. Hosts, icebreakers, and a welcoming crowd do the heavy lifting.',
  },
];

const upcoming = {
  title: 'SIP & MIX | Curated Cocktails',
  date: '25 Jul 2026',
  time: '7PM – 10PM',
  venue: 'KAI Bar, 138 Robinson Rd, #01-06 Oxley Tower',
  price: 'Early bird $26 · Regular $30',
  link: 'https://www.meetup.com/liquid-convo/events/315392028/',
};

function Button({ href, children, variant = 'dark' }) {
  return (
    <a className={`button ${variant}`} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined}>
      {children} {href?.startsWith('http') && <ExternalLink size={16} />}
    </a>
  );
}

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top" aria-label="Liquid Convo home"><span>LC</span>Liquid Convo</a>
        <div className="nav-links">
          <a href="#events">Events</a>
          <a href="#community">Community</a>
          <a href="#owner">For owners</a>
          <a href="#links">Links</a>
        </div>
        <Button href={links.luma} variant="orange">RSVP</Button>
      </nav>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Singapore social community</p>
          <h1>Stop scrolling. Start connecting.</h1>
          <p className="lead">Liquid Convo creates hosted social networking nights for adults who are tired of superficial small talk, swipe culture, and the same old weekend routine.</p>
          <div className="hero-actions">
            <Button href={links.luma}>Book the next event</Button>
            <Button href="#owner" variant="outline">Partner with Liquid Convo</Button>
            <Button href={links.instagram} variant="outline"><Camera size={18}/> Follow the vibe</Button>
          </div>
          <div className="proof-row" aria-label="Community proof">
            <div><strong>2,242</strong><span>Meetup members</span></div>
            <div><strong>4.5★</strong><span>336 ratings</span></div>
            <div><strong>946</strong><span>Instagram followers</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Liquid Convo event mood board">
          <div className="orb orb-one"></div><div className="orb orb-two"></div>
          <div className="event-card main-card">
            <p className="mono">NEXT ROOM ENERGY</p>
            <h2>Real people. Real rooms. Real conversation.</h2>
            <div className="mini-list">
              <span><GlassWater size={18}/> Drinks optional</span>
              <span><UsersRound size={18}/> Solo-friendly</span>
              <span><ShieldCheck size={18}/> No-harassment space</span>
            </div>
          </div>
          <div className="floating-note note-a">“I’m coming alone...”<b>Perfect. Most guests do.</b></div>
          <div className="floating-note note-b">No forced networking.<b>Just organic conversation.</b></div>
        </div>
      </section>

      <section className="ticker" aria-label="Brand values">
        <span>Warm welcomes</span><span>Zero pressure</span><span>Safe space</span><span>Social catalysts</span><span>Drinks optional</span><span>New friends</span>
      </section>

      <section id="events" className="section two-col">
        <div>
          <p className="eyebrow"><span></span> What they run</p>
          <h2>Intentional social nights that feel easy to walk into.</h2>
          <p>Liquid Convo is positioned for young adults and professionals in Singapore — especially people who are new to the city, want to expand their circle, or simply want a relaxed post-work or weekend space to unwind.</p>
        </div>
        <div className="format-grid">
          {eventFormats.map((item) => (
            <article className="soft-card" key={item.title}>
              <p className="mono">{item.meta}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-content">
          <p className="eyebrow light"><span></span> Featured upcoming event</p>
          <h2>{upcoming.title}</h2>
          <div className="event-facts">
            <span><CalendarDays size={18}/> {upcoming.date} · {upcoming.time}</span>
            <span><MapPin size={18}/> {upcoming.venue}</span>
            <span><GlassWater size={18}/> {upcoming.price}</span>
          </div>
        </div>
        <Button href={upcoming.link} variant="cream">View event</Button>
      </section>

      <section id="community" className="section">
        <div className="section-heading">
          <p className="eyebrow"><span></span> Community code</p>
          <h2>Built for quality, boundaries, and better nights out.</h2>
        </div>
        <div className="pillars">
          {pillars.map(({ icon: Icon, title, copy }) => (
            <article className="pillar" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="owner" className="section owner-panel">
        <div>
          <p className="eyebrow light"><span></span> Website for the event owner</p>
          <h2>A business home that turns scattered event links into one premium brand.</h2>
          <p>This site gives Liquid Convo a polished central landing page for sponsors, venues, attendees, and press. It frames the community as safe, hosted, and commercially ready — while routing traffic to the booking platforms the owner already uses.</p>
        </div>
        <div className="owner-metrics">
          <div><strong>Venue partners</strong><span>Showcase recurring bar and cocktail collaborations.</span></div>
          <div><strong>Audience growth</strong><span>Convert Instagram, Meetup, Luma, Tessera, and Eventbrite traffic.</span></div>
          <div><strong>Trust layer</strong><span>Make rules, safety values, and host support visible before guests book.</span></div>
        </div>
      </section>

      <section id="links" className="section links-section">
        <div className="section-heading">
          <p className="eyebrow"><span></span> Official channels</p>
          <h2>One place to find every Liquid Convo platform.</h2>
        </div>
        <div className="link-grid">
          {platforms.map(([name, href, copy]) => (
            <a href={href} target="_blank" rel="noreferrer" className="link-card" key={name}>
              <span>{name}</span>
              <p>{copy}</p>
              <ExternalLink size={18} />
            </a>
          ))}
        </div>
      </section>

      <section className="cta">
        <p className="mono">Ready to stop scrolling?</p>
        <h2>Come alone. Leave with stories.</h2>
        <div className="hero-actions center">
          <Button href={links.luma} variant="orange">RSVP on Luma</Button>
          <Button href={links.telegram} variant="outline"><MessageCircle size={18}/> Join Telegram</Button>
        </div>
      </section>

      <footer>
        <a className="logo" href="#top"><span>LC</span>Liquid Convo</a>
        <p>Social networking events for real-world connection in Singapore.</p>
        <div>
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={links.meetup} target="_blank" rel="noreferrer">Meetup</a>
          <a href={links.eventbrite} target="_blank" rel="noreferrer">Eventbrite</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
