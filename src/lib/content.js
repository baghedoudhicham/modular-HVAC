/** Single source of truth for CMS-bound prototype content. Business facts require verification. */
export const brand = {
  name: 'Roomtone',
  descriptor: 'Home climate care',
  tag: 'A calmer kind of comfort service',
  phone: null,
  email: null,
  hours: null,
  serviceAreas: [],
  verifiedReviews: [],
  credentials: [],
  team: [],
  emergencyInstructions: null,
  schedulingEndpoint: null,
  contactEndpoint: null,
  demo: true,
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'Heating & cooling', href: '/heating-cooling/' },
  { name: 'Services', href: '/services/' },
  { name: 'Service areas', href: '/areas/' },
  { name: 'Our approach', href: '/about/' },
];

export const services = [
  { id: 'cooling', number: '01', title: 'Cooling', kicker: 'When the air feels heavy', description: 'Make sense of cooling concerns, from an unexpected shutdown to rooms that never cool evenly.', marker: 'SUMMER / AIRFLOW', motif: 'fan', symptoms: ['System not cooling as expected', 'Airflow feels weaker than usual', 'One room feels warmer than the others'], scope: ['Describe the concern and review the system history', 'Arrange an in-person assessment', 'Explain findings and available next steps'], safeSteps: ['Check thermostat settings', 'Check whether the filter needs attention', 'Leave electrical and refrigerant work to a professional'] },
  { id: 'heating', number: '02', title: 'Heating', kicker: 'When warmth is missing', description: 'Understand the next step for a heating system that is struggling, inconsistent, or not running.', marker: 'WINTER / WARMTH', motif: 'wave', symptoms: ['Rooms stay cold despite thermostat settings', 'Heating starts and stops unexpectedly', 'Certain areas receive little airflow'], scope: ['Talk through the symptoms and equipment type', 'Arrange professional troubleshooting', 'Review repair or replacement options if relevant'], safeSteps: ['Confirm thermostat mode and setpoint', 'Keep vents unobstructed', 'Do not inspect gas, wiring, or combustion components yourself'] },
  { id: 'heat-pumps', number: '03', title: 'Heat pumps', kicker: 'One system, two seasons', description: 'Explore year-round heating and cooling choices with sizing and installation questions made clearer.', marker: 'ALL SEASONS / SYSTEMS', motif: 'cycle', symptoms: ['Exploring an upgrade', 'Comparing heating and cooling options', 'Wanting to understand installation needs'], scope: ['Review comfort goals and existing equipment', 'Discuss a professional load calculation', 'Outline suitable next steps for assessment'], safeSteps: ['Note which rooms are uncomfortable', 'Collect equipment information if available', 'Ask how your home will be evaluated before sizing'] },
  { id: 'air-quality', number: '04', title: 'Indoor air quality', kicker: 'The unseen side of comfort', description: 'Ask better questions about filtration, ventilation, moisture, and your home’s indoor environment.', marker: 'INDOORS / BREATHING ROOM', motif: 'particles', symptoms: ['Dust or indoor air concerns', 'Questions about filtration', 'Moisture or ventilation concerns'], scope: ['Review what you have noticed', 'Discuss relevant equipment and maintenance', 'Determine whether a professional assessment is appropriate'], safeSteps: ['Follow manufacturer filter guidance', 'Avoid obstructing returns and vents', 'Treat persistent moisture sources as a building issue requiring evaluation'] },
  { id: 'maintenance', number: '05', title: 'Maintenance', kicker: 'A little attention, regularly', description: 'Learn what a routine HVAC visit may involve and which questions to ask your contractor.', marker: 'SEASONAL / CHECK-IN', motif: 'check', symptoms: ['Planning a seasonal check', 'Understanding system upkeep', 'Unsure when equipment was last serviced'], scope: ['Review maintenance needs for your equipment', 'Arrange a routine visit', 'Discuss the outcome and recommendations'], safeSteps: ['Keep outdoor units free of debris when safe to do so', 'Use the manufacturer’s filter guidance', 'Record unusual noises or behavior to report'] },
  { id: 'replacement', number: '06', title: 'System replacement', kicker: 'A bigger decision, made clearer', description: 'Move from uncertainty to an informed equipment conversation without an instant online diagnosis.', marker: 'PLANNING / NEXT CHAPTER', motif: 'house', symptoms: ['Comparing repair and replacement', 'Planning a home renovation', 'Need to understand equipment choices'], scope: ['Discuss home comfort priorities', 'Arrange in-home evaluation and load calculation', 'Review proposed equipment and installation approach'], safeSteps: ['Gather any existing system model information', 'Write down room-by-room comfort concerns', 'Ask about airflow, sizing, and installation quality'] },
];

export const routes = {
  warm: { title: 'It feels too warm.', eyebrow: 'COOLING PATH', explanation: 'Start with the cooling page. It explains common observations and what a professional assessment might involve.', href: '/services/cooling/', link: 'Explore cooling' },
  cold: { title: 'It feels too cold.', eyebrow: 'HEATING PATH', explanation: 'Get a plain-language overview of heating concerns and how an assessment is usually arranged.', href: '/services/heating/', link: 'Explore heating' },
  uneven: { title: 'Every room feels different.', eyebrow: 'COMFORT PATH', explanation: 'Uneven comfort can have several causes. Record which rooms are affected and ask a professional to assess the system.', href: '/heating-cooling/#uneven-comfort', link: 'Understand uneven comfort' },
  replace: { title: 'We may need a new system.', eyebrow: 'PLANNING PATH', explanation: 'Explore the considerations behind repair versus replacement, including professional sizing and installation.', href: '/services/replacement/', link: 'Explore replacement' },
};
