/**
 * PrimeCare Medical — Product Data
 * ===================================
 *
 * HOW TO ADD A PRODUCT:
 *   Copy one item block (from { id: ... } to ),
 *   paste below, change the values.
 *
 *   category: matches sidebar numbers (1=Clinical Analyzer, 2=Lab Machine, etc.)
 *   svg:      the SVG icon (keep it simple — just draw the shape)
 */

const CATEGORIES = [
  { id: 0,  name: 'All Products' },
  { id: 1,  name: 'Clinical Analytical Instrument' },
  { id: 2,  name: 'Clinical Laboratory Machine' },
  { id: 3,  name: 'Operation Room Equipment' },
  { id: 4,  name: 'Endoscope System' },
  { id: 5,  name: 'B Ultrasound Scanner' },
  { id: 6,  name: 'Medical X-Ray Machine' },
  { id: 7,  name: 'X-Ray Accessories' },
  { id: 8,  name: 'Dental Equipment' },
  { id: 9,  name: 'Maternal & Infant Care' },
  { id: 10, name: 'Eye Equipment' },
  { id: 11, name: 'Hospital Bed & Furniture' },
  { id: 12, name: 'Veterinary Equipment' },
  { id: 13, name: 'Medical Disposable' }
];

const PRODUCTS = [
  // ===== Category 1: Clinical Analytical Instrument =====
  {
    id: 1, category: 1,
    name: 'PCS-3000 Automatic Clinical Chemistry Analyzer',
    svg: '<rect x="20" y="15" width="80" height="90" rx="8" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="35" y="30" width="50" height="35" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><circle cx="60" cy="78" r="10" stroke="#94a3b8" stroke-width="1.5" fill="#eff6ff"/><line x1="45" y1="42" x2="75" y2="42" stroke="#2563eb" stroke-width="1.5"/><rect x="35" y="95" width="50" height="3" rx="1.5" fill="#e2e8f0"/>'
  },
  // ===== Category 2: Clinical Laboratory Machine =====
  {
    id: 2, category: 2,
    name: 'PLT-2000 Hematology Analyzer',
    svg: '<rect x="25" y="20" width="70" height="80" rx="8" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="35" y="30" width="50" height="40" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><rect x="40" y="35" width="40" height="8" rx="2" fill="#2563eb" opacity="0.3"/><rect x="40" y="47" width="30" height="6" rx="2" fill="#2563eb" opacity="0.2"/><rect x="40" y="57" width="35" height="6" rx="2" fill="#2563eb" opacity="0.2"/><circle cx="60" cy="82" r="6" stroke="#94a3b8" stroke-width="1" fill="#eff6ff"/><line x1="20" y1="85" x2="35" y2="85" stroke="#e2e8f0" stroke-width="1"/><line x1="85" y1="85" x2="100" y2="85" stroke="#e2e8f0" stroke-width="1"/>'
  },
  // ===== Category 3: Operation Room Equipment =====
  {
    id: 3, category: 3,
    name: 'ORS-500 LED Surgical Shadowless Lamp',
    svg: '<circle cx="60" cy="55" r="35" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><circle cx="60" cy="55" r="20" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><line x1="10" y1="55" x2="30" y2="55" stroke="#e2e8f0" stroke-width="2"/><line x1="90" y1="55" x2="110" y2="55" stroke="#e2e8f0" stroke-width="2"/><rect x="50" y="90" width="20" height="15" rx="3" stroke="#64748b" stroke-width="1" fill="#f8fafc"/>'
  },
  // ===== Category 4: Endoscope System =====
  {
    id: 4, category: 4,
    name: 'EVS-2200 Electronic Video Endoscope',
    svg: '<rect x="30" y="20" width="60" height="80" rx="6" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="38" y="28" width="44" height="50" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><circle cx="60" cy="53" r="12" stroke="#2563eb" stroke-width="1.5" fill="none"/><circle cx="60" cy="53" r="5" fill="#2563eb" opacity="0.3"/><rect x="40" y="82" width="40" height="8" rx="2" fill="#e2e8f0"/>'
  },
  // ===== Category 5: B Ultrasound Scanner =====
  {
    id: 5, category: 5,
    name: 'BUS-1000 Color Doppler Ultrasound System',
    svg: '<rect x="25" y="30" width="70" height="50" rx="12" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="32" y="37" width="56" height="36" rx="8" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><circle cx="60" cy="55" r="8" stroke="#2563eb" stroke-width="1.5" fill="none"/><line x1="52" y1="55" x2="40" y2="55" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><line x1="68" y1="55" x2="80" y2="55" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><rect x="48" y="90" width="24" height="8" rx="3" fill="#e2e8f0"/>'
  },
  // ===== Category 6: Medical X-Ray Machine =====
  {
    id: 6, category: 6,
    name: 'MXR-500 Digital X-Ray Machine',
    svg: '<rect x="15" y="20" width="90" height="60" rx="6" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="22" y="28" width="76" height="22" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><rect x="22" y="55" width="76" height="18" rx="4" stroke="#94a3b8" stroke-width="1" fill="#eff6ff"/><circle cx="35" cy="64" r="4" fill="#2563eb" opacity="0.4"/><circle cx="50" cy="64" r="4" fill="#2563eb" opacity="0.3"/><rect x="35" y="88" width="50" height="12" rx="4" stroke="#64748b" stroke-width="1" fill="#f8fafc"/>'
  },
  // ===== Category 8: Dental Equipment =====
  {
    id: 7, category: 8,
    name: 'DET-300 Dental Treatment Unit',
    svg: '<rect x="25" y="20" width="70" height="80" rx="8" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="35" y="28" width="50" height="35" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><rect x="35" y="68" width="50" height="22" rx="4" stroke="#94a3b8" stroke-width="1" fill="#eff6ff"/><circle cx="60" cy="45" r="6" fill="#2563eb" opacity="0.3"/><path d="M45 38 L60 45 L45 52" stroke="#2563eb" stroke-width="1.5" fill="none"/>'
  },
  // ===== Category 11: Hospital Bed & Furniture =====
  {
    id: 8, category: 11,
    name: 'PBH-2000 Electric Hospital Bed',
    svg: '<rect x="20" y="40" width="80" height="45" rx="6" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="28" y="50" width="40" height="25" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><rect x="72" y="50" width="20" height="25" rx="4" stroke="#94a3b8" stroke-width="1" fill="#eff6ff"/><rect x="40" y="88" width="40" height="5" rx="2" fill="#e2e8f0"/><rect x="45" y="93" width="30" height="8" rx="3" fill="#e2e8f0"/><line x1="20" y1="60" x2="28" y2="60" stroke="#e2e8f0" stroke-width="1"/>'
  },
  // ===== Category 9: Maternal & Infant Care =====
  {
    id: 9, category: 9,
    name: 'IVS-1000 Infant Ventilator',
    svg: '<rect x="30" y="25" width="60" height="40" rx="6" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="38" y="33" width="44" height="24" rx="3" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><rect x="35" y="70" width="50" height="20" rx="4" stroke="#64748b" stroke-width="1" fill="#f8fafc"/><rect x="42" y="75" width="36" height="10" rx="2" fill="#eff6ff" stroke="#94a3b8" stroke-width="1"/><circle cx="60" cy="45" r="5" fill="#2563eb" opacity="0.3"/>'
  },
  // ===== Category 10: Eye Equipment =====
  {
    id: 10, category: 10,
    name: 'ECG-300 12-Lead Electrocardiograph',
    svg: '<rect x="30" y="15" width="60" height="90" rx="6" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="38" y="23" width="44" height="35" rx="4" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><rect x="38" y="63" width="44" height="30" rx="4" stroke="#94a3b8" stroke-width="1" fill="#eff6ff"/><circle cx="48" cy="78" r="3" fill="#2563eb" opacity="0.4"/><circle cx="60" cy="78" r="3" fill="#2563eb" opacity="0.3"/><circle cx="72" cy="78" r="3" fill="#2563eb" opacity="0.4"/>'
  },
  // ===== Category 10: Eye Equipment =====
  {
    id: 11, category: 10,
    name: 'SLM-200 Slit Lamp Microscope',
    svg: '<rect x="35" y="28" width="50" height="50" rx="8" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><circle cx="60" cy="53" r="14" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><path d="M53 53h14M60 46v14" stroke="#2563eb" stroke-width="1.5"/><rect x="48" y="83" width="24" height="8" rx="3" fill="#e2e8f0"/><rect x="40" y="15" width="40" height="10" rx="3" fill="#dbeafe" stroke="#94a3b8" stroke-width="1"/>'
  },
  // ===== Category 13: Medical Disposable =====
  {
    id: 12, category: 13,
    name: 'PPM-500 Patient Monitor',
    svg: '<rect x="20" y="30" width="80" height="50" rx="10" stroke="#64748b" stroke-width="1.5" fill="#f8fafc"/><rect x="28" y="38" width="64" height="34" rx="6" stroke="#94a3b8" stroke-width="1" fill="#dbeafe"/><line x1="35" y1="48" x2="85" y2="48" stroke="#2563eb" stroke-width="1.5" opacity="0.3"/><line x1="35" y1="55" x2="70" y2="55" stroke="#2563eb" stroke-width="1.5" opacity="0.4"/><line x1="35" y1="62" x2="78" y2="62" stroke="#2563eb" stroke-width="1.5" opacity="0.3"/><rect x="45" y="85" width="30" height="10" rx="3" fill="#e2e8f0"/>'
  }

  // == ADD NEW PRODUCTS HERE ==
  // Copy a block above (from { id: ... to }), paste below, change values.
];
