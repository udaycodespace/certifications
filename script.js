(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* ---------- data ---------- */
  var cats = {
    data:  { color: '#E8553D', ink: '#2A1F3D' },
    ai:    { color: '#4B3FB5', ink: '#FBF6E9' },
    work:  { color: '#1C9C8F', ink: '#13242B' },
    code:  { color: '#2B5BB8', ink: '#FBF6E9' },
    solve: { color: '#F2B705', ink: '#2A1F3D' },
    talk:  { color: '#F4A6A0', ink: '#2A1F3D' }
  };
  var patterns = [
    'radial-gradient(circle at 68% 46%, rgba(255,255,255,.42) 0 34%, transparent 34.5%), radial-gradient(circle at 32% 62%, rgba(0,0,0,.22) 0 24%, transparent 24.5%)',
    'repeating-linear-gradient(0deg, rgba(0,0,0,.2) 0 12px, transparent 12px 24px), radial-gradient(circle at 74% 30%, rgba(255,255,255,.5) 0 22%, transparent 22.5%)',
    'radial-gradient(rgba(0,0,0,.3) 4px, transparent 4.5px) 0 0/24px 24px',
    'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,.45) 0 46%, transparent 46.5%), radial-gradient(ellipse at 50% 100%, rgba(0,0,0,.22) 0 72%, transparent 72.5%)',
    'repeating-linear-gradient(135deg, rgba(0,0,0,.2) 0 14px, rgba(255,255,255,.2) 14px 28px)',
    'linear-gradient(rgba(0,0,0,.22) 2px, transparent 2px) 0 0/26px 26px, linear-gradient(90deg, rgba(0,0,0,.22) 2px, transparent 2px) 0 0/26px 26px'
  ];
  // url: paste the certificate link to show the "View certificate" button
  var items = [
    { c:'data', title:'Fabric Data Engineer', name:'Fabric Data Engineer Associate', issuer:'Microsoft', ish:'Microsoft', when:'Sep 2026', covers:'How Microsoft Fabric stores data, moves it between places and prepares it for reports.', helps:'Pulling sales numbers from many files into one place, so a team can read one report.', url:'' },
    { c:'ai', title:'AI Capabilities and Limitations', name:'AI Capabilities and Limitations', issuer:'Anthropic', ish:'Anthropic', when:'Jul 2026', covers:'What AI can do, and where it fails: made up answers, old knowledge and short memory.', helps:'Checking an AI answer before trusting it, like a date, a number or a link.', url:'' },
    { c:'ai', title:'Machine Learning for All', name:'Machine Learning for All', issuer:'Coursera', ish:'Coursera', when:'Aug 2025', covers:'The main ideas of machine learning, explained without heavy maths.', helps:'Understanding what an app means when it says it can predict something.', url:'' },
    { c:'ai', title:'Google AI-ML Internship', name:'Google AI-ML Virtual Internship', issuer:'EduSkills Foundation', ish:'EduSkills', when:'Mar 2025', covers:'The steps to build a simple machine learning model.', helps:'Small prediction tasks, like guessing which customers may not come back.', url:'' },
    { c:'ai', title:'Virtual Labs Workshop', name:'Virtual Labs Workshop', issuer:'G. Pulla Reddy Engineering College', ish:'GPREC', when:'Dec 2025', covers:'Practical experiments in AI, machine learning, deep learning and language processing.', helps:'Trying an idea on a small example before spending time on a full project.', url:'' },
    { c:'work', title:'Google Advanced Data Analytics', name:'Google Advanced Data Analytics', issuer:'Google, on Coursera', ish:'Google', when:'Sep 2025', covers:'Python, statistics, regression and simple predictions, ending with a capstone project.', helps:'Opening a messy sales or survey file and finding what changed, and why.', url:'' },
    { c:'work', title:'Data Science Foundations', name:'Data Science Foundations', issuer:'Coursera', ish:'Coursera', when:'Sep 2025', covers:'Basic statistics and probability.', helps:'Telling a real trend from one lucky week.', url:'' },
    { c:'work', title:'Excel Basics for Data Analysis', name:'Excel Basics for Data Analysis', issuer:'Coursera', ish:'Coursera', when:'Sep 2023', covers:'Cleaning, sorting and looking at data in Excel.', helps:'Tidying a contact list or an expense sheet.', url:'' },
    { c:'work', title:'Getting Started with Excel', name:'Getting Started with Microsoft Excel', issuer:'Coursera', ish:'Coursera', when:'Aug 2024', covers:'Tables and formulas in Excel.', helps:'Monthly budgets and quick totals.', url:'' },
    { c:'code', title:'Python Full Stack Internship', name:'Python Full Stack Developer Virtual Internship', issuer:'EduSkills Foundation', ish:'EduSkills', when:'Jan 2025', covers:'How the front end, the back end and the database of a website connect.', helps:'Making a small website with a form that saves what people type.', url:'' },
    { c:'code', title:'Android Developer Internship', name:'Google Android Developer Virtual Internship', issuer:'EduSkills Foundation', ish:'EduSkills', when:'Oct 2024', covers:'The basics of building an Android app.', helps:'Making a simple app, like a notes or to-do app.', url:'' },
    { c:'code', title:'Python Basic Skills', name:'Python Programming: Basic Skills', issuer:'edX', ish:'edX', when:'Mar 2024', covers:'The basics of Python programming.', helps:'Small scripts for boring jobs, like renaming a hundred files.', url:'' },
    { c:'code', title:'IT Foundation Skills (Java)', name:'Associate in IT Foundation Skills (Java)', issuer:'Infosys Springboard', ish:'Infosys', when:'May 2025', covers:'Java, SQL and databases, and how agile teams plan their work.', helps:'Saving and finding records for an app, like student or order details.', url:'' },
    { c:'code', title:'Smart Coder', name:'Smart Coder Certification', issuer:'Smart Interviews', ish:'Smart Interviews', when:'Jul 2025', covers:'Java, algorithms and data structures.', helps:'Writing code that stays quick when the data gets big.', url:'' },
    { c:'code', title:'Internet of Things', name:'Introduction to Internet of Things', issuer:'NPTEL, IIT Kharagpur', ish:'NPTEL', when:'Oct 2024', covers:'How connected devices and sensors send and use data.', helps:'Understanding smart gadgets, like a sensor that sends room temperature to a phone.', url:'' },
    { c:'solve', title:'TCS CodeVita Season 13', name:'TCS CodeVita Season 13', issuer:'Tata Consultancy Services', ish:'TCS', when:'Apr 2026', covers:'Solving coding problems against a timer.', helps:'Staying calm and breaking a bug into small parts.', url:'' },
    { c:'solve', title:'Graphs Camp', name:'Graphs Camp Completion Certificate', issuer:'AlgoUniversity', ish:'AlgoUniversity', when:'Oct 2025', covers:'Graph problems, where things are connected, like roads or friends.', helps:'Finding the shortest route, or how two people are linked.', url:'' },
    { c:'talk', title:'Presentations', name:'Presentations: Speaking so that People Listen', issuer:'Coursera', ish:'Coursera', when:'Sep 2023', covers:'How to plan a talk and speak clearly.', helps:'Explaining a project to a class or a client.', url:'' },
    { c:'talk', title:'Business English', name:'Business English: Basics', issuer:'Coursera', ish:'Coursera', when:'Jul 2023', covers:'Clear English for work emails and talks.', helps:'Writing a short, polite email that gets a reply.', url:'' }
  ];
  var shelfDefs = [
    { cat:'data',  title:'Data and Microsoft Fabric' },
    { cat:'ai',    title:'AI and machine learning' },
    { cat:'work',  title:'Working with data' },
    { cat:'code',  title:'Coding and building' },
    { cat:'solve', title:'Problem solving' },
    { cat:'talk',  title:'Communication' }
  ];
  var legalText = {
    terms:
      '<h3>Terms and conditions</h3><div class="upd">Last updated: October 2026</div>' +
      '<p><strong>About this page.</strong> This page lists certificates earned by Uday. It is for information only.</p>' +
      '<p><strong>Certificates belong to their issuers.</strong> Names, logos and course content belong to the companies and schools that issued them. They do not run or endorse this page.</p>' +
      '<p><strong>Accuracy.</strong> Details are correct as of October 2026. If the issuer\'s own page disagrees with this page, the issuer\'s page is right.</p>' +
      '<p><strong>No promises.</strong> The "where it helps" notes are everyday examples. They are not a guarantee of any result, job or skill level.</p>' +
      '<p><strong>External links.</strong> Links to certificates and other sites lead to pages run by other people. Their rules and policies apply there.</p>' +
      '<p><strong>Sharing.</strong> You can share the link to this page. Please do not copy its text or design and present it as your own.</p>' +
      '<p><strong>Changes.</strong> These terms can change. The date above shows the latest version.</p>',
    privacy:
      '<h3>Privacy policy</h3><div class="upd">Last updated: October 2026</div>' +
      '<p><strong>What this page collects.</strong> Nothing. It has no forms, no accounts and no tracking of its own.</p>' +
      '<p><strong>Analytics and ads.</strong> This page has no analytics tools and no ad trackers.</p>' +
      '<p><strong>Fonts and scripts.</strong> The fonts load from Google Fonts, and two small libraries (animation and smooth scroll) load from public CDNs. When they load, those services can see your IP address and browser details, as with any site that uses them.</p>' +
      '<p><strong>Other sites.</strong> Certificate links and the portfolio open on other websites. Those sites collect data under their own policies.</p>' +
      '<p><strong>Questions.</strong> You can reach Uday through <a href="https://udayworks.me"><strong>udayworks.me</strong></a>.</p>' +
      '<p><strong>Changes.</strong> If this page starts collecting anything, this policy will be updated first.</p>'
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]; }); }

  /* ---------- build books ---------- */
  var books = items.map(function (it, i) {
    var o = Object.assign({}, it);
    o.i = i; o.color = cats[it.c].color; o.ink = cats[it.c].ink; o.art = patterns[i % patterns.length];
    return o;
  });

  var shelvesEl = document.getElementById('shelves');
  shelfDefs.forEach(function (s, n) {
    var sec = document.createElement('section');
    sec.className = 'shelf';
    var html = '<div class="shelf-head"><span class="shelf-no">Shelf ' + String(n + 1).padStart(2, '0') + '</span><h2>' + esc(s.title) + '</h2></div><div class="grid">';
    books.filter(function (b) { return b.c === s.cat; }).forEach(function (b) {
      html +=
        '<div class="book" data-i="' + b.i + '">' +
          '<div class="board"></div>' +
          '<div class="lift"><div class="inner">' +
            '<button class="cover" type="button" aria-label="' + esc(b.name + ', ' + b.issuer + '. Turn the book over.') + '" style="background:' + b.color + ';color:' + b.ink + '">' +
              '<span class="art" style="background:' + b.art + '"></span><span class="spine"></span>' +
              '<span class="iss">' + esc(b.ish) + '</span><span class="ttl">' + esc(b.title) + '</span><span class="when">' + esc(b.when) + '</span>' +
            '</button>' +
            '<div class="back" aria-hidden="true">' +
              '<div class="meta">' + esc(b.issuer) + ' · ' + esc(b.when) + '</div>' +
              '<div class="nm">' + esc(b.name) + '</div>' +
              '<div class="lab">What it covers</div><p>' + esc(b.covers) + '</p>' +
              '<div class="lab">Where it helps</div><p>' + esc(b.helps) + '</p>' +
              '<div class="btns"><button class="ghost" type="button" data-back tabindex="-1">Turn back</button>' +
              (b.url ? '<a class="view" href="' + esc(b.url) + '" target="_blank" rel="noopener noreferrer" tabindex="-1">View certificate</a>' : '') +
              '</div>' +
            '</div>' +
          '</div></div>' +
        '</div>';
    });
    html += '</div>';
    sec.innerHTML = html;
    shelvesEl.appendChild(sec);
  });

  /* hero covers */
  var heroEl = document.getElementById('heroCovers');
  [{ i: 4, rot: -7 }, { i: 0, rot: 1 }, { i: 9, rot: 8 }].forEach(function (h) {
    var b = books[h.i];
    var d = document.createElement('div');
    d.className = 'mini';
    d.style.background = b.color; d.style.color = b.ink; d.style.rotate = h.rot + 'deg';
    d.innerHTML = '<span class="art" style="background:' + b.art + '"></span><span class="spine"></span><span class="t">' + esc(b.title) + '</span><span class="i">' + esc(b.ish) + '</span>';
    heroEl.appendChild(d);
  });

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(0);
  }
  document.querySelectorAll('[data-scroll]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(t, { offset: -10 }); else t.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- anime.js: intro + scroll reveal ---------- */
  if (!reduce && window.anime) {
    anime({ targets: '[data-hero]', opacity: [0, 1], translateY: [24, 0], easing: 'easeOutCubic', duration: 800, delay: anime.stagger(110) });
    document.querySelectorAll('.mini').forEach(function (m, k) {
      anime({
        targets: m, opacity: [0, 1], translateY: [60, 0], easing: 'easeOutBack', duration: 1000, delay: 300 + k * 150,
        complete: function () {
          anime({ targets: m, translateY: -12, direction: 'alternate', loop: true, easing: 'easeInOutSine', duration: 2800, delay: k * 500 });
        }
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var sec = en.target; io.unobserve(sec);
        anime({ targets: sec.querySelector('.shelf-head'), opacity: [0, 1], translateX: [-30, 0], easing: 'easeOutCubic', duration: 700 });
        anime({ targets: sec.querySelectorAll('.book'), opacity: [0, 1], translateY: [50, 0], rotate: [2, 0], easing: 'easeOutCubic', duration: 800, delay: anime.stagger(90, { start: 150 }) });
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.shelf').forEach(function (s) { io.observe(s); });
  } else {
    document.querySelectorAll('[data-hero],.shelf-head,.book').forEach(function (e) { e.style.opacity = 1; });
  }

  /* ---------- flip books ---------- */
  var openBook = null;
  function setFlip(book, open) {
    var inner = book.querySelector('.inner');
    var front = book.querySelector('.cover');
    var back = book.querySelector('.back');
    front.setAttribute('aria-hidden', open ? 'true' : 'false');
    front.tabIndex = open ? -1 : 0;
    back.setAttribute('aria-hidden', open ? 'false' : 'true');
    back.querySelectorAll('button,a').forEach(function (el) { el.tabIndex = open ? 0 : -1; });
    var to = open ? 180 : 0;
    if (!reduce && window.anime) {
      anime.remove(inner);
      anime({ targets: inner, rotateY: to, easing: 'easeOutBack', duration: 800 });
    } else {
      inner.style.transform = 'rotateY(' + to + 'deg)';
    }
  }
  function toggle(book) {
    var willOpen = openBook !== book;
    if (openBook) setFlip(openBook, false);
    openBook = willOpen ? book : null;
    if (willOpen) setFlip(book, true);
  }
  shelvesEl.addEventListener('click', function (e) {
    var book = e.target.closest('.book');
    if (!book) return;
    if (e.target.closest('.cover') || e.target.closest('[data-back]')) toggle(book);
  });

  /* ---------- footer: terms and privacy ---------- */
  var panel = document.getElementById('legalPanel');
  var body = document.getElementById('legalBody');
  var btns = document.querySelectorAll('.legal-btn');
  var current = null;
  function showLegal(k) {
    if (current === k) return hideLegal();
    current = k;
    body.innerHTML = legalText[k];
    var wasHidden = panel.hidden;
    panel.hidden = false;
    btns.forEach(function (b) { b.setAttribute('aria-expanded', b.dataset.legal === k ? 'true' : 'false'); });
    if (!reduce && window.anime) {
      var h = panel.scrollHeight;
      anime.remove(panel);
      anime({ targets: panel, opacity: [0, 1], height: [wasHidden ? 0 : panel.offsetHeight, h], easing: 'easeOutCubic', duration: 500, complete: function () { panel.style.height = ''; } });
    }
    var t = document.getElementById('legal');
    if (lenis) lenis.scrollTo(t, { offset: -16 }); else t.scrollIntoView({ behavior: 'smooth' });
  }
  function hideLegal() {
    current = null;
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (!reduce && window.anime) {
      anime.remove(panel);
      anime({ targets: panel, opacity: 0, height: 0, easing: 'easeInCubic', duration: 350, complete: function () { panel.hidden = true; panel.style.height = ''; } });
    } else { panel.hidden = true; }
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { showLegal(b.dataset.legal); }); });
  document.getElementById('legalClose').addEventListener('click', hideLegal);
})();
