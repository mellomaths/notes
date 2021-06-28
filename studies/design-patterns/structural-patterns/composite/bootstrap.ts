import { MenuItem } from "./menu/MenuItem";
import { MenuTab } from "./menu/SubMenu";
import { TitleBar } from "./menu/TitleBar";

console.log("Creating the Title Bar from VSCode");
const bar = new TitleBar();

const helpMenuTab = new MenuTab("Help");
helpMenuTab.add(new MenuItem("Welcome", "welcome-icon", "welcome-document"));
helpMenuTab.add(
  new MenuItem(
    "Getting Started",
    "getting-started-icon",
    "getting-started-document"
  )
);
helpMenuTab.add(
  new MenuItem("Documentation", "documentation-icon", "documentation-document")
);

bar.menuList.push(helpMenuTab);

const fileMenuTab = new MenuTab("File");
fileMenuTab.add(new MenuItem("New File", "new-file-icon", "new-file-document"));
fileMenuTab.add(
  new MenuItem("New Window", "new-window-icon", "new-window-document")
);
const preferencesMenuTab = new MenuTab("Preferences");
preferencesMenuTab.add(
  new MenuItem("Settings", "settings-icon", "settings-document")
);
preferencesMenuTab.add(
  new MenuItem("Extensions", "extensions-icon", "extensions-document")
);

fileMenuTab.add(preferencesMenuTab);

bar.menuList.push(fileMenuTab);
