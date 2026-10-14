"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Flame, GraduationCap, Sparkles, Trophy, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type SavedProgress = { xp: number; streak: number; completed: string[]; lastActive: string };
const initial: SavedProgress = { xp: 120, streak: 3, completed: [], lastActive: "" };

export default function Dashboard() {
  const [progress, setProgress] = useState<SavedProgress>(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("studyarcade-progress-v1");
      if (raw) setProgress({ ...initial, ...JSON.parse(raw) });
    } catch { localStorage.removeItem("studyarcade-progress-v1"); }
    setReady(true);
  }, []);
  const level = Math.floor(progress.xp / 200) + 1;
  const levelXp = progress.xp % 200;
  const subjects = [
    { name: "Matematika", desc: "Logika & pemecahan masalah", icon: "∑", tone: "#8b5cf6", lessons: 12, href: "/subjects/matematika" },
    { name: "IPA", desc: "Jelajahi dunia sains", icon: "⚗️", tone: "#38bdf8", lessons: 10, href: "/subjects/ipa" },
    { name: "Informatika", desc: "Berpikir komputasional", icon: "⌘", tone: "#4ade80", lessons: 9, href: "/subjects/informatika" },
    { name: "Bahasa Inggris", desc: "Build your language skills", icon: "文", tone: "#fb923c", lessons: 11, href: "/subjects/english" },
  ];
  return <div className="app-shell">
    <aside className="sidebar">
      <Link href="/" className="brand"><span className="brand-mark">✦</span><span>Study<span style={{color:"#a78bfa"}}>Arcade</span></span></Link>
      <div className="nav-label">MENU UTAMA</div>
      <Link className="nav-link active" href="/"><span>▦</span> Dashboard</Link>
      <Link className="nav-link" href="/subjects"><BookOpen size={17}/> Pelajaran</Link>
      <Link className="nav-link" href="/flashcards"><span>▤</span> Flashcards</Link>
      <Link className="nav-link" href="/challenges"><Zap size={17}/> Tantangan Harian</Link>
      <div className="nav-label" style={{marginTop:24}}>PERKEMBANGAN</div>
      <Link className="nav-link" href="/progress"><span>◷</span> Progres Belajar</Link>
      <Link className="nav-link" href="/achievements"><Trophy size={17}/> Pencapaian</Link>
      <div className="sidebar-bottom"><div style={{display:"flex",alignItems:"center",gap:8,fontWeight:750,fontSize:13}}><Flame size={17} color="#fb923c"/> Jaga streak-mu!</div><p className="muted" style={{fontSize:11,lineHeight:1.6,margin:"8px 0 12px"}}>Belajar sedikit setiap hari bikin kamu makin jago.</p><Link className="btn-primary" style={{width:"100%",padding:10}} href="/subjects">Mulai belajar <ArrowRight size={15}/></Link></div>
    </aside>
    <div className="main-area">
      <header className="topbar"><div><div className="eyebrow">RABU, 14 OKTOBER 2026</div><div style={{fontWeight:800,fontSize:18,marginTop:5}}>Dashboard belajar</div></div><div style={{display:"flex",alignItems:"center",gap:10}}><span className="hide-mobile muted" style={{fontSize:12}}>Progres tersimpan di perangkat ini</span><div style={{width:39,height:39,borderRadius:13,display:"grid",placeItems:"center",background:"#292348",border:"1px solid #8b5cf644"}}><GraduationCap size={20} color="#c4b5fd"/></div></div></header>
      <main className="content">
        <section style={{display:"grid",gridTemplateColumns:"minmax(0,1.55fr) minmax(220px,.8fr)",gap:18}} className="hero-grid">
          <div className="panel" style={{padding:"28px 28px 24px",position:"relative",overflow:"hidden",minHeight:235,background:"radial-gradient(ellipse at 85% 10%,#7756e32e,transparent 40%),linear-gradient(120deg,#1b2341,#141c32)"}}>
            <div className="eyebrow" style={{display:"flex",alignItems:"center",gap:6}}><Sparkles size={13}/> BELAJAR, MAIN, NAIK LEVEL</div>
            <h1 style={{fontSize:"clamp(25px,3vw,35px)",lineHeight:1.17,letterSpacing:"-1.2px",margin:"14px 0 10px",maxWidth:440}}>Setiap hari adalah kesempatan untuk <span style={{color:"#b6a0ff"}}>naik level!</span></h1>
            <p className="muted" style={{fontSize:13,lineHeight:1.7,maxWidth:420,marginBottom:22}}>Pilih pelajaran, tantang dirimu, dan kumpulkan XP sambil belajar dengan cara yang lebih seru.</p>
            <Link className="btn-primary" href="/subjects">Lanjut belajar <ArrowRight size={16}/></Link>
            <div style={{position:"absolute",right:28,bottom:25,fontSize:75,opacity:.17}} className="hide-mobile">🎓</div>
          </div>
          <div className="panel" style={{padding:23,display:"flex",flexDirection:"column",justifyContent:"space-between",background:"radial-gradient(circle at 100% 0%,#f59e0b20,transparent 45%),#151d30"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><span className="eyebrow" style={{color:"#fdba74"}}>STREAK BELAJAR</span><Flame color="#fb923c" size={21}/></div>
            <div><div style={{fontSize:42,fontWeight:850,letterSpacing:-2}}>{progress.streak} <span style={{fontSize:16,color:"#fb923c"}}>hari 🔥</span></div><p className="muted" style={{fontSize:12,lineHeight:1.6}}>Konsisten sedikit demi sedikit. Kamu bisa!</p></div>
            <Link href="/challenges" style={{fontSize:12,color:"#fdba74",fontWeight:750,display:"flex",alignItems:"center",gap:5}}>Lihat tantangan <ChevronRight size={15}/></Link>
          </div>
        </section>
        <section style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:13,marginTop:18}}>
          <div className="stat-card"><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span className="muted" style={{fontSize:11}}>Total XP</span><Zap size={17} color="#a78bfa"/></div><div style={{fontSize:27,fontWeight:850,marginTop:10}}>{ready?progress.xp:initial.xp}<span style={{fontSize:11,color:"#a78bfa",marginLeft:6}}>XP</span></div><div className="muted" style={{fontSize:10,marginTop:5}}>Terus kumpulkan poin!</div></div>
          <div className="stat-card"><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span className="muted" style={{fontSize:11}}>Level saat ini</span><Trophy size={17} color="#fbbf24"/></div><div style={{fontSize:27,fontWeight:850,marginTop:10}}>{level}<span style={{fontSize:11,color:"#fbbf24",marginLeft:6}}>LEVEL</span></div><div className="progress-track" style={{marginTop:10}}><div className="progress-fill" style={{width:(levelXp/200*100)+"%"}}/></div></div>
          <div className="stat-card"><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span className="muted" style={{fontSize:11}}>Kuis selesai</span><CheckCircle2 size={17} color="#49e0b1"/></div><div style={{fontSize:27,fontWeight:850,marginTop:10}}>{progress.completed.length}<span style={{fontSize:11,color:"#49e0b1",marginLeft:6}}>KUIS</span></div><div className="muted" style={{fontSize:10,marginTop:5}}>Satu langkah lebih maju</div></div>
        </section>
        <section style={{marginTop:32}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:10,marginBottom:16}}><div><div className="eyebrow">PILIH JALURMU</div><h2 style={{fontSize:21,letterSpacing:-.5,margin:"7px 0 0"}}>Jelajahi pelajaran</h2><p className="muted" style={{fontSize:12,margin:"6px 0 0"}}>Materi SMP kelas 7, 8, dan 9.</p></div><Link href="/subjects" className="btn-ghost">Semua pelajaran <ArrowRight size={14}/></Link></div>
          <div className="subjects-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:13}}>
            {subjects.map(s=><Link key={s.name} href={s.href} className="subject-card"><div className="subject-icon" style={{background:s.tone+"20",color:s.tone}}>{s.icon}</div><h3 style={{fontSize:14,margin:"17px 0 6px"}}>{s.name}</h3><p className="muted" style={{fontSize:11,minHeight:30,lineHeight:1.5,margin:0}}>{s.desc}</p><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18,paddingTop:13,borderTop:"1px solid var(--line)"}}><span className="muted" style={{fontSize:10}}>{s.lessons} materi</span><span style={{color:s.tone,fontSize:12}}>↗</span></div></Link>)}
          </div>
        </section>
        <section className="panel" style={{marginTop:23,padding:20,display:"flex",alignItems:"center",justifyContent:"space-between",gap:18,background:"linear-gradient(110deg,#1b2140,#15243a)"}}><div style={{display:"flex",alignItems:"center",gap:14}}><div className="subject-icon" style={{background:"#49e0b120",color:"#49e0b1"}}><Brain size={23}/></div><div><div style={{fontWeight:750,fontSize:14}}>Pemanasan 5 menit</div><div className="muted" style={{fontSize:11,marginTop:5}}>Selesaikan kuis singkat dan dapatkan XP pertamamu hari ini.</div></div></div><Link href="/quiz" className="btn-primary">Mulai kuis <ArrowRight size={15}/></Link></section>
        <footer className="muted" style={{fontSize:10,textAlign:"center",marginTop:30}}>StudyArcade · Belajar jadi lebih seru! · Progres tersimpan lokal di perangkatmu.</footer>
      </main>
    </div>
    <nav className="mobile-nav"><Link className="active" href="/"><span>▦</span>Beranda</Link><Link href="/subjects"><BookOpen size={19}/><span>Pelajaran</span></Link><Link href="/quiz"><Brain size={19}/><span>Kuis</span></Link><Link href="/progress"><Trophy size={19}/><span>Progres</span></Link></nav>
    <style jsx>{`@media(max-width:760px){.hero-grid{grid-template-columns:1fr!important}.subjects-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:420px){.subjects-grid{grid-template-columns:1fr!important}}`}</style>
  </div>;
}
