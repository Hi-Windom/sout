export default function table(m) {
  try {
    console.table(m);
  } catch (e) {
    console.log(m);
    console.error(e);
  }
}