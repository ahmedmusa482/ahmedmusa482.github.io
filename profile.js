const profile = {
  name: "Ahmed Musa Mohammed",
  role: "QHSE Coordinator",
  summary:
    "Experienced QHSE professional and process safety specialist focused on developing, implementing, and monitoring effective health, safety, quality, and environmental management systems in energy and industrial operations.",
  about:
    "I aspire to succeed in an environment of growth that provides job satisfaction, self-development, and helps me achieve both personal and organizational goals. I am passionate about building safe, compliant, and efficient work environments while improving operational performance through discipline, technical knowledge, and continuous improvement.",
  location: "Egbin Housing Estate, Lagos",
  phone: "09060634772",
  email: "ahmedmusa482@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmedmusa482",
  contactNote: "Open to QHSE, process safety, and operational excellence opportunities.",
  stats: [
    { value: "5+", label: "Years in QHSE & operations" },
    { value: "PSM", label: "Process safety management" },
    { value: "HAZOP", label: "Risk and hazard reviews" },
    { value: "ATEX", label: "Hazardous area classification" }
  ],
  metrics: [
    { value: "12+", label: "Safety studies & audits" },
    { value: "100%", label: "Compliance mindset" },
    { value: "24/7", label: "Operational awareness" }
  ],
  expertise: [
    "Hazardous Area Classification (ATEX/IECEx)",
    "Process Safety Management",
    "Incident Investigation & Root Cause Analysis",
    "Risk Assessment / Risk Analysis",
    "Permit to Work Coordination",
    "Equipment Inspection & Hazard Identification",
    "Job Hazard Analysis (JHA)",
    "First Aid & CPR",
    "Operations Management",
    "Sustainable Business Strategy",
    "QHSE System Implementation",
    "P&ID and PFD Interpretation",
    "Report Writing"
  ],
  experience: [
    {
      title: "QHSE Coordinator",
      company: "Tabor Energy Solutions Limited",
      date: "Current",
      points: [
        "Develop, implement, and monitor comprehensive QHSE management systems aligned with ISO 9001, 14001, and 45001 standards.",
        "Lead process safety and operational risk assessment activities, including HAZID, HAZOP, and job hazard analysis.",
        "Conduct inspections, audits, and quality assurance checks to ensure technical compliance and safe execution of work.",
        "Manage incident investigations, root cause analysis, and corrective action implementation.",
        "Coordinate permit-to-work, emergency response readiness, and environmental stewardship programs."
      ]
    },
    {
      title: "Process Safety Engineer / Process Engineer",
      company: "Sahara Energy Group (Egbin Power Plc.)",
      date: "2022 – 2025",
      points: [
        "Conducted operational risk assessments, HAZOPs, MOC reviews, and plant safety studies.",
        "Supervised Local Patrol Officers in PTW, isolation, and energy control compliance.",
        "Supported HSE reporting, emergency response, and hazard prevention systems.",
        "Monitored key systems and process stability to maintain safe operations."
      ]
    },
    {
      title: "LPG Process Officer",
      company: "Bovas Oil & Gas",
      date: "July 2022 – November 2022",
      points: [
        "Supervised LPG plant and skid operations.",
        "Conducted facility inspections and implemented HSE controls.",
        "Trained drivers and operators on safe LPG discharge and emergency procedures."
      ]
    }
  ],
  gallery: [
    { title: "QHSE Audit", text: "Operational inspection and compliance review.", image: "assets/gallery-1.svg" },
    { title: "Project Site Work", text: "Field execution and technical safety oversight.", image: "assets/gallery-2.svg" },
    { title: "Process Safety Review", text: "Risk discussions and safety controls.", image: "assets/gallery-3.svg" }
  ],
  certifications: [
    "ISO 9001:2015 Certified Lead Auditor",
    "Hazardous Area Classification (ATEX/IECEx)",
    "Root Cause Failure Analysis",
    "Process Safety Management",
    "Risk Management",
    "Accident Investigation",
    "HSE Competence Level 3",
    "P&ID Identification",
    "Steam Turbine Operation",
    "SCADA System",
    "Fire Safety & First Aid (CPR)",
    "Downstream Oil & Gas Operations"
  ]
};

const heroTitle = document.getElementById("hero-title");
const heroSummary = document.getElementById("hero-summary");
const aboutText = document.getElementById("about-text");
const statsNode = document.getElementById("stats");
const metricsNode = document.getElementById("metrics");
const experienceListNode = document.getElementById("experience-list");
const galleryNode = document.getElementById("gallery");
const certsNode = document.getElementById("certs");
const contactNote = document.getElementById("contact-note");

heroTitle.textContent = profile.role;
heroSummary.textContent = profile.summary;
aboutText.textContent = profile.about;
contactNote.textContent = profile.contactNote;

profile.stats.forEach((item) => {
  const stat = document.createElement("div");
  stat.className = "stat";
  stat.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
  statsNode.appendChild(stat);
});

profile.metrics.forEach((item) => {
  const metric = document.createElement("div");
  metric.className = "metric";
  metric.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
  metricsNode.appendChild(metric);
});

profile.experience.forEach((job) => {
  const card = document.createElement("article");
  card.className = "job";
  card.innerHTML = `
    <div class="job-head">
      <div>
        <h3>${job.title}</h3>
        <div class="job-company">${job.company}</div>
      </div>
      <div class="job-date">${job.date}</div>
    </div>
    <ul>
      ${job.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
  `;
  experienceListNode.appendChild(card);
});

profile.gallery.forEach((item) => {
  const card = document.createElement("article");
  card.className = "gallery-item";
  card.innerHTML = `
    <div class="media">
      <img src="${item.image}" alt="${item.title}" />
    </div>
    <div class="meta">
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `;
  galleryNode.appendChild(card);
});

profile.certifications.forEach((cert) => {
  const item = document.createElement("div");
  item.className = "cert";
  item.textContent = cert;
  certsNode.appendChild(item);
});

const expertiseNode = document.createElement("div");
expertiseNode.className = "expertise";
profile.expertise.forEach((skill) => {
  const skillEl = document.createElement("div");
  skillEl.className = "chip";
  skillEl.textContent = skill;
  expertiseNode.appendChild(skillEl);
});

const aboutPanel = document.querySelector("#about .panel");
aboutPanel.appendChild(expertiseNode);

const nav = document.querySelector(".nav");
nav.insertAdjacentHTML("beforeend", `<a href="mailto:${profile.email}">Email</a>`);

const contactEmail = document.querySelector(".contact-actions a[href='mailto:ahmedmusa482@gmail.com']");
if (contactEmail) contactEmail.href = `mailto:${profile.email}`;

const contactLinkedIn = document.querySelector(".contact-actions a[href*='linkedin']");
if (contactLinkedIn) contactLinkedIn.href = profile.linkedin;

const titleNode = document.querySelector("title");
if (titleNode) titleNode.textContent = `${profile.name} | ${profile.role}`;

const brandNode = document.querySelector(".brand");
if (brandNode) brandNode.textContent = profile.name;
