// ==========================
// SCROLL REVEAL ANIMATION
// ==========================
window.addEventListener("load", () => {
  document.querySelectorAll(".lx-section").forEach(sec => sec.classList.add("show"));
  initChatbot();
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
        <p>Instagram Reels drive 3x more reach than static posts. LUXE creates short, cinematic reels — unboxings, behind-the-scenes of our craftsmanship, and lifestyle content featuring our ambassadors including Hardik Pandya.</p>
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
        <p>Our campaign with Hardik Pandya was not just a product ad — it was a 2-minute brand film that earned 4.2M organic views and 87,000 saves on Instagram. Storytelling, not selling.</p>
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
// AI CHATBOT
// ==========================
function initChatbot() {
  const chatHTML = `
    <div id="chatbot-widget">
      <div id="chat-container" style="display:none; flex-direction:column;">
        <div id="chat-header">
          <div>
            <div class="chat-title">LUXE AI Assistant</div>
            <div class="chat-status">● Online — Ask me anything</div>
          </div>
          <i class="fas fa-times" id="close-chat"></i>
        </div>
        <div id="chat-box">
          <div class="chat-msg chat-bot">Hello! I'm the LUXE Watch AI. Ask me about our products, marketing strategies, or anything about the brand. 🕐</div>
        </div>
        <div id="chat-input-area">
          <input type="text" id="chat-input" placeholder="Ask about products, marketing...">
          <button id="chat-send"><i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
      <button id="chat-toggle"><i class="fas fa-comments"></i></button>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", chatHTML);

  const chatToggle = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chat-container");
  const closeChat = document.getElementById("close-chat");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");

  chatToggle.onclick = () => {
    const isOpen = chatContainer.style.display === "flex";
    chatContainer.style.display = isOpen ? "none" : "flex";
  };

  closeChat.onclick = () => { chatContainer.style.display = "none"; };

  const addMsg = (text, sender) => {
    const div = document.createElement("div");
    div.classList.add("chat-msg", sender === "bot" ? "chat-bot" : "chat-user");
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  const getResponse = (input) => {
    const t = input.toLowerCase().trim();
    if (t.match(/^(hi|hello|hey|namaste)/)) return "Welcome to LUXE Watch! 🕐 I'm here to help. You can ask me about our watches, prices, marketing strategies, or anything else!";
    if (t.includes("price") || t.includes("cost") || t.includes("₹")) return "Our collection ranges from ₹18,000 (Sport X) to ₹55,000 (Prestige Series). The Royal Gold Edition is ₹25,000 and the Royal Black is ₹32,000. Visit the Products page for the full range!";
    if (t.includes("product") || t.includes("watch") || t.includes("collection")) return "LUXE offers 6 premium models: Classic Gold (₹25K), Sport X (₹18K), Royal Black (₹32K), Twilight Edition (₹45K), Prestige Series (₹55K), and Midnight Steel (₹22K). Every watch ships with a 5-year warranty!";
    if (t.includes("hardik") || t.includes("pandya") || t.includes("ambassador") || t.includes("celebrity")) return "Hardik Pandya is our Brand Ambassador! His campaign generated 2.4M+ impressions in its first week. Visit our Affiliate Marketing page to see the full campaign and other influencer partnerships.";
    if (t.includes("affiliate") || t.includes("influencer")) return "Our Affiliate Marketing program collaborates with high-profile personalities including Hardik Pandya, fashion creators, and business influencers. Together they reach 50M+ followers. Check the Affiliate page for details!";
    if (t.includes("mobile marketing") || t.includes("sms") || t.includes("push")) return "Mobile Marketing is key for LUXE! We use SMS campaigns (98% open rate), push notifications, in-app advertising, and QR code campaigns. Visit our Mobile Marketing page to learn more.";
    if (t.includes("seo") || t.includes("google") || t.includes("ranking")) return "LUXE targets 12 high-intent keywords like 'Best Luxury Watches India' and 'Watches Under ₹50000'. Our SEO has driven a 220% increase in organic traffic. See the SEO page for our full keyword strategy!";
    if (t.includes("email")) return "Our email campaigns achieve a 42% open rate with 8.5x ROI. We send newsletters, personalized offers, and VIP-only early access emails. Check the Email Marketing page for our sample campaign!";
    if (t.includes("strategy") || t.includes("plan")) return "Our strategy runs in 4 phases over 6 months — Foundation, Growth, Scale, and Optimize. Goals include 300% traffic growth, 25K subscribers, and 5x revenue. See the Strategy page for the full roadmap!";
    if (t.includes("blog")) return "Our blog covers Instagram marketing, SEO secrets, email tips, mobile marketing, luxury ad trends, and the LUXE brand story. Head to the Blog page — we have 7 articles live!";
    if (t.includes("contact") || t.includes("help") || t.includes("support") || t.includes("reach")) return "You can reach us at luxewatch@email.com or call +91 98765 43210. Our showroom is in Ahmedabad, open Mon–Sat 10am–7pm. Visit the Contact page to send a direct message!";
    if (t.includes("game") || t.includes("play")) return "We have a fun game — Catch the Watches! LUXE watches fall from the sky and you click them to score points. It includes a celebrity video ad break featuring Hardik Pandya. Visit the Game page to play!";
    if (t.includes("warranty") || t.includes("guarantee")) return "Every LUXE watch comes with a 5-year international warranty, a certificate of authenticity, and premium gift packaging. We stand 100% behind every timepiece.";
    if (t.includes("about") || t.includes("who") || t.includes("luxe")) return "LUXE Watch was founded in Ahmedabad to fill a gap in India's luxury market. We blend Swiss-inspired precision with Indian craftsmanship, creating watches for those who refuse the ordinary. Since 2020, we've served 5K+ happy clients.";
    if (t.includes("location") || t.includes("where") || t.includes("address")) return "LUXE is based in Ahmedabad, Gujarat, India (380001). We deliver across India with free premium packaging. Our flagship showroom accepts private viewings by appointment!";
    return "Great question! I specialize in LUXE Watch — our products, marketing strategies, pricing, and brand story. Try asking about: watches, prices, SEO, email, mobile marketing, Hardik Pandya, or our game! 🕐";
  };

  const handleSend = () => {
    const msg = chatInput.value.trim();
    if (!msg) return;
    addMsg(msg, "user");
    chatInput.value = "";

    // Typing indicator
    const typing = document.createElement("div");
    typing.classList.add("chat-msg", "chat-bot");
    typing.innerHTML = "<i>Thinking...</i>";
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      typing.remove();
      addMsg(getResponse(msg), "bot");
    }, 700);
  };

  chatSend.onclick = handleSend;
  chatInput.addEventListener("keypress", e => { if (e.key === "Enter") handleSend(); });
}
