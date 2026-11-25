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
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img: "https://images.openai.com/static-rsc-4/TqQmQ157wyeMJaPG2NUY5c_O0JqGApFZUdnau2JyArJ95UtcPfAuvHLq7nhSv1Pq2bjQYVHHHsmPv05oaMN8VUW-4wFhSLltyd4ePet0lKQ_igqtF70-p3A21Aex1skRLv-5qr0JykGgGyuN5USJuYTHR9oc1ClqzStCMV2yyA6lO19gG-Gs-u0m6_UeWB1y?purpose=fullsize"
  },
  {
    id: 8,
    name: "امريكانو ساخن",
    category: "hot",
    price: 17.5,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
img:"https://images.openai.com/static-rsc-4/_Mip4ta2h2AwgP9GZOw6tpTnjmVtmi3gFW6fgAqvVATzZC7a47nRbBiwHpFgcTAxPtC5wyeHnDaXDIWivTkFOu6p1htn9hJ_GWknIHu-iFjKVyfhjaaHdLt0aL4mqox6Y9-5BH3gVxfDyvOsdMUZbukPxkRmDGC0S2pxQuR5Me5lTLHt2d6bjCfSaXVImtjB?purpose=fullsize"  },
  {
    id: 9,
    name: "تشيز كيك سان سيباستيان",
    category: "sweet",
    price: 14.5,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
    img:"https://images.openai.com/static-rsc-4/isiggbtqq0RLlstMSyaR1TMlyHbtwkys10-rXzqw6oliC7brsv8qZpdfuxIDx4nGbP8ecZWA9gfJhIz7m1oQkLYdrSbW5-hfzTTOnj-JalBPQy0vJBWBvXx54BhJIhsgoO13JSyGgnFCAJzDDXtLpVbH_9tvtSqlSIlr0JeV76vgTFjjk9YyxxeqtXjxj3JD?purpose=fullsize"
  },
  {
    id: 10,
    name: "تشيز كيك كلاسيك ",
    category: "sweet",
    price: 25,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
img:"https://images.openai.com/static-rsc-4/YfWZIlCJojnumPETOyOAQ3UgAoqIWArDDZAK7YJLS-ixoNcK_ICeUER2PFvvgofHucYKqB4yIlBvKJ8tw3YhmvwIE6oMhBElPuFeQlrRVCbs_Xq4k-AN_aME4ToGy0OiuTgYScKAIk3Wr6bKmGtJasH3zuwit1vrbOKssf7_kNP2NRI7U_M2Spa7IBh63ugZ?purpose=fullsize"
  },
   {
    id: 11,
    name: "تركي ساخن",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
img:"https://images.openai.com/static-rsc-4/2BiPb_ijCMmFJCSkXJ8GosEBlTv505GovEcbV7HHTp_I3si9Eq_3TDas3tSrLgfvTVs4hBM4da3HTfb0QVb2F7a2IzrcecrVR-9937CudVa4IPuLayHmiBbGO1B74HF1QkT6c1pOf3SLwhfUBhC1xelN3T__H9Marzz0KZGAK2LXlOO9kEOb-gbnkp8Yzw9q?purpose=fullsize"
   },
  {
    id: 12,
    name: "لاتية بالكراميل",
    category: "hot",
    price: 16,
    desc: "مخبوز طازجاً ومقرمشاً ومحشو بكريمة اللوز الغنية.",
img:"https://images.openai.com/static-rsc-4/szjWy_OFmcn6FGTdCiPbzGET4ZywpcE963eokxvHEIhaI7zJB9aeaLTeY9B5reOIrDHM5wOhaFcDjVvGZQH3ITjvNcZIjOsdDNUzgo2_TRRwfT0QAOaDJ2ht0OcDTTl2_b-_A4JoVxLlhyU9zF3sDsF8WvnK-SpN7FNlg4YTRdhv_PPhSMMRnvGoTx5_aONF?purpose=fullsize"  }
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
