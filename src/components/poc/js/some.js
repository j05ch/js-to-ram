// ADD =2, ADD =3, STORE 1, LOAD =0
let a = 2 + 3;
// ADD 1, ADD =5, STORE 2, LOAD =0
let b = a + 5;
// ADD 1, ADD 2, STORE 3, LOAD =0
let c = a + b;
// ADD 2, SUB 1, JGTZ <PC ELSE>, LOAD =0
if (a > b) {
}
// STORE 4, ADD =n, STORE 5
// Statement
// LOAD 5, JGTZ <PC FOR>
for (let i = 0; i < n; i++) {}

// WRITE 1
console.log(a);

/*
 * Ausdrücke auf 2 Operanden beschränken
 *
 * Wenn Variable gelesen wird: Überprüfen, ob es sie schon gibt und sonst in Mapper-Objekt eintragen und Register-Nr. zuordnen
 * Keine neuen Variablen in if, for, while Blöcken
 *
 *     const markVar = mark[0] ? 'text-red-500' : '';
 *   const markOperandLeft = mark[1] ? 'text-red-500' : '';
 *   const markOperandRight = mark[2] ? 'text-red-500' : '';
 *
 * */
let a = 12;
let a = a + b;
let b = a - 1;
let c = 1 * a;
let d = 1 / 1;
a = b;
a = a + b;
b = a - 1;
c = 1 * a;
d = 1 / 1;
if (a > b) {
}
if (b < a) {
}
if (a >= b) {
}
if (b <= a) {
}
if (b == a) {
}
for (let a = 0; a++; a < 10) {}
for (let a = 0; a++; a < b) {}
while (a > 0) {}
while (a > b) {}
