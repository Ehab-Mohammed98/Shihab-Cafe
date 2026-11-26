// بيانات قائمة المقهى
const menuItems = [
  {
    id: 1,
    name: "إسبريسو مزدوج",
    category: "hot",
    price: 14,
    desc: "جرعة غنية ومركزة من حبوب أرابيكا المحمصة داكناً.",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "فلات وايت",
    category: "hot",
    price: 18,
    desc: "إسبريسو ناعم ممزوج بحليب مبخر بقوام مخملي.",
    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "سبانيش لاتيه مثلج",
    category: "cold",
    price: 22,
    desc: "مزيج منعش من الإسبريسو والحليب المكثف المحلى مع الثلج.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "كولد برو",
    category: "cold",
    price: 20,
    desc: "قهوة مقطرة على البارد لمدة 18 ساعة لنكهة سلسة ومنخفضة الحموضة.",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "تشيز كيك سان سيباستيان",
    category: "sweets",
    price: 26,
    desc: "كعكة الجبن الإسبانية الكريمية تقدم مع صلصة الشوكولاتة البلجيكية.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "كرواسون باللوز",
    category: "sweets",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "كابتشينو كلاسيك",
    category: "hot",
    price: 20,
    desc: "توازن مثالي بين الإسبريسو والحليب المبخر ورغوة الحليب الكثيفة.",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "أمريكانو ساخن",
    category: "hot",
    price: 17.5,
    desc: "إسبريسو غني مخفف بالماء الساخن لنكهة واضحة وعميقة.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "تشيز كيك فراولة",
    category: "sweets",
    price: 14.5,
    desc: "طبقة تشيز كيك ناعمة مع صوص الفواكه الطازج.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "تشيز كيك كلاسيك",
    category: "sweets",
    price: 25,
    desc: "تشيز كيك مخبوز بقوام غني وقاعدة بسكويت مقرمشة.",
    img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "قهوة تركية ساخنة",
    category: "hot",
    price: 16,
    desc: "قهوة مطحونة ناعماً تُحضّر على نار هادئة بوجه غني.",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "لاتيه بالكراميل",
    category: "hot",
    price: 16,
    desc: "قهوة لاتيه دافئة ممزوجة بصوص الكراميل الغني.",
    img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80"
  },
    {
    id: 13,
    name: "آيس أمريكانو",
    category: "cold",
    price: 16,
    desc: "قهوة مطحونة ناعماً تُحضّر على نار هادئة بوجه غني.",
    img: "https://images.openai.com/static-rsc-4/oPQAW8xIvEcE8YFv3zOYXTlBMSlGoUF-VvCt-j0ubRVjB6GmC8gib3sIyAcJ6Q5Cx02cYNr6WPrAxLEGATGxEyVuD5k71sV7BB-6m8x39srhy9RjSqMrdiW5s_6hlPsBravExY5opA-xp9lyiMTFic7pPNpNvI2HvkGfXYkyyI30xAHyjt8__dY-NEGMzL0w?purpose=fullsize"
  },
  {
    id: 14,
    name: "فرابتشينو الكراميل",
    category: "cold",
    price: 16,
    desc: "قهوة لاتيه دافئة ممزوجة بصوص الكراميل الغني.",
    img:"https://images.openai.com/static-rsc-4/zGS33tY_IbUmnxIkGXn_z2mAjRlxqXBoD1cIBLH401dZeGMqYkKRAFxNykklo2ezDSvYEXPc64cRPO5BT7BgzM5t3pZnfVT09nBJn_bBkemGowULxRyInpambEpZvsie6etE87ieLQj1gtjRpG1-TJG8x8ht1fHbwmQXvguFHBJCKXRppXWYl32Z9ZwqDbfP?purpose=fullsize"
  }
  ,
    {
    id: 15,
    name: "موهيتو الليمون والنعناع",
    category: "cold",
    price: 16,
    desc: "قهوة مطحونة ناعماً تُحضّر على نار هادئة بوجه غني.",
img:"https://images.openai.com/static-rsc-4/P3Ez-lOUWtflCREbqSEhQwT37vf1h_gkuGmal92qTNsoreSeHhip5VX1LrjD7yH8foHYR8_9UWzj_51aSiC0D6GJ5qt-atTzOf2QiTno9SkcypLiMa-pTlZqeknwVCVA2C-bms6veaDhQBas86CxHIe6Cdu4rQaUPRyiFV5gQmwJr1ANFqJ7I-wVQkCWox3q?purpose=fullsize"
    },
  {
    id: 16,
    name: "موهيتو التوت الأزرق",
    category: "cold",
    price: 16,
    desc: "قهوة لاتيه دافئة ممزوجة بصوص الكراميل الغني.",
    img:"https://images.openai.com/static-rsc-4/E-H-MfvVi16hpxeY9bKipW5nxPnEqKvb0vPldEIs7TR60MM8kIFz7hnQ7_BxX49jzFU-4X9SQ8leBsDaC0qaLwA36RRAU-Z-MBt6g2yaV_O4j0F11Ii5UGNJ_H-mvtwGj_lUoJYzmlXve14KQfpk-cQ05OTKgM0gTYARoB5nr6MdJMvlbtO2hh6KI1bIRgsc?purpose=fullsize"
  }  ,
    {
    id: 17,
    name: " تشيز كيك كلاسيك",
    category: "sweets",
    price: 18,
    desc: "تشيز كيك تقليدي بطبقة بسكويت وقوام غني بالكريمة.",
img:"https://images.openai.com/static-rsc-4/YfWZIlCJojnumPETOyOAQ3UgAoqIWArDDZAK7YJLS-ixoNcK_ICeUER2PFvvgofHucYKqB4yIlBvKJ8tw3YhmvwIE6oMhBElPuFeQlrRVCbs_Xq4k-AN_aME4ToGy0OiuTgYScKAIk3Wr6bKmGtJasH3zuwit1vrbOKssf7_kNP2NRI7U_M2Spa7IBh63ugZ?purpose=fullsize"  {
    },
  {
  id: 18,
    name: "تشيز كيك سان سيباستيان",
    category: "sweets",
    price: 18,
    desc: "تشيز كيك مخبوز بسطح محمّر، وقوام كريمي ناعم من الداخل..",
img:"https://images.openai.com/static-rsc-4/isiggbtqq0RLlstMSyaR1TMlyHbtwkys10-rXzqw6oliC7brsv8qZpdfuxIDx4nGbP8ecZWA9gfJhIz7m1oQkLYdrSbW5-hfzTTOnj-JalBPQy0vJBWBvXx54BhJIhsgoO13JSyGgnFCAJzDDXtLpVbH_9tvtSqlSIlr0JeV76vgTFjjk9YyxxeqtXjxj3JD?purpose=fullsize"
  },
    {
    id: 19,
    name: "موهيتو الفراولة",
    category: "cold",
    price: 18,
    desc: "قهوة مطحونة ناعماً تُحضّر على نار هادئة بوجه غني.",
img:"https://images.openai.com/static-rsc-4/G7BVftbYIM01j-z1Jkv-tc_ZPLBEcuaX0ifhDE8z9HZ-3nj-fNjM0hZai9Zr_W2Qi7x9toSP6E01U1Wwsi03Ir8yJxtN1R0CaOInCGQ4nz7GihMN82OUvsywpNAconRqfAyP8fzdodYI6MlYEZMDs7U-qh9DVMO80XrEOYaAJ8ect-C8mDimb0U4yhrLstRW?purpose=fullsize"    },
  },
  {
    id: 20,
    name: "سموذي المانجو والأناناس",
    category: "cold",
    price: 18,
    desc: "قهوة لاتيه دافئة ممزوجة بصوص الكراميل الغني.",
    img:"https://images.openai.com/static-rsc-4/XhreCFTUqY8GiAJTCtWNITEqgylskpdh3gOXkPDZ_qDmrKhfnJ5GA9Loq8g2cLEL8Ll4wrfN_v-tufQcnW2v2ei__uh8vKRzr6A5CxLcr3t3_Lltq6nFIiH6ySvXIN-ZAMTj2p9kUKq1tPw4kCUW0gjsagI-MtwMfFVUQmOwpOY1sjMdiI0Jmaop9jd3HnM6?purpose=fullsize"
  }
];

