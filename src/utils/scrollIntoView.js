export default (container, element) => {
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const scrollLeft =
    elementRect.left - containerRect.left + container.scrollLeft;

  const containerWidth = containerRect.width;
  const elementWidth = elementRect.width;
  const offset = (containerWidth - elementWidth) / 2;

  container.scrollTo({
    left: scrollLeft - offset,
    behavior: "smooth",
  });
};
