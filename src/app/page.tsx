import LenisProvider from './LenisProvider'
import Countdown from './Countdown'
import ScrollReveal from './ScrollReveal'
import BookReveal from './BookReveal'
import AuthorImage from './AuthorImage'

const BUY_URL = 'https://pay.hotmart.com/P105309207S?bid=1775882285033'

export default function Home() {
  return (
    <LenisProvider>
      {/* HERO */}
      <section id="hero">
        <p className="hero-tag">Sebastián Jara Krasinski · Primer Libro</p>
        <h1 className="hero-title">
          Los 10 Pasos<br />
          <span>Secretos del Éxito</span>
        </h1>
        <p className="hero-subtitle">Este libro no te motiva. Te confronta.</p>
        <div className="hero-cta">
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quiero el libro — $10.00
          </a>
        </div>
        <p className="hero-price">
          Precio de lanzamiento: <s>$22.99</s> →{' '}
          <strong className="price-blink">$10.00</strong>
        </p>
        <div className="scroll-hint">Descubre más</div>
      </section>

      {/* MARQUEE */}
      <section id="quote-band">
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-wrapper">
            <span className="marquee-item">EL ÉXITO NO ES PARA EL QUE SABE — ES PARA EL QUE HACE</span>
            <span className="marquee-item">·</span>
            <span className="marquee-item">DISCIPLINA ANTES QUE MOTIVACIÓN</span>
            <span className="marquee-item">·</span>
            <span className="marquee-item">NADIE VIENE A SALVARTE</span>
            <span className="marquee-item">·</span>
            <span className="marquee-item">EL ÉXITO NO ES PARA EL QUE SABE — ES PARA EL QUE HACE</span>
            <span className="marquee-item">·</span>
            <span className="marquee-item">DISCIPLINA ANTES QUE MOTIVACIÓN</span>
            <span className="marquee-item">·</span>
            <span className="marquee-item">NADIE VIENE A SALVARTE</span>
            <span className="marquee-item">·</span>
          </div>
        </div>
      </section>

      {/* PROMISE — sección 2 */}
      <section id="promise">
        <div className="container">
          <p className="section-label">La promesa</p>
          <h2 className="section-title">
            Todo lo que te dijeron<br />sobre el éxito era mentira.
          </h2>
          <div className="divider" />
          <p className="lead">
            No te prometemos inspiración. Te prometemos la verdad. La que incomoda, la que nadie
            publica, la que realmente transforma.
          </p>
          <p className="body-text">
            Este libro nace desde la realidad — desde los errores, la presión y la incomodidad de
            saber que tu vida puede ser más pero no saber cómo llegar ahí. Cada capítulo fue escrito
            para que despiertes, no para que te sientas bien.
          </p>
        </div>
      </section>

      {/* BOOK REVEAL — sección 3 */}
      <BookReveal src="/book.webp" />

      {/* PALABRAS DEL AUTOR — sección 4 (justo después del libro) */}
      <section id="palabras-autor">
        <div className="palabras-inner">
          <div>
            <div className="author-avatar">
              <AuthorImage />
            </div>
          </div>
          <div>
            <p className="section-label author-label">Palabras del autor</p>
            <blockquote className="palabras-quote">
              <span className="palabras-quote-mark">&ldquo;</span>
              &ldquo;La mayoría de las personas no falla por falta de capacidad. Falla por falta de decisión.&rdquo;
            </blockquote>
            <p className="palabras-body">
              Este libro no te va a dar una fórmula mágica. Te va a dar algo más valioso:{' '}
              <strong style={{ color: 'var(--gold)' }}>claridad.</strong> Y con claridad vienen las
              decisiones. Y con decisiones vienen los resultados.
            </p>
          </div>
        </div>
      </section>

      {/* FOR WHO — sección 5 */}
      <section id="for-who">
        <div className="container">
          <p className="section-label">¿Para quién es este libro?</p>
          <h2 className="section-title">
            No es para todos.<br />Es para los que están listos.
          </h2>
          <div className="divider" />
        </div>
        <div className="for-who-grid" style={{ maxWidth: 860, margin: '60px auto 0', padding: '0 24px' }}>
          {[
            { icon: '🔥', title: 'El que está harto de conformarse', desc: 'Sabes que puedes más. Pero algo te detiene. Este libro te dice qué es.' },
            { icon: '💡', title: 'El que busca claridad real', desc: 'No fórmulas. No motivación barata. La verdad sin filtros sobre cómo funciona el éxito.' },
            { icon: '⚡', title: 'El que necesita pasar a la acción', desc: 'Llevas meses pensando. Es hora de ejecutar. Cada capítulo es un empujón concreto.' },
          ].map((item) => (
            <div className="for-who-item" key={item.title}>
              <span className="for-who-icon">{item.icon}</span>
              <p className="for-who-title">{item.title}</p>
              <p className="for-who-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TE IDENTIFICAS — sección 6 (viene después de for-who, como en el original) */}
      <section id="te-identificas">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Este libro es para ti si…</p>
          <h2 className="section-title">¿Te identificas?</h2>
          <div className="divider" />
        </div>
        <div className="identificas-grid">
          {[
            { num: '01', text: 'Sabes que quieres más, pero sientes que algo interno siempre te frena antes de empezar.' },
            { num: '02', text: 'Estás cansado de empezar y no terminar, de saber lo que tienes que hacer… pero no hacerlo.' },
            { num: '03', text: 'Llevas tiempo esperando el momento correcto para dar el siguiente paso y ese momento nunca llega.' },
            { num: '04', text: 'Estás dispuesto a pagar el precio real del éxito — no el que se publica en redes, el que nadie muestra.' },
          ].map((item) => (
            <div className="identificas-item" key={item.num}>
              <span className="identificas-num">{item.num}</span>
              <p className="identificas-text">{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Sí, este libro es para mí — $10.00
          </a>
        </div>
      </section>

      {/* REASONS */}
      <section id="reasons" style={{ padding: '100px 24px', background: 'var(--black)', maxWidth: 860, margin: '0 auto' }}>
        <div className="reasons-header" style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Por qué comprarlo</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(40px, 8vw, 72px)', textTransform: 'uppercase', lineHeight: 0.9 }}>
            6 Razones para<br />tomar la decisión
          </h2>
          <div className="divider" />
        </div>

        {[
          {
            num: '01',
            title: 'Te dice la verdad, no lo que quieres escuchar',
            text: 'Sin frases vacías. Sin motivación de temporada. Solo lo que realmente funciona en la vida real, escrito por alguien que lo vivió desde cero.',
          },
          {
            num: '02',
            title: 'Aprenderás a convertir el miedo en tu mayor ventaja',
            text: 'Dejarás de huir de él y empezarás a usarlo como brújula. Cada vez que algo te dé miedo, sabrás exactamente qué significa.',
          },
          {
            num: '03',
            title: 'Descubrirás por qué la motivación te está fallando',
            text: 'Y cómo reemplazarla con algo que sí funciona: disciplina real. La que actúa sin ganas. La que no negocia contigo mismo.',
          },
          {
            num: '04',
            title: 'Te enseña a construir hábitos que generan resultados',
            text: 'No en los días buenos, sino en los días donde todo pesa. Ahí es donde se construyen los imperios — en lo que haces cuando nadie te ve.',
          },
          {
            num: '05',
            title: 'Rompe los patrones de pensamiento que te tienen estancado',
            text: 'Aprenderás a pensar diferente al promedio para dejar de vivir resultados promedio. Pensar igual que todos te llevará al mismo lugar que todos.',
          },
          {
            num: '06',
            title: 'Es acción desde la primera página',
            text: 'Cada capítulo es una decisión. No teoría. No relleno. Ejecución pura, escrita por alguien que construyó desde donde la mayoría se rinde.',
          },
        ].map((r) => (
          <div className="reason-row" key={r.num}>
            <div className="reason-num">{r.num}</div>
            <div className="reason-content">
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', padding: '60px 24px 0' }}>
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 13, padding: '20px 56px', background: '#C9A84C' }}
          >
            Quiero estas 6 transformaciones — $10.00
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: '#444' }}>
            📚 Entrega digital inmediata · 🔒 Pago seguro
          </p>
        </div>
      </section>

      {/* CHAPTERS */}
      <section id="chapters" style={{ padding: '100px 24px', background: 'var(--dark)', textAlign: 'center' }}>
        <div className="chapters-header">
          <p className="section-label">Contenido</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(50px, 9vw, 90px)', textTransform: 'uppercase', lineHeight: 0.85, letterSpacing: '-0.02em' }}>
            10 CAPÍTULOS.<br />10 DECISIONES.
          </h2>
          <div className="divider" />
        </div>
        <div className="chapters-grid">
          {[
            ['Cap. 01', 'La mentira del éxito'],
            ['Cap. 02', 'Nadie viene a salvarte'],
            ['Cap. 03', 'El poder de tu mente'],
            ['Cap. 04', 'Disciplina antes que motivación'],
            ['Cap. 05', 'El miedo como brújula'],
            ['Cap. 06', 'Hábitos que construyen imperios'],
            ['Cap. 07', 'El sacrificio — el precio real'],
            ['Cap. 08', 'Pensar diferente al promedio'],
            ['Cap. 09', 'Ejecutar sin permiso'],
            ['Cap. 10', 'Convertirte en una máquina imparable'],
          ].map(([num, title]) => (
            <div className="chapter-card" key={num}>
              <p className="ch-num">{num}</p>
              <p className="ch-title">{title}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Acceder a los 10 capítulos — $10.00
          </a>
        </div>
      </section>

      {/* NOT HERE */}
      <section id="not-here" style={{ padding: '100px 24px', background: 'var(--black)', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label">Lo que NO encontrarás aquí</p>
          <h2 className="section-title">Sin relleno.<br />Sin mentiras.</h2>
          <div className="divider" />
          <p className="body-text">
            Este no es otro libro de autoayuda. No hay fórmulas mágicas, no hay promesas vacías, no hay
            atajos.
          </p>
          <div className="not-here-grid">
            {['Frases motivacionales', 'Fórmulas mágicas', 'Atajos al éxito', 'Teorías sin experiencia', 'Consejos de quien no lo vivió', 'Promesas vacías'].map((tag) => (
              <span className="not-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW */}
      <section id="preview" style={{ padding: '100px 24px', background: 'var(--dark)', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label">Vista previa</p>
          <h2 className="section-title">Lee antes<br />de decidir</h2>
          <div className="divider" />
          <div className="preview-box">
            <p className="preview-chapter">Capítulo 1</p>
            <h3 className="preview-title">La mentira del éxito</h3>
            <p className="preview-text">
              Desde pequeño nos enseñaron una historia equivocada. Nos dijeron que si estudiábamos, si
              hacíamos las cosas bien, si seguíamos el camino correcto… el éxito iba a llegar.
              <br /><br />
              Mentira.
              <br /><br />
              El éxito no llega. Se construye. Y se construye en silencio, en frustración, en momentos
              donde nadie te aplaude… y muchas veces donde ni siquiera tú crees en ti.
            </p>
            <div className="preview-fade">
              <p style={{ fontSize: 13, color: '#444', letterSpacing: '0.1em' }}>— continúa en el libro —</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quiero leer el resto — $10.00
            </a>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" style={{ padding: '100px 24px', background: 'var(--dark)' }}>
        <div className="author-inner">
          <div>
            <div className="author-avatar">
              <AuthorImage />
            </div>
          </div>
          <div>
            <p className="section-label author-label">Sobre el autor</p>
            <h2 className="author-name">
              Sebastián<br />Jara Krasinski
            </h2>
            <p className="author-bio">
              Empresario costarricense reconocido por su mentalidad disruptiva y su capacidad de
              construir negocios de alto impacto desde cero. Sin educación formal tradicional, construyó
              su camino durante los últimos 17 años con formación autodidacta intensa en negocios,
              estrategia y neuromarketing.
            </p>
            <p className="author-bio">
              Desde los 15 años tuvo que aprender a sobrevivir, trabajar y abrirse paso por sí mismo.
              Hoy lidera múltiples empresas y es considerado uno de los empresarios jóvenes más
              influyentes de Costa Rica.
            </p>
            <div className="author-brands">
              {['Global Corporation Krasinski', 'Comida Callejera XL', 'Chicken Frito', 'Double K Agency'].map(
                (b) => (
                  <span className="brand-tag" key={b}>{b}</span>
                )
              )}
            </div>
            <blockquote className="author-quote">
              &ldquo;Su historia no es la de alguien que tuvo ventajas, sino la de alguien que decidió
              construirlas.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee">
        <div className="guarantee-inner">
          <div className="guarantee-badge">
            <span>100%</span>
            <span>Garantía de satisfacción</span>
          </div>
          <div className="guarantee-text">
            <h3>Si no te aporta nada, te devolvemos tu dinero.</h3>
            <p>
              Creemos en este libro con tanta convicción que asumimos el riesgo nosotros. Tienes{' '}
              <strong>7 días</strong> para leer el primer capítulo. Si no sientes que vale cada centavo,
              escríbenos y te reembolsamos. Sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta-final">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Toma la decisión</p>
          <h2 className="cta-big">
            Deja de<br />
            <em>esperar.</em>
          </h2>

          <div className="price-display">
            <span className="price-label">Precio de lanzamiento</span>
            <span className="price-old">$22.99</span>
            <span className="price-new">$10</span>
          </div>

          <p style={{ fontSize: 13, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>
            Oferta por tiempo limitado
          </p>

          <Countdown />

          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 15, padding: '22px 64px' }}
          >
            Quiero el libro ahora — $10.00
          </a>

          <p className="cta-note">📚 Entrega digital inmediata · 🔒 Pago seguro · ✅ Garantía de 7 días</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Sebastián Jara Krasinski · Global Corporation Krasinski · Todos los derechos reservados</p>
      </footer>

      {/* Client-side scroll reveal */}
      <ScrollReveal />
    </LenisProvider>
  )
}
