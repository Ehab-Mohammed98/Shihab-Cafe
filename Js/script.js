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
    name: "كابيتشينو كلاسيك",
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
    desc: "إسبريسو منعش يُقدّم مع الماء البارد ومكعبات الثلج.",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "فرابتشينو الكراميل",
    category: "cold",
    price: 16,
    desc: "مشروب مثلج مخلوط بالقهوة والحليب مع لمسة كراميل غنية.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "موهيتو الليمون والنعناع",
    category: "cold",
    price: 16,
    desc: "انتعاش الليمون الطازج وأوراق النعناع مع الثلج المجروش.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "موهيتو التوت الأزرق",
    category: "cold",
    price: 16,
    desc: "مزيج بارد ومنعش بنكهة التوت الأزرق والليمون والنعناع.",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "تشيز كيك كلاسيك",
    category: "sweets",
    price: 18,
    desc: "تشيز كيك تقليدي بطبقة بسكويت وقوام غني بالكريمة.",
    img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "تشيز كيك سان سيباستيان",
    category: "sweets",
    price: 18,
    desc: "تشيز كيك مخبوز بسطح محمّر، وقوام كريمي ناعم من الداخل.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "موهيتو الفراولة",
    category: "cold",
    price: 18,
    desc: "مشروب بارد ومنعش بالفراولة الطبيعية والنعناع والثلج.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "سموذي المانجو والأناناس",
    category: "cold",
    price: 18,
    desc: "مزيج استوائي كثيف وبارد من المانجو والأناناس الطازج.",
    img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80"
  }
];

let cart = [];
const CAFE_WHATSAPP = "966569060751";

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
function openCart() {
  if (!cartModal) return;
  cartModal.style.display = "flex";
  cartModal.classList.add("open");
}

function closeCart() {
  if (!cartModal) return;
  cartModal.style.display = "none";
  cartModal.classList.remove("open");
}

if (openCartBtn) openCartBtn.addEventListener("click", openCart);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
if (cartModal) {
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) closeCart();
  });
}

// إتمام الطلب وتوليد رقم الطلب
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("السلة فارغة! أضف بعض المشروبات أولاً.");
      return;
    }

    const nameInput = document.getElementById("customerOrderName");
    const phoneInput = document.getElementById("customerPhoneInput");

    const customerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "عميلنا العزيز";
    const customerPhone = phoneInput ? phoneInput.value.trim().replace(/\s+/g, "") : "";

    if (!customerPhone) {
      alert("يرجى إدخال رقم جوال العميل أولاً.");
      if (phoneInput) phoneInput.focus();
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `SH-${randomNum}`;
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const smsBody =
      `مرحباً ${customerName}، تم تأكيد طلبك في مقهى شهاب. ` +
      `رقم الطلب: ${orderNumber} - الإجمالي: ${totalPrice} ر.س`;

    const orderNumEl = document.getElementById("orderNumberDisplay");
    const smsLinkEl = document.getElementById("smsOrderLink");
    const receiptEl = document.getElementById("orderReceipt");

    // رابط SMS متوافق مع أندرويد وآيفون
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? "&" : "?";
    const smsUrl = `sms:${customerPhone}${separator}body=${encodeURIComponent(smsBody)}`;

    if (orderNumEl) orderNumEl.textContent = orderNumber;
    if (smsLinkEl) smsLinkEl.href = smsUrl;
    if (receiptEl) receiptEl.classList.remove("hidden");

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
