let myBook = {
    title: 'title string',
    author: 'author string',
    page: 888
}

let otherBook = {
    title: 'other title string',
    author: 'other author string',
    page: 444
}

let getSummary = (book)=>{
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook);
getSummary(otherBook);

let objSummary = (book) => {
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.page} pages long`
    }
}

console.log(objSummary(myBook));
console.log(objSummary(otherBook));

/* CHALLENGE: create function that reurns object with all 3 degrees */

let convertDegree = (far)=>{
    return{
        celcius: Math.round((far - 32) * (5 / 9)),
        farenheit: far,
        kelvin: Math.round((far + 459.67) * (5 / 9))
    }
}

let degrees = convertDegree(32);

console.log(degrees.celcius);
