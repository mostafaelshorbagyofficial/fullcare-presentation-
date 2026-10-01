import React from 'react';
import { usePresentation } from '../context/PresentationContext';
import { X, Keyboard, ArrowRight, ArrowLeft, Space, Maximize, Globe, Home } from 'lucide-react';

export const KeyboardShortcutsModal: React.FC = () => {
  const { isShortcutsModalOpen, setShortcutsModalOpen, language } = usePresentation();

  if (!isShortcutsModalOpen) return null;

  const isAr = language === 'ar';

  const shortcuts = [
    { key: '→ / ←', label: isAr ? 'الانتقال بين الشرائح (التالي / السابق)' : 'Navigate next / previous slide' },
    { key: 'Space', label: isAr ? 'الانتقال للشريحة التالية' : 'Advance to next slide' },
    { key: 'F', label: isAr ? 'تفعيل / إنهاء وضع ملء الشاشة' : 'Toggle Fullscreen presentation mode' },
    { key: 'L', label: isAr ? 'التبديل بين العربية والإنجليزية' : 'Toggle Arabic / English language' },
    { key: 'Home', label: isAr ? 'الذهاب للشريحة الأولى' : 'Jump to Slide 01' },
    { key: 'End', label: isAr ? 'الذهاب للشريحة الختامية' : 'Jump to Final Slide' },
    { key: '?', label: isAr ? 'إظهار / إخفاء نافذة المساعدة' : 'Toggle Keyboard shortcuts help' },
    { key: 'Esc', label: isAr ? 'إغلاق النوافذ المنبثقة' : 'Close open modals' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl text-slate-100 flex flex-col gap-4 animate-scale-in">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <Keyboard className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base text-white">
              {isAr ? 'اختصارات لوحة المفاتيح' : 'Presentation Keyboard Controls'}
            </h3>
          </div>
          <button
            onClick={() => setShortcutsModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-2 my-2">
          {shortcuts.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
              <span className="text-slate-300 font-medium">{item.label}</span>
              <kbd className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 font-mono font-bold border border-slate-700 shadow-sm">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-white/10 text-center">
          <p className="text-[11px] text-slate-400">
            {isAr ? 'يدعم أيضًا اللمس والسحب المباشر على الهواتف والأجهزة اللوحية (iOS & Android)' : 'Supports touch swipe gestures on iPhone, iPad & Android devices'}
          </p>
        </div>
      </div>
    </div>
  );
};
