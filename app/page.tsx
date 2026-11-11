import { ArrowUpRight, Instagram, MessageCircle, Mail, MapPin, Sparkles, Clock3, Heart, Check, Phone, Menu } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const phone = "918248739478";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Hi Riya! I'd love to book a nail appointment. Please share your available slots.")}`;
const instagram = "https://www.instagram.com/riya.nail.artistry/";
const email = "mailto:hello@riyanailartistry.com?subject=Nail%20appointment%20enquiry"; 


const services = [
  { name: "Gel polish", detail: "A glossy finish for your natural nails", price: "₹300", tag: "Everyday favourite" },
  { name: "Press-on nails", detail: "Custom looks, ready when you are", price: "₹250+", tag: "Easy to wear" },
  { name: "Temporary extensions", detail: "A little extra length for your moment", price: "₹500", tag: "Instant length" },
  { name: "Soft gel extensions", detail: "Lightweight extensions with a refined finish", price: "₹500", tag: "Most loved" }
];
const addOns = [
  ["Stone / caviar balls", "₹5 / stone"], ["Accessories", "₹30 / piece"], ["Blooming flower", "₹20 / finger"],
  ["Marble art", "₹20 / finger"], ["Isolated chrome", "₹30 / finger"], ["3D / 5D art", "₹50 / finger"],
  ["Cat eye", "₹10 / finger"], ["Ombre / aura", "₹15 / finger"], ["French art", "₹15 / finger"],
  ["Chrome", "₹20 / finger"], ["One stroke art", "₹30 / finger"], ["Animal print", "₹20 / finger"],
  ["Bridal art", "From ₹100 / finger"]
];
const gallery = [
  ["red-nails.jpg", "Deep cherry red with a delicate gold accent", "01"],
  ["chrome-nails.jpg", "Modern chrome details", "02"],
  ["mauve-nails.jpg", "Soft mauve manicure", "03"],
  ["nail-before-after.jpg", "A fresh, clean finish", "04"],
  ["brand-art.jpg", "Nail Artistry by Riya", "05"],
  ["price-menu-detail.jpg", "Explore the service menu", "06"]
];

