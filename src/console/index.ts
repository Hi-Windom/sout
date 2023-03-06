import bad from './bad'
import error from './error'
import good from './good';
import info from './info';
import log from './log';
import ops from './ops';
import print from './print';
import slog from './slog';
import success from './success';
import table from './table';
import tracker from './tracker';
import unsure from './unsure';
import warn from './warn';
import wink from './wink';
export default function exSout() {
  // 参考资料：https://juejin.cn/post/6844904007102627847
  window.sout = {
    debug: true,
    log: log,
    slog: slog,
    print: print,
    info: info,
    success: success,
    warn: warn,
    unsure: unsure,
    ops: ops,
    error: error,
    good: good,
    wink: wink,
    bad: bad,
    tracker: tracker,
    table: table,
    showAll: () => {
      window.sout.debug = true;
      window.sout.log("test");
      window.sout.slog("test");
      window.sout.print("test");
      window.sout.info("test");
      window.sout.success("test");
      window.sout.warn("test");
      window.sout.unsure("test")
      window.sout.ops("test");
      window.sout.error("test");
      window.sout.good("test");
      window.sout.wink("test");
      window.sout.bad("test");
      window.sout.tracker("test");
      window.sout.table([
        {
          id: 1,
          name: "Marry",
          age: 18,
          sex: 0
        },
        {
          id: 2,
          name: "John",
          age: 20,
          sex: 1
        }
      ]);
    }
  };
  return 0;
}
