"use client";

import React, { useState, useMemo } from "react";
import { ChatView } from "@/components/chat/ChatView";
import { MoonshotView } from "@/components/moonshot/MoonshotView";
import { CfoDashboard } from "@/components/cfo";
import {
  MessageSquare,
  Compass,
  BarChart3,
  LayoutDashboard,
  Search,
  Sparkles,
  Zap,
  Play,
  Heart,
  Clock,
  Flame,
  Bell,
  ChevronDown,
  ShieldCheck,
  Check,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export type NavPart = "overview" | "chat" | "cfo" | "moonshot";

export default function UnifiedSystemCockpit() {
  const [activePart, setActivePart] = useState<NavPart>("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // =========================================================================
  // REAL FINANCIAL LEVER SIMULATION LOGIC
  // =========================================================================
  const [leverTab, setLeverTab] = useState<"capital" | "staff" | "terms">("capital");
  const [retainerActive, setRetainerActive] = useState<boolean>(true);
  const [delayDefenseActive, setDelayDefenseActive] = useState<boolean>(false);
  const [covenantActive, setCovenantActive] = useState<boolean>(true);
  const [prepayRate, setPrepayRate] = useState<number>(40); // 0% to 100%

  // Real Small Business Cash Calculations:
  // Baseline Cash: $120,000 | Baseline Runway: 18.4 weeks
  const calculatedDelta = useMemo(() => {
    let delta = (prepayRate / 100) * 45000;
    if (retainerActive) delta += 15000;
    if (delayDefenseActive) delta += 12000;
    if (leverTab === "staff") delta -= 14000; // Dev payroll burden
    return Math.round(delta);
  }, [prepayRate, retainerActive, delayDefenseActive, leverTab]);

  const simulatedRunwayWeeks = useMemo(() => {
    const baseWeeks = 18.4;
    const additionalWeeks = (calculatedDelta / 28250) * 4.33;
    const res = Number((baseWeeks + additionalWeeks).toFixed(1));
    return res > 0 ? res : 0.0;
  }, [calculatedDelta]);

  const projectedCash = useMemo(() => {
    return 120000 + calculatedDelta;
  }, [calculatedDelta]);

  return (
    <div className="flex h-screen w-screen overflow-hidden p-2.5 gap-2.5 font-sans relative">
      {/* ============================================================== */}
      {/* 0. VIBRANT MULTI-TONE GREEN AMBIENT MESH (Frosted Refraction)  */}
      {/* ============================================================== */}
      <div className="fixed -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#10b981]/40 via-[#059669]/25 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="fixed top-1/4 -right-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#34d399]/35 via-[#047857]/30 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="fixed -bottom-28 left-1/4 w-[750px] h-[500px] rounded-full bg-gradient-to-tr from-[#059669]/40 via-[#10b981]/20 to-transparent blur-[130px] pointer-events-none z-0" />

      {/* ============================================================== */}
      {/* 1. LEFT NAVIGATION RAIL (White Transparent Liquid Crystal Rail)*/}
      {/* ============================================================== */}
      <aside className="w-60 flex-shrink-0 flex flex-col justify-between p-3.5 clay-sidebar text-slate-200 relative overflow-hidden z-20">
        {/* Subtle Ambient Backlights */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#00E5A3]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 -right-10 w-40 h-40 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none" />

        {/* Top Profile / Executive Workspace */}
        <div className="relative z-10 flex flex-col items-center text-center pb-2.5">
          <div className="relative mb-2 group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00E5A3] via-white/80 to-[#38bdf8] p-[2.5px] shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#08291e] flex items-center justify-center overflow-hidden border-2 border-white/40">
                <ShieldCheck className="w-7 h-7 text-[#00E5A3]" />
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00E5A3] border-2 border-white shadow-sm animate-pulse" />
          </div>

          <h2 className="text-sm font-extrabold text-white tracking-wide font-sans drop-shadow-sm">
            NeuralCFO Executive
          </h2>
          <p className="text-[10px] text-slate-300 font-sans font-medium">
            Acme Digital Agency · Sovereign
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="relative z-10 flex-1 py-1 flex flex-col space-y-1.5 overflow-y-auto">
          {/* Dashboard / Executive Overview */}
          <button
            onClick={() => setActivePart("overview")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-2xl text-left transition-all ${
              activePart === "overview"
                ? "clay-sidebar-item-active font-extrabold text-[#040907] shadow-md"
                : "clay-sidebar-item font-semibold text-slate-200 hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activePart === "overview" ? "bg-[#040907] text-[#00E5A3] shadow-xs" : "bg-white/10 text-slate-300"}`}>
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold tracking-wide">
              Dashboard
            </span>
          </button>

          {/* Part 1: Chat Co-Pilot */}
          <button
            onClick={() => setActivePart("chat")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-2xl text-left transition-all ${
              activePart === "chat"
                ? "clay-sidebar-item-active font-extrabold text-[#040907] shadow-md"
                : "clay-sidebar-item font-semibold text-slate-200 hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activePart === "chat" ? "bg-[#040907] text-[#00E5A3] shadow-xs" : "bg-white/10 text-slate-300"}`}>
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold tracking-wide block truncate">
                [Part 1] Chat Co-Pilot
              </span>
            </div>
          </button>

          {/* Part 2: CFO Matrix */}
          <button
            onClick={() => setActivePart("cfo")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-2xl text-left transition-all ${
              activePart === "cfo"
                ? "clay-sidebar-item-active font-extrabold text-[#040907] shadow-md"
                : "clay-sidebar-item font-semibold text-slate-200 hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activePart === "cfo" ? "bg-[#040907] text-[#00E5A3] shadow-xs" : "bg-white/10 text-slate-300"}`}>
              <BarChart3 className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold tracking-wide block truncate">
                [Part 2] CFO Matrix
              </span>
            </div>
          </button>

          {/* Part 3: Moonshot Studio */}
          <button
            onClick={() => setActivePart("moonshot")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-2xl text-left transition-all ${
              activePart === "moonshot"
                ? "clay-sidebar-item-active font-extrabold text-[#040907] shadow-md"
                : "clay-sidebar-item font-semibold text-slate-200 hover:text-white"
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activePart === "moonshot" ? "bg-[#040907] text-[#00E5A3] shadow-xs" : "bg-white/10 text-slate-300"}`}>
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold tracking-wide block truncate">
                [Part 3] Moonshot Studio
              </span>
            </div>
          </button>

          {/* Secondary Links */}
          <div className="pt-2 border-t border-white/15 space-y-1">
            <button
              onClick={() => setActivePart("cfo")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left text-slate-300 hover:text-white transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-rose-300" />
              <span className="text-xs font-semibold">Favorites & Levers</span>
            </button>

            <button
              onClick={() => setActivePart("chat")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left text-slate-300 hover:text-white transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="text-xs font-semibold">Activity & Audit</span>
            </button>
          </div>
        </nav>

        {/* Bottom Banner Card (Clay Dark Cushion) */}
        <div className="relative z-10 pt-2">
          <div className="p-3 rounded-2xl clay-dark-card border border-white/20 flex flex-col items-center text-center space-y-1.5">
            <div className="w-7 h-7 rounded-full bg-[#00E5A3]/20 border border-[#00E5A3]/40 flex items-center justify-center text-[#00E5A3] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-white tracking-wide">
                NeuralCFO Sovereign
              </div>
              <div className="text-[9px] text-slate-300 leading-tight">
                Zetaris Data & Meterless Verified
              </div>
            </div>
            <button
              onClick={() => setActivePart("cfo")}
              className="w-full py-1.5 px-3 rounded-xl clay-pill-sage text-[10px] tracking-wide shadow-md"
            >
              Live Health Status
            </button>
          </div>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* 2. MAIN WORKSPACE AREA                                         */}
      {/* ============================================================== */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden space-y-2.5 z-20">
        {/* Top Header Bar */}
        <header className="flex items-center justify-between gap-4 py-0.5">
          {/* Page Title */}
          <h1 className="text-xl font-black text-white tracking-tight font-sans drop-shadow-md">
            {activePart === "overview" && "Dashboard"}
            {activePart === "chat" && "Chat Co-Pilot"}
            {activePart === "cfo" && "CFO Finance Engine"}
            {activePart === "moonshot" && "Moonshot Strategic Studio"}
          </h1>

          {/* Search Pill */}
          <div className="flex-1 max-w-md relative">
            <Search className="w-3.5 h-3.5 text-white/70 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for scenarios, runway, models..."
              className="w-full clay-card-inset py-1.5 pl-9 pr-4 text-xs text-white placeholder-slate-300 focus:outline-none transition-all font-sans font-medium"
            />
          </div>

          {/* Right Header Buttons */}
          <div className="flex items-center space-x-2">
            {/* Notification Bell */}
            <button className="w-9 h-9 clay-btn flex items-center justify-center text-white relative">
              <Bell className="w-3.5 h-3.5" />
              <span className="w-2 h-2 rounded-full bg-[#00E5A3] absolute top-2 right-2 shadow-sm animate-pulse" />
            </button>

            {/* Profile Squircle */}
            <button
              onClick={() => setActivePart("overview")}
              className="w-9 h-9 clay-btn flex items-center justify-center text-white font-bold text-xs"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#00E5A3] to-[#007A63] text-[#040907] flex items-center justify-center text-[8px] font-black tracking-wider shadow-sm">
                CFO
              </div>
            </button>
          </div>
        </header>

        {/* Dynamic Navigable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* ============================================================== */}
          {/* PART 0: DASHBOARD OVERVIEW                                     */}
          {/* ============================================================== */}
          {activePart === "overview" && (
            <div className="space-y-2.5 pb-2">
              {/* Hero Banner Card (White Liquid Crystal Slab) */}
              <div className="relative clay-card p-4 overflow-hidden flex items-center justify-between shadow-xl border border-white/25">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5A3]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#38bdf8]/12 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-lg space-y-1">
                  <div className="flex items-center space-x-2 text-[#00E5A3] text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00E5A3]" />
                    <span>NeuralCFO Multi-Agent Decision Engine</span>
                  </div>
                  <h2 className="text-lg font-black text-white tracking-tight drop-shadow-sm">
                    Executive Strategy & Runway Command
                  </h2>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans font-medium">
                    Your small business runway is currently solvent at <strong className="text-[#00E5A3] font-extrabold">18.4 weeks</strong>. 
                    Simulate hiring 2 developers or deploy upfront retainers to push cash reserves past <strong className="text-[#38bdf8] font-extrabold">${(projectedCash).toLocaleString()}</strong>.
                  </p>
                  <div className="pt-1 flex items-center space-x-2.5">
                    <button
                      onClick={() => setActivePart("cfo")}
                      className="px-4 py-1.5 clay-pill-sage text-xs flex items-center space-x-1.5 shadow-md"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Play Simulation</span>
                    </button>
                    <button
                      onClick={() => setActivePart("chat")}
                      className="px-3.5 py-1.5 rounded-full clay-btn text-white text-xs font-bold transition-colors"
                    >
                      Ask AI Co-Pilot
                    </button>
                  </div>
                </div>

                {/* 3D Visual Mascot / Art Element */}
                <div className="hidden md:flex relative z-10 w-24 h-24 rounded-3xl clay-squircle items-center justify-center shadow-lg border border-white/30">
                  <Sparkles className="w-10 h-10 text-[#00E5A3] animate-pulse" />
                </div>
              </div>

              {/* 4 Raised White Crystal Cushion Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {/* Metric 1: Cash Runway */}
                <div className="clay-cushion p-3.5 space-y-1">
                  <div className="w-8 h-8 clay-squircle flex items-center justify-center text-[#00E5A3]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-300">
                      Cash Runway
                    </div>
                    <div className="text-xl font-black text-white tracking-tight font-sans drop-shadow-xs">
                      {simulatedRunwayWeeks} w
                    </div>
                    <div className="text-[9px] font-bold text-[#00E5A3]">
                      +{(((simulatedRunwayWeeks - 18.4) / 18.4) * 100).toFixed(0)}% simulated gain
                    </div>
                  </div>
                </div>

                {/* Metric 2: Floor Reserve */}
                <div className="clay-cushion p-3.5 space-y-1">
                  <div className="w-8 h-8 clay-squircle flex items-center justify-center text-[#38bdf8]">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-300">
                      Floor Reserve
                    </div>
                    <div className="text-xl font-black text-white tracking-tight font-sans drop-shadow-xs">
                      ${Math.round(projectedCash / 1000)}k
                    </div>
                    <div className="text-[9px] font-bold text-[#38bdf8]">
                      +${(calculatedDelta).toLocaleString()} safe buffer
                    </div>
                  </div>
                </div>

                {/* Metric 3: Reversibility */}
                <div className="clay-cushion p-3.5 space-y-1">
                  <div className="w-8 h-8 clay-squircle flex items-center justify-center text-slate-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-300">
                      Reversibility
                    </div>
                    <div className="text-xl font-black text-white tracking-tight font-sans drop-shadow-xs">
                      &lt; $5k
                    </div>
                    <div className="text-[9px] font-bold text-[#00E5A3]">
                      14-day window
                    </div>
                  </div>
                </div>

                {/* Metric 4: Proof Streak */}
                <div className="clay-cushion p-3.5 space-y-1">
                  <div className="w-8 h-8 clay-squircle flex items-center justify-center text-[#00E5A3]">
                    <Flame className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-300">
                      Proof Streak
                    </div>
                    <div className="text-xl font-black text-white tracking-tight font-sans drop-shadow-xs">
                      100%
                    </div>
                    <div className="text-[9px] font-bold text-[#00E5A3]">
                      0 unverified claims
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row: Runway Bar Chart + Donut Allocation Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
                {/* 26-Week Cash Runway Chart */}
                <div className="lg:col-span-2 clay-card p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold text-white font-sans drop-shadow-xs">
                        Runway Cash Overview
                      </h3>
                      <p className="text-[10px] text-slate-300 font-medium">
                        26-week baseline vs live lever simulation
                      </p>
                    </div>

                    <div className="clay-btn px-2.5 py-0.5 text-[11px] font-semibold text-white flex items-center space-x-1 cursor-pointer">
                      <span>This Quarter</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>

                  {/* 3D Rounded Vertical Pillar Bars */}
                  <div className="h-32 flex items-end justify-between px-3 pt-3 pb-1.5 clay-card-inset">
                    {[
                      { label: "W1", height: "55%", color: "from-[#00E5A3] to-[#007A63]", val: "$185k" },
                      { label: "W2", height: "70%", color: "from-[#007A63] to-[#043328]", val: "$172k" },
                      { label: "W3", height: "48%", color: "from-[#38bdf8] to-[#0284c7]", val: "$161k" },
                      { label: "W4", height: "85%", color: "from-[#00E5A3] to-[#007A63]", val: "$154k" },
                      { label: "W5", height: "62%", color: "from-[#0284c7] to-[#0369a1]", val: "$147k" },
                      { label: "W6", height: "78%", color: "from-[#007A63] to-[#054335]", val: "$155k" },
                      { label: "W7", height: "92%", color: "from-[#38bdf8] to-[#007A63]", val: "$168k" },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center space-y-1.5 h-full justify-end group cursor-pointer">
                        <span className="text-[8px] font-bold text-[#00E5A3] opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                          {bar.val}
                        </span>
                        <div
                          style={{ height: bar.height }}
                          className={`w-6 bg-gradient-to-t ${bar.color} clay-bar relative`}
                        />
                        <span className="text-[9px] font-bold text-slate-200">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capital Allocation Donut Chart */}
                <div className="clay-card p-4 space-y-2">
                  <div>
                    <h3 className="text-xs font-extrabold text-white font-sans drop-shadow-xs">
                      Capital Allocation
                    </h3>
                    <p className="text-[10px] text-slate-300 font-medium">
                      Portfolio resource distribution
                    </p>
                  </div>

                  {/* Donut Graphic & Legend */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-white/10"
                          strokeWidth="4"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Slice 1: Retainers (Mint) */}
                        <path
                          className="text-[#00E5A3]"
                          strokeDasharray="45, 100"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Slice 2: Dev Payroll (Deep Emerald) */}
                        <path
                          className="text-[#007A63]"
                          strokeDasharray="25, 100"
                          strokeDashoffset="-45"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Slice 3: Prepay Float (Icy Cyan) */}
                        <path
                          className="text-[#38bdf8]"
                          strokeDasharray="15, 100"
                          strokeDashoffset="-70"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-xs font-black text-white">45%</span>
                        <span className="text-[7px] font-bold text-slate-300 uppercase">Retainers</span>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="w-full mt-2 space-y-1 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1.5 text-slate-200 font-bold">
                          <span className="w-2 h-2 rounded-full bg-[#00E5A3]" />
                          <span>Upfront Retainers</span>
                        </span>
                        <span className="font-extrabold text-white">45%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1.5 text-slate-200 font-bold">
                          <span className="w-2 h-2 rounded-full bg-[#007A63]" />
                          <span>Dev Payroll</span>
                        </span>
                        <span className="font-extrabold text-white">25%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1.5 text-slate-200 font-bold">
                          <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                          <span>Prepay Float</span>
                        </span>
                        <span className="font-extrabold text-white">15%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1.5 text-slate-200 font-bold">
                          <span className="w-2 h-2 rounded-full bg-white/40" />
                          <span>Working Buffer</span>
                        </span>
                        <span className="font-extrabold text-white">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Recently Modeled + Sensible Live Lever Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                {/* Recently Modeled Scenarios */}
                <div className="clay-card p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-extrabold text-white font-sans drop-shadow-xs">
                      Recently Analyzed Levers
                    </h3>
                    <button
                      onClick={() => setActivePart("cfo")}
                      className="text-[11px] font-bold text-[#00E5A3] hover:text-[#38bdf8] transition-colors"
                    >
                      See All
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {/* Scenario 1 */}
                    <div className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00E5A3] to-[#007A63] flex items-center justify-center text-[#040907] shadow-sm font-black text-[10px]">
                          UR
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            Upfront Retainers
                          </div>
                          <div className="text-[10px] text-slate-300 font-medium">
                            Shift hourly billing to $15k/mo upfront
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActivePart("cfo")}
                        className="w-7 h-7 clay-btn flex items-center justify-center text-[#00E5A3] hover:text-white"
                      >
                        <Play className="w-3 h-3 fill-current" />
                      </button>
                    </div>

                    {/* Scenario 2 */}
                    <div className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#007A63] to-[#043328] flex items-center justify-center text-white shadow-sm font-bold text-[10px]">
                          HD
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            Hire 2 Developers
                          </div>
                          <div className="text-[10px] text-slate-300 font-medium">
                            30-day delay + $14k monthly burn
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActivePart("cfo")}
                        className="w-7 h-7 clay-btn flex items-center justify-center text-[#00E5A3] hover:text-white"
                      >
                        <Play className="w-3 h-3 fill-current" />
                      </button>
                    </div>

                    {/* Scenario 3 */}
                    <div className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#38bdf8] to-[#0284c7] flex items-center justify-center text-[#04121d] shadow-sm font-black text-[10px]">
                          N15
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            Net 15 Terms
                          </div>
                          <div className="text-[10px] text-slate-300 font-medium">
                            Accelerates client receivables by 15 days
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActivePart("moonshot")}
                        className="w-7 h-7 clay-btn flex items-center justify-center text-[#38bdf8] hover:text-white"
                      >
                        <Play className="w-3 h-3 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ========================================================== */}
                {/* SENSIBLE LIVE STRATEGIC LEVER PLAYGROUND WITH REAL SLIDER  */}
                {/* ========================================================== */}
                <div className="clay-card p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold text-white font-sans tracking-wide drop-shadow-xs">
                        Live Strategic Lever Simulator
                      </h3>
                      <p className="text-[10px] text-slate-300 font-semibold">
                        Simulate cash float and runway impact in real time
                      </p>
                    </div>

                    {/* Sensible Category Tabs */}
                    <div className="clay-segmented-bar flex items-center space-x-1 text-[10px] font-bold">
                      <button
                        onClick={() => setLeverTab("capital")}
                        className={`px-2.5 py-0.5 rounded-full transition-all ${
                          leverTab === "capital" ? "clay-pill-sage text-[#040907] shadow-sm font-extrabold" : "text-slate-300 hover:text-white"
                        }`}
                      >
                        Working Capital
                      </button>
                      <button
                        onClick={() => setLeverTab("staff")}
                        className={`px-2.5 py-0.5 rounded-full transition-all ${
                          leverTab === "staff" ? "clay-pill-teal text-white shadow-sm" : "text-slate-300 hover:text-white"
                        }`}
                      >
                        Staffing
                      </button>
                      <button
                        onClick={() => setLeverTab("terms")}
                        className={`px-2.5 py-0.5 rounded-full transition-all ${
                          leverTab === "terms" ? "clay-pill-lavender text-[#04121d] shadow-sm font-extrabold" : "text-slate-300 hover:text-white"
                        }`}
                      >
                        Terms & Risk
                      </button>
                    </div>
                  </div>

                  {/* Sensible Scenario Toggle Buttons with Real Logic & Active States */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {/* Retainers */}
                    <button
                      onClick={() => setRetainerActive(!retainerActive)}
                      className={`px-2 py-1.5 rounded-full font-extrabold transition-all text-center flex items-center justify-center space-x-1 ${
                        retainerActive
                          ? "clay-pill-lavender shadow-md"
                          : "clay-btn text-slate-200 hover:text-white"
                      }`}
                      title="Toggle $15,000 monthly upfront retainer contracts"
                    >
                      <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
                      <span className="truncate">Retainers (+15k)</span>
                    </button>

                    <button
                      onClick={() => setDelayDefenseActive(!delayDefenseActive)}
                      className={`px-2 py-1.5 rounded-full font-bold transition-all text-center flex items-center justify-center space-x-1 ${
                        delayDefenseActive
                          ? "clay-pill-teal shadow-md"
                          : "clay-btn text-slate-200 hover:text-white"
                      }`}
                      title="Enforce 15-day late payment reserve buffer"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00E5A3]" />
                      <span className="truncate">Delay Defense</span>
                    </button>

                    <button
                      onClick={() => setCovenantActive(!covenantActive)}
                      className={`px-2 py-1.5 rounded-full font-extrabold transition-all text-center flex items-center justify-center space-x-1 ${
                        covenantActive
                          ? "clay-pill-sage shadow-md"
                          : "clay-btn text-slate-200 hover:text-white"
                      }`}
                      title="Enforce strict zero-debt zero-dilution covenant"
                    >
                      <Check className="w-3 h-3 text-[#040907]" />
                      <span className="truncate">Zero-Debt</span>
                    </button>
                  </div>

                  {/* Live Status Pill with Calculated Prepayment Metrics */}
                  <div className="clay-input-lavender px-3 py-1.5 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200 text-[11px]">
                      Upfront Prepayment Acceptance
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-black text-[#38bdf8] font-mono text-xs">
                        {prepayRate}%
                      </span>
                      <span className="text-[10px] font-bold text-[#00E5A3] bg-[#00E5A3]/20 border border-[#00E5A3]/40 px-2 py-0.5 rounded-full font-mono">
                        +${(Math.round((prepayRate / 100) * 45000)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* REAL 3D TACTILE CLAY SLIDER WITH VISIBLE SLIDING KNOB */}
                  <div className="relative flex items-center py-1">
                    {/* Notched track background with tick marks */}
                    <div className="w-full clay-notched-track h-6 px-3 flex items-center justify-between text-slate-300 font-mono text-[9px] select-none pointer-events-none relative">
                      <span>0%</span>
                      <span>|</span>
                      <span>25%</span>
                      <span>|</span>
                      <span>50%</span>
                      <span>|</span>
                      <span>75%</span>
                      <span>|</span>
                      <span>100%</span>

                      {/* Tactile 3D Pure White Pearl Sliding Knob with Mint Ring */}
                      <div
                        style={{ left: `calc(${prepayRate}% * 0.90 + 5%)` }}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#ffffff] border-2 border-[#00E5A3] shadow-[0_3px_12px_rgba(0,229,163,0.8),0_0_12px_rgba(255,255,255,0.9)] flex items-center justify-center pointer-events-none transition-all duration-75"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00E5A3]" />
                      </div>
                    </div>

                    {/* Interactive Range Slider */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={prepayRate}
                      onChange={(e) => setPrepayRate(Number(e.target.value))}
                      className="clay-slider absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>

                  {/* Dynamic Simulation Output Row */}
                  <div className="clay-card-inset p-2.5 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-300 block">
                        Net Float Delta
                      </span>
                      <strong className={`font-black font-mono text-xs ${calculatedDelta >= 0 ? 'text-[#00E5A3]' : 'text-rose-400'}`}>
                        {calculatedDelta >= 0 ? `+$${calculatedDelta.toLocaleString()}` : `-$${Math.abs(calculatedDelta).toLocaleString()}`}
                      </strong>
                    </div>

                    <div className="h-5 w-px bg-white/20" />

                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-300 block">
                        Simulated Runway
                      </span>
                      <strong className="text-[#38bdf8] font-black font-mono text-xs">
                        {simulatedRunwayWeeks} Weeks
                      </strong>
                    </div>

                    <div className="h-5 w-px bg-white/20" />

                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-300 block">
                        Projected Floor
                      </span>
                      <strong className="text-white font-black font-mono text-xs">
                        ${projectedCash.toLocaleString()}
                      </strong>
                    </div>

                    <button
                      onClick={() => setActivePart("cfo")}
                      className="clay-pill-sage px-3 py-1 rounded-full text-[10px] font-black text-[#040907] flex items-center space-x-1 shadow-sm transition-transform hover:scale-105"
                      title="Load these levers directly into Part 2 CFO Matrix"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PART 1: CONVERSATIONAL CFO CO-PILOT VIEW                       */}
          {/* ============================================================== */}
          {activePart === "chat" && (
            <div className="h-full flex flex-col overflow-y-auto">
              <ChatView compact={false} />
            </div>
          )}

          {/* ============================================================== */}
          {/* PART 2: CFO FINANCE ENGINE MATRIX                              */}
          {/* ============================================================== */}
          {activePart === "cfo" && (
            <div className="h-full flex flex-col overflow-y-auto pr-1">
              <CfoDashboard />
            </div>
          )}

          {/* ============================================================== */}
          {/* PART 3: MOONSHOT STRATEGIC REASONING STUDIO                    */}
          {/* ============================================================== */}
          {activePart === "moonshot" && (
            <div className="h-full flex flex-col overflow-y-auto pr-1">
              <MoonshotView />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
