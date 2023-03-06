interface Window {
  sout: ISout
}

interface ISout {
  debug: boolean
  log: function
  slog: function
  print: function
  info: function
  success: function
  warn: function
  unsure: function
  ops: function
  error: function
  good: function
  wink: function
  bad: function
  tracker: function
  table: function
  showAll: function
}