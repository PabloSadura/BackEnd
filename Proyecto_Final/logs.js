import log4js from "log4js";

log4js.configure({
  appenders: {
    myConsole: { type: "console" },
    myFile: { type: "file", filename: "warm.log" },
    myFile2: { type: "file", filename: "error.log" },
  },
  categories: {
    default: { appenders: ["myConsole"], level: "trace" },
    consola: { appenders: ["myConsole"], level: "debug" },
    archivo: { appenders: ["myFile"], level: "all" },
    error: { appenders: ["myFile2"], level: "error" },
  },
});

export const loggerInfo = log4js.getLogger();
export const loggerError = log4js.getLogger("error");
export const loggerWarm = log4js.getLogger("archivo");
