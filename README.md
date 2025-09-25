# PHPNative - PHP File Creator

**PHPNative** is a Visual Studio Code extension that helps developers quickly and easily create new PHP files without having to manually type the basic PHP structure every time.

## ✨ Features

* Create new PHP files with a basic template (`<?php ... ?>`).
* Speed up your PHP native development workflow.
* Accessible directly from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) with the command:

  * **PHPNative: Create New PHP File**
* Supports integration with the active workspace, so files are created directly in the selected folder.

---

## 🛠 Requirements

No special dependencies required.
Just make sure you have the latest version of [Visual Studio Code](https://code.visualstudio.com/) installed.

---

## ⚙️ Extension Settings

This extension supports the following settings:

* `phpnative.defaultFileName`: Set the default file name when creating a new PHP file. (default: `index.php`)
* `phpnative.insertTemplate`: Specify whether the basic PHP template should be automatically inserted. (default: `true`)

Example in `settings.json`:

```json
{
  "phpnative.defaultFileName": "newfile.php",
  "phpnative.insertTemplate": true
}
```