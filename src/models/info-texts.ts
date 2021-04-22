export const machineSelectorInfo: { [index: string]: any } = {
	DE: {
		header: 'Wähle einen Workflow',
		content:
			'Wähle Random Access Machine, um ein Programm auf einer RAM auszuführen. Wähle JavaScript, um ein JavaScript-Programm zu schreiben und dir die Transformation für eine RAM anzusehen.',
	},
};

export const ramAppInfo: { [index: string]: any } = {
	DE: {
		header: 'Programm und Eingabe für die RAM',
		content:
			'Schreibe ein Programm für die RAM, in der Form [Zeilen-Nr.] [Befehl] [{Option}Register/ Immediate-Wert], z. B. 5 LOAD =42. Im Feld Eingabe bestimmst du die Eingabewerte für die RAM, getrennt durch Zeilenumbrüche.',
	},
};

export const jsAppInfo: { [index: string]: any } = {
	DE: {
		header: 'JavaScript Programm',
		content:
			'Schreibe ein Programm in JavaScript. Wähle hierfür Code-Komponente aus und trage deine Werte ein. Du kannst das Programm speichern oder ein gespeichertes Programm öffnen. Bist du fertig, klicke auf Kompilieren.',
	},
};
