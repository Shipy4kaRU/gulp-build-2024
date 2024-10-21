const featureSummary = document.querySelectorAll(".feature__summary");
const featureBtn = document.querySelector(".feature__button");
const featuresDropdown = document.querySelectorAll(".feature__dropdown");
const featuresSoft = document.querySelectorAll(".feature__dropdown--soft");

let isActive = {
  // Soft: 0, - как пример, здесь могут быть и другие details элементы
  Side: 0,
};
const openMenuFeatures = function (e) {
  if (!e) return;
  const dataset = e.target.dataset.feature;
  const targets = document.querySelectorAll(`.feature__dropdown--${dataset}`); //на случай нескольких details элементов в кнопку добавляем dataset атрибут, а в features добавляем его как модификатор. По этому атрибуту мы сможем открывать только нужные нам details, не затрагивая другие. Например: кнопка с dataset=side-skills откроет только .feature__dropdown--side-skills, а другие details останутся закрытыми
  if (!isActive[`${dataset}`]) {
    e.target.innerHTML = `Свернуть все`;
    targets.forEach((feature) => {
      feature.setAttribute("open", " ");
    });
    return (isActive[`${dataset}`] = true);
  }
  if (isActive[`${dataset}`]) {
    e.target.innerHTML = `Раскрыть все`;
    targets.forEach((feature) => {
      feature.removeAttribute("open");
    });
    return (isActive[`${dataset}`] = false);
  }
};

featureBtn.addEventListener("click", openMenuFeatures);
