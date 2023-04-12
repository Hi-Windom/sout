import {isSillotPhoneAppMode} from 'sofill/env'
export default function wink(m, head?) {
  if (isSillotPhoneAppMode()) {
    console.log(m);
    return
  }
  const t = typeof m === "string" ? "%s" : "%o";
  if (head) {
    console.log("%c%s%c" + t,
      "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 22px",
      head,
      "color:red;font-size: 40px",
      m);
  } else {
    console.log("%c%s> %c" + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:PaleVioletRed;font-size: 22px", m);
  }
}