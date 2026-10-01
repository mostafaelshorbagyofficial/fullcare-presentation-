import { SectionMeta, SlideDefinition } from '../types/presentation';

export const SECTIONS: SectionMeta[] = [
  {
    key: 'intro',
    slideRange: [1, 5],
    ar: { label: 'البداية والفكرة', tag: '01. البداية' },
    en: { label: 'The Origin & Idea', tag: '01. INTRO' },
  },
  {
    key: 'insight',
    slideRange: [6, 8],
    ar: { label: 'مفهوم الرعاية', tag: '02. الرعاية' },
    en: { label: 'Concept of Care', tag: '02. INSIGHT' },
  },
  {
    key: 'ecosystem',
    slideRange: [9, 12],
    ar: { label: 'المنظومة والتصنيع', tag: '03. المنظومة' },
    en: { label: 'Ecosystem & Factory', tag: '03. ECOSYSTEM' },
  },
  {
    key: 'expansion',
    slideRange: [13, 16],
    ar: { label: 'التوسع والانتشار', tag: '04. التوسع' },
    en: { label: 'Expansion & Network', tag: '04. EXPANSION' },
  },
  {
    key: 'journey',
    slideRange: [17, 20],
    ar: { label: 'رحلة المريض والهوية', tag: '05. الهوية' },
    en: { label: 'Journey & Identity', tag: '05. IDENTITY' },
  },
  {
    key: 'content',
    slideRange: [21, 23],
    ar: { label: 'استراتيجية المحتوى', tag: '06. المحتوى' },
    en: { label: 'Content Strategy', tag: '06. CONTENT' },
  },
  {
    key: 'campaign',
    slideRange: [24, 26],
    ar: { label: 'الحملة الإعلانية', tag: '07. الحملة' },
    en: { label: 'Hero Campaign', tag: '07. CAMPAIGN' },
  },
  {
    key: 'founder',
    slideRange: [27, 29],
    ar: { label: 'روح المؤسس', tag: '08. المؤسس' },
    en: { label: 'Founder DNA', tag: '08. FOUNDER' },
  },
  {
    key: 'strategy',
    slideRange: [30, 34],
    ar: { label: 'خطة النمو والتنفيذ', tag: '09. النمو' },
    en: { label: 'Growth & Execution', tag: '09. GROWTH' },
  },
  {
    key: 'vision',
    slideRange: [35, 38],
    ar: { label: 'الرؤية المستقبلية', tag: '10. الرؤية' },
    en: { label: 'Strategic Vision', tag: '10. VISION' },
  },
];

