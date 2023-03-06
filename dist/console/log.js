export default function log(m) {
    if (!window.sout.debug)
        return;
    const t = typeof m === "string" ? "%s" : "%o";
    console.log("%c" + t, "color:#858585;font-size: 12px", m);
}