export default function Home() {
  return (
    <main>
      <div className="announcement"><span className="pulse" /> Taking bookings in Chennai <span className="announcement-dot">✦</span> Home service available</div>
      <header className="nav wrap">
        <a className="brand" href="#home" aria-label="Nail Artistry by Riya home">
          <span className="brand-mark">R<span>✦</span></span><span className="brand-copy">NAIL ARTISTRY<small>BY RIYA</small></span>
        </a>
        <nav><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="button button-dark nav-cta" href={wa} target="_blank" rel="noreferrer">Book an appointment <ArrowUpRight size={16}/></a>
        <a className="mobile-book" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={19}/></a>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> THE LITTLE LUXURY YOU DESERVE</div>
          <h1>Your nails.<br/><em>Your kind of</em> <span>art.</span></h1>
          <p className="hero-lede">Beautifully considered nail art, made personal. From everyday elegance to statement sets, let your fingertips do the talking.</p>
          <div className="hero-actions"><a className="button button-dark" href={wa} target="_blank" rel="noreferrer">Book your slot <ArrowUpRight size={17}/></a><a className="text-link" href="#gallery">Explore the work <span>↗</span></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>✦</span><span>♡</span></div><div><strong>Made with care, one set at a time</strong><small>Personalised nail artistry in Chennai</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src="/images/red-nails.jpg" alt="Cherry red nail art with gold details"/><div className="photo-stamp"><span>NAIL</span><b>ART</b><small>BY RIYA · CHENNAI</small></div></div>
          <div className="floating-note"><span>✦</span><div><b>A little extra</b><small>made just for you</small></div></div>
          <div className="hero-caption">THE ART OF THE FINISH <span>01 — 06</span></div>
        </div>
        <div className="hero-side-note">NAIL ARTISTRY · CHENNAI</div>
      </section>

      <section className="ticker"><div>GEL POLISH <i>✦</i> NAIL ART <i>✦</i> SOFT GEL EXTENSIONS <i>✦</i> PRESS-ON NAILS <i>✦</i> MADE FOR YOU <i>✦</i> GEL POLISH <i>✦</i> NAIL ART <i>✦</i></div></section>

      <section className="intro section wrap" id="about">
        <div className="section-kicker">01 / A PERSONAL TOUCH</div>
        <div className="intro-grid"><h2>More than a manicure.<br/><em>A moment for you.</em></h2><div><p>At Nail Artistry by Riya, every set starts with your style. Whether you love a subtle, clean look or intricate details that turn heads, we create nail looks that feel unmistakably yours.</p><a className="text-link" href={instagram} target="_blank" rel="noreferrer">Follow the latest work <ArrowUpRight size={15}/></a></div></div>
        <div className="values"><div><span>✧</span><b>Personalised designs</b><small>Your taste leads every detail.</small></div><div><span>♡</span><b>Careful application</b><small>Thoughtful work, lovely finish.</small></div><div><span>⌂</span><b>At your doorstep</b><small>Home service across Chennai.</small></div></div>
      </section>

      <section className="services-section section" id="services"><div className="wrap">
        <div className="section-top"><div><div className="section-kicker">02 / THE MENU</div><h2>Find your <em>finish.</em></h2></div><p>Choose your base, then make it yours with the little details.</p></div>
        <div className="service-grid">{services.map((s, i)=><article className="service-card" key={s.name}><div className="service-number">0{i+1}</div><div className="service-tag">{s.tag}</div><h3>{s.name}</h3><p>{s.detail}</p><div className="service-bottom"><strong>{s.price}</strong><a href={wa} target="_blank" rel="noreferrer" aria-label={`Enquire about ${s.name}`}><ArrowUpRight size={18}/></a></div></article>)}</div>
        <div className="addons"><div><div className="section-kicker">THE FINISHING TOUCHES</div><h3>Make it <em>extra.</em></h3><p>Add a little sparkle, texture or dimension.</p><a className="button button-outline" href={wa} target="_blank" rel="noreferrer">Ask about add-ons <ArrowUpRight size={16}/></a></div><div className="addon-list">{addOns.map(([n,p],i)=><div key={n}><span>{String(i+1).padStart(2,"0")}</span><b>{n}</b><small>{p}</small></div>)}</div></div>
        <p className="price-note">Prices are starting rates. Final pricing may vary by design, length and selected add-ons. Removal: ₹100 per hand.</p>
      </div></section>

      <section className="gallery-section section wrap" id="gallery"><div className="section-top"><div><div className="section-kicker">03 / THE PORTFOLIO</div><h2>Little works of <em>art.</em></h2></div><a className="text-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={16}/> See Instagram <ArrowUpRight size={15}/></a></div>
        <div className="gallery-grid">{gallery.map(([src,alt,num],i)=><a className={`gallery-item gallery-${i+1}`} href={instagram} target="_blank" rel="noreferrer" key={src}><img src={`/images/${src}`} alt={alt}/><div className="gallery-overlay"><span>{num} / 06</span><b>{alt}</b><ArrowUpRight size={18}/></div></a>)}</div>
      </section>

      <section className="quote-section"><div className="wrap quote-inner"><span className="quote-mark">“</span><p>Let your hands make<br/>a <em>beautiful</em> first impression.</p><span className="quote-sign">— Riya</span></div></section>

      <section className="booking-section section wrap" id="contact"><div className="booking-copy"><div className="section-kicker">04 / LET'S GET YOU BOOKED</div><h2>Your next favourite<br/><em>set starts here.</em></h2><p>Tell us what you're dreaming of. We'll help you find the right service and a time that works.</p><div className="contact-details"><div><MapPin size={18}/><span><b>Chennai, Tamil Nadu</b><small>Home service available</small></span></div><div><Clock3 size={18}/><span><b>By appointment</b><small>Message for available slots</small></span></div><div><Phone size={18}/><span><b>+91 82487 39478</b><small>WhatsApp enquiries welcome</small></span></div></div><div className="social-row"><a href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a><a href={instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a><a href={email}><Mail size={17}/> Email</a></div></div><BookingForm/></section>

      <footer><div className="wrap footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark">R<span>✦</span></span><span className="brand-copy">NAIL ARTISTRY<small>BY RIYA</small></span></a><p>Art at your fingertips. A little joy in every detail.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Nail Artistry by Riya</span><span>Made with care in Chennai <Heart size={12}/></span><span>All appointments by prior booking</span></div></footer>
    </main>
  );
}