export const SLIDES: SlideDefinition[] = [
  // Slide 01
  {
    id: 1,
    slideNumber: 1,
    section: 'intro',
    layout: 'intro',
    accentColor: 'emerald',
    ar: {
      tagline: 'البداية | THE BEGINNING',
      title: 'كل شركة لها بداية.',
      lead: 'لكن Full Care لم تُبنَ فقط لتبيع منتجات طبية.',
      paragraphs: [
        'من البداية، كانت الرؤية أكبر وأعمق:',
        'أن نبني كيانًا متكاملًا يستطيع أن يكون حاضرًا ومؤثرًا عندما يحتاج الإنسان إلى الرعاية الحقيقية.',
      ],
      highlightText: 'FULL CARE — رعاية كاملة.',
      quote: 'ليست مجرد صناعة دوائية.. بل التزام إنساني ممتد.',
    },
    en: {
      tagline: 'THE ORIGIN | SLIDE 01',
      title: 'Every Company Has a Beginning.',
      lead: 'But Full Care was not built simply to sell healthcare products.',
      paragraphs: [
        'From the very beginning, the vision was substantially larger:',
        'To establish an integrated healthcare institution that is genuinely present whenever people require authentic care.',
      ],
      highlightText: 'FULL CARE — Complete Care.',
      quote: 'More than pharmaceutical manufacturing; a continuous human commitment.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85',
      captionAr: 'منظومة رعاية متكاملة تبدأ من الإنسان',
      captionEn: 'An integrated healthcare ecosystem centered around human life',
    },
  },

  // Slide 02
  {
    id: 2,
    slideNumber: 2,
    section: 'intro',
    layout: 'specialties',
    accentColor: 'cyan',
    ar: {
      tagline: 'السؤال الجوهري | THE CORE QUESTION',
      title: 'لماذا Full Care؟',
      lead: 'لأن احتياجات الإنسان الصحية لا تأتي في قالب واحد أو مسار منفصل.',
      cards: [
        {
          badge: 'صحة المرأة',
          title: 'WOMEN & OB/GYN',
          description: 'قد تحتاج المرأة إلى رعاية دقيقة وفائقة أثناء فترات الحمل ومراحل حياتها المختلفة.',
        },
        {
          badge: 'الجهاز الهضمي',
          title: 'GASTROENTEROLOGY',
          description: 'قد يعاني أحد أفراد الأسرة من اضطرابات الجهاز الهضمي والقولون المزمنة.',
        },
        {
          badge: 'جراحة العظام',
          title: 'ORTHOPEDICS',
          description: 'قد يحتاج فرد آخر إلى رعاية متقدمة للمفاصل والعظام لاستعادة الحركة والحياة.',
        },
        {
          badge: 'التغذية العلاجية',
          title: 'NUTRITION & OBESITY',
          description: 'وقد تكون التغذية وإدارة الوزن هي التحدي الجذري لصحة فرد آخر في نفس البيت.',
        },
      ],
      highlightText: 'احتياجات مختلفة. بيت واحد. رعاية واحدة.',
      keyTakeaway: 'وهنا تبدأ قصة Full Care الحقيقية.',
    },
    en: {
      tagline: 'THE STRATEGIC RATIONALE | SLIDE 02',
      title: 'Why Full Care?',
      lead: 'Because human healthcare needs never manifest as a single, isolated problem.',
      cards: [
        {
          badge: 'Maternal Care',
          title: 'WOMEN & OB/GYN',
          description: 'A woman may require dedicated specialized care through pregnancy and distinct life stages.',
        },
        {
          badge: 'Digestive Health',
          title: 'GASTROENTEROLOGY',
          description: 'A family member may battle chronic digestive, stomach, and colon disorders.',
        },
        {
          badge: 'Joints & Bones',
          title: 'ORTHOPEDICS',
          description: 'Another individual may require orthopedic solutions to regain active daily mobility.',
        },
        {
          badge: 'Clinical Nutrition',
          title: 'NUTRITION & OBESITY',
          description: 'Metabolic balance and weight management might be the primary focus for another in the same home.',
        },
      ],
      highlightText: 'Different Needs. One Home. One Care.',
      keyTakeaway: 'And here begins the authentic story of Full Care.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85',
    },
  },

  // Slide 03
  {
    id: 3,
    slideNumber: 3,
    section: 'intro',
    layout: 'statement',
    accentColor: 'emerald',
    ar: {
      tagline: 'الحقيقة الإنسانية | THE HUMAN TRUTH',
      title: 'في كل بيت مصري تقريبًا...',
      lead: 'هناك شخص نرجع إليه تلقائيًا وبلا تردد عندما تحدث مشكلة.',
      paragraphs: [
        'مش بالضرورة يكون أغنى شخص في العائلة..',
        'ولا أكثر شخص يملك علاقات ونفوذ..',
        'ولا حتى يملك الحل الجاهز في كل لحظة..',
      ],
      cards: [
        { title: 'موجود', description: 'حاضر في اللحظة التي تحتاجه فيها دون تردد' },
        { title: 'نثق فيه', description: 'ثقة مطلقة بُنيت على مواقف حقيقية وصدق' },
        { title: 'نستشيره', description: 'صوته يمنح الطمأنينة والوضوح وقت الحيرة' },
        { title: 'أول فكرة', description: 'هو أول شخص يقفز إلى ذهنك في قلب الأزمة' },
      ],
    },
    en: {
      tagline: 'HUMAN TRUTH | SLIDE 03',
      title: 'In Almost Every Egyptian Home...',
      lead: 'There is a specific person we instinctively turn to whenever crisis strikes.',
      paragraphs: [
        'Not necessarily the wealthiest in the household..',
        'Nor the one with the widest network of connections..',
        'Not even the one who possesses instant answers to every dilemma..',
      ],
      cards: [
        { title: 'Present', description: 'Unwaveringly present whenever called upon' },
        { title: 'Trusted', description: 'Deep, earned trust rooted in proven integrity' },
        { title: 'Consulted', description: 'A voice that restores calm, clarity, and reassurance' },
        { title: 'First Thought', description: 'The very first person who comes to mind in emergencies' },
      ],
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'الدفء الإنساني والرابطة العائلية العميقة',
      captionEn: 'Human connection and familial reassurance',
    },
  },

  // Slide 04
  {
    id: 4,
    slideNumber: 4,
    section: 'intro',
    layout: 'split-content',
    accentColor: 'gold',
    ar: {
      tagline: 'الرؤية العميقة | THE INSIGHT',
      title: 'كل بيت فيه "سند".',
      lead: 'هذا السند قد يكون أخًا كبيرًا، أبًا، أمًا، عمًا، خالًا، أو صديقًا مخلصًا.',
      paragraphs: [
        'شخص يمنحك شعورًا فوريًا لا يُعوّض:',
        '«أنا معاك.. ما تشيلش هم.»',
      ],
      highlightText: 'وهذا هو الدور الدقيق الذي تريد Full Care أن تلعبه في منظومة الرعاية الصحية.',
      cards: [
        { title: 'الأمان النفسي', description: 'تحويل القلق الصحي إلى ثقة وراحة بال' },
        { title: 'المساندة المستمرة', description: 'التواجد طوال مسار العلاج وليس عند بيع الدواء فقط' },
      ],
    },
    en: {
      tagline: 'THE CORE INSIGHT | SLIDE 04',
      title: 'Every Home Has a "Sanad" (Pillar of Support).',
      lead: 'That pillar might be an elder brother, father, mother, uncle, or steadfast lifelong friend.',
      paragraphs: [
        'An individual who delivers an irreplaceable emotional assurance:',
        '"I am with you. You are not alone."',
      ],
      highlightText: 'This is precisely the foundational role Full Care aims to embody across healthcare.',
      cards: [
        { title: 'Emotional Security', description: 'Transforming health anxiety into grounded confidence and calm' },
        { title: 'Continuous Support', description: 'Standing beside patients throughout recovery, not merely selling medicine' },
      ],
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'السند الحقيقي في كل لحظة فارقة',
      captionEn: 'The authentic support pillar in critical life moments',
    },
  },

  // Slide 05
  {
    id: 5,
    slideNumber: 5,
    section: 'intro',
    layout: 'statement',
    accentColor: 'emerald',
    ar: {
      tagline: 'الفكرة الكبرى | THE BIG IDEA',
      title: 'FULL CARE',
      subtitle: 'السند اللي دايمًا موجود.',
      paragraphs: [
        'ليست مجرد شركة أدوية تقليدية.',
        'وليست مجرد محفظة من المنتجات والمستحضرات الطبية.',
        'بل كيان صحي وعلامة يثق الناس بالرجوع إليها في كل مرحلة رعاية.',
      ],
      highlightText: 'Brand people can turn to when they need care.',
    },
    en: {
      tagline: 'THE STRATEGIC BIG IDEA | SLIDE 05',
      title: 'FULL CARE',
      subtitle: 'The Support That Is Always There.',
      paragraphs: [
        'Not merely a conventional pharmaceutical corporation.',
        'Not merely an inventory of medical products and formulations.',
        'A healthcare brand and institutional pillar people instinctively turn to when they need care.',
      ],
      highlightText: 'A brand people can turn to when they need care.',
    },
    visual: {
      type: 'logo-comparison',
    },
  },

  // Slide 06
  {
    id: 6,
    slideNumber: 6,
    section: 'insight',
    layout: 'timeline',
    accentColor: 'cyan',
    ar: {
      tagline: 'تعريف القيمة | WHAT DOES "CARE" MEAN?',
      title: 'ماذا تعني "الرعاية" الحقيقية؟',
      lead: 'الرعاية في فلسفة Full Care ليست مجرد تقديم منتج دوائي أو كتابة وصفة.',
      steps: [
        { step: '01', title: 'أن تسمع', description: 'الإنصات العميق لشكوى المريض ومخاوفه دون تسرع' },
        { step: '02', title: 'أن تفهم', description: 'استيعاب السياق الإنساني والأسري للمشكلة الصحية' },
        { step: '03', title: 'أن تشرح', description: 'تبسيط المعلومة الطبية بلغة مريحة وواضحة' },
        { step: '04', title: 'أن تساعد', description: 'توجيه المريض نحو المسار العلاجي والتغذوي الأنسب' },
        { step: '05', title: 'أن توفر الحل', description: 'تقديم منتجات دوائية وغذائية بأعلى معايير الجودة' },
        { step: '06', title: 'أن تظل موجودًا', description: 'الاستمرار في المتابعة والدعم حتى تمام التعافي' },
      ],
      highlightText: 'وهذه هي المساحة القيادية التي تصيغها Full Care.',
    },
    en: {
      tagline: 'DEFINING VALUE | SLIDE 06',
      title: 'What Does Authentic "Care" Mean?',
      lead: 'In Full Care philosophy, healthcare is far greater than delivering a prescription box.',
      steps: [
        { step: '01', title: 'To Listen', description: 'Deeply listening to patient grievances and unspoken anxieties' },
        { step: '02', title: 'To Understand', description: 'Comprehending the human and family context of medical issues' },
        { step: '03', title: 'To Explain', description: 'Demystifying clinical information in clear, empowering language' },
        { step: '04', title: 'To Guide & Help', description: 'Guiding individuals toward optimal therapeutic pathways' },
        { step: '05', title: 'To Provide Solution', description: 'Delivering pharmaceutical and wellness solutions of pristine quality' },
        { step: '06', title: 'To Remain Present', description: 'Staying actively present throughout rehabilitation and beyond' },
      ],
      highlightText: 'This is the proprietary leadership space Full Care owns.',
    },
  },

  // Slide 07
  {
    id: 7,
    slideNumber: 7,
    section: 'insight',
    layout: 'specialties',
    accentColor: 'emerald',
    ar: {
      tagline: 'التخصصات الأساسية | WHY THESE SPECIALTIES?',
      title: 'لماذا هذه التخصصات تحديدًا؟',
      lead: 'تبدأ Full Care من 4 تخصصات علاجية حيوية تمثل ركائز الصحة العامة:',
      cards: [
        {
          badge: '01. النساء والتوليد',
          title: 'WOMEN & OB/GYN',
          subtitle: 'صحة الأم والأسرة',
          description: 'رعاية صحة المرأة في مراحل التكوين والحمل والولادة وما بعدها، لأن صحتها هي ركيزة البيت.',
        },
        {
          badge: '02. الجهاز الهضمي',
          title: 'GASTROENTEROLOGY',
          subtitle: 'الراحة اليومية والمناعة',
          description: 'علاج مشاكل المعدة والقولون وسوء الهضم التي تؤثر مباشرة على إنتاجية وجودة حياة الملايين.',
        },
        {
          badge: '03. العظام والمفاصل',
          title: 'ORTHOPEDICS',
          subtitle: 'الحركة والنشاط',
          description: 'حلول متقدمة لآلام المفاصل والعمود الفقري لدعم قدرة أفراد الأسرة على الحركة بحرية.',
        },
        {
          badge: '04. التغذية والسمنة',
          title: 'NUTRITION & OBESITY',
          subtitle: 'الوقاية ونمط الحياة',
          description: 'حلول متكاملة للتغذية العلاجية وإدارة الوزن السليم للحماية من الأمراض المزمنة.',
        },
      ],
      highlightText: 'لماذا؟ لأنها تمس احتياجات صحية واسعة الانتشار وعميقة التأثير داخل كل أسرة مصرية.',
    },
    en: {
      tagline: 'CORE SPECIALTIES | SLIDE 07',
      title: 'Why These Specific Specialties?',
      lead: 'Full Care initiates its mission across 4 fundamental therapeutic pillars:',
      cards: [
        {
          badge: '01. Maternal Health',
          title: 'WOMEN & OB/GYN',
          subtitle: 'Mothers & Family Core',
          description: 'Guiding women through conception, pregnancy, postpartum and beyond as the backbone of family.',
        },
        {
          badge: '02. Digestive Health',
          title: 'GASTROENTEROLOGY',
          subtitle: 'Daily Vitality & Immunity',
          description: 'Treating prevalent gastric, intestinal, and colon issues that impair daily living and vitality.',
        },
        {
          badge: '03. Musculoskeletal',
          title: 'ORTHOPEDICS',
          subtitle: 'Mobility & Freedom',
          description: 'Delivering robust joint, cartilage, and spine solutions to restore effortless mobility.',
        },
        {
          badge: '04. Metabolic Health',
          title: 'NUTRITION & OBESITY',
          subtitle: 'Preventive Lifestyle',
          description: 'Clinical nutrition and metabolic weight solutions preventing downstream chronic conditions.',
        },
      ],
      highlightText: 'Why? Because they address the most pervasive and vital health needs in every home.',
    },
  },

  // Slide 08
  {
    id: 8,
    slideNumber: 8,
    section: 'insight',
    layout: 'statement',
    accentColor: 'cyan',
    ar: {
      tagline: 'حضور في كل بيت | THE EVERY HOME IDEA',
      title: 'تخيل أي بيت مصري...',
      lead: 'عندما تنظر داخل أي منزل، ستجد هذه الاحتياجات مجتمعة تحت سقف واحد:',
      cards: [
        { title: 'امرأة', description: 'تحتاج متابعة صحية دورية ورعاية دقيقة' },
        { title: 'شخص', description: 'يعاني من اضطراب في المعدة أو القولون' },
        { title: 'فرد', description: 'يشكو من آلام في المفاصل أو الظهر' },
        { title: 'آخر', description: 'يسعى لضبط وزنه ونظامه الغذائي' },
      ],
      highlightText: 'FULL CARE BELONGS IN EVERY HOME.',
      secondaryText: 'مكان Full Care الطبيعي هو أن تكون في صميم كل بيت.',
    },
    en: {
      tagline: 'OMNIPRESENCE | SLIDE 08',
      title: 'Imagine Any Egyptian Home...',
      lead: 'Step into virtually any home, and you will find these real scenarios converging under one roof:',
      cards: [
        { title: 'A Woman', description: 'Requiring dedicated maternal and physiological care' },
        { title: 'An Individual', description: 'Battling gastric reflux, indigestion, or IBS pain' },
        { title: 'A Relative', description: 'Struggling with joint stiffness or spine discomfort' },
        { title: 'Another', description: 'Seeking metabolic balance, weight health, and nutrition' },
      ],
      highlightText: 'FULL CARE BELONGS IN EVERY HOME.',
      secondaryText: 'Full Care inherently belongs at the emotional and physical heart of every home.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'احتياجات متكاملة تحت سقف بيت واحد',
      captionEn: 'Integrated health needs under one shared roof',
    },
  },

  // Slide 09
  {
    id: 9,
    slideNumber: 9,
    section: 'ecosystem',
    layout: 'roadmap',
    accentColor: 'emerald',
    ar: {
      tagline: 'تكامل المنظومة | ONE FAMILY. MANY NEEDS.',
      title: 'عائلة واحدة.. احتياجات متعددة.',
      lead: 'الرعاية الصحية لا تتوقف عند تخصص واحد، ولا عند عمر محدد، ولا عند مرحلة عابرة.',
      steps: [
        {
          step: 'TODAY | اليوم',
          title: 'التخصصات الأربعة الأساسية',
          description: 'Women & OB/GYN + Gastroenterology + Orthopedics + Nutrition & Obesity',
        },
        {
          step: 'TOMORROW | غدًا',
          title: 'توسيع التخصصات الطبية',
          description: 'إدخال تخصصات جديدة وتغطية مسارات علاجية إضافية للأطفال والمسنين',
        },
        {
          step: 'THEN | بعدها',
          title: 'حلول علاجية ووقائية شاملة',
          description: 'توسيع خطوط المنتجات لتشمل أشكالًا صيدلانية متطورة ومكملات نوعية',
        },
      ],
      highlightText: 'A COMPLETE HEALTHCARE ECOSYSTEM — منظومة رعاية صحية متكاملة',
    },
    en: {
      tagline: 'ECOSYSTEM INTEGRATION | SLIDE 09',
      title: 'One Family. Many Needs.',
      lead: 'Healthcare never halts at a single specialty, a single demographic, or a fleeting life chapter.',
      steps: [
        {
          step: 'TODAY',
          title: 'Four Core Therapeutic Pillars',
          description: 'Women & OB/GYN + Gastroenterology + Orthopedics + Nutrition & Obesity',
        },
        {
          step: 'TOMORROW',
          title: 'Specialty Portfolio Expansion',
          description: 'Entering adjacent clinical domains including pediatrics, geriatrics, and metabolic wellness',
        },
        {
          step: 'THEN',
          title: 'Comprehensive Preventive & Curative Solutions',
          description: 'Scaling formulations into specialized nutraceuticals, dermocosmetics, and patient support',
        },
      ],
      highlightText: 'A COMPLETE HEALTHCARE ECOSYSTEM',
    },
  },

  // Slide 10
  {
    id: 10,
    slideNumber: 10,
    section: 'ecosystem',
    layout: 'ecosystem',
    accentColor: 'cyan',
    ar: {
      tagline: 'عوالم الرعاية | THE FULL CARE ECOSYSTEM',
      title: 'عوالم الرعاية في Full Care',
      lead: 'تعمل Full Care عبر منظومة متناغمة تغطي 4 عوالم صحية متخصصة:',
      cards: [
        {
          badge: 'PHARMACEUTICAL',
          title: 'حلول دوائية',
          description: 'علاجات دوائية متخصصة تخضع لأعلى معايير الفاعلية والرقابة الصيدلانية الدقيقة.',
          tags: ['علاجات نوعية', 'أدوية تخصصية', 'فاعلية مثبتة'],
        },
        {
          badge: 'NUTRACEUTICAL',
          title: 'حلول غذائية علاجية',
          description: 'مكملات وفيتامينات ومركبات غذائية علاجية وداعمة لتعزيز الصحة والوقاية.',
          tags: ['مكملات متطورة', 'معادن وفيتامينات', 'دعم مناعي'],
        },
        {
          badge: 'COSMECEUTICAL',
          title: 'حلول تجميلية علاجية',
          description: 'مستحضرات تدمج بين الأثر التجميلي والقوة العلاجية الطبية لحل المشكلات من جذورها.',
          tags: ['علاج تجميلي', 'تركيبات طبية', 'نتائج مرئية'],
        },
        {
          badge: 'DERMOCOSMETIC',
          title: 'العناية بالبشرة والشعر',
          description: 'منتجات طبية متقدمة موجهة لصحة وحيوية الجلد والشعر تحت إشراف أطباء الجلدية.',
          tags: ['صحة الجلد', 'علاج الشعر', 'معايير جلدية'],
        },
      ],
      highlightText: 'ONE BRAND. MULTIPLE CARE WORLDS.',
    },
    en: {
      tagline: 'FOUR CARE WORLDS | SLIDE 10',
      title: 'The Full Care Ecosystem',
      lead: 'Full Care operates across an integrated synergy spanning 4 specialized clinical domains:',
      cards: [
        {
          badge: 'PHARMACEUTICAL',
          title: 'Pharmaceutical Solutions',
          description: 'Prescription and targeted medical therapies meeting strict global pharmaceutical standards.',
          tags: ['Targeted Therapeutics', 'Clinical Efficacy', 'Prescription Grade'],
        },
        {
          badge: 'NUTRACEUTICAL',
          title: 'Nutraceutical & Wellness',
          description: 'Evidence-backed therapeutic supplements, minerals, and bio-nutrients reinforcing daily health.',
          tags: ['Advanced Bio-Nutrients', 'Immune Support', 'Metabolic Balance'],
        },
        {
          badge: 'COSMECEUTICAL',
          title: 'Therapeutic Cosmeceuticals',
          description: 'Clinical aesthetic formulations merging medicinal efficacy with cosmetic elegance.',
          tags: ['Medical Aesthetics', 'Active Ingredients', 'Dermatologist Tested'],
        },
        {
          badge: 'DERMOCOSMETIC',
          title: 'Dermocosmetic Care',
          description: 'Advanced specialized skin and hair health formulations formulated under clinical oversight.',
          tags: ['Skin Barrier Health', 'Hair Restoration', 'Clinical Skincare'],
        },
      ],
      highlightText: 'ONE BRAND. MULTIPLE CARE WORLDS.',
    },
  },

  // Slide 11
  {
    id: 11,
    slideNumber: 11,
    section: 'ecosystem',
    layout: 'split-content',
    accentColor: 'emerald',
    ar: {
      tagline: 'الفارق الجوهري | THE DIFFERENCE',
      title: 'ما الذي يصنع الفارق الحقيقي؟',
      lead: 'هناك شركات تبدأ بمنتج واحد، ثم تضيف منتجًا آخر، ثم تبحث عن التوسع.',
      paragraphs: [
        'أما Full Care فلديها فرصة استثنائية ونادرة:',
        'لأنها لم تبدأ كمنتج منعزل، بل انطلقت من منظومة متكاملة ومترابطة من الأساس.',
      ],
      cards: [
        { title: 'Manufacturing | التصنيع الذاتي', description: 'التحكم الكامل في خطوط الإنتاج وجودة التصنيع' },
        { title: 'Medical Specialties | التخصصات', description: 'تركيز استراتيجي في 4 مجالات حيوية' },
        { title: 'Products | المحفظة الدوائية', description: 'منتجات مدروسة تلبي الاحتياجات الملحة' },
        { title: 'Distribution | شبكة التوزيع', description: 'انتشار سريع ووصول مستقر لكل صيدلية' },
        { title: 'Medical Reps | الفريق العلمي', description: 'كوادر مؤهلة لبناء الشراكة مع الأطباء' },
        { title: 'Future Expansion | التوسع المستمر', description: 'جاهزية مؤسسية لنمو متسارع ومدروس' },
      ],
    },
    en: {
      tagline: 'THE STRUCTURAL EDGE | SLIDE 11',
      title: 'The Foundational Difference',
      lead: 'Many market players start with a standalone product, then add another, and slowly figure out scale.',
      paragraphs: [
        'Full Care possesses a profound strategic advantage:',
        'It was engineered from day one as a fully integrated, synchronized healthcare ecosystem.',
      ],
      cards: [
        { title: 'In-House Manufacturing', description: 'Complete direct ownership over production lines and batch quality' },
        { title: 'Medical Specialties', description: 'Sharp clinical focus across 4 high-prevalence medical domains' },
        { title: 'Product Portfolio', description: 'Meticulously formulated therapeutic and supplement portfolios' },
        { title: 'Distribution Network', description: 'Robust supply chain ensuring seamless nationwide shelf availability' },
        { title: 'Medical Representatives', description: 'High-caliber scientific liaisons forging clinical doctor partnerships' },
        { title: 'Future Scalability', description: 'Institutional architecture primed for agile geographical expansion' },
      ],
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'منظومة إنتاج وتصنيع دوائي متطورة',
      captionEn: 'Advanced pharmaceutical manufacturing infrastructure',
    },
  },

  // Slide 12
  {
    id: 12,
    slideNumber: 12,
    section: 'ecosystem',
    layout: 'statement',
    accentColor: 'gold',
    ar: {
      tagline: 'القوة التشغيلية | BUILT FROM THE FACTORY',
      title: 'من أقوى نقاط Full Care:',
      subtitle: 'الشركة بدأت من التصنيع.. وليس العكس.',
      paragraphs: [
        'البدء من قاعدة تصنيعية صلبة يمنح Full Care ميزة تنافسية لا تملكها معظم العلامات التجارية الناشئة:',
      ],
      cards: [
        { title: 'Product Development', description: 'تطوير سريع ومستمر للتركيبات والأشكال الصيدلانية' },
        { title: 'Strict Quality', description: 'رقابة صارمة على الجودة والمطابقة من المصدر' },
        { title: 'Agile Innovation', description: 'ابتكار أسرع في الاستجابة للاحتياجات الطبية' },
        { title: 'Portfolio Expansion', description: 'مرونة عالية في إضافة خطوط إنتاج جديدة' },
        { title: 'Market Response', description: 'قدرة فورية على تلبية طلب السوق بدون وسيط' },
      ],
    },
    en: {
      tagline: 'OPERATIONAL ADVANTAGE | SLIDE 12',
      title: 'A Critical Core Strength:',
      subtitle: 'Full Care was Built from the Factory Floor.',
      paragraphs: [
        'Originating from real industrial manufacturing infrastructure gives Full Care a formidable competitive moat:',
      ],
      cards: [
        { title: 'Product Development', description: 'Rapid, agile formulation and drug delivery innovation' },
        { title: 'Strict Quality Control', description: 'Rigorous end-to-end quality assurance at the factory source' },
        { title: 'Agile Innovation', description: 'Accelerated translation of market needs into finished products' },
        { title: 'Portfolio Expansion', description: 'High flexibility to engineer and license new product lines' },
        { title: 'Market Responsiveness', description: 'Instant supply scalability without reliance on external contract bottlenecks' },
      ],
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'معايير علمية وتصنيعية فائقة الدقة',
      captionEn: 'State-of-the-art laboratory and manufacturing standards',
    },
  },

  // Slide 13
  {
    id: 13,
    slideNumber: 13,
    section: 'expansion',
    layout: 'timeline',
    accentColor: 'emerald',
    ar: {
      tagline: 'محرك التوسع | THE EXPANSION ENGINE',
      title: 'محرك النمو والتوسع',
      lead: 'نمو Full Care يتحرك عبر 3 أبعاد استراتيجية متزامنة:',
      steps: [
        {
          step: '01. التخصصات الطبية',
          title: 'SPECIALTIES',
          description: 'البدء بـ 4 تخصصات رئيسية ← ثم التوسع التدريجي نحو التخصصات الطبية الأوسع.',
        },
        {
          step: '02. المنتجات والحلول',
          title: 'PRODUCTS',
          description: 'أدوية متخصصة ← مكملات علاجية ← مستحضرات تجميلية علاجية ← حلول جلدية متكاملة.',
        },
        {
          step: '03. الامتداد الجغرافي',
          title: 'GEOGRAPHY',
          description: 'ريادة الأقاليم والمحافظات المستهدفة ← التغطية الوطنية الشاملة لكافة أنحاء مصر.',
        },
      ],
      highlightText: 'نمو عضوي مؤسسي مدروس يضمن الاستدامة والريادة.',
    },
    en: {
      tagline: 'GROWTH ENGINE | SLIDE 13',
      title: 'The Expansion Engine',
      lead: 'Full Care scales systematically across 3 synchronized strategic vectors:',
      steps: [
        {
          step: '01. Clinical Specialties',
          title: 'SPECIALTIES',
          description: 'Starting with 4 flagship specialties → Expanding systematically into adjacent medical domains.',
        },
        {
          step: '02. Product Portfolios',
          title: 'PRODUCTS',
          description: 'Pharmaceuticals → Therapeutic Nutraceuticals → Cosmeceuticals → Comprehensive Dermocosmetics.',
        },
        {
          step: '03. Geographic Footprint',
          title: 'GEOGRAPHY',
          description: 'Dominance in regional governorates → Full national presence across all Egyptian governorates.',
        },
      ],
      highlightText: 'A disciplined, sustainable engine engineered for market leadership.',
    },
  },

  // Slide 14
  {
    id: 14,
    slideNumber: 14,
    section: 'expansion',
    layout: 'geographic',
    accentColor: 'cyan',
    ar: {
      tagline: 'الخريطة الجغرافية | GEOGRAPHIC VISION',
      title: 'خطة التوسع والانتشار الجغرافي',
      lead: 'خارطة انتشار ثلاثية المراحل لبناء حضور ميداني راسخ:',
      cards: [
        {
          badge: 'PHASE 01 | المرحلة الأولى',
          title: 'الدلتا والصعيد الأولي',
          description: 'الغربية • البحيرة • كفر الشيخ • أسيوط • المنيا',
          tags: ['Gharbia', 'Beheira', 'Kafr El Sheikh', 'Assiut', 'Minya'],
        },
        {
          badge: 'PHASE 02 | المرحلة الثانية',
          title: 'توسعات الدلتا والصعيد',
          description: 'الشرقية • المنوفية • الدقهلية • الفيوم • بني سويف • سوهاج • قنا',
          tags: ['Sharqia', 'Monufia', 'Dakahlia', 'Fayoum', 'Beni Suef', 'Sohag', 'Qena'],
        },
        {
          badge: 'PHASE 03 | المرحلة الثالثة',
          title: 'المدن الكبرى والعواصم',
          description: 'القاهرة الكبرى • الجيزة • الإسكندرية',
          tags: ['Cairo', 'Giza', 'Alexandria'],
        },
      ],
      highlightText: 'قصة انتشار تبدأ من العمق لتصنع طلبًا حقيقيًا وقاعدة ثقة صلبة.',
    },
    en: {
      tagline: 'GEOGRAPHIC VISION | SLIDE 14',
      title: 'Geographic Expansion Strategy',
      lead: 'A 3-phased strategic rollout establishing unshakeable field presence:',
      cards: [
        {
          badge: 'PHASE 01',
          title: 'Delta & Upper Egypt Beachheads',
          description: 'Gharbia • Beheira • Kafr El Sheikh • Assiut • Minya',
          tags: ['Gharbia', 'Beheira', 'Kafr El Sheikh', 'Assiut', 'Minya'],
        },
        {
          badge: 'PHASE 02',
          title: 'Regional Deepening',
          description: 'Sharqia • Monufia • Dakahlia • Fayoum • Beni Suef • Sohag • Qena',
          tags: ['Sharqia', 'Monufia', 'Dakahlia', 'Fayoum', 'Beni Suef', 'Sohag', 'Qena'],
        },
        {
          badge: 'PHASE 03',
          title: 'Metropolitan Core',
          description: 'Greater Cairo • Giza • Alexandria',
          tags: ['Cairo', 'Giza', 'Alexandria'],
        },
      ],
      highlightText: 'An expansion journey engineered from high-density regional depth into nationwide ubiquity.',
    },
    visual: {
      type: 'map',
    },
  },

  // Slide 15
  {
    id: 15,
    slideNumber: 15,
    section: 'expansion',
    layout: 'split-content',
    accentColor: 'gold',
    ar: {
      tagline: 'الشبكة الطبية | THE MEDICAL NETWORK',
      title: 'كل محافظة ليست مجرد نقطة على الخريطة.',
      lead: 'التوسع في رؤية Full Care هو بناء مجتمع رعاية متكامل داخل كل محافظة:',
      cards: [
        { title: 'Doctors | الأطباء', description: 'شراكة علمية مستمرة مع كبار الأطباء والاستشاريين' },
        { title: 'Pharmacies | الصيدليات', description: 'تواجد فعّال وعلاقة شراكة مع الصيادلة كخط دفاع أول' },
        { title: 'Medical Reps | المندوبون', description: 'فريق علمي مؤهل يمثل صوت وقيم Full Care في الميدان' },
        { title: 'Warehouses | المخازن', description: 'سلاسل إمداد وتخزين تضمن توافر المنتج بأعلى معايير الأمان' },
        { title: 'Distribution | التوزيع', description: 'شبكة لوجستية تغطي أبعد النقاط بسرعة وكفاءة' },
        { title: 'Partners | الشركاء', description: 'تعاون وثيق مع الهيئات الصحية والمراكز المتخصصة' },
      ],
      highlightText: 'وهذا ما يجعل التوسع عملية تكاملية شاملة، وليست مجرد فتح سوق تجاري جديد.',
    },
    en: {
      tagline: 'MEDICAL INFRASTRUCTURE | SLIDE 15',
      title: 'Each Governorate is an Ecosystem, Not a Map Pin.',
      lead: 'Expansion for Full Care means cultivating a vibrant local healthcare community in every region:',
      cards: [
        { title: 'Doctors & Consultants', description: 'Continuous clinical dialogue and scientific partnerships with specialists' },
        { title: 'Community Pharmacists', description: 'Empowering pharmacists as trusted frontline healthcare advisers' },
        { title: 'Medical Representatives', description: 'High-caliber scientific field liaisons embodying brand integrity' },
        { title: 'Regional Warehouses', description: 'State-of-the-art climate-controlled storage securing supply integrity' },
        { title: 'Logistics & Distribution', description: 'Agile distribution infrastructure delivering to every local pharmacy' },
        { title: 'Healthcare Partners', description: 'Deep collaboration with hospitals, clinics, and medical societies' },
      ],
      highlightText: 'Transforming expansion into a systemic healthcare movement rather than a mere sales push.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'شراكة وثيقة مع المجتمع الطبي والصيدلي',
      captionEn: 'Cultivating strong bonds with medical professionals',
    },
  },

  // Slide 16
  {
    id: 16,
    slideNumber: 16,
    section: 'expansion',
    layout: 'audience-split',
    accentColor: 'cyan',
    ar: {
      tagline: 'الجمهور المستهدف | TWO AUDIENCES. ONE PURPOSE.',
      title: 'جمهوران.. وهدف واحد.',
      lead: 'تخاطب Full Care طرفي معادلة الرعاية الصحية بمنهجية متسقة ورسالة موحدة:',
      cards: [
        {
          badge: 'B2B | المجتمع الطبي',
          title: 'الأطباء والصيادلة والشركاء',
          subtitle: 'Doctors, Pharmacists & HCPs',
          description: 'نخاطبهم بلغة علمية دقيقة وشفافة قائمة على الدراسات الإكلينيكية والفاعلية المثبتة.',
          tags: ['الثقة العلمية (Trust)', 'المصداقية الطبية (Credibility)', 'الشراكة المهنية (Partnership)'],
        },
        {
          badge: 'B2C | المرضى والعائلات',
          title: 'المرضى والأسر ومقدمو الرعاية',
          subtitle: 'Patients, Families & Consumers',
          description: 'نخاطبهم بلغة إنسانية بسيطة تطمئن القلوب وتقدم حلولًا واضحة ومسؤولة.',
          tags: ['الوعي الصحي (Awareness)', 'الأمان النفسي (Trust)', 'الرعاية المستمرة (Care)'],
        },
      ],
      highlightText: 'الربط المتين بين مصداقية الطبيب وراحة بال المريض.',
    },
    en: {
      tagline: 'AUDIENCE ARCHITECTURE | SLIDE 16',
      title: 'Two Audiences. One Unified Purpose.',
      lead: 'Full Care addresses both sides of the healthcare equation with harmonized strategic precision:',
      cards: [
        {
          badge: 'B2B | Medical Community',
          title: 'Doctors, Pharmacists & HCPs',
          subtitle: 'Healthcare Professionals & Partners',
          description: 'Engaged through robust clinical data, peer credibility, and uncompromised efficacy standards.',
          tags: ['Scientific Trust', 'Clinical Credibility', 'Long-term Partnership'],
        },
        {
          badge: 'B2C | Patients & Families',
          title: 'Patients, Families & Caregivers',
          subtitle: 'Everyday Consumers Seeking Health',
          description: 'Engaged through empathetic, empowering communication that de-stresses medical decisions.',
          tags: ['Health Literacy', 'Emotional Reassurance', 'Authentic Care'],
        },
      ],
      highlightText: 'Bridging physician credibility seamlessly with patient reassurance.',
    },
  },

  // Slide 17
  {
    id: 17,
    slideNumber: 17,
    section: 'journey',
    layout: 'journey',
    accentColor: 'emerald',
    ar: {
      tagline: 'رحلة المريض | THE PATIENT JOURNEY',
      title: 'رحلة المريض الإنسانية',
      lead: 'كيف تبدأ التجربة وكيف تصنع Full Care الفارق في كل محطة؟',
      steps: [
        { step: '01. المشكلة', title: 'PROBLEM', description: '«أنا عندي مشكلة حاسس بيها..» — بداية القلق والألم' },
        { step: '02. التساؤل', title: 'QUESTION', description: '«أعمل إيه وأروح لمين؟» — البحث عن التوجيه الصحيح' },
        { step: '03. البحث', title: 'SEARCH', description: '«أعرف المعلومة منين؟» — البحث عن مصدر موثوق' },
        { step: '04. الثقة', title: 'TRUST', description: '«أصدق مين وسط كل الأصوات؟» — البحث عن السند' },
        { step: '05. الحل', title: 'SOLUTION', description: '«إيه العلاج والحل الأنسب لي؟» — توفير المنتج الفعّال' },
        { step: '06. الرعاية', title: 'CARE', description: '«مين مكمل معايا المشوار؟» — الوجود الدائم حتى الشفاء' },
      ],
      highlightText: 'Full Care تدخل في الرحلة من أول سؤال.. ولا تنتهي عند شراء الدواء.',
    },
    en: {
      tagline: 'PATIENT JOURNEY | SLIDE 17',
      title: 'The Human Patient Journey',
      lead: 'Tracing the emotional and rational path of patients, and where Full Care intervenes:',
      steps: [
        { step: '01. PROBLEM', title: 'Discomfort & Symptom', description: '"I feel something is wrong..." — First onset of anxiety' },
        { step: '02. QUESTION', title: 'Seeking Guidance', description: '"What should I do? Where do I go?" — Confusion' },
        { step: '03. SEARCH', title: 'Information Quest', description: '"Where can I find reliable facts?" — Sifting noise' },
        { step: '04. TRUST', title: 'Seeking The Sanad', description: '"Whom can I truly trust?" — Seeking credible reassurance' },
        { step: '05. SOLUTION', title: 'Optimal Remedy', description: '"What is the right therapeutic path?" — Proven product' },
        { step: '06. CARE', title: 'Enduring Presence', description: '"Who is standing with me?" — Continuous recovery support' },
      ],
      highlightText: 'Full Care enters at the very first question and stays until complete well-being.',
    },
  },

  // Slide 18
  {
    id: 18,
    slideNumber: 18,
    section: 'journey',
    layout: 'statement',
    accentColor: 'gold',
    ar: {
      tagline: 'دور العلامة التجارية | THE BRAND ROLE',
      title: 'لا نريد أن تكون Full Care:',
      subtitle: '«The Brand That Sells Medicine»',
      lead: 'بل نطمح لأن تكون المكانة الراسخة في الأذهان هي:',
      highlightText: 'THE BRAND THAT HELPS PEOPLE NAVIGATE HEALTHCARE.',
      cards: [
        { title: 'تفهم المشكلة', description: 'استيعاب جذور التحدي الصحي بإنسانية وعمق' },
        { title: 'توضح المعلومة', description: 'تبسيط الإرشادات الطبية بلغة مفهومة' },
        { title: 'تقدم الحل', description: 'توفير منتجات صيدلانية وغذائية مضمونة الجودة' },
        { title: 'تظل موجودة', description: 'مساندة ممتدة تزرع الطمأنينة والاستقرار' },
      ],
    },
    en: {
      tagline: 'BRAND ROLE DEFINITION | SLIDE 18',
      title: 'We Refuse to Let Full Care Be:',
      subtitle: '"The Brand That Merely Sells Medicine"',
      lead: 'Our defined institutional purpose is far more profound:',
      highlightText: 'THE BRAND THAT HELPS PEOPLE NAVIGATE HEALTHCARE.',
      cards: [
        { title: 'Understand The Problem', description: 'Grasping health challenges with human empathy and scientific depth' },
        { title: 'Demystify Information', description: 'Translating complex medical science into clear, empowering guidance' },
        { title: 'Provide The Solution', description: 'Delivering verified, top-tier therapeutic formulations' },
        { title: 'Remain Unwaveringly Present', description: 'Enduring partnership ensuring no patient feels abandoned' },
      ],
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
    },
  },

  // Slide 19
  {
    id: 19,
    slideNumber: 19,
    section: 'journey',
    layout: 'split-content',
    accentColor: 'emerald',
    ar: {
      tagline: 'شخصية العلامة | BRAND PERSONALITY',
      title: 'إذا كانت Full Care شخصًا...',
      subtitle: 'ستكون: «THE RELIABLE ONE»',
      lead: 'الشخص الذي تبحث عنه وتستند عليه بثقة مطلقة لأنه:',
      cards: [
        { title: 'يسمعك باهتمام', description: 'يمنحك كامل التركيز دون مقاطعة أو استخفاف' },
        { title: 'يفهمك بعمق', description: 'يقرأ مشاعرك ومخاوفك قبل أن تنطق بها' },
        { title: 'لا يعقد الأمور', description: 'يقدم الحقيقة بوضوح وسلاسة دون تعقيد لفظي' },
        { title: 'لا يخوفك', description: 'يزرع الأمل والعزيمة دون تهويل أو تهوين' },
        { title: 'يعطيك المعلومة', description: 'يقدم المشورة الموثوقة القائمة على العلم' },
        { title: 'يساعدك في الحل', description: 'يمشي معك خطوة بخطوة للوصول للعلاج' },
      ],
      highlightText: 'شخص حاضر، مطمئن، وموثوق في كل الظروف.',
    },
    en: {
      tagline: 'BRAND ARCHETYPE | SLIDE 19',
      title: 'If Full Care Were a Person...',
      subtitle: 'It Would Be: "THE RELIABLE ONE"',
      lead: 'The dependable figure you instinctively turn to in moments of vulnerability:',
      cards: [
        { title: 'Listens Attentively', description: 'Provides full, respectful attention without dismissal' },
        { title: 'Understands Deeply', description: 'Grasps unspoken anxieties and emotional context' },
        { title: 'Never Overcomplicates', description: 'Communicates medical truth simply and transparently' },
        { title: 'Never Provokes Fear', description: 'Instills grounded confidence rather than alarm' },
        { title: 'Provides Clear Facts', description: 'Offers responsible, science-backed guidance' },
        { title: 'Guides to Solution', description: 'Walks side-by-side with you toward recovery' },
      ],
      highlightText: 'A reassuring, capable anchor present whenever needed.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'الثقة والمصداقية والاهتمام الإنساني',
      captionEn: 'Clinical confidence merged with authentic human empathy',
    },
  },

  // Slide 20
  {
    id: 20,
    slideNumber: 20,
    section: 'journey',
    layout: 'statement',
    accentColor: 'cyan',
    ar: {
      tagline: 'نبرة الصوت | BRAND VOICE',
      title: 'نبرة صوت Full Care',
      lead: 'كيف تتحدث العلامة التجارية وتخاطب جمهورها؟',
      cards: [
        {
          badge: '01. SIMPLE',
          title: 'بسيطة وواضحة',
          description: 'نتكلم بلغة قريبة من الناس يفهمها الجميع دون مصطلحات معقدة.',
        },
        {
          badge: '02. HUMAN',
          title: 'إنسانية ودافئة',
          description: 'نخاطب الإنسان ومشاعره واحتياجاته، لا مجرد الحالة المرضية المجردة.',
        },
        {
          badge: '03. TRUSTED',
          title: 'موثوقة ومسؤولة',
          description: 'المعلومة الطبية دقيقة علميًا، مسؤولة، ومراجعة من أهل الاختصاص.',
        },
        {
          badge: '04. SUPPORTIVE',
          title: 'داعمة ومساندة',
          description: 'نحن هنا للمساعدة وبناء الثقة وتقديم يد العون في كل خطوة.',
        },
        {
          badge: '05. CONFIDENT',
          title: 'واثقة بدون مبالغة',
          description: 'ثقة نابعة من جودة التصنيع والخبرة العلمية، بعيدًا عن الوعود الزائفة.',
        },
      ],
    },
    en: {
      tagline: 'VOICE & TONE | SLIDE 20',
      title: 'The Full Care Tone of Voice',
      lead: 'How the brand communicates across all physical and digital touchpoints:',
      cards: [
        {
          badge: '01. SIMPLE',
          title: 'Clear & Accessible',
          description: 'Speaking in everyday, intuitive language free of alienating clinical jargon.',
        },
        {
          badge: '02. HUMAN',
          title: 'Warm & Empathetic',
          description: 'Engaging the whole person and family, never treating patients as mere case numbers.',
        },
        {
          badge: '03. TRUSTED',
          title: 'Evidence-Based & Responsible',
          description: 'Strict scientific accuracy vetted thoroughly by certified healthcare experts.',
        },
        {
          badge: '04. SUPPORTIVE',
          title: 'Empowering & Reassuring',
          description: 'Always positioned as a helpful companion fostering patient agency and calm.',
        },
        {
          badge: '05. CONFIDENT',
          title: 'Grounded & Unpretentious',
          description: 'Quiet institutional confidence backed by manufacturing excellence, never hyperbole.',
        },
      ],
    },
  },

  // Slide 21
  {
    id: 21,
    slideNumber: 21,
    section: 'content',
    layout: 'split-content',
    accentColor: 'emerald',
    ar: {
      tagline: 'التحول في المحتوى | THE CONTENT SHIFT',
      title: 'التحول الجوهري في استراتيجية المحتوى',
      lead: 'الانتقال من الإعلان التجاري المباشر إلى صناعة القيمة والتأثير الحقيقي:',
      cards: [
        {
          badge: 'النموذج التقليدي القديم',
          title: 'FROM: Product → Benefit → Offer',
          description: 'التركيز المباشر على علبة الدواء وسعرها وعرضها الترويجي، مما يفقد العلامة قيمتها ورابطتها الإنسانية.',
        },
        {
          badge: 'نموذج Full Care الحديث',
          title: 'TO: People → Problem → Education → Solution → Product',
          description: 'البدء من الإنسان وتحدياته، وتوعيته علميًا، ثم تقديم الحل المتكامل ليكون المنتج جزءًا طبيعيًا من القصة.',
        },
      ],
      highlightText: 'المنتج لا يختفي.. بل يصبح: PART OF THE STORY وليس القصة كلها.',
    },
    en: {
      tagline: 'CONTENT PARADIGM SHIFT | SLIDE 21',
      title: 'The Strategic Content Paradigm Shift',
      lead: 'Evolving beyond blunt commercial ads into genuine human value and health literacy:',
      cards: [
        {
          badge: 'Traditional Pharma Model',
          title: 'FROM: Product → Benefit → Offer',
          description: 'Fixating on product boxes and transactional promotions, eroding brand equity and emotional resonance.',
        },
        {
          badge: 'Full Care Strategic Model',
          title: 'TO: People → Problem → Education → Solution → Product',
          description: 'Initiating from human reality, diagnosing anxieties, educating responsibly, and presenting therapy as a natural resolution.',
        },
      ],
      highlightText: 'The product does not disappear; it becomes PART OF THE STORY, rather than the entire monologue.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85',
    },
  },

  // Slide 22
  {
    id: 22,
    slideNumber: 22,
    section: 'content',
    layout: 'content-pillars',
    accentColor: 'cyan',
    ar: {
      tagline: 'ركائز المحتوى | CONTENT PILLARS',
      title: 'أعمدة المحتوى الستة',
      lead: 'بنية محتوى رقمي متوازنة تبني الوعي والمصداقية والتفاعل اليومي:',
      cards: [
        {
          badge: '01',
          title: 'FULL CARE KNOWS',
          subtitle: 'معلومات طبية مبسطة',
          description: 'جرعات توعوية سريعة وموثوقة تشرح المفاهيم الصحية بطريقة سهلة وشيقة.',
        },
        {
          badge: '02',
          title: 'ASK FULL CARE',
          subtitle: 'إجابات على أسئلة الجمهور',
          description: 'مساحة تفاعلية يجيب فيها أطباء واستشاريو Full Care على التساؤلات الشائعة.',
        },
        {
          badge: '03',
          title: 'MYTH VS FACT',
          subtitle: 'تصحيح المفاهيم الخاطئة',
          description: 'تفكيك الخرافات الشائعة في التغذية وصحة المرأة والعظام وتصحيحها علميًا.',
        },
        {
          badge: '04',
          title: 'CARE STORIES',
          subtitle: 'قصص إنسانية حقيقية',
          description: 'تجارب واقعية ملهمة للأسر والأفراد في مواجهة وتجاوز التحديات الصحية.',
        },
        {
          badge: '05',
          title: 'EVERYDAY CARE',
          subtitle: 'نصائح الحياة اليومية',
          description: 'إرشادات عملية للحفاظ على نمط حياة صحي ونشاط بدني متوازن لكل أفراد البيت.',
        },
        {
          badge: '06',
          title: 'FULL CARE SOLUTIONS',
          subtitle: 'المنتجات والحلول المتكاملة',
          description: 'شرح علمي دقيق لدواعي استخدام منتجات ومكملات Full Care ومزاياها العلاجية.',
        },
      ],
    },
    en: {
      tagline: 'EDITORIAL PILLARS | SLIDE 22',
      title: 'The Six Core Content Pillars',
      lead: 'A synchronized publishing architecture driving awareness, engagement, and conversion:',
      cards: [
        {
          badge: '01',
          title: 'FULL CARE KNOWS',
          subtitle: 'Bite-Sized Health Literacy',
          description: 'Concise, engaging scientific insights simplifying clinical facts for everyday awareness.',
        },
        {
          badge: '02',
          title: 'ASK FULL CARE',
          subtitle: 'Interactive Expert Q&A',
          description: 'Community-driven inquiries answered transparently by certified medical specialists.',
        },
        {
          badge: '03',
          title: 'MYTH VS FACT',
          subtitle: 'Debunking Health Myths',
          description: 'Dismantling widespread cultural myths across gastroenterology, nutrition, and pregnancy.',
        },
        {
          badge: '04',
          title: 'CARE STORIES',
          subtitle: 'Authentic Human Journeys',
          description: 'Real, emotionally resonant recovery narratives celebrating resilience and familial care.',
        },
        {
          badge: '05',
          title: 'EVERYDAY CARE',
          subtitle: 'Daily Wellness Protocols',
          description: 'Practical routines and micro-habits elevating family vitality and preventive health.',
        },
        {
          badge: '06',
          title: 'FULL CARE SOLUTIONS',
          subtitle: 'Product & Clinical Efficacy',
          description: 'Clear therapeutic context detailing Full Care formulation science and indications.',
        },
      ],
    },
  },

  // Slide 23
  {
    id: 23,
    slideNumber: 23,
    section: 'content',
    layout: 'timeline',
    accentColor: 'gold',
    ar: {
      tagline: 'معادلة صناعة المحتوى | THE CONTENT FORMULA',
      title: 'معادلة المحتوى المؤثر',
      lead: 'كل قطعة محتوى تنشرها Full Care تنطلق من تسلسل نفسي وعلمي محكم:',
      steps: [
        { step: '01. نقطة الألم', title: 'مشكلة بتقابلك؟', description: 'طرح التساؤل أو العَرَض الذي يشعر به المتابع فورًا' },
        { step: '02. الاستيعاب', title: 'نفهمها بعمق', description: 'إظهار التعاطف وفهم الأثر النفسي والجسدي للمشكلة' },
        { step: '03. التبسيط', title: 'نبسط أسبابها', description: 'شرح الأسباب الفسيولوجية دون تعقيد مصطلحات' },
        { step: '04. التوضيح', title: 'نشرح خطوات التعامل', description: 'تقديم نصائح وقائية وسلوكية فورية' },
        { step: '05. الحل الدوائي', title: 'نقدم الحل العلاجي', description: 'بيان دور منتجات ومكملات Full Care المعتمدة' },
      ],
      highlightText: 'وفي النهاية: FULL CARE IS HERE TO HELP.',
    },
    en: {
      tagline: 'ENGAGEMENT FORMULA | SLIDE 23',
      title: 'The High-Impact Content Formula',
      lead: 'Every published story follows a rigorous psychological and educational narrative curve:',
      steps: [
        { step: '01. Trigger', title: 'Experiencing a Problem?', description: 'Hooking relatable daily symptoms and patient anxieties instantly' },
        { step: '02. Empathy', title: 'Deep Understanding', description: 'Validating the human and emotional burden of the condition' },
        { step: '03. Demystify', title: 'Simplifying Root Causes', description: 'Deconstructing biological drivers in crystal-clear visual analogies' },
        { step: '04. Action', title: 'Actionable Guidance', description: 'Empowering immediate lifestyle and preventive steps' },
        { step: '05. Resolution', title: 'Therapeutic Solution', description: 'Positioning Full Care clinical products as the trusted evidence-based answer' },
      ],
      highlightText: 'Reinforcing the final promise: FULL CARE IS HERE TO HELP.',
    },
  },

  // Slide 24
  {
    id: 24,
    slideNumber: 24,
    section: 'campaign',
    layout: 'statement',
    accentColor: 'emerald',
    ar: {
      tagline: 'منطقة الحملة | CAMPAIGN TERRITORY',
      title: '«لما تحتاج حد...»',
      subtitle: 'المساحة العاطفية للحملة الإعلانية',
      paragraphs: [
        'لما تحتاج حد يفهمك بجد من غير ما تبرر..',
        'لما تحتاج حد يشرح لك خطوة بخطوة من غير ما يخوفك..',
        'لما تحتاج حد يساعدك بالحل الصح في وقته..',
        'لما تحتاج حد يسندك ويكمل معاك المشوار..',
      ],
      highlightText: 'FULL CARE.',
      quote: 'حضور دائم.. ورعاية تستحق الثقة.',
    },
    en: {
      tagline: 'CREATIVE TERRITORY | SLIDE 24',
      title: '"When You Need Someone..."',
      subtitle: 'The Emotional Heart of the Brand Campaign',
      paragraphs: [
        'When you need someone who truly understands without judgment..',
        'When you need someone to explain the steps without panic..',
        'When you need someone to guide you with the verified right solution..',
        'When you need someone to stand as your pillar through recovery..',
      ],
      highlightText: 'FULL CARE.',
      quote: 'Enduring presence.. Care worthy of unwavering trust.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'المساندة الحقيقية والتواجد وقت الحاجة',
      captionEn: 'Authentic support in moments of vulnerability',
    },
  },

  // Slide 25
  {
    id: 25,
    slideNumber: 25,
    section: 'campaign',
    layout: 'campaign',
    accentColor: 'cyan',
    ar: {
      tagline: 'الحملة الرئيسية | HERO CAMPAIGN',
      title: '«كل بيت فيه سند»',
      lead: 'سلسلة سينمائية تسرد مواقف حقيقية نابضة من قلب البيوت المصرية:',
      cards: [
        { title: 'أم مع ابنتها', description: 'رعاية دافئة وسند أمومي في أولى خطوات الحمل والأمومة' },
        { title: 'أخ مع أخيه', description: 'وقفة رجولة ومساندة في لحظات الفحوصات والعمليات' },
        { title: 'زوج مع زوجته', description: 'مشاركة حقيقية في رحلة العلاج وتحديات الصحة اليومية' },
        { title: 'صديق مع صديقه', description: 'صوت مطمئن وحضور فوري عند الاتصال في منتصف الليل' },
        { title: 'طبيب مع مريضه', description: 'علاقة إنسانية تتجاوز الكشف الطبي إلى الطمأنينة والأمان' },
      ],
      highlightText: 'وفي كل موقف يسطع معنى واحد: «أنا معاك..»',
      secondaryText: 'FULL CARE — السند اللي دايمًا موجود.',
    },
    en: {
      tagline: 'HERO BRAND CAMPAIGN | SLIDE 25',
      title: '"Every Home Has a Sanad"',
      lead: 'A cinematic docu-style campaign capturing authentic Egyptian family scenes:',
      cards: [
        { title: 'Mother & Daughter', description: 'Tender maternal guidance through pregnancy and early motherhood' },
        { title: 'Brother & Brother', description: 'Unflinching solidarity waiting outside diagnostic clinics' },
        { title: 'Husband & Wife', description: 'Shared partnership navigating recovery protocols and daily wellness' },
        { title: 'Lifelong Friends', description: 'Immediate presence responding to midnight emergency calls' },
        { title: 'Doctor & Patient', description: 'Compassionate clinical care elevating reassurance above fear' },
      ],
      highlightText: 'Echoing one universal resonance: "I am with you."',
      secondaryText: 'FULL CARE — The Support Always There.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'قصص إنسانية تعبر عن أصالة الرعاية والسند',
      captionEn: 'Human storytelling capturing authentic familial devotion',
    },
  },

  // Slide 26
  {
    id: 26,
    slideNumber: 26,
    section: 'campaign',
    layout: 'roadmap',
    accentColor: 'gold',
    ar: {
      tagline: 'السلسلة الاستراتيجية | FROM FAMILY TO BRAND',
      title: 'من حقيقة الأسرة إلى وعد العلامة',
      lead: 'الرسالة: في كل بيت يوجد سند. ووعد Full Care: أن تكون هذا السند في كل ما يخص الصحة.',
      steps: [
        {
          step: '01. الاسم | NAME',
          title: 'FULL CARE',
          description: 'الرعاية الكاملة والشاملة التي لا تترك تفصيلة صحية دون اهتمام.',
        },
        {
          step: '02. الرؤية العميقة | INSIGHT',
          title: 'THE SUPPORT SYSTEM (السند)',
          description: 'الحاجة الفطرية للإنسان لوجود ركيزة موثوقة يلجأ إليها في المرض.',
        },
        {
          step: '03. المفهوم | CONCEPT',
          title: 'THE CARE BEHIND EVERY FAMILY',
          description: 'الكيان الذي يدعم سند كل بيت ليبقى قويًا وقادرًا على العطاء.',
        },
        {
          step: '04. الدور | ROLE',
          title: 'THE RELIABLE HEALTHCARE PARTNER',
          description: 'الشريك الصحي الموثوق في كل بيت ومستشفى وصيدلية.',
        },
      ],
    },
    en: {
      tagline: 'STRATEGIC ALIGNMENT | SLIDE 26',
      title: 'From Family Insight to Brand Promise',
      lead: 'Insight: In every home there is a Sanad. Brand Promise: Full Care is that Sanad in healthcare.',
      steps: [
        {
          step: '01. NAME',
          title: 'FULL CARE',
          description: 'Complete, holistic healthcare leaving no therapeutic detail unaddressed.',
        },
        {
          step: '02. INSIGHT',
          title: 'THE SUPPORT SYSTEM (SANAD)',
          description: 'The universal human need for an unfailing anchor during medical uncertainty.',
        },
        {
          step: '03. CONCEPT',
          title: 'THE CARE BEHIND EVERY FAMILY',
          description: 'The institutional power empowering every family caregiver to stay strong.',
        },
        {
          step: '04. ROLE',
          title: 'THE RELIABLE HEALTHCARE PARTNER',
          description: 'The trusted clinical partner in every clinic, pharmacy, and household.',
        },
      ],
    },
  },

  // Slide 27
  {
    id: 27,
    slideNumber: 27,
    section: 'founder',
    layout: 'founder',
    accentColor: 'emerald',
    ar: {
      tagline: 'قصة التأسيس | THE FOUNDER DNA',
      title: 'وراء Full Care قصة مؤسس',
      lead: 'رحلة حقيقية قامت من اليوم الأول على كلمة واحدة فاصلة:',
      subtitle: 'CHALLENGE | التحدي المستمر',
      paragraphs: [
        'اختيارات صعبة.. تجارب شاقة.. محاولات مستميتة.. تحديات السوق.. وإعادة بناء لا تعرف الاستسلام.',
        'ثم وضع حجر الأساس وتأسيس Full Care.',
        'لكن الأهم ليس مجرد سرد تفاصيل السيرة الذاتية..',
        'الأهم هو الجينات والـ DNA الراسخ الذي تشكل منها:',
      ],
      highlightText: '«لو الطريق صعب.. نبنيه.»',
    },
    en: {
      tagline: 'FOUNDING DNA | SLIDE 27',
      title: 'Behind Full Care: A Founder Story',
      lead: 'An authentic entrepreneurial journey anchored on one defining imperative:',
      subtitle: 'CHALLENGE & UNCOMPROMISING DRIVE',
      paragraphs: [
        'Tough choices.. demanding trials.. relentless testing.. market disruptions.. and rebuilding with unshakeable resolve.',
        'Culminating in the architectural founding of Full Care.',
        'Yet the essence lies not in recounting biographical milestones..',
        'The true power is the unyielding DNA forged through the fire:',
      ],
      highlightText: '"If the road is difficult... we build it ourselves."',
    },
    visual: {
      type: 'founder',
      founderIndex: 1,
      src: '/assets/founder-1.jpg',
      captionAr: 'رؤية تأسيسية صلبة تقود مسيرة Full Care',
      captionEn: 'Foundational leadership steering Full Care vision',
    },
  },

  // Slide 28
  {
    id: 28,
    slideNumber: 28,
    section: 'founder',
    layout: 'founder',
    accentColor: 'cyan',
    ar: {
      tagline: 'انتقال الجينات | FROM FOUNDER DNA TO BRAND DNA',
      title: 'من جينات المؤسس إلى قيم العلامة',
      lead: 'كيف تحولت روح التأسيس الفردية إلى قيم مؤسسية تقود فريق Full Care يوميًا؟',
      cards: [
        { badge: 'الطموح', title: 'AMBITION', description: 'أن نبني كيانًا أكبر وأشمل لا يرضى بالحلول الوسط' },
        { badge: 'الصمود', title: 'RESILIENCE', description: 'أن نكمل ونتجاوز العقبات مهما بلغت الصعوبات' },
        { badge: 'الشجاعة', title: 'COURAGE', description: 'أن ندخل المساحات الطبية المعقدة ونصنع فارقًا' },
        { badge: 'المسؤولية', title: 'RESPONSIBILITY', description: 'أن نأخذ صحة الناس ورعايتهم بمنتهى الجدية' },
        { badge: 'الرعاية', title: 'CARE', description: 'أن يظل الإنسان وصحته وكرامته دائمًا في المقام الأول' },
      ],
    },
    en: {
      tagline: 'INSTITUTIONAL DNA | SLIDE 28',
      title: 'From Founder DNA to Brand Values',
      lead: 'Translating personal entrepreneurial resilience into institutional operating principles:',
      cards: [
        { badge: 'Ambition', title: 'AMBITION', description: 'Building an expansive healthcare legacy that never settles for mediocrity' },
        { badge: 'Resilience', title: 'RESILIENCE', description: 'Persevering through market headwinds with unwavering determination' },
        { badge: 'Courage', title: 'COURAGE', description: 'Boldly venturing into demanding clinical areas to pioneer solutions' },
        { badge: 'Responsibility', title: 'RESPONSIBILITY', description: 'Treating public health and medical standards with sacred seriousness' },
        { badge: 'Human Care', title: 'CARE', description: 'Keeping human well-being and dignity as our ultimate north star' },
      ],
    },
    visual: {
      type: 'founder',
      founderIndex: 2,
      src: '/assets/founder-2.jpg',
      captionAr: 'قيم مؤسسية راسخة: الطموح، الصمود، والإنسان أولًا',
      captionEn: 'Institutional values: Ambition, resilience, and human-first care',
    },
  },

  // Slide 29
  {
    id: 29,
    slideNumber: 29,
    section: 'founder',
    layout: 'founder',
    accentColor: 'gold',
    ar: {
      tagline: 'جوهر العلامة | WHY THIS STORY MATTERS',
      title: 'لماذا تمنحنا هذه القصة الفارق؟',
      lead: 'قصة المؤسس لا يجب أن تتحول إلى سيرة ذاتية مجردة، بل هي المفتاح لفهم روح الشركة:',
      paragraphs: [
        'لماذا تمتلك Full Care هذا الطموح غير المحدود للتوسع؟',
        'لماذا اختارت أصعب التخصصات وأكثرها مساسًا بالأسرة؟',
        'لماذا أصرت على امتلاك التصنيع وبناء البنية التحتية بنفسها؟',
        'ولماذا اختارت اسم «Full Care» رعاية كاملة وليست جزئية؟',
      ],
      highlightText: 'هذه القصة تمنح العلامة التجارية: SOUL (روحًا وحياة).',
      quote: 'علامة تجارية لها قلب، وتاريخ، وقضية إنسانية حقيقية.',
    },
    en: {
      tagline: 'BRAND SOUL | SLIDE 29',
      title: 'Why This Story Gives Us The Edge',
      lead: 'This narrative is not a bio; it unlocks why Full Care operates with such relentless vigor:',
      paragraphs: [
        'Why does Full Care possess such bold expansionist ambition?',
        'Why choose the most demanding, family-critical therapeutic fields?',
        'Why insist on owning in-house manufacturing from the beginning?',
        'And why demand the name "Full Care" — holistic, uncompromising care?',
      ],
      highlightText: 'This journey breathes authentic SOUL into the enterprise.',
      quote: 'A brand with a pulse, a spine, and a genuine human mission.',
    },
    visual: {
      type: 'founder',
      founderIndex: 3,
      src: '/assets/founder-3.jpg',
      captionAr: 'روح وتاريخ يمنحان العلامة عمقها ومصداقيتها',
      captionEn: 'History and spirit giving the brand its distinct character',
    },
  },

  // Slide 30
  {
    id: 30,
    slideNumber: 30,
    section: 'strategy',
    layout: 'strategy',
    accentColor: 'emerald',
    ar: {
      tagline: 'النموذج الاستراتيجي | THE STRATEGIC MODEL',
      title: 'محاور النمو الأربعة',
      lead: 'تبني Full Care ريادتها ونموها المستدام على 4 ركائز متكاملة:',
      cards: [
        {
          badge: '01',
          title: 'TRUST | الثقة والمصداقية',
          subtitle: 'Medical Credibility',
          description: 'ترسيخ المصداقية العلمية عبر تجارب إكلينيكية صلبة وتوصيات طبية موثوقة من كبار الأطباء.',
        },
        {
          badge: '02',
          title: 'REACH | الانتشار الجغرافي',
          subtitle: 'Geographic Expansion',
          description: 'تغطية ميدانية واسعة تبدأ من الأقاليم وصولًا لكل صيدلية ومستشفى على مستوى الجمهورية.',
        },
        {
          badge: '03',
          title: 'RANGE | تنوع المحفظة',
          subtitle: 'Product & Specialty Expansion',
          description: 'توسيع نطاق التخصصات الطبية والخطوط الدوائية والغذائية والتجميلية ذات القيمة المضافة.',
        },
        {
          badge: '04',
          title: 'RELATIONSHIP | بناء العلاقة',
          subtitle: 'Community & Brand Building',
          description: 'خلق رابطة ولاء ووعي مجتمعي تجعل Full Care اسمًا مألوفًا ومحبوبًا في كل بيت.',
        },
      ],
    },
    en: {
      tagline: 'STRATEGIC ARCHITECTURE | SLIDE 30',
      title: 'The Four Pillars of Strategic Growth',
      lead: 'Full Care scales its market leadership across 4 mutually reinforcing pillars:',
      cards: [
        {
          badge: '01',
          title: 'TRUST | Medical Credibility',
          subtitle: 'Scientific Authority',
          description: 'Cementing clinical credibility through strict quality metrics and strong KOL physician advocacy.',
        },
        {
          badge: '02',
          title: 'REACH | Geographic Scale',
          subtitle: 'Nationwide Footprint',
          description: 'Comprehensive field expansion penetrating regional governorates to national metropolitan hubs.',
        },
        {
          badge: '03',
          title: 'RANGE | Portfolio Breadth',
          subtitle: 'Specialty Innovation',
          description: 'Broadening high-yield pharmaceutical, nutraceutical, and dermocosmetic product portfolios.',
        },
        {
          badge: '04',
          title: 'RELATIONSHIP | Community Resonance',
          subtitle: 'Enduring Loyalty',
          description: 'Forging deep emotional and educational bonds making Full Care a beloved household name.',
        },
      ],
    },
  },

  // Slide 31
  {
    id: 31,
    slideNumber: 31,
    section: 'strategy',
    layout: 'roadmap',
    accentColor: 'cyan',
    ar: {
      tagline: 'مراحل بناء العلامة | THE 3-STAGE BRAND JOURNEY',
      title: 'رحلة العلامة التجارية عبر 3 مراحل',
      lead: 'خارطة طريق مدروسة للتحول إلى رائد السوق في مجال الرعاية الصحية:',
      steps: [
        {
          step: 'STAGE 01 | المرحلة الأولى',
          title: 'PROVE | إثبات القوة',
          description: 'إثبات الكفاءة العلمية والتشغيلية وجودة التصنيع، وكسب ثقة مجتمع الأطباء والصيادلة في المحافظات المستهدفة.',
        },
        {
          step: 'STAGE 02 | المرحلة الثانية',
          title: 'BUILD | بناء الحضور',
          description: 'إطلاق منظومة المحتوى الرقمي والحملات التوعوية، وبناء Brand Recognition واسع بين الأسر والجمهور.',
        },
        {
          step: 'STAGE 03 | المرحلة الثالثة',
          title: 'OWN | امتلاك المساحة',
          description: 'امتلاك وتصدر المساحة والمنطقة الاستراتيجية الكاملة: «CARE — الرعاية الصحية المتكاملة».',
        },
      ],
      highlightText: 'من الإثبات العلمي إلى الريادة المجتمعية الشاملة.',
    },
    en: {
      tagline: 'BRAND TRAJECTORY | SLIDE 31',
      title: 'The 3-Stage Brand Evolution',
      lead: 'A disciplined roadmap from market entry to undeniable category leadership:',
      steps: [
        {
          step: 'STAGE 01',
          title: 'PROVE | Scientific & Operational Might',
          description: 'Validating clinical efficacy, manufacturing precision, and winning HCP trust across launch governorates.',
        },
        {
          step: 'STAGE 02',
          title: 'BUILD | Brand Resonance & Presence',
          description: 'Deploying high-impact educational media systems, driving mass consumer brand recognition.',
        },
        {
          step: 'STAGE 03',
          title: 'OWN | Definitive Territory Ownership',
          description: 'Achieving unchallenged category leadership and owning the universal territory: "CARE".',
        },
      ],
      highlightText: 'From clinical proof to undisputed national leadership.',
    },
  },

  // Slide 32
  {
    id: 32,
    slideNumber: 32,
    section: 'strategy',
    layout: 'strategy',
    accentColor: 'gold',
    ar: {
      tagline: 'خطة الـ 90 يومًا | 90-DAY STRATEGIC DIRECTION',
      title: 'خطة التنفيذ الاستراتيجي لـ 90 يومًا',
      lead: 'خطة تنفيذية ربع سنوية واضحة المعالم لتحقيق قفزة نوعية في الحضور والتأثير:',
      cards: [
        {
          badge: 'MONTH 01 | الشهر الأول',
          title: 'BUILD THE FOUNDATION',
          subtitle: 'بناء الأساس الاستراتيجي',
          description: 'تدقيق شامل للعلامة • دراسة معمقة للجمهور والمنافسين • تثبيت الهوية البصرية • إعداد البنية التحتية للمحتوى.',
        },
        {
          badge: 'MONTH 02 | الشهر الثاني',
          title: 'BUILD THE PRESENCE',
          subtitle: 'إطلاق الحضور والإنتاج',
          description: 'إطلاق منظومة النشر • إنتاج الفيديو الرئيسي • بدء السلاسل التوعوية • محتوى الأطباء المتخصصين • سرد قصة العلامة.',
        },
        {
          badge: 'MONTH 03 | الشهر الثالث',
          title: 'BUILD THE COMMUNITY',
          subtitle: 'تفعيل المجتمع والانتشار',
          description: 'تفعيل الشراكات والمؤثرين الموثوقين • تحفيز المحتوى التفاعلي (UGC) • الحملات الإعلانية الموجهة • تحسين معدلات التحويل.',
        },
      ],
    },
    en: {
      tagline: 'TACTICAL ROADMAP | SLIDE 32',
      title: 'The 90-Day Execution Blueprint',
      lead: 'A high-velocity, quarterly execution plan engineered for rapid brand traction:',
      cards: [
        {
          badge: 'MONTH 01',
          title: 'BUILD THE FOUNDATION',
          subtitle: 'Strategic Infrastructure',
          description: 'Comprehensive brand audit • Deep audience & competitor mapping • Visual system finalization • Content engine setup.',
        },
        {
          badge: 'MONTH 02',
          title: 'BUILD THE PRESENCE',
          subtitle: 'Content Production & Launch',
          description: 'Deploying publishing engine • High-production hero video • Clinical expert series • Launching brand story.',
        },
        {
          badge: 'MONTH 03',
          title: 'BUILD THE COMMUNITY',
          subtitle: 'Community Activation & Scale',
          description: 'Credible medical influencer alignment • UGC campaigns • Performance paid media • Conversion optimization.',
        },
      ],
    },
  },

  // Slide 33
  {
    id: 33,
    slideNumber: 33,
    section: 'strategy',
    layout: 'strategy',
    accentColor: 'emerald',
    ar: {
      tagline: 'محرك المحتوى الشهري | THE CONTENT ENGINE',
      title: 'إيقاع منظومة المحتوى الشهرية',
      lead: 'كيف يتم توزيع وضخ المحتوى بشكل متوازن ومستمر طوال كل شهر؟',
      cards: [
        {
          badge: 'HERO',
          title: 'الفكرة الكبرى والحملة',
          subtitle: 'Campaign / Big Idea',
          description: 'إنتاج إعلاني سينمائي مميز يرسخ رسالة العلامة ويخلق صدى واسعًا في السوق.',
        },
        {
          badge: 'HUB',
          title: 'المحتوى التثقيفي الأسبوعي',
          subtitle: 'Weekly Educational Series',
          description: 'حلقات أسبوعية متخصصة مع أطباء Full Care للإجابة على القضايا الصحية.',
        },
        {
          badge: 'HYGIENE',
          title: 'المحتوى الإرشادي اليومي',
          subtitle: 'Daily Useful Content',
          description: 'نصائح ومعلومات سريعة يومية تحافظ على التواجد المستمر في خلاصات المتابعين.',
        },
        {
          badge: 'COMMUNITY',
          title: 'التفاعل والمجتمع',
          subtitle: 'Questions + UGC + Interaction',
          description: 'إشراك الجمهور في الإجابة على الأسئلة واستقبال التجارب والتعليقات الحية.',
        },
        {
          badge: 'PRODUCT',
          title: 'الحلول والتحويل',
          subtitle: 'Solutions + Conversion',
          description: 'ربط مباشر ومحترم بين التوعية ومنتجات Full Care في الصيدليات ومنافذ البيع.',
        },
      ],
    },
    en: {
      tagline: 'CONTENT ENGINE CADENCE | SLIDE 33',
      title: 'The Monthly Content Rhythm',
      lead: 'A synchronized publishing model ensuring continuous engagement and conversion:',
      cards: [
        {
          badge: 'HERO',
          title: 'Hero Campaign / Big Idea',
          subtitle: 'High-Impact Brand Film',
          description: 'Cinematic brand moments establishing emotional resonance and massive cultural talkability.',
        },
        {
          badge: 'HUB',
          title: 'Weekly Educational Series',
          subtitle: 'Expert Clinical Insights',
          description: 'In-depth weekly episodic video content addressing pressing health questions with physicians.',
        },
        {
          badge: 'HYGIENE',
          title: 'Daily Useful Micro-Content',
          subtitle: 'Everyday Preventive Guidance',
          description: 'Consistent, bite-sized health tips ensuring daily top-of-mind recall across feeds.',
        },
        {
          badge: 'COMMUNITY',
          title: 'Community Dialogue & UGC',
          subtitle: 'Interactive Engagement',
          description: 'Real-time Q&A moderation, user stories, and active community health dialogues.',
        },
        {
          badge: 'PRODUCT',
          title: 'Solutions & Pharmacy Conversion',
          subtitle: 'Commercial Activation',
          description: 'Seamlessly guiding educated consumers to pharmacy counters and verified retail channels.',
        },
      ],
    },
  },

  // Slide 34
  {
    id: 34,
    slideNumber: 34,
    section: 'strategy',
    layout: 'metrics',
    accentColor: 'cyan',
    ar: {
      tagline: 'مؤشرات الأداء | HOW WE MEASURE SUCCESS',
      title: 'كيف نقيس النجاح والتأثير؟',
      lead: 'مصفوفة مؤشرات أداء متكاملة تقيس النمو من الوعي حتى العائد التجاري:',
      cards: [
        {
          badge: '01. BRAND',
          title: 'نمو العلامة التجارية',
          description: 'الوعي بالعلامة (Awareness) • حجم الوصول (Reach) • معدلات البحث بالاسم (Searches) • التميز في الأذهان (Recognition).',
          tags: ['Awareness', 'Reach', 'Searches', 'Recognition'],
        },
        {
          badge: '02. CONTENT',
          title: 'تأثير المحتوى والتفاعل',
          description: 'عدد المشاهدات (Views) • وقت المشاهدة (Watch Time) • المشاركات (Shares) • الحفظ (Saves) • عمق التفاعل.',
          tags: ['Views', 'Watch Time', 'Shares', 'Saves'],
        },
        {
          badge: '03. COMMUNITY',
          title: 'حيوية المجتمع الصحي',
          description: 'الأسئلة الواردة (Inquiries) • التعليقات الإيجابية • محتوى الجمهور (UGC) • الرسائل المباشرة للاستشارة.',
          tags: ['Questions', 'Comments', 'UGC', 'Direct Messages'],
        },
        {
          badge: '04. BUSINESS',
          title: 'الأثر التجاري والتحويل',
          description: 'حركة الزيارات (Traffic) • طلبات الصيادلة والعملاء • نقاط البيع (Where to Buy) • نمو المبيعات (Conversions).',
          tags: ['Traffic', 'Prescriptions', 'Pharmacy Sellout', 'Conversions'],
        },
      ],
    },
    en: {
      tagline: 'PERFORMANCE MATRIX | SLIDE 34',
      title: 'How We Quantify Impact & Success',
      lead: 'A rigorous KPI framework measuring brand equity from awareness down to commercial return:',
      cards: [
        {
          badge: '01. BRAND',
          title: 'Brand Equity & Salience',
          description: 'Spontaneous awareness • Targeted reach • Branded search volume • Aided brand recognition.',
          tags: ['Awareness', 'Reach', 'Search Volume', 'Recognition'],
        },
        {
          badge: '02. CONTENT',
          title: 'Content Resonance & Reach',
          description: 'Video completion rate • Watch time • Social shares • Saves & bookmark rates • Qualitative sentiment.',
          tags: ['Views', 'Watch Time', 'Shares', 'Saves'],
        },
        {
          badge: '03. COMMUNITY',
          title: 'Community Health Dialogue',
          description: 'Inbound health inquiries • Discussion quality • User-generated health stories • Direct counsel requests.',
          tags: ['Questions', 'Comments', 'UGC', 'Inquiries'],
        },
        {
          badge: '04. BUSINESS',
          title: 'Commercial Efficacy & ROI',
          description: 'Pharmacy foot traffic • Doctor prescription lift • Where-to-buy store locator queries • Sales conversions.',
          tags: ['Traffic', 'Prescriptions', 'Sellout Growth', 'Conversions'],
        },
      ],
    },
  },

  // Slide 35
  {
    id: 35,
    slideNumber: 35,
    section: 'vision',
    layout: 'roadmap',
    accentColor: 'emerald',
    ar: {
      tagline: 'الرؤية بعيدة المدى | THE LONG-TERM VISION',
      title: 'مسار الرؤية بعيدة المدى',
      lead: 'تسلسل استراتيجي يرسم مستقبل Full Care في السوق الإقليمي:',
      steps: [
        { step: 'اليوم | TODAY', title: '4 تخصصات علاجية رئيسية', description: 'ترسيخ مكانة رائدة في مجالات صحة المرأة، الجهاز الهضمي، العظام، والتغذية' },
        { step: 'غدًا | TOMORROW', title: 'توسيع التخصصات الطبية', description: 'دخول تخصصات إضافية وتغطية احتياجات أوسع لكل الفئات العمرية' },
        { step: 'بعدها | THEN', title: 'مضاعفة الحلول والمنتجات', description: 'توسيع خطوط الأدوية والمكملات ومستحضرات التجميل العلاجية المبتكرة' },
        { step: 'ثم | AFTER THAT', title: 'الانتشار في أسواق إقليمية', description: 'تصدير النموذج والتوسع نحو أسواق الشرق الأوسط وشمال أفريقيا' },
      ],
      highlightText: 'A HEALTHCARE ECOSYSTEM IN EVERY HOME.',
    },
    en: {
      tagline: 'STRATEGIC HORIZONS | SLIDE 35',
      title: 'The Long-Term Strategic Trajectory',
      lead: 'A disciplined sequence mapping the regional evolution of Full Care:',
      steps: [
        { step: 'TODAY', title: 'Four Flagship Specialties', description: 'Establishing definitive leadership in maternal, gastro, ortho, and metabolic care' },
        { step: 'TOMORROW', title: 'Specialty Portfolio Expansion', description: 'Entering adjacent clinical domains with targeted innovative therapies' },
        { step: 'THEN', title: 'Comprehensive Care Lines', description: 'Scaling advanced pharmaceutical, nutraceutical, and dermocosmetic portfolios' },
        { step: 'AFTER THAT', title: 'Regional MENA Expansion', description: 'Exporting our validated ecosystem across regional Middle Eastern markets' },
      ],
      highlightText: 'A HEALTHCARE ECOSYSTEM IN EVERY HOME.',
    },
  },

  // Slide 36
  {
    id: 36,
    slideNumber: 36,
    section: 'vision',
    layout: 'statement',
    accentColor: 'gold',
    ar: {
      tagline: 'الصورة الأشمل | THE BIGGER PICTURE',
      title: 'Full Care لا تريد فقط أن تكون:',
      subtitle: '«شركة أدوية حاضرة في السوق.»',
      lead: 'بل نطمح ونهدف إلى أن تكون:',
      highlightText: 'اسمًا محفورًا في وجدان وذهن الناس عندما يفكرون في الرعاية الصحية الحقيقية.',
      paragraphs: [
        'الاسم الذي يطمئن له الأب.. وتثق فيه الأم.. ويعتمد عليه الطبيب.. ويلجأ إليه الصيدلي.',
      ],
      quote: 'لأن الرعاية الحقيقية لا تباع.. بل تُبنى بمواقف مستمرة من الثقة.',
    },
    en: {
      tagline: 'THE BROADER VISION | SLIDE 36',
      title: 'Full Care Refuses to Be Simply:',
      subtitle: '"A Pharmaceutical Company Operating in the Market."',
      lead: 'Our enduring aspiration is to become:',
      highlightText: 'The definitive name engraved in people\'s minds whenever they think of authentic healthcare.',
      paragraphs: [
        'The name that reassures a father.. that a mother trusts unconditionally.. that a physician respects.. and a pharmacist relies upon.',
      ],
      quote: 'Authentic care cannot simply be traded; it is forged through enduring acts of trust.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85',
      captionAr: 'الثقة التي تُبنى في كل بيت مصري',
      captionEn: 'Trust cultivated in every Egyptian household',
    },
  },

  // Slide 37
  {
    id: 37,
    slideNumber: 37,
    section: 'vision',
    layout: 'statement',
    accentColor: 'cyan',
    ar: {
      tagline: 'الفكرة الختامية | THE FINAL BRAND IDEA',
      title: 'كل بيت فيه سند.',
      paragraphs: [
        'شخص ترجع له وقت الشدة..',
        'شخص يساعدك من قلبه..',
        'شخص يهمه أمرك وصحتك..',
        'شخص موجود دائمًا عندما تحتاجه..',
      ],
      highlightText: 'وفي عالم الرعاية الصحية... FULL CARE.',
      subtitle: 'السند اللي دايمًا موجود.',
    },
    en: {
      tagline: 'FINAL BRAND SYNTHESIS | SLIDE 37',
      title: 'In Every Home There is a Sanad.',
      paragraphs: [
        'Someone you turn to in times of vulnerability..',
        'Someone who helps selflessly from the heart..',
        'Someone genuinely invested in your health and peace of mind..',
        'Someone reliably present whenever called upon..',
      ],
      highlightText: 'And in the world of healthcare... FULL CARE.',
      subtitle: 'The Support That Is Always There.',
    },
    visual: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85',
    },
  },

  // Slide 38
  {
    id: 38,
    slideNumber: 38,
    section: 'vision',
    layout: 'closing',
    accentColor: 'emerald',
    ar: {
      tagline: 'الرؤية النهائية | THE GRAND FINALE',
      title: 'FULL CARE',
      subtitle: 'السند اللي دايمًا موجود.',
      cards: [
        { title: 'FROM A PHARMACEUTICAL COMPANY', description: 'TO A COMPLETE HEALTHCARE BRAND' },
        { title: 'FROM PRODUCTS', description: 'TO RELATIONSHIPS' },
        { title: 'FROM PRESENCE', description: 'TO TRUST' },
        { title: 'FROM TODAY', description: 'TO EVERY HOME' },
      ],
      highlightText: 'CARE IS MORE THAN A PRODUCT. CARE IS BEING THERE.',
      quote: 'الرعاية أكثر من مجرد منتج.. الرعاية هي التواجد الصادق والسند الدائم.',
      secondaryText: 'Presented by ProMedia — Digital Brand Strategy & Creative Direction',
    },
    en: {
      tagline: 'THE STRATEGIC HORIZON | SLIDE 38',
      title: 'FULL CARE',
      subtitle: 'The Support That Is Always There.',
      cards: [
        { title: 'FROM A PHARMACEUTICAL COMPANY', description: 'TO A COMPLETE HEALTHCARE BRAND' },
        { title: 'FROM PRODUCTS', description: 'TO ENDURING RELATIONSHIPS' },
        { title: 'FROM MARKET PRESENCE', description: 'TO EARNED TRUST' },
        { title: 'FROM TODAY', description: 'TO EVERY HOME' },
      ],
      highlightText: 'CARE IS MORE THAN A PRODUCT. CARE IS BEING THERE.',
      quote: 'Care is more than a product. Care is being there.',
      secondaryText: 'Presented by ProMedia — Strategic Brand Deck & Vision',
    },
    visual: {
      type: 'logo-comparison',
    },
  },
];
