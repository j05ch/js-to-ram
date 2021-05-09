interface InfoType {
	[p: string]: { header: string; content: string };
}

export const machineSelectorInfo: InfoType = {
	DE: {
		header: 'Wähle einen Workflow',
		content:
			'Wähle Random Access Machine, um ein Programm auf einer RAM auszuführen. Wähle JavaScript, um ein JavaScript-Programm zu schreiben und dir die Transformation für eine RAM anzusehen.',
	},

	EN: {
		header: 'Choose your workflow',
		content:
			'Wähle Random Access Machine, um ein Programm auf einer RAM auszuführen. Wähle JavaScript, um ein JavaScript-Programm zu schreiben und dir die Transformation für eine RAM anzusehen.',
	},
};

export const ramAppInfo: InfoType = {
	DE: {
		header: 'Programm und Eingabe für die RAM',
		content:
			'Schreibe ein Programm für die RAM, in der Form [Zeilen-Nr.] [Befehl] [{Option}Register/ Immediate-Wert], z. B. 5 LOAD =42. Im Feld Eingabe bestimmst du die Eingabewerte für die RAM, getrennt durch Zeilenumbrüche.',
	},
	EN: {
		header: 'Programm und Eingabe für die RAM',
		content:
			'Schreibe ein Programm für die RAM, in der Form [Zeilen-Nr.] [Befehl] [{Option}Register/ Immediate-Wert], z. B. 5 LOAD =42. Im Feld Eingabe bestimmst du die Eingabewerte für die RAM, getrennt durch Zeilenumbrüche.',
	},
};

export const jsAppInfo: InfoType = {
	DE: {
		header: 'JavaScript (lite) Programm',
		content:
			'Schreibe ein Programm in JavaScript (lite). Wähle hierfür Code-Komponenten aus und trage deine Werte ein. Du kannst das Programm speichern oder ein gespeichertes Programm öffnen. Bist du fertig, klicke auf Kompilieren.',
	},
	EN: {
		header: 'JavaScript (lite) Program',
		content:
			'Schreibe ein Programm in JavaScript (lite). Wähle hierfür Code-Komponenten aus und trage deine Werte ein. Du kannst das Programm speichern oder ein gespeichertes Programm öffnen. Bist du fertig, klicke auf Kompilieren.',
	},
};
