# Changelog

All notable changes to the **PHPNative** extension will be documented here.
This changelog format is inspired by [Keep a Changelog](https://keepachangelog.com/) and follows [Semantic Versioning](https://semver.org/).

---

## [0.0.2] - 2025-09-26

### Changed

* 🌍 **Language Update**:

  * All interface messages, prompts, tooltips, and notifications have been fully translated into **English**.
  * Ensures consistency and better accessibility for global developers.

---

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

* `0.0.1` introduced all the core features including file creation, PHP server management, and browser integration.
* `0.0.2` focused on internationalization by switching the entire interface to English for global accessibility.