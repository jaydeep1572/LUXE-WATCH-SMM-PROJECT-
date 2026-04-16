// ==========================
// SCROLL REVEAL ANIMATION
// ==========================
window.addEventListener("load", () => {
  document.querySelectorAll(".lx-section").forEach(sec => sec.classList.add("show"));
});

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.88;
  document.querySelectorAll(".lx-section").forEach(section => {
    if (section.getBoundingClientRect().top < trigger) {
      section.classList.add("show");
    }
  });
});

// ==========================
// PRODUCT CARD TILT
// ==========================
document.querySelectorAll(".product-image-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// ==========================
// CONTACT FORM
// ==========================
function sendMessage(e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  if (msg) {
    msg.innerText = "✓ Message sent! We'll be in touch within 24 hours.";
    msg.style.color = "var(--red)";
    e.target.reset();
  }
}

// ==========================
// BLOG READER
// ==========================
function openBlog(id) {
  const blogContent = document.getElementById("blog-content");
  if (!blogContent) return;

  const blogs = {
    1: {
      tag: "Instagram Marketing",
      title: "5 Instagram Strategies That Are Transforming Luxury Watch Sales",
      content: `
        <p>Instagram has evolved from a photo-sharing app into the single most powerful platform for luxury brand discovery. For LUXE Watch, it is where desire is created, collections are launched, and communities are built.</p>
        <h3>1. High-Quality Visual Storytelling</h3>
        <p>Luxury is visual. Every image we post on Instagram is shot against premium backdrops — marble tabletops, Italian leather, cinematic lighting. The watch is never just a product; it is a character in a story about aspiration.</p>
        <h3>2. Reel-First Content Strategy</h3>
        <p>Instagram Reels drive 3x more reach than static posts. LUXE creates short, cinematic reels — unboxings, behind-the-scenes of our craftsmanship, and lifestyle content featuring our ambassadors including KL Rahul.</p>
        <h3>3. Strategic Hashtag Architecture</h3>
        <p>We use a 3-tier hashtag system: broad luxury tags (#LuxuryWatch), niche product tags (#ChronographWatch), and branded tags (#LUXEWatch) — maximizing both reach and relevance.</p>
        <h3>4. Consistent Engagement</h3>
        <p>We respond to every comment and DM within 2 hours. This signals to the algorithm that our content drives conversation, boosting organic reach significantly.</p>
        <h3>5. Insight-Driven Optimization</h3>
        <p>Every post's performance is logged. We track saves, shares, and profile visits — not just likes. Content formats that drive saves get amplified; underperformers are iterated upon.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> Instagram marketing, luxury watches, social media strategy, brand content</p>
      `
    },
    2: {
      tag: "SEO",
      title: "How SEO is Helping LUXE Dominate Google Search",
      content: `
        <p>When a business executive searches "best luxury watch under ₹50,000," we want LUXE to appear first. That is the mission of our SEO strategy — and it is working.</p>
        <h3>Building Topic Authority</h3>
        <p>We have created comprehensive content clusters around our key themes: luxury watchmaking, investment watches, and digital marketing for premium brands. Google recognizes topic depth and rewards it with higher rankings.</p>
        <h3>Technical Excellence</h3>
        <p>Our Core Web Vitals scores are green across the board — sub-2 second load times, zero layout shift, and perfect mobile responsiveness. Google's algorithm heavily weights page experience.</p>
        <h3>The Results</h3>
        <p>Within 6 months, LUXE ranked on Page 1 for 12 target keywords, driving a 220% increase in organic traffic and reducing customer acquisition cost by 40%.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> SEO, organic traffic, Google ranking, luxury watches</p>
      `
    },
    3: {
      tag: "Email Marketing",
      title: "Top Email Marketing Tips for Luxury Brands",
      content: `
        <p>Email marketing is the closest you can get to a private conversation with your customer. For luxury brands, that intimacy is priceless.</p>
        <h3>1. Personalization at Scale</h3>
        <p>Use first names, purchase history, and browsing behavior to make every email feel hand-written. Our personalized campaigns achieve 42% open rates — double the industry average.</p>
        <h3>2. Premium Subject Lines</h3>
        <p>Great subject lines for luxury brands feel exclusive: "Your invitation, [Name]" or "The collection was made for you." Urgency without vulgarity.</p>
        <h3>3. Visual Luxury</h3>
        <p>Email templates must match the brand's visual standard. Every module, every font, every image should feel like it belongs in a luxury magazine.</p>
        <h3>4. Clear, Singular CTA</h3>
        <p>One email, one goal. Whether it is a new collection launch or a flash sale, resist the temptation to add multiple offers. Focus drives conversion.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> email marketing, personalization, luxury brand strategy</p>
      `
    },
    4: {
      tag: "Content Strategy",
      title: "Content Marketing for Premium Products: A Complete Guide",
      content: `
        <p>Luxury is not sold — it is experienced. And content marketing is how you create that experience digitally before the customer ever holds the watch.</p>
        <h3>Tell Stories, Not Features</h3>
        <p>No one buys a watch for its "Japanese quartz movement." They buy it for how it makes them feel. Every piece of content we create starts with emotion, not specification.</p>
        <h3>The Pillar-Cluster Model</h3>
        <p>LUXE publishes comprehensive "pillar pages" (like this blog) that cover a topic deeply, and clusters of shorter articles that link back to them. This demonstrates expertise to both readers and search engines.</p>
        <h3>Consistency Over Volume</h3>
        <p>Two meticulously crafted blog posts per month outperform eight rushed ones. Luxury audiences can spot low-quality content, and it damages brand perception.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> content marketing, luxury brand, SEO writing, brand storytelling</p>
      `
    },
    5: {
      tag: "Mobile Marketing",
      title: "Mobile Marketing Mastery: Reaching Luxury Buyers on the Go",
      content: `
        <p>The world's wealthiest consumers are also its most mobile. 78% of luxury purchases are influenced by a mobile interaction — whether a search, an Instagram reel, or a push notification.</p>
        <h3>The Mobile-First Imperative</h3>
        <p>LUXE's entire digital presence is built mobile-first. Our website loads in under 1.8 seconds on 4G, images are optimized without quality loss, and the checkout process is touch-perfect.</p>
        <h3>SMS as a VIP Channel</h3>
        <p>For our top 500 VIP customers, we run an SMS-first early access program — new collections and private sales are announced via text before any other channel. The exclusivity drives urgency and conversion.</p>
        <h3>In-App Advertising</h3>
        <p>We place premium ads inside lifestyle apps like Zomato Gold, Business Today, and CricBuzz — reaching our target demographic in trusted, contextually-relevant environments.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> mobile marketing, push notifications, luxury e-commerce, SMS marketing</p>
      `
    },
    6: {
      tag: "Advertising",
      title: "Luxury Watch Advertising Trends You Cannot Ignore in 2026",
      content: `
        <p>The luxury advertising landscape is transforming rapidly. What worked in 2020 — glossy magazine spreads and TV commercials — is being replaced by immersive, digital-native formats.</p>
        <h3>Celebrity-Led Brand Films</h3>
        <p>Our campaign with KL Rahul was not just a product ad — it was a 2-minute brand film that earned 4.2M organic views and 87,000 saves on Instagram. Storytelling, not selling.</p>
        <h3>Shoppable Content</h3>
        <p>Instagram and YouTube now allow viewers to purchase directly from videos. LUXE's product videos are all shoppable — reducing the path from desire to purchase dramatically.</p>
        <h3>The Rise of Nano-Influencers</h3>
        <p>Beyond celebrities, micro-influencers (10K–100K followers) in specific niches deliver 60% higher engagement rates. We now run parallel campaigns across both macro and micro tiers.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> luxury advertising, celebrity marketing, influencer marketing, 2026 trends</p>
      `
    },
    7: {
      tag: "Brand Building",
      title: "The LUXE Story: Building a Premium Brand from the Ground Up",
      content: `
        <p>Every great brand starts with a clear answer to one question: <em>Why do you exist?</em> For LUXE, the answer was simple: India deserves a homegrown luxury watch brand that rivals the world's best.</p>
        <h3>The Brand Identity</h3>
        <p>Our visual identity — the Crimson and Midnight Black palette, the Cormorant serif font, the minimalist product photography — was meticulously designed to communicate: heritage, confidence, and modernity.</p>
        <h3>The Community First Philosophy</h3>
        <p>Before launching products, we built an audience. 6 months of brand storytelling on Instagram, email list building, and exclusive waitlist campaigns generated 3,000 subscribers before our first watch went on sale.</p>
        <h3>What We Learned</h3>
        <p>A luxury brand is not built by products alone. It is built by consistent values, beautiful communication, and the experience of every customer touchpoint — from our website to our packaging.</p>
        <p style="color: var(--muted); margin-top: 20px;"><strong>Keywords:</strong> brand building, luxury brand, LUXE Watch, brand identity</p>
      `
    }
  };

  const blog = blogs[id];
  if (!blog) return;

  blogContent.classList.remove("hidden");
  blogContent.innerHTML = `
    <div style="max-width: 760px; margin: 0 auto;">
      <span class="blog-tag" style="display: inline-block; margin-bottom: 16px;">${blog.tag}</span>
      <h1 style="font-family: var(--font-heading); font-size: clamp(28px, 4vw, 44px); line-height: 1.2; margin-bottom: 20px;">${blog.title}</h1>
      <div class="divider" style="margin: 0 0 30px;"></div>
      <div style="line-height: 1.9; color: var(--muted); font-size: 15px;">${blog.content}</div>
      <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid var(--border);">
        <button class="btn btn-outline" onclick="document.getElementById('blog-content').classList.add('hidden')">← Back to All Articles</button>
      </div>
    </div>
  `;

  // Style headings inside blog
  blogContent.querySelectorAll("h3").forEach(h => {
    h.style.fontFamily = "var(--font-heading)";
    h.style.fontSize = "22px";
    h.style.color = "var(--cream)";
    h.style.marginTop = "28px";
    h.style.marginBottom = "10px";
  });

  window.scrollTo({ top: blogContent.offsetTop - 80, behavior: "smooth" });
}

// ==========================
// LUXE PREMIUM AI (JOTFORM STYLE)
// ==========================
const LUXE_KNOWLEDGE = {
  products: {
    "classic gold": "The Classic Gold (₹25,000) features a 24k gold-plated case and premium leather strap. It's our most popular evening piece.",
    "sport x": "Sport X (₹18,000) is built with a titanium grade-5 body and is water-resistant up to 100m. Perfect for athletes.",
    "royal black": "The Royal Black (₹32,000) is an all-matte masterpiece with a sapphire crystal face and automatic movement.",
    "twilight edition": "Twilight Edition (₹45,000) is a limited-run piece with a dual-time display and glow-in-the-dark moonphase.",
    "prestige series": "Our flagship Prestige Series (₹55,000) features a tourbillon-inspired design and a handcrafted silver dial.",
    "midnight steel": "Midnight Steel (₹22,000) is a sleek, monochromatic watch with a mesh strap for a modern professional look."
  },
  marketing: {
    "seo": "Our SEO strategy targets 12 keywords like 'Luxury Watch India' and has resulted in a 220% traffic increase.",
    "email": "LUXE email campaigns achieve 42% open rates by using personalized VIP invitations and high-end visual design.",
    "mobile": "We focus on mobile-first design and 98% open-rate SMS campaigns for our top-tier customers.",
    "ambassadors": "KL Rahul, Deepika Padukone, and Shah Rukh Khan are our primary brand partners, reaching over 50M people."
  },
  general: {
    "warranty": "Every LUXE watch includes a 5-year international warranty and a certificate of authenticity.",
    "location": "Our flagship showroom is located in Ahmedabad, Gujarat. We ship for free across India.",
    "about": "LUXE was founded in 2020 to bring Swiss-level craftsmanship to India. We've served over 5,000 clients so far."
  }
};

function initChatbot() {
  const chatHTML = `
    <div id="chatbot-widget">
      <div id="chat-container">
        <div id="chat-header">
          <div class="header-user-info">
            <img src="ai_assistant_avatar.png" class="header-avatar" alt="AI Avatar">
            <div class="header-titles">
              <div class="chat-title">LUXE AI <span>AI Agent</span></div>
              <div class="chat-subtitle">Timeless Luxury Expert</div>
            </div>
          </div>
          <i class="fas fa-times" id="close-chat"></i>
        </div>

        <div id="chat-main-area">
          <div id="chat-view">
             <div class="msg-bot-wrap">
               <div class="msg-bot">Hello! I'm the LUXE AI Agent. How can I help you discover our luxury collection today?</div>
               <div class="quick-actions">
                 <button class="btn-action" onclick="chatbotSend('Show watches')">Explore Watches</button>
                 <button class="btn-action" onclick="chatbotSend('Tell me about KL Rahul')">Celebrity Ads</button>
               </div>
             </div>
          </div>
          <div id="history-view"></div>
          <div id="voice-overlay">
            <div class="voice-visualizer"><i class="fas fa-microphone"></i></div>
            <h3 id="voice-status">Listening...</h3>
            <p id="voice-transcript" style="font-size: 14px; opacity: 0.7; margin-top: 10px;"></p>
            <button class="btn-action" style="margin-top: 20px;" onclick="stopVoice()">Cancel</button>
          </div>
        </div>

        <div id="chat-input-container">
          <div class="chat-input-wrap">
            <input type="text" id="chat-input" placeholder="Type here...">
            <i class="fas fa-paper-plane" id="chat-send" style="cursor:pointer; color:#0f172a;"></i>
            <i class="fas fa-microphone-lines icon-voice" id="voice-btn"></i>
          </div>
        </div>

        <div class="chat-nav">
          <div class="nav-tab active" id="tab-chat" onclick="switchTab('chat')"><i class="fas fa-comment-dots"></i>Chat</div>
          <div class="nav-tab" id="tab-voice" onclick="switchTab('voice')"><i class="fas fa-microphone"></i>Voice</div>
          <div class="nav-tab" id="tab-history" onclick="switchTab('history')"><i class="fas fa-clock-rotate-left"></i>History</div>
        </div>

        <div class="chat-footer">Powered by <b>LUXE AI</b></div>
      </div>
      <button id="chat-toggle"><i class="fas fa-comment"></i></button>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", chatHTML);

  const chatToggle = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chat-container");
  const closeChat = document.getElementById("close-chat");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatView = document.getElementById("chat-view");
  const historyView = document.getElementById("history-view");
  const voiceOverlay = document.getElementById("voice-overlay");
  const voiceBtn = document.getElementById("voice-btn");

  let currentTab = 'chat';
  let recognition = null;
  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const transcriptEl = document.getElementById("voice-transcript");
      if (transcriptEl) transcriptEl.innerText = transcript;
      if (event.results[0].isFinal) {
        setTimeout(() => { chatbotSend(transcript); stopVoice(); }, 800);
      }
    };
  }

  chatToggle.onclick = () => {
    const isVisible = chatContainer.style.display === "flex";
    chatContainer.style.display = isVisible ? "none" : "flex";
  };

  closeChat.onclick = () => { chatContainer.style.display = "none"; };

  window.switchTab = (tab) => {
    currentTab = tab;
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    const activeTabEl = document.getElementById(`tab-${tab}`);
    if (activeTabEl) activeTabEl.classList.add("active");
    
    chatView.style.display = tab === 'chat' ? 'flex' : 'none';
    historyView.style.display = tab === 'history' ? 'flex' : 'none';
    const inputContainer = document.getElementById("chat-input-container");
    if (inputContainer) inputContainer.style.display = tab === 'history' ? 'none' : 'block';

    if (tab === 'voice') startVoice();
    if (tab === 'history') renderHistory();
  };

  window.startVoice = () => {
    voiceOverlay.style.display = "flex";
    if (recognition) recognition.start();
    const statusEl = document.getElementById("voice-status");
    if (statusEl) statusEl.innerText = "Listening...";
    const transcriptEl = document.getElementById("voice-transcript");
    if (transcriptEl) transcriptEl.innerText = "";
  };

  window.stopVoice = () => {
    voiceOverlay.style.display = "none";
    if (recognition) recognition.stop();
    switchTab('chat');
  };

  window.chatbotSend = (text) => {
    const msg = text || chatInput.value.trim();
    if (!msg) return;
    if (!text) chatInput.value = "";

    addMsgUI(msg, "user");
    saveToHistory(msg, "user");

    setTimeout(() => {
      const response = getAIResponse(msg);
      addMsgUI(response, "bot");
      saveToHistory(response, "bot");
      speakText(response);
    }, 600);
  };

  function addMsgUI(text, sender) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "msg-bot-wrap" : "msg-user";
    div.innerHTML = sender === "bot" ? `<div class="msg-bot">${text}</div>` : text;
    chatView.appendChild(div);
    chatView.scrollTop = chatView.scrollHeight;
  }

  function getAIResponse(input) {
    const t = input.toLowerCase();
    for (let product in LUXE_KNOWLEDGE.products) { if (t.includes(product)) return LUXE_KNOWLEDGE.products[product]; }
    for (let cat in LUXE_KNOWLEDGE.marketing) { if (t.includes(cat)) return LUXE_KNOWLEDGE.marketing[cat]; }
    if (t.includes("seo")) return LUXE_KNOWLEDGE.marketing.seo;
    if (t.includes("strategy") || t.includes("plan")) return "Our strategy focuses on 4 pillars: Social Storytelling, SEO Dominance, Email VIP lists, and Mobile SMS conversion.";
    if (t.includes("rahul") || t.includes("deepika") || t.includes("celebrity") || t.includes("ads")) return LUXE_KNOWLEDGE.marketing.ambassadors;
    if (t.includes("warranty")) return LUXE_KNOWLEDGE.general.warranty;
    if (t.includes("about") || t.includes("story")) return LUXE_KNOWLEDGE.general.about;
    if (t.includes("price") || t.includes("cost")) return "Our watches range from ₹18,000 to ₹55,000. Which one interests you?";
    return "I'm here to help with anything regarding LUXE-WATCH! Ask about watches, prices, or our KL Rahul ads.";
  }

  function saveToHistory(text, sender) {
    const history = JSON.parse(localStorage.getItem("luxe_chat_history") || "[]");
    history.push({ text, sender, date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
    localStorage.setItem("luxe_chat_history", JSON.stringify(history.slice(-20)));
  }

  function renderHistory() {
    const history = JSON.parse(localStorage.getItem("luxe_chat_history") || "[]");
    historyView.innerHTML = history.length ? "" : "<p style='text-align:center; opacity:0.5; margin-top:20px;'>No history yet.</p>";
    history.forEach(item => {
      const div = document.createElement("div");
      div.className = "history-item";
      div.innerHTML = `<div class="history-text"><b>${item.sender === 'bot' ? 'AI' : 'You'}:</b> ${item.text}</div><div class="history-date">${item.date}</div>`;
      historyView.appendChild(div);
    });
  }

  function speakText(text) {
    if (currentTab === 'voice' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }

  chatSend.onclick = () => chatbotSend();
  chatInput.onkeypress = (e) => { if (e.key === "Enter") chatbotSend(); };
  voiceBtn.onclick = () => switchTab('voice');
}

initChatbot();


