import React from 'react';
import { usePresentation } from '../context/PresentationContext';
import { X, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BrandLogosModal: React.FC = () => {
  const { isLogosModalOpen, setLogosModalOpen, language } = usePresentation();

  if (!isLogosModalOpen) return null;

  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 border border-pharma-primary/30 shadow-2xl text-slate-100 flex flex-col gap-6 animate-scale-in">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-pharma-primary/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pharma-primary/20 border border-pharma-primary/40 flex items-center justify-center text-pharma-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-pharma-light font-semibold">
                {isAr ? 'الهوية البصرية والمقترحات' : 'Visual Identity & Proposed Directions'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                FULL CARE × PROMEDIA
              </h2>
            </div>
          </div>

          <button
            onClick={() => setLogosModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ProMedia Presentation Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-pharma-deep/80 border border-pharma-primary/20 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/5 rounded-xl border border-white/10">
              <img src="/assets/promedia-logo.png" alt="ProMedia Logo" className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <div>
              <span className="text-xs text-pharma-light font-mono">AGENCY / STRATEGIC PARTNER</span>
              <h4 className="text-sm font-bold text-slate-100">ProMedia Creative Agency</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 max-w-xs text-center sm:text-right">
            {isAr ? 'الرؤية الاستراتيجية والإخراج الإبداعي لمنظومة Full Care' : 'Strategic direction and brand identity design'}
          </p>
        </div>

        {/* Two Proposed Full Care Logos */}
        <div>
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-pharma-primary" />
              <span>{isAr ? 'مقترحان متميزان لشعار Full Care' : 'Two Proposed Full Care Brand Directions'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {isAr
                ? 'تم تصميم اتجاهين بصريين يعكسان قيم الرعاية، الثقة، والتكامل الدوائي.'
                : 'Two distinct visual directions capturing medical authority, human warmth, and modern care.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Direction 01 */}
            <div className="glass-card rounded-2xl p-5 flex flex-col gap-4 border border-pharma-primary/30 hover:border-pharma-primary transition-all group">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-pharma-primary/20 text-pharma-light text-xs font-bold border border-pharma-primary/40">
                  {isAr ? 'المقترح الأول | DIRECTION 01' : 'DIRECTION 01'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-pharma-primary opacity-80" />
              </div>

              <div className="relative w-full aspect-square max-h-64 sm:max-h-72 rounded-xl bg-white p-4 flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/assets/fullcare-logo-1.jpg"
                  alt="Full Care Logo Direction 01"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">
                  {isAr ? 'رمز الرعاية والتكامل الطبي' : 'Care & Integrated Medical Iconography'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {isAr
                    ? 'يركز على الرمزية الدوائية الحديثة مع انسيابية توحي باحتضان ورعاية الأسرة.'
                    : 'Focuses on modern pharmaceutical symbolism with fluid curves evoking familial embrace.'}
                </p>
              </div>
            </div>

            {/* Direction 02 */}
            <div className="glass-card rounded-2xl p-5 flex flex-col gap-4 border border-pharma-support/40 hover:border-pharma-secondary transition-all group">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-pharma-support/30 text-pharma-light text-xs font-bold border border-pharma-support/50">
                  {isAr ? 'المقترح الثاني | DIRECTION 02' : 'DIRECTION 02'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-pharma-secondary opacity-80" />
              </div>

              <div className="relative w-full aspect-square max-h-64 sm:max-h-72 rounded-xl bg-white p-4 flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/assets/fullcare-logo-2.jpg"
                  alt="Full Care Logo Direction 02"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">
                  {isAr ? 'رمز الحماية والشراكة الصحية' : 'Protection & Health Partnership'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {isAr
                    ? 'يعبر عن قوة الكيان كـ "سند" دائم، مع خطوط طبية واضحة تمنح شعور الأمان والمصداقية.'
                    : 'Expresses the institutional role as a "Sanad" anchor, projecting reliability and scientific credibility.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-2 border-t border-pharma-primary/20">
          <button
            onClick={() => setLogosModalOpen(false)}
            className="px-6 py-2 rounded-xl bg-pharma-primary hover:bg-pharma-secondary text-pharma-deep font-bold text-xs transition-all cursor-pointer shadow-md"
          >
            {isAr ? 'إغلاق المعاينة' : 'Close Preview'}
          </button>
        </div>
      </div>
    </div>
  );
};
