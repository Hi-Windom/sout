export default function error(m, head?) {
  const t = typeof m === "string" ? "%s" : "%o";
  if (head) {
    console.error("%c%s%c" + t,
      "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: large",
      head,
      "font-size: large",
      m);
  } else {
    console.error("%c%s> %c" + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "font-size: large", m);
  }
}