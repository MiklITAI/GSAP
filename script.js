// Анимация заголовка
gsap.from(".title", { duration: 2, y: -50, opacity: 0, ease: "bounce" });

// Анимация коробки
gsap.to(".box", {
  duration: 2,
  rotation: 360,
  x: 200,
  backgroundColor: "#e74c3c",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true
});