'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Gamepad2, Sparkles, Terminal, WandSparkles } from 'lucide-react'

const skills = [
  { name: 'HTML', level: 'Tuzilish va semantika', value: 88, color: 'coral', icon: '</>' },
  { name: 'CSS', level: 'Dizayn va animatsiya', value: 78, color: 'violet', icon: '✳' },
  { name: 'JavaScript', level: 'Interaktivlik va mantiq', value: 62, color: 'lime', icon: 'JS' },
]

const projects = [
  { number: '01', title: 'Shaxsiy sahifa', type: 'Portfolio • HTML / CSS', color: 'project-peach', mark: 'A.' },
  { number: '02', title: 'Ranglar olami', type: 'Interaktiv loyiha • JavaScript', color: 'project-lilac', mark: 'Aa' },
  { number: '03', title: 'Kichik do‘kon', type: 'Landing page • Responsive', color: 'project-yellow', mark: 'shop' },
]

export function Portfolio() {
  const [score, setScore] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [target, setTarget] = useState({ left: 51, top: 48 })

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => {
      setTimeLeft((remaining) => {
        if (remaining <= 1) {
          window.clearInterval(timer)
          setPlaying(false)
          return 0
        }
        return remaining - 1
      })
    }, 1000)
    return () => window.clearInterval(timer)
  }, [playing])

  function startGame() {
    setScore(0)
    setTimeLeft(15)
    setPlaying(true)
    moveTarget()
  }

  function moveTarget() {
    setTarget({ left: 8 + Math.random() * 82, top: 12 + Math.random() * 72 })
  }

  function catchTarget() {
    if (!playing) return
    setScore((current) => current + 1)
    moveTarget()
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Aziza bosh sahifasi"><span className="brand-mark">A</span><span>aziza<span className="brand-dot">.</span></span></a>
        <nav aria-label="Asosiy navigatsiya">
          <a href="#men-haqimda">Men haqimda</a><a href="#mahoratlar">Mahoratlar</a><a href="#loyihalar">Loyihalar</a>
        </nav>
        <a className="nav-cta" href="#oyin">Birga o‘ynaymiz <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> FRONTEND DASTURLASHGA QIZIQUVCHI</div>
          <h1>Salom, men<br />Aziza<Sparkles aria-hidden="true" className="hero-star" /><br /><span className="outline-text">Quryozova.</span></h1>
          <div className="hero-bottom">
            <p>G‘oyalarni kod bilan jonlantiraman.<br />Hali o‘rganyapman, lekin katta orzularim bor.</p>
            <a className="round-link" href="#men-haqimda" aria-label="Men haqimda bo‘limiga o‘tish"><ArrowDown size={20} /></a>
          </div>
          <span className="hero-index">TOSHKENT, UZBEKISTAN · 2026</span>
        </div>
        <div className="hero-art" aria-label="Kod yozayotgan qizning ijodiy illustratsiyasi">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="spark spark-a">✦</div><div className="spark spark-b">✳</div><div className="spark spark-c">✦</div>
          <div className="art-note note-top"><span className="note-dot" /> hozir o‘rganmoqda <b>JS</b></div>
          <div className="art-card">
            <div className="card-window"><span /><span /><span /><i>aziza.dev</i></div>
            <div className="code-lines"><span className="code-muted">01</span><span><b>const</b> <em>aziza</em> = {'{'}</span><span className="code-muted">02</span><span>&nbsp;&nbsp; sinf: <strong>10</strong>,</span><span className="code-muted">03</span><span>&nbsp;&nbsp; qiziqish: <strong>&quot;web&quot;</strong>,</span><span className="code-muted">04</span><span>&nbsp;&nbsp; orzu: <strong>&quot;katta&quot;</strong></span><span className="code-muted">05</span><span>{'}'} <b>;</b></span><span className="code-cursor">▍</span></div>
            <div className="code-footer"><span><span className="tiny-green" /> hammasi joyida</span><span>UTF-8&nbsp;&nbsp; JS</span></div>
          </div>
          <div className="art-sticker sticker-one"><Code2 size={19} /><span>3 yil<br /><b>tajriba</b></span></div>
          <div className="art-sticker sticker-two"><span className="sticker-face">☺</span><span>doimiy<br /><b>o‘sish</b></span></div>
          <div className="art-note note-bottom"><span className="terminal-icon"><Terminal size={13} /></span> console.log(<b>&quot;salom!&quot;</b>)</div>
          <div className="art-caption">KOD — MENING IJOD MAYDONIM</div>
        </div>
        <div className="hero-ticker"><div className="ticker-track"><span>G‘OYALAR → KODGA</span><b>✳</b><span>DOIM O‘RGANISHDA</span><b>✳</b><span>WEB YARATISH</span><b>✳</b><span>G‘OYALAR → KODGA</span><b>✳</b><span>DOIM O‘RGANISHDA</span><b>✳</b></div></div>
      </section>

      <section className="about section-wrap reveal" id="men-haqimda">
        <div className="section-label"><span>01 / MEN HAQIMDA</span><span>O‘ZIM HAQIMDA BIR OZ</span></div>
        <div className="about-content"><h2>Qiziqishdan<br />boshlangan yo‘l<span className="period">.</span></h2><div className="about-text"><p className="about-lead">Men 10-sinf o‘quvchisiman. Uch yildan beri IT olamida yangi narsalarni o‘rganib, o‘z g‘oyalarimni kichik loyihalarga aylantiryapman.</p><p>HTML, CSS va JavaScript bilan ishlayman. Har bir yangi kod — o‘zim uchun yangi imkoniyat. Maqsadim: o‘rganishda davom etish va chiroyli, foydali saytlar yaratish.</p><div className="about-signature">O‘rganaman. Sinab ko‘raman. Yarataman. <span>↗</span></div></div></div>
        <div className="about-stats"><div><b>03<span>+</span></b><small>YIL ITDA</small></div><div><b>03</b><small>ASOSIY TEXNOLOGIYA</small></div><div><b>∞</b><small>YANGI G‘OYALAR</small></div></div>
      </section>

      <section className="skills-section section-wrap" id="mahoratlar">
        <div className="section-label reveal"><span>02 / MENING ASBOBLARIM</span><span>HAR KUNI YAXSHIROQ</span></div>
        <div className="skills-heading reveal"><h2>O‘rganayotgan<br />mahoratlarim<span className="period">.</span></h2><p>Har bir texnologiya — yangi imkoniyat.<br />Hozircha shu uchlik bilan sehr qilaman.</p></div>
        <div className="skill-grid">{skills.map((skill, index) => <article className={`skill-card ${skill.color} reveal`} key={skill.name} style={{ transitionDelay: `${index * 100}ms` }}><div className="skill-card-top"><span className="skill-icon">{skill.icon}</span><span className="skill-number">0{index + 1}</span></div><div className="skill-info"><h3>{skill.name}</h3><p>{skill.level}</p></div><div className="skill-meter"><span style={{ width: `${skill.value}%` }} /></div><div className="skill-card-bottom"><span>HOZIRGI DARAJAM</span><b>{skill.value}%</b></div></article>)}</div>
        <div className="learning-note reveal"><Sparkles size={18} /><span>Jarayon muhim — hali oldinda o‘rganadiganlarim juda ko‘p!</span><span className="note-arrow">↗</span></div>
      </section>

      <section className="projects-section section-wrap" id="loyihalar">
        <div className="section-label reveal"><span>03 / TANLANGAN ISHLAR</span><span>O‘RGANISH JARAYONIDAGI LOYIHALAR</span></div>
        <div className="projects-heading reveal"><h2>Kichik qadamlar,<br />katta g‘oyalar<span className="period">.</span></h2><span className="project-count">01 — 03</span></div>
        <div className="project-list">{projects.map((project) => <article className="project-row reveal" key={project.number}><span className="project-number">{project.number}</span><div className={`project-visual ${project.color}`}><span>{project.mark}</span><div className="visual-orb" /></div><div className="project-info"><h3>{project.title}</h3><p>{project.type}</p></div><a href="#oyin" className="project-arrow" aria-label={`${project.title} loyihasi haqida`}><ArrowUpRight size={20} /></a></article>)}</div>
        <p className="projects-footnote">Bu loyihalar — mening o‘rganish yo‘limdagi kichik tajribalarim. Yangi ishlar tez orada!</p>
      </section>

      <section className="game-section" id="oyin">
        <div className="game-inner">
          <div className="game-intro reveal"><div className="game-kicker"><Gamepad2 size={16} /> KICHIK TANAFFUS</div><h2>Bir oz<br />o‘ynaymizmi<span>?</span></h2><p>Yulduzchani tutishga ulgur!<br />15 soniyada nechta yig‘a olasan?</p><div className="game-meta"><span><i /> TEZLIKNI SINAB KO‘R</span><span>MINI O‘YIN 001</span></div></div>
          <div className="game-board reveal" aria-label="Yulduzchani bosib ochko yig‘ish mini o‘yini">
            <div className="board-grid" />
            <div className="game-status"><span className={playing ? 'live-dot active' : 'live-dot'} />{playing ? 'O‘YIN KETYAPTI' : timeLeft === 0 ? 'O‘YIN TUGADI' : 'TAYYORMISAN?'}</div>
            <div className="game-score"><div><small>OCHKO</small><b>{String(score).padStart(2, '0')}</b></div><div className="timer"><small>QOLGAN VAQT</small><b>00:{String(timeLeft).padStart(2, '0')}</b></div></div>
            <div className="play-area">{playing ? <button className="game-target" style={{ left: `${target.left}%`, top: `${target.top}%` }} onClick={catchTarget} aria-label="Yulduzchani tut"><Sparkles size={20} aria-hidden="true" /></button> : <div className="game-ready"><Sparkles className="ready-star" aria-hidden="true" /><p>{timeLeft === 0 ? `Zo‘r! ${score} ta yulduzcha tutding!` : 'Yulduzcha shu yerda paydo bo‘ladi'}</p><button className="start-button" onClick={startGame}>{timeLeft === 0 ? 'QAYTA O‘YNASH' : 'O‘YINNI BOSHLASH'} <ArrowRight size={16} /></button></div>}</div>
            <div className="board-footer"><span><WandSparkles size={14} /> YULDUZCHANI TEZ BOS</span><span>SPACE TO PLAY</span></div>
          </div>
        </div>
      </section>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">A</span><span>aziza<span className="brand-dot">.</span></span></a><p>O‘rganish davom etadi <span>✳</span></p><span className="footer-copy">© 2026 QURYOZOVA AZIZA · UZBEKISTAN</span><a className="back-top" href="#home">YUQORIGA ↑</a></footer>
    </main>
  )
}
