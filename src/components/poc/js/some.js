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
 * */
