import { join } from "path";
import { platform } from "process";
import { IConfigItem } from "utools-helper";

let defaultShell = "bash -l -c";
switch (platform) {
  case "win32":
    defaultShell = "";
    break;
  case "darwin":
    defaultShell = "zsh -l -c";
    break;
}

export const config: IConfigItem[] = [
  {
    name: "shell",
    label: "shell",
    type: "input",
    required: false,
    placeholder: "一般情况下无需修改，windows 请保持为空值",
    default: defaultShell,
    only_current_machine: true,
  },
  {
    name: "cursor",
    label: "cursor",
    type: "input",
    placeholder: "cursor 命令",
    required: true,
    default: "cursor",
    only_current_machine: true,
  },
  {
    name: "db",
    label: "db",
    type: "input",
    required: true,
    only_current_machine: true,
    default: join(
      utools.getPath("appData"),
      "Cursor",
      "User",
      "globalStorage",
      "state.vscdb"
    ),
  },
  {
    name: "storage",
    label: "storage",
    type: "input",
    required: true,
    only_current_machine: true,
    default: join(utools.getPath("appData"), "Cursor", "storage.json"),
  },
  {
    name: "timeout",
    label: "timeout",
    type: "input",
    placeholder: "shell 命令执行超时时间",
    required: false,
    default: "3000",
    only_current_machine: true,
  },
];
