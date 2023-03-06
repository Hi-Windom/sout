export default function ops(m, head?) {
  const t = typeof m === "string" ? "%s" : "%o";
  if (head) {
    console.warn("%c%s%c" + t,
      "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 18px",
      head,
      "color:orangered;font-size: 18px",
      m);
  } else {
    console.warn("%c%s> %c" + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:orangered;font-size: 18px", m);
  }
}