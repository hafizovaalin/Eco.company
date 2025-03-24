// const icons = import.meta.glob("/src/assets/Icons-16/16/Arrows-Directions/*.svg", { eager: true, import: "default" });
const icons = {
  ...import.meta.glob("./Arrows-Directions/*.svg", { eager: true, import: "default" }),
  ...import.meta.glob("./User-Interface/*.svg", { eager: true, import: "default" })
};

// const formattedIcons = Object.fromEntries(
//   Object.entries(icons).map(([path, component]) => {
//     const parts = path.split("/");
//     const name = parts[parts.length - 1].replace(".svg", ""); // Берём последнее слово после "/"
//     return [name, component];
//   })
// );
const formattedIcons = Object.fromEntries(
  Object.entries(icons).map(([path, component]) => {
    const name = path.split("/").pop().replace(".svg", ""); // Берем только имя файла
    return [name, component];
  })
)
export default formattedIcons;
