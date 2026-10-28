import React from 'react';
import { Zap, CheckCircle2, ShieldCheck, AlertTriangle, Calculator } from 'lucide-react';

export interface ComparisonCase {
  min_cash: string;
  end_cash: string;
  runway_weeks: number | null;
  reserve_breach: boolean;
  cash_floor_breach: boolean;
}

export interface ScenarioComparisonProps {
  baseline: ComparisonCase;
  expected: ComparisonCase;
  worst: ComparisonCase;
  best: ComparisonCase;
  scenarioName?: string;
  onOpenEvidence?: () => void;
}

export const ScenarioComparison: React.FC<ScenarioComparisonProps> = ({
  baseline,
  expected,
  worst,
  best,
  scenarioName = 'Hire Two Developers + Apex 30-Day Delay',
  onOpenEvidence,
}) => {
  return (
    <div className="space-y-4 font-sans">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full clay-pill-sage inline-flex items-center space-x-1.5 shadow-xs">
              <Zap className="w-3.5 h-3.5" />
              <span>Scenario Multi-Case Comparison</span>
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full clay-card-inset text-emerald-300 flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Deterministic Math</span>
            </span>
          </div>
          <h2 className="text-xl font-extrabold mt-1 text-white tracking-tight">
            {scenarioName}
          </h2>
          <p className="text-xs text-slate-300 font-semibold">
            Comparing immutable baseline against 3 discrete scenario simulation cases
          </p>
        </div>

        {onOpenEvidence && (
          <button
            onClick={onOpenEvidence}
            className="clay-pill-sage px-4 py-2 text-xs font-bold rounded-full shadow-md transition-transform hover:-translate-y-0.5 inline-flex items-center space-x-1.5 text-white font-bold"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Open Evidence Drawer</span>
          </button>
        )}
      </div>

      {/* Table with Soft Clay Inset Styling */}
      <div className="clay-card-inset p-3 rounded-3xl overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="uppercase text-[11px] font-extrabold tracking-wider text-slate-300 border-b border-white/10">
            <tr>
              <th className="py-3 px-4">Financial Metric</th>
              <th className="py-3 px-4">Immutable Baseline</th>
              <th className="py-3 px-4 text-emerald-300">Expected Case</th>
              <th className="py-3 px-4 text-rose-400">Worst Case (+14d Delay)</th>
              <th className="py-3 px-4 text-emerald-400">Best Case (-7d Advance)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 font-mono font-bold">
            {/* Minimum Cash Balance Row */}
            <tr className="hover:bg-white/10 transition-colors">
              <td className="py-3.5 px-4 font-sans font-extrabold text-white">
                Minimum Projected Cash
              </td>
              <td className="py-3.5 px-4 text-slate-200">
                ${parseFloat(baseline.min_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3.5 px-4 text-emerald-300 font-black">
                ${parseFloat(expected.min_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3.5 px-4 text-rose-400 font-black">
                ${parseFloat(worst.min_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3.5 px-4 text-emerald-400 font-black">
                ${parseFloat(best.min_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
            </tr>

            {/* Ending Cash Balance Row */}
            <tr className="hover:bg-white/10 transition-colors">
              <td className="py-3.5 px-4 font-sans font-extrabold text-white">
                Ending Cash (Week 26)
              </td>
              <td className="py-3.5 px-4 text-slate-200">
                ${parseFloat(baseline.end_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3.5 px-4 text-white">
                ${parseFloat(expected.end_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3.5 px-4 text-rose-400 font-black">
                ${parseFloat(worst.end_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3.5 px-4 text-emerald-400 font-black">
                ${parseFloat(best.end_cash).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
            </tr>

            {/* Runway Weeks Row */}
            <tr className="hover:bg-white/10 transition-colors">
              <td className="py-3.5 px-4 font-sans font-extrabold text-white">
                Projected Runway (Weeks)
              </td>
              <td className="py-3.5 px-4 text-slate-300">
                {baseline.runway_weeks !== null ? `${baseline.runway_weeks} wks` : '> 26 wks (Solvent)'}
              </td>
              <td className="py-3.5 px-4">
                {expected.runway_weeks !== null ? (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-950/80 text-amber-300 border border-amber-500/40">
                    {expected.runway_weeks} wks
                  </span>
                ) : (
                  <span className="text-emerald-300 font-black">&gt; 26 wks</span>
                )}
              </td>
              <td className="py-3.5 px-4">
                {worst.runway_weeks !== null ? (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-950/80 text-rose-300 border border-rose-500/40">
                    {worst.runway_weeks} wks
                  </span>
                ) : (
                  <span className="text-slate-200 font-black">&gt; 26 wks</span>
                )}
              </td>
              <td className="py-3.5 px-4 text-emerald-400 font-black">
                {best.runway_weeks !== null ? `${best.runway_weeks} wks` : '> 26 wks'}
              </td>
            </tr>

            {/* 12-Week Cash Floor Policy Breach */}
            <tr className="hover:bg-white/10 transition-colors">
              <td className="py-3.5 px-4 font-sans font-extrabold text-white">
                12-Week Floor Breached?
              </td>
              <td className="py-3.5 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 ${
                    baseline.cash_floor_breach ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                  }`}
                >
                  {baseline.cash_floor_breach ? (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Breached</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Maintained</span>
                    </>
                  )}
                </span>
              </td>
              <td className="py-3.5 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 ${
                    expected.cash_floor_breach ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                  }`}
                >
                  {expected.cash_floor_breach ? (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Breached</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Maintained</span>
                    </>
                  )}
                </span>
              </td>
              <td className="py-3.5 px-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 bg-rose-950/80 text-rose-300 border border-rose-500/40">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>Breached</span>
                </span>
              </td>
              <td className="py-3.5 px-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Maintained</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScenarioComparison;
