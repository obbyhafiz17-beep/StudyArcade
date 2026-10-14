"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Search } from "lucide-react";
import { useMemo, useState } from "react";

const subjects = [
 {name:"Matematika",slug:"matematika",icon:"∑",color:"#a78bfa",desc:"Logika, angka, aljabar, dan pemecahan masalah.",count:12,grades:"Kelas 7–9"},
 {name:"IPA",slug:"ipa",icon:"⚗️",color:"#38bdf8",desc:"Jelajahi makhluk hidup, energi, dan alam semesta.",count:10,grades:"Kelas 7–9"},
 {name:"Informatika",slug:"informatika",icon:"⌘",color:"#4ade80",desc:"Berpikir komputasional, data, dan teknologi digital.",count:9,grades:"Kelas 7–9"},
 {name:"Bahasa Inggris",slug:"english",icon:"文",color:"#fb923c",desc:"Vocabulary, grammar, reading, dan conversation.",count:11,grades:"Kelas 7–9"},
];
export default function SubjectsPage(){
 const [query,setQuery]=useState("");
 const [grade,setGrade]=useState("Semua kelas");
 const filtered=useMemo(()=>subjects.filter(s=>s.name.toLowerCase().includes(query.toLowerCase())&&(grade==="Semua kelas"||s.grades.includes(grade))),[query,grade]);
 return <div className="app-shell"><main style={{maxWidth:1050,margin:"0 auto",padding:"28px 20px 70px"}}>
 <Link href="/" className="muted" style={{display:"inline-flex",alignItems:"center",gap:7,fontSize:12}}><ArrowLeft size={15}/> Kembali ke dashboard</Link>
 <div style={{marginTop:30}}><div className="eyebrow">KATALOG BELAJAR</div><h1 style={{fontSize:32,letterSpacing:-1,margin:"8px 0"}}>Pelajaran untuk dijelajahi</h1><p className="muted" style={{fontSize:13}}>Pilih mata pelajaran dan mulai kumpulkan XP.</p></div>
 <div style={{display:"flex",gap:10,flexWrap:"wrap",margin:"25px 0"}}><label className="panel" style={{display:"flex",alignItems:"center",gap:9,padding:"0 14px",flex:"1 1 240px"}}><Search size={17} color="#94a3bd"/><input aria-label="Cari pelajaran" placeholder="Cari mata pelajaran..." value={query} onChange={e=>setQuery(e.target.value)} style={{background:"transparent",border:0,outline:0,color:"white",padding:"14px 0",width:"100%",fontSize:13}}/></label><select value={grade} onChange={e=>setGrade(e.target.value)} className="panel" style={{color:"white",padding:"0 14px",minHeight:48,outline:0}}><option>Semua kelas</option><option>Kelas 7</option><option>Kelas 8</option><option>Kelas 9</option></select></div>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(235px,1fr))",gap:15}}>{filtered.map(s=><Link key={s.slug} href={"/subjects/"+s.slug} className="subject-card"><div className="subject-icon" style={{background:s.color+"20",color:s.color}}>{s.icon}</div><h2 style={{fontSize:17,margin:"16px 0 7px"}}>{s.name}</h2><p className="muted" style={{fontSize:12,lineHeight:1.7,minHeight:42}}>{s.desc}</p><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--line)",paddingTop:14,marginTop:14}}><span className="muted" style={{fontSize:11}}><BookOpen size={13} style={{display:"inline",verticalAlign:"middle",marginRight:5}}/>{s.count} materi · {s.grades}</span><ArrowRight size={16} color={s.color}/></div></Link>)}</div>
 {filtered.length===0&&<div className="panel" style={{padding:25,textAlign:"center"}}>Pelajaran tidak ditemukan. Coba kata kunci lain.</div>}
 </main></div>
}
