const a = {
    b: {
        c: 3,
        d: () => 4
    }
}

console.log(a?.b?.c);
console.log(a?.b?.d());
console.log(a?.b?.e);
