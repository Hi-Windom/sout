export default function tracker(m) {
  if (!window.sout.debug) return;
  const t = typeof m === "string" ? "%s" : "%o";
  console.log("%c%s%c" + t,
    "padding: 2px 4px;margin: 2px;background: orange;color: white;border-radius: 2px;font-size: 16px",
    (new Error()).stack.split("\n")[2].trim().split(" ")[1],
    "padding: 2px 4px;color: #1BA1E2;font-size: 16px",
    m);
}