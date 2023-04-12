import {isSillotPhoneAppMode} from 'sofill/env'
export default function slog(m) {
  if (isSillotPhoneAppMode()) {
    console.log(m);
    return
  }
  if (!window.sout.debug) return;
  const t = typeof m === "string" ? "%s" : "%o";
  console.log("%c" + t, "color:#585858;font-size: 10px", m);
}