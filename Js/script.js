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
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://al-ain.com/article/most-expensive-cappuccino-in-the-world-sold"
  },
  {
    id: 8,
    name: "امريكانو ساخن",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://www.onflora.net/shop/%D8%A8%D8%A7%D8%B1%D9%86%D8%B2-%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D8%A7%D9%86%D9%88-%D8%B3%D8%A7%D8%AE%D9%86-%D9%83%D8%A8%D9%8A%D8%B1-%D9%85%D9%86-%D8%A8%D8%A7%D8%B1%D9%86%D8%B2-692?srsltid=AYCX9vIIGkZrEAfGuy9JaEBnS-pJL72LeY61kymE03EDXmM7poe9PnGl"
  },
  {
    id: 9,
    name: "تركي ساخن",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://bashasaray.com/the-most-famous-turkish-drinks-video/?srsltid=AYCX9vKvtZI3TMluF-uVgv1U0DEhw_eZoU0oozCOpKP562_RXk_KJ6I5"
  },
  {
    id: 10,
    name: "لاتية بالكراميل",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://www.google.com/imgres?q=%D9%83%D8%B1%D8%A7%D9%85%D9%8A%D9%84%20%D9%84%D8%A7%D8%AA%D9%8A%D9%87%20%D8%AD%D8%A7%D8%B1&imgurl=https%3A%2F%2Fksacdn4.mnasaticdn.com%2Fuploads%2Fproduct_image%2F12999%2Fproduct_01603798532_thumb.jpg&imgrefurl=https%3A%2F%2Flatifacafe.com%2Far%2Fproduct%2F195931-hot-caramel-latte&docid=5OC_qS_IUYYkBM&tbnid=RXufQ3_IycBtMM&vet=12ahUKEwiIsOqkqaGYAxUehv0HHSGrKiAQnPAOegQIQRAA..i&w=400&h=400&hcb=2&ved=2ahUKEwiIsOqkqaGYAxUehv0HHSGrKiAQnPAOegQIQRAA"
  },
   {
    id: 9,
    name: "تركي ساخن",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://bashasaray.com/the-most-famous-turkish-drinks-video/?srsltid=AYCX9vKvtZI3TMluF-uVgv1U0DEhw_eZoU0oozCOpKP562_RXk_KJ6I5"
  },
  {
    id: 10,
    name: "لاتية بالكراميل",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://www.google.com/imgres?q=%D9%83%D8%B1%D8%A7%D9%85%D9%8A%D9%84%20%D9%84%D8%A7%D8%AA%D9%8A%D9%87%20%D8%AD%D8%A7%D8%B1&imgurl=https%3A%2F%2Fksacdn4.mnasaticdn.com%2Fuploads%2Fproduct_image%2F12999%2Fproduct_01603798532_thumb.jpg&imgrefurl=https%3A%2F%2Flatifacafe.com%2Far%2Fproduct%2F195931-hot-caramel-latte&docid=5OC_qS_IUYYkBM&tbnid=RXufQ3_IycBtMM&vet=12ahUKEwiIsOqkqaGYAxUehv0HHSGrKiAQnPAOegQIQRAA..i&w=400&h=400&hcb=2&ved=2ahUKEwiIsOqkqaGYAxUehv0HHSGrKiAQnPAOegQIQRAA"
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

  cartCount.textContent = totalQty;
  cartTotal.textContent = `${totalPrice} ر.س`;

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
openCartBtn.addEventListener("click", () => cartModal.classList.add("open"));
closeCartBtn.addEventListener("click", () => cartModal.classList.remove("open"));
cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.classList.remove("open");
});

// إتمام الطلب
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("السلة فارغة! أضف بعض المشروبات أولاً.");
    return;
  }
  alert("تم استلام طلبك بنجاح! جاري تحضير قهوتك ☕");
  cart = [];
  updateCartUI();
  cartModal.classList.remove("open");
});

// معالجة نموذج الحجز
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("guestName").value;
  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;

  bookingMessage.textContent = `شكراً لك يا ${name}! تم تأكيد حجز طاولتك ليوم ${date} الساعة ${time}.`;
  bookingMessage.classList.remove("hidden");
  bookingForm.reset();
});

// التشغيل الأولي
renderMenu();
