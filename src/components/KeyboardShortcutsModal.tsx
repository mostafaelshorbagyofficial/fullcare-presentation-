import React from 'react';
import { usePresentation } from '../context/PresentationContext';
import { X, Keyboard } from 'lucide-react';

export const KeyboardShortcutsModal: React.FC = () => {
  const { isShortcutsModalOpen, setShortcutsModalOpen, language } = usePresentation();

  if (!isShortcutsModalOpen) return null;

  const isAr = language === 'ar';

  const shortcuts = [
    { key: 'Home', label: isAr ? 'التمرير للبداية (أعلى الصفحة)' : 'Scroll to top / Opening' },
    { key: 'End', label: isAr ? 'التمرير للنهاية (البيان الختامي)' : 'Scroll to bottom / Grand Finale' },
    { key: 'F', label: isAr ? 'تفعيل / إنهاء وضع ملء الشاشة' : 'Toggle Fullscreen presentation mode' },
    { key: 'L', label: isAr ? 'التبديل بين العربية والإنجليزية' : 'Toggle Arabic / English language' },
    { key: '?', label: isAr ? 'إظهار / إخفاء نافذة المساعدة' : 'Toggle Keyboard shortcuts help' },
    { key: 'Esc', label: isAr ? 'إغلاق النوافذ المنبثقة' : 'Close open modals' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 border border-pharma-primary/30 shadow-2xl text-slate-100 flex flex-col gap-4 animate-scale-in">
        <div className="flex items-center justify-between border-b border-pharma-primary/20 pb-3">
          <div className="flex items-center gap-2.5">
            <Keyboard className="w-5 h-5 text-pharma-primary" />
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
            <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-pharma-deep/80 border border-pharma-primary/15 text-xs">
              <span className="text-slate-200 font-medium">{item.label}</span>
              <kbd className="px-2.5 py-1 rounded-md bg-pharma-support/60 text-pharma-light font-mono font-bold border border-pharma-primary/30 shadow-sm">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-pharma-primary/20 text-center">
          <p className="text-[11px] text-pharma-light/80">
            {isAr ? 'يدعم أيضًا التمرير السلس واللمس على الهواتف والأجهزة اللوحية (iOS & Android)' : 'Supports smooth scrolling and touch gestures on mobile & tablet devices'}
          </p>
        </div>
      </div>
    </div>
  );
};
