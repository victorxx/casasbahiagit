// Promoções reais da C&A
const ceaPromos = [
  {
    title: "Calça jeans feminina – de R$149,99 por R$79,99",
    price: "R$ 79,99",
    category: "Vestuário",
    validity: "14/07/2025"
  },
  {
    title: "Bermuda de sarja masculina – de R$69,90 por R$29,90",
    price: "R$ 29,90",
    category: "Vestuário",
    validity: "14/07/2025"
  },
  {
    title: "Blusa infantil estampada – de R$39,99 por R$12,99",
    price: "R$ 12,99",
    category: "Infantil",
    validity: "14/07/2025"
  },
  {
    title: "Maquiagens selecionadas com 30% OFF",
    price: "30% de desconto",
    category: "Beleza",
    validity: "14/07/2025"
  }
];

// Promoções reais das Casas Bahia
const cbahiaPromos = [
  {
    title: "Smartphone Samsung Galaxy S23 com até 20% OFF",
    price: "R$ 3.199,00",
    category: "Smartphone",
    validity: "até 12/06/2025"
  },
  {
    title: "Smart TV LG 4K 55'' – até 30% OFF",
    price: "R$ 2.299,00",
    category: "Televisores",
    validity: "até 12/06/2025"
  },
  {
    title: "Notebook Acer Core i5 com desconto exclusivo",
    price: "R$ 2.699,00",
    category: "Informática",
    validity: "até 12/06/2025"
  },
  {
    title: "Refrigerador Brastemp Frost Free 375L",
    price: "R$ 3.499,00",
    category: "Eletrodomésticos",
    validity: "até 14/07/2025"
  },
  {
    title: "Ventilador Arno Turbo Silence",
    price: "R$ 169,90",
    category: "Eletroportáteis",
    validity: "até 14/07/2025"
  }
];

// Função genérica para exibir promoções
function renderPromos(promos, containerId) {
  const container = document.getElementById(containerId);
  promos.forEach(promo => {
    const card = document.createElement("article");
    card.className = "promo-card";
    card.innerHTML = `
      <h3 class="promo-title">${promo.title}</h3>
      <p class="promo-price">${promo.price}</p>
      <p class="promo-validity">Válido até: ${promo.validity}</p>
    `;
    container.appendChild(card);
  });
}
// Ao carregar a página, renderizar as promoções
document.addEventListener("DOMContentLoaded", () => {
  renderPromos(ceaPromos, "cea-promos");
  renderPromos(cbahiaPromos, "cbahia-promos");
});
//promocoescea
