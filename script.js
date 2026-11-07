// ── SVG Icons ──
const ICONS = {
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin size-3"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    mailSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-3"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-4"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-4"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code size-4"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-4"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download size-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="command-search-icon"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    graduation: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    codeSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    globeSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
    githubSmall: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`,
    linkedinSmall: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`,
    downloadSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`
};

// Map social type → icon key
const SOCIAL_ICON_MAP = {
    github: 'github',
    linkedin: 'linkedin',
    leetcode: 'code',
    portfolio: 'globe'
};

const SOCIAL_NAV_ICON_MAP = {
    github: 'githubSmall',
    linkedin: 'linkedinSmall',
    leetcode: 'codeSmall',
    portfolio: 'globeSmall'
};

const ICON_BTN = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8';

// ── Render Functions ──

function renderHeader(d) {
    const socialBtns = [
        `<a href="mailto:${d.email}" target="_blank" class="${ICON_BTN} print:hidden">${ICONS.mail}</a>`,
        ...d.socials.map(s => `<a href="${s.url}" target="_blank" class="${ICON_BTN}">${ICONS[SOCIAL_ICON_MAP[s.type]]}</a>`),
        `<button onclick="window.print()" class="${ICON_BTN} print:hidden" title="Download as PDF">${ICONS.download}</button>`
    ].join('\n');

    return `
    <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
            <span class="relative flex shrink-0 overflow-hidden rounded-xl sm:hidden size-28">
                <img class="aspect-square h-full w-full" alt="${d.name}" src="${d.profileImage}">
            </span>
            <h1 class="text-2xl font-bold sm:!mt-0">${d.name}</h1>
            <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">${d.subtitle}</p>
            <div class="flex-col space-y-1.5 max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:text-[12px]">
                <a class="flex gap-x-1.5 align-baseline leading-none hover:underline print:underline" href="${d.location.url}" target="_blank">
                    ${ICONS.mapPin} ${d.location.name}
                </a>
                <a class="hidden print:flex gap-x-1.5 align-baseline leading-none underline" href="mailto:${d.email}">
                    ${ICONS.mailSmall} ${d.email}
                </a>
            </div>
            <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
                ${socialBtns}
            </div>
        </div>
        <span class="relative shrink-0 overflow-hidden rounded-xl hidden sm:flex size-28">
            <img class="aspect-square h-full w-full" alt="${d.name}" src="${d.profileImage}">
        </span>
    </div>`;
}

function renderAbout(d) {
    return `
    <section class="flex min-h-0 flex-col gap-y-3" id="about">
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">${d.about}</p>
    </section>`;
}

function renderEducation(d) {
    const items = d.education.map(e => `
        <div class="rounded-lg bg-card text-card-foreground print:break-inside-avoid">
            <div class="flex flex-col space-y-1.5">
                <div class="flex items-center justify-between gap-x-2 text-base">
                    <h3 class="font-semibold leading-none">${e.institution}</h3>
                    <div class="text-sm tabular-nums print:proportional-nums text-gray-500">${e.period}</div>
                </div>
                <h4 class="font-mono text-sm leading-none print:text-[12px]">${e.degree}</h4>
            </div>
            <div class="text-pretty font-mono text-muted-foreground mt-1 text-xs print:text-[10px]">
                <ul class="list-disc pl-3">${e.details.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
        </div>`).join('');

    return `
    <section class="flex min-h-0 flex-col gap-y-3" id="education">
        <h2 class="text-xl font-bold">Education</h2>
        ${items}
    </section>`;
}

function renderCompetitiveProgramming(d) {
    const items = d.competitiveProgramming.map(b => `<li>${b}</li>`).join('');
    return `
    <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">Competitive Programming</h2>
        <div class="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            <ul class="list-disc pl-3">${items}</ul>
        </div>
    </section>`;
}

function renderProjectCard(p) {
    const bullets = p.bullets.map(b => `<li>${b}</li>`).join('');
    return `
    <div class="rounded-lg bg-card text-card-foreground print:break-inside-avoid">
        <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
                <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a class="hover:underline" href="${p.url}" target="_blank">${p.name}</a>
                </h3>
                <div class="text-sm tabular-nums print:proportional-nums text-gray-500">${p.period}</div>
            </div>
            <h4 class="font-mono text-sm leading-none print:text-[12px]">${p.role}</h4>
        </div>
        <div class="text-pretty font-mono text-muted-foreground mt-1 text-xs print:text-[10px]">
            <ul class="list-disc pl-3">${bullets}</ul>
        </div>
    </div>`;
}

function renderAdditionalCard(p) {
    const tags = p.tags.map(t =>
        `<div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">${t}</div>`
    ).join('');

    return `
    <div class="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-4">
        <div class="flex flex-col space-y-1.5">
            <div class="space-y-1">
                <h3 class="font-semibold tracking-tight text-base">
                    <a href="${p.url}" target="_blank" class="inline-flex items-center gap-1 hover:underline">
                        ${p.name}
                        <span class="size-1 rounded-full bg-green-500"></span>
                    </a>
                </h3>
                <div class="hidden font-mono text-xs underline print:visible">${p.displayUrl}</div>
                <p class="text-muted-foreground font-mono text-xs print:text-[10px]">${p.description}</p>
            </div>
        </div>
        <div class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
            <div class="mt-1 flex flex-wrap gap-1">${tags}</div>
        </div>
    </div>`;
}

