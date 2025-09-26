# Changelog

All notable changes to the **PHPNative** extension will be documented here.
This changelog format is inspired by [Keep a Changelog](https://keepachangelog.com/) and follows [Semantic Versioning](https://semver.org/).

---

## [0.0.4] - 2025-09-26

### Added

* ✨ **Comprehensive PHP Snippets**:
  * Added 25+ essential PHP code snippets for faster development
  * Includes: echo statements, control structures, loops, functions, classes, database connections, forms, and more
  * Accessible via IntelliSense in PHP files with `php:` prefix
  * Supports tab completion and placeholder navigation

### Snippets Categories:
* **Basic Tags**: `php`, `php:echo`, `echo`
* **Control Structures**: `php:if`, `php:ifelse`, `php:switch`
* **Loops**: `php:for`, `php:foreach`, `php:while`
* **Functions & Classes**: `php:function`, `php:class`, `php:classcon`
* **Database**: `php:db`, `php:pdo`
* **Forms & Requests**: `php:form`, `php:get`, `php:post`
* **Utilities**: `php:session`, `php:include`, `php:try`

---

## [0.0.3] - 2025-09-26

### Added

* ⚙️ **Customizable Default Port Setting**:
  * Added new configuration option `phpnative.defaultPort` in VS Code settings
  * Users can now set their preferred default port number globally or per workspace
  * When set, the extension will automatically use the configured port without prompting
  * Falls back to prompt behavior if no setting is configured

### Changed

* 🔧 **Enhanced Server Startup Flow**:
  * Smart port detection: uses settings if available, prompts user if not set
  * Added port validation (1024-65535) to ensure valid port numbers
  * Improved user experience with informative messages when using configured ports

### Technical

* 📦 **Configuration Schema**:
  * Added configuration contribution point in `package.json`
  * Implemented settings retrieval using `vscode.workspace.getConfiguration()`

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
  * The submenu is placed with VS Code's built-in separator for a cleaner and more consistent look.

### Changed

* 🔧 Reorganized `package.json` structure to make commands more organized using `submenus`.

---

⚡ **Release Notes**:

* `0.0.1` introduced all the core features including file creation, PHP server management, and browser integration.
* `0.0.2` focused on internationalization by switching the entire interface to English for global accessibility.
* `0.0.3` adds customizable default port settings for improved workflow efficiency and user preference management.
* `0.0.4` brings a suite of PHP code snippets to enhance coding speed and efficiency within the extension.