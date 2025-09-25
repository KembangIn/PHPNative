# Changelog

All notable changes to the **PHPNative** extension will be documented here.  
This changelog format is inspired by [Keep a Changelog](https://keepachangelog.com/) and follows [Semantic Versioning](https://semver.org/).

## [0.0.1] - 2025-09-25

### Added
* 🚀 **Create New PHP File**: Automatically generate `.php` files along with the folder structure.
* ✨ **Quick Server Start**: Run `php -S localhost:<port>` directly from the Command Palette or Explorer Context Menu.
* ✨ **Stop PHP Server**: Stop the PHP server directly from the Command Palette, Context Menu, or Status Bar.
* ✨ **Status Bar Integration**:
  * Display the active server status.
  * ⚪ Start, 🔴 Stop, and 🌐 Open in Browser buttons.
  * Click 🌐 to instantly open `http://localhost:<port>` in the default browser.
* 📂 **Explorer & Editor Context Menu Support**:
  * Create New PHP File
  * Quick Server Start
  * Stop PHP Server
  * Open File in Browser
* 📂 **Explorer & Editor Context Menu Submenu**:
  * All commands are now grouped under the **PHPNative** submenu.
  * The submenu is placed with VS Code’s built-in separator for a cleaner and more consistent look.

### Changed
* 🔧 Reorganized `package.json` structure to make commands more organized using `submenus`.

---

⚡ **Release Notes**:
* Version `0.0.1` is a major milestone with the introduction of **Status Bar Integration** and full server controls directly from VS Code.
* All core features are included: creating new PHP files, starting a quick server, stopping the server, and opening the project/file directly in the browser.
* All commands are neatly grouped under the **PHPNative** submenu, avoiding clutter in other menus.