function renderProjects(d) {
    const mainCards = d.projects.map(renderProjectCard).join('');
    const additionalCards = d.additionalProjects.map(renderAdditionalCard).join('');

    return `
    <section class="flex min-h-0 flex-col gap-y-3" id="work-experience">
        <h2 class="text-xl font-bold">Production Projects &amp; Engineering Experience</h2>
        ${mainCards}
        <h3 class="text-base font-semibold mt-2">Additional Projects</h3>
        <div class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2">
            ${additionalCards}
        </div>
    </section>`;
}

function renderSkills(d) {
    const badges = d.skills.map(s =>
        `<div class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 print:text-[10px]">${s}</div>`
    ).join('');

    return `
    <section class="flex min-h-0 flex-col gap-y-3" id="technical">
        <h2 class="text-xl font-bold">Technical Proficiencies</h2>
        <div class="flex flex-wrap gap-1">${badges}</div>
    </section>`;
}

function renderAchievements(d) {
    const items = d.achievements.map(a => `<li>${a}</li>`).join('');
    return `
    <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">Achievements &amp; Certifications</h2>
        <div class="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            <ul class="list-disc pl-3">${items}</ul>
        </div>
    </section>`;
}

function renderCommandMenu(d) {
    const navItems = [
        { icon: ICONS.user, label: 'About', href: '#about' },
        { icon: ICONS.graduation, label: 'Education', href: '#education' },
        { icon: ICONS.briefcase, label: 'Work Experience', href: '#work-experience' },
        { icon: ICONS.codeSmall, label: 'Technical Skills', href: '#technical' }
    ];

    const linkItems = [
        { icon: ICONS.globeSmall, label: 'Portfolio', href: d.socials.find(s => s.type === 'portfolio').url },
        ...d.socials.filter(s => s.type !== 'portfolio').map(s => ({
            icon: ICONS[SOCIAL_NAV_ICON_MAP[s.type]],
            label: s.label,
            href: s.url
        }))
    ];

    return `
    <div class="command-menu-dialog">
        <div class="command-menu-header">
            ${ICONS.search}
            <input type="text" placeholder="Type a command or search..." class="command-input" id="command-input">
            <button class="command-close" onclick="closeMenu()" aria-label="Close menu">${ICONS.close}</button>
        </div>
        <div class="command-menu-content">
            <div class="command-group">
                <div class="command-group-heading">Actions</div>
                <div class="command-group-items">
                    <a href="javascript:void(0)" onclick="window.print(); closeMenu();" class="command-item">
                        ${ICONS.downloadSmall} Print
                    </a>
                </div>
            </div>
            <div class="command-group">
                <div class="command-group-heading">Navigation</div>
                <div class="command-group-items">
                    ${navItems.map(n => `<a href="${n.href}" class="command-item" onclick="closeMenu()">${n.icon} ${n.label}</a>`).join('')}
                </div>
            </div>
            <div class="command-group">
                <div class="command-group-heading">Links</div>
                <div class="command-group-items">
                    ${linkItems.map(l => `<a href="${l.href}" target="_blank" class="command-item">${l.icon} ${l.label}</a>`).join('')}
                </div>
            </div>
        </div>
        <div class="command-menu-footer">
            Press <kbd>V</kbd>+<kbd>A</kbd> to toggle • <kbd>↑</kbd><kbd>↓</kbd> to navigate • <kbd>Enter</kbd> to select
        </div>
    </div>`;
}

function renderFooter() {
    return `
    Press
    <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">V</kbd>
    <span class="text-xs">+</span>
    <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">A</kbd>
    to open the navigation menu`;
}

// ── Main Render ──

function renderResume(data) {
    // Render command menu
    const menuEl = document.getElementById('va-menu');
    menuEl.innerHTML = renderCommandMenu(data);

    // Render resume body
    const root = document.getElementById('resume-root');
    root.innerHTML = `
        <section class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
            ${renderHeader(data)}
            ${renderAbout(data)}
            ${renderEducation(data)}
            ${renderCompetitiveProgramming(data)}
            ${renderProjects(data)}
            ${renderSkills(data)}
            ${renderAchievements(data)}
        </section>`;

    // Render footer hint
    const footer = document.getElementById('footer-hint');
    if (footer) footer.innerHTML = renderFooter();
}

// ── Event Handlers ──

document.addEventListener('DOMContentLoaded', () => {
    // Render everything from data
    renderResume(RESUME_DATA);

    const menu = document.getElementById('va-menu');
    let keysPressed = {};

    // V + A keyboard shortcut
    document.addEventListener('keydown', (e) => {
        keysPressed[e.key.toLowerCase()] = true;
        if (keysPressed['v'] && keysPressed['a']) {
            e.preventDefault();
            toggleMenu();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });

    document.addEventListener('keyup', (e) => {
        delete keysPressed[e.key.toLowerCase()];
    });

    function toggleMenu() {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            const input = document.getElementById('command-input');
            if (input) input.focus();
        }
    }

    window.closeMenu = function () {
        menu.classList.remove('active');
    };

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && !e.target.closest('.command-menu-dialog')) {
            closeMenu();
        }
    });

    // Smooth scroll
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMenu();
            }
        }
    });

    // Command menu search/filter
    document.addEventListener('input', (e) => {
        if (e.target.id === 'command-input') {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.command-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        }
    });
});
