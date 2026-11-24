const footerHTML = `
  <footer class="mt-16 bg-dark pb-4 pt-16 text-blush">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 justify-items-center gap-8 text-center md:grid-cols-3">
      <div class="flex flex-col items-center gap-2">
        <h4 class="mb-2 font-serif font-semibold text-blush">КОМПАНИЯ</h4>
        <ul class="flex flex-col gap-2"><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">О нас</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Как это работает</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Авторам</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Партнёрам</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Блог</a></li></ul>
      </div>
      <div class="flex flex-col items-center gap-2">
        <h4 class="mb-2 font-serif font-semibold text-blush">КЛИЕНТАМ</h4>
        <ul class="flex flex-col gap-2"><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Способы оплаты</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Форматы файлов</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Поддерживаемые устройства</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Возврат средств</a></li><li><a href="stub.html" class="text-sm text-blush transition hover:text-white">Помощь</a></li></ul>
      </div>
      <div class="flex flex-col items-center gap-2">
        <h4 class="mb-2 font-serif font-semibold text-blush">МЫ В СОЦСЕТЯХ</h4>
        <div class="flex gap-4"><a href="stub.html" aria-label="Telegram" class="size-8 transition hover:scale-110"><img src="img/icon_telegram.JPG" alt="Telegram" class="size-full object-contain"></a><a href="stub.html" aria-label="Facebook" class="size-8 transition hover:scale-110"><img src="img/icon_facebook.JPG" alt="Facebook" class="size-full object-contain"></a><a href="stub.html" aria-label="Instagram" class="size-8 transition hover:scale-110"><img src="img/icon_instagram.JPG" alt="Instagram" class="size-full object-contain"></a><a href="stub.html" aria-label="TikTok" class="size-8 transition hover:scale-110"><img src="img/icon_tiktok.JPG" alt="TikTok" class="size-full object-contain"></a></div>
      </div>
    </div>
    <p class="mx-auto mt-8 max-w-6xl border-t border-blush/30 px-4 pt-4 text-center text-sm">&copy; 2026 E-Shelf</p>
  </footer>
`;
const filtersHTML = `
  <aside class="flex flex-col gap-6 rounded-lg bg-white p-4">
  <h3 class="text-xl">Фильтры</h3>

  <!-- Блок: Жанр -->
  <div class="flex flex-col gap-2">
    <h4 class="mb-1 text-sm font-bold uppercase tracking-wide">Жанр</h4>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Классика</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Романтика</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Детектив</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Фантастика</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Поэзия</span>
    </label>
  </div>

  <!-- Блок: Формат -->
  <div class="flex flex-col gap-2">
    <h4 class="mb-1 text-sm font-bold uppercase tracking-wide">Формат</h4>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>PDF</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>EPUB</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>FB2</span>
    </label>
  </div>

  <!-- Блок: Язык -->
  <div class="flex flex-col gap-2">
    <h4 class="mb-1 text-sm font-bold uppercase tracking-wide">Язык</h4>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Русский</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Английский</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Немецкий</span>
    </label>
    
    <label class="flex cursor-pointer items-center gap-2 hover:text-brand">
      <input type="checkbox" class="size-4 accent-brand">
      <span>Другие</span>
    </label>
  </div>

  <!-- Кнопки -->
  <div class="flex gap-2">
    <a href="stub.html" class="inline-flex items-center justify-center gap-2 font-semibold border rounded-lg px-5 py-1.5 transition border-line text-brand hover:bg-brand hover:text-white flex-1 !px-2 text-sm">Сбросить</a>
    <a href="stub.html" class="inline-flex items-center justify-center gap-2 font-semibold border rounded-lg px-5 py-1.5 transition border-brand bg-brand text-white hover:bg-dark hover:border-dark flex-1 !px-2 text-sm">Применить</a>
  </div>
</aside>
`;

function loadComponents() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  const filtersPlaceholder = document.getElementById("filters-placeholder");
  if (filtersPlaceholder) filtersPlaceholder.innerHTML = filtersHTML;
}

document.addEventListener("DOMContentLoaded", loadComponents);
