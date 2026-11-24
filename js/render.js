// Функция для создания одной карточки книги
function createBookCard(book, options = {}) {
  const { isCarousel = false, animationDelay = "0s" } = options;

  const badge = book.isFree
    ? `<span class="absolute left-2 top-2 z-10 rounded bg-ok px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Бесплатно</span>`
    : "";

  const priceHtml = book.price
    ? `<p class="font-bold text-brand">${book.price.toFixed(2)} BYN</p>`
    : `<p class="font-bold text-sm uppercase text-ok">Бесплатно</p>`;

  const cardHtml = `
    <article class="relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${!isCarousel ? "animate-[fade-up_0.8s_" + animationDelay + "_backwards]" : ""}">
      ${badge}
      <img src="${book.image}" alt="${book.title}" class="aspect-[2/3] w-full object-cover">
      <div class="flex flex-1 flex-col gap-1 p-4">
        <h3 class="font-semibold">${book.title}</h3>
        <p class="text-sm text-muted">${book.author}</p>
        <div class="mt-auto flex flex-col gap-2 pt-2">
          ${priceHtml}
          <a href="stub.html" class="inline-flex items-center justify-center gap-2 font-semibold border rounded-lg px-5 py-1.5 transition border-brand bg-brand text-white hover:bg-dark hover:border-dark w-full !py-2.5 text-sm">${book.buttonText}</a>
        </div>
      </div>
    </article>
  `;

  if (isCarousel) {
    return `<div class="flex shrink-0 basis-full px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">${cardHtml}</div>`;
  }

  return cardHtml;
}

function createBlogCard(post) {
  return `
    <a href="stub.html" class="block">
      <article class="grid overflow-hidden rounded-2xl bg-white shadow transition duration-300 hover:-translate-y-1.5 hover:shadow-xl md:grid-cols-[20rem_1fr] animate-[fade-up_0.8s_${post.delay}_backwards]">
        <img src="${post.image}" alt="${post.alt}" class="h-56 w-full object-cover">
        <div class="flex flex-col justify-center gap-2 p-8">
          <p class="border-l-2 border-brand pl-2 text-xs uppercase tracking-wide text-muted">${post.category}</p>
          <h2 class="text-2xl">${post.title}</h2>
          <p class="text-sm text-muted">${post.description}</p>
        </div>
      </article>
    </a>
  `;
}
