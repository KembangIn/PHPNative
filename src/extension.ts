import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

let phpServerTerminal: vscode.Terminal | null = null;
let statusBarItem: vscode.StatusBarItem;
let globeStatusBar: vscode.StatusBarItem;
let currentPort: string | null = null;

export function activate(context: vscode.ExtensionContext) {
	console.log('Ekstensi PHPNative aktif 🚀');

	// Status bar server info
	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBarItem.text = `$(server) PHP Server: Stopped`;
	statusBarItem.tooltip = "Klik untuk menjalankan server PHP";
	statusBarItem.command = "phpnative.serve";
	statusBarItem.show();

	// Status bar globe
	globeStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 99);
	globeStatusBar.text = `$(globe) Open in Browser`;
	globeStatusBar.tooltip = "Buka PHP Server di browser";
	globeStatusBar.command = "phpnative.openInBrowser";
	globeStatusBar.hide();

	context.subscriptions.push(statusBarItem, globeStatusBar);

	// Command: Create File
	const disposableCreate = vscode.commands.registerCommand('phpnative.createFile', async (uri: vscode.Uri) => {
		const input = await vscode.window.showInputBox({
			prompt: 'Masukkan nama file PHP (contoh: config atau view/index)',
			placeHolder: 'config atau view/index'
		});

		if (!input) {
			vscode.window.showErrorMessage('Nama file tidak boleh kosong!');
			return;
		}

		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders) {
			vscode.window.showErrorMessage('Buka folder/project dulu di VSCode!');
			return;
		}

		const rootPath = workspaceFolders[0].uri.fsPath;
		const filePath = path.join(rootPath, input + '.php');

		const dirName = path.dirname(filePath);
		if (!fs.existsSync(dirName)) {
			fs.mkdirSync(dirName, { recursive: true });
		}

		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, `<?php\n\n// File ${input}.php dibuat otomatis oleh PHPNative\n`);
			vscode.window.showInformationMessage(`File berhasil dibuat: ${input}.php`);
			const doc = await vscode.workspace.openTextDocument(filePath);
			vscode.window.showTextDocument(doc);
		} else {
			vscode.window.showWarningMessage(`File sudah ada: ${input}.php`);
		}
	});

	// Command: Quick Server Start
	const disposableServe = vscode.commands.registerCommand('phpnative.serve', async () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders) {
			vscode.window.showErrorMessage('Buka folder/project dulu di VSCode!');
			return;
		}

		const rootPath = workspaceFolders[0].uri.fsPath;

		if (phpServerTerminal) {
			vscode.window.showWarningMessage("PHP Server sudah berjalan. Gunakan 'Stop PHP Server' untuk menghentikan.");
			return;
		}

		const portInput = await vscode.window.showInputBox({
			prompt: 'Masukkan port untuk PHP server (default: 8000)',
			placeHolder: '8000'
		});

		currentPort = portInput && !isNaN(Number(portInput)) ? portInput : '8000';

		phpServerTerminal = vscode.window.createTerminal("PHP Server");
		phpServerTerminal.sendText(`php -S localhost:${currentPort} -t "${rootPath}"`);
		phpServerTerminal.show();

		statusBarItem.text = `$(play) PHP Server: ${currentPort}`;
		statusBarItem.tooltip = "Klik untuk menghentikan server PHP";
		statusBarItem.command = "phpnative.stopServer";
		statusBarItem.show();

		globeStatusBar.show();

		vscode.window.showInformationMessage(`PHP Server dijalankan di http://localhost:${currentPort}`);
	});

	// Command: Stop Server
	const disposableStop = vscode.commands.registerCommand('phpnative.stopServer', () => {
		if (phpServerTerminal) {
			phpServerTerminal.dispose();
			phpServerTerminal = null;
			currentPort = null;

			statusBarItem.text = `$(server) PHP Server: Stopped`;
			statusBarItem.tooltip = "Klik untuk menjalankan server PHP";
			statusBarItem.command = "phpnative.serve";
			statusBarItem.show();

			globeStatusBar.hide();

			vscode.window.showInformationMessage("PHP Server dihentikan.");
		} else {
			vscode.window.showWarningMessage("Tidak ada PHP Server yang berjalan.");
		}
	});

	// Command: Open root in Browser
	const disposableOpenBrowser = vscode.commands.registerCommand('phpnative.openInBrowser', () => {
		if (!currentPort) {
			vscode.window.showErrorMessage("PHP Server belum berjalan.");
			return;
		}
		vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${currentPort}`));
	});

	// Command: Open specific file in Browser
	const disposableOpenFileBrowser = vscode.commands.registerCommand('phpnative.openFileInBrowser', (uri?: vscode.Uri) => {
		if (!currentPort) {
			vscode.window.showErrorMessage("PHP Server belum berjalan.");
			return;
		}
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders) {
			vscode.window.showErrorMessage('Buka folder/project dulu di VSCode!');
			return;
		}
		const rootPath = workspaceFolders[0].uri.fsPath;
		const filePath = uri ? uri.fsPath : vscode.window.activeTextEditor?.document.fileName;

		if (!filePath) {
			vscode.window.showErrorMessage("Tidak ada file yang dipilih.");
			return;
		}

		if (!filePath.startsWith(rootPath)) {
			vscode.window.showErrorMessage("File tidak berada di dalam workspace aktif.");
			return;
		}

		const relativePath = path.relative(rootPath, filePath).replace(/\\/g, '/');
		vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${currentPort}/${relativePath}`));
	});

	context.subscriptions.push(
		disposableCreate,
		disposableServe,
		disposableStop,
		disposableOpenBrowser,
		disposableOpenFileBrowser
	);
}

export function deactivate() {
	if (phpServerTerminal) phpServerTerminal.dispose();
	if (statusBarItem) statusBarItem.dispose();
	if (globeStatusBar) globeStatusBar.dispose();
}
