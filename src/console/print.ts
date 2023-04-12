import {isSillotPhoneAppMode} from 'sofill/env'
export default function print(m, head?) {
  if (isSillotPhoneAppMode()) {
    console.log(m);
    return
  }
  const t = typeof m === "string" ? "%s" : "%o";
  if (head) {
    console.log("%c%s%c" + t,
      "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 32px",
      head,
      "color:#a8c8b8;font-size: 32px",
      m);
  } else {
    console.log("%c" + t, "color:#a8c8b8;font-size: 32px", m);
  }
}