let cart = [];

// عناصر DOM
const menuGrid = document.getElementById("menuGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const cartModal = document.getElementById("cartModal");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

// عرض عناصر القائمة
function renderMenu(category = "all") {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";
  const filtered = category === "all"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-body">
        <div>
          <div class="card-title">
            <h3>${item.name}</h3>
            <span class="price">${item.price} ر.س</span>
          </div>
          <p class="card-desc">${item.desc}</p>
        </div>
        <button class="add-btn" onclick="addToCart(${item.id})">+ أضف للسلة</button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// تصفية القائمة
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.category);
  });
});

// إضافة للسلة
function addToCart(id) {
  const product = menuItems.find(item => item.id === id);
  const existing = cart.find(item => item.id === id);

  if (!product) return;

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
}

// حذف من السلة
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

// تحديث واجهة السلة
function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartCount) cartCount.textContent = totalQty;
  if (cartTotal) cartTotal.textContent = `${totalPrice} ر.س`;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-msg">السلة فارغة حالياً</p>`;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <div style="font-size: 0.85rem; color: #666;">
          ${item.qty} × ${item.price} ر.س
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
    </div>
  `).join("");
}

// فتح وإغلاق السلة
if (openCartBtn && cartModal) {
  openCartBtn.addEventListener("click", () => cartModal.classList.add("open"));
}
if (closeCartBtn && cartModal) {
  closeCartBtn.addEventListener("click", () => cartModal.classList.remove("open"));
}
if (cartModal) {
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) cartModal.classList.remove("open");
  });
}

// إتمام الطلب
// ضع رقم واتساب المقهى هنا (مثال للسعودية: 9665xxxxxxxx)
const CAFE_WHATSAPP = "+966569060751";

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("السلة فارغة! أضف بعض المشروبات أولاً.");
      return;
    }

    const nameInput = document.getElementById("customerOrderName");
    const customerName = nameInput ? (nameInput.value.trim() || "زبون") : "زبون";

    // 1. توليد رقم طلب فريد مكون من 4 أرقام
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `SH-${randomNum}`;

    // 2. تجهيز تفاصيل الطلب للإرسال
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const itemsList = cart.map(item => `- ${item.name} (${item.qty} × ${item.price} ر.س)`).join("\n");

    const message = `مرحباً مقهى شهاب ☕\n` +
                    `رقم الطلب: *${orderNumber}*\n` +
                    `الاسم: ${customerName}\n\n` +
                    `*الطلبات:*\n${itemsList}\n\n` +
                    `*الإجمالي:* ${totalPrice} ر.س`;

    // 3. عرض رقم الطلب للزبون وتجهيز رابط الواتساب
   const cartModal = document.getElementById("cartModal");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");

if (openCartBtn && cartModal) {
  openCartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
    cartModal.classList.add("open");
  });
}

function closeCart() {
  if (!cartModal) return;
  cartModal.style.display = "none";
  cartModal.classList.remove("open");
}

if (closeCartBtn) {
  closeCartBtn.addEventListener("click", closeCart);
}

if (cartModal) {
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) closeCart();
  });
}

    if (orderNumEl && waLinkEl && receiptEl) {
      orderNumEl.textContent = orderNumber;
      waLinkEl.href = `https://wa.me/${CAFE_WHATSAPP}?text=${encodeURIComponent(message)}`;
      receiptEl.classList.remove("hidden");
    } else {
      alert(`تم تأكيد طلبك بنجاح! ☕\nرقم الطلب: ${orderNumber}`);
    }

    // تفريغ السلة بعد التأكيد
    cart = [];
    updateCartUI();
  });
}

// معالجة نموذج الحجز
if (bookingForm && bookingMessage) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guestName").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;

    bookingMessage.textContent = `شكراً لك يا ${name}! تم تأكيد حجز طاولتك ليوم ${date} الساعة ${time}.`;
    bookingMessage.classList.remove("hidden");
    bookingForm.reset();
  });
}

// التشغيل الأولي
renderMenu();
