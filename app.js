const fs = require("fs")
// fs.writeFileSync("data1.txt","bassem mahmoud")
// fs.appendFileSync("data1.txt"," + beso mahmoud")
// console.log(fs.readFileSync("data1.txt").toString())

// const { require } = require("yargs");

// const x=require("./alldata")
// console.log(x.fname)
// console.log(x.lname)
// console.log(x.city)
// console.log(x.fun(4,5))

// const validator=require("validator")
// console.log(validator.isEmail("beso"))


//lec 2

// console.log(process.argv)
// console.log(process.argv[2])

// const x=process.argv[2];
// if(x==='add'){
//     console.log("you have added an item")
// }else if(x==="delete"){
//     console.log("you have deleted an item")
// }else{
//     console.log("error")
// }

const yargs = require("yargs");

// yargs.command({
//     command: "add",
//     describe: " to add an item",
//     handler: () => {
//         console.log("you have already added an item")
//     }
// })
// console.log(yargs.argv)
const data10 = require("./data10");
const { type } = require("os");
yargs.command({
    command: "add",
    describe: " to add an item",
    builder: {
        fname: {
            describe: "to add desc to fname",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "to add desc to lname",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) => {
        // console.log("you have already added an item")
        data10.addperson(x.id, x.fname, x.lname, x.city, x.age)
    }
})
// console.log(yargs.argv)
// yargs.parse()

yargs.command({
    command: "delete",
    describe: "the delete desc",
    handler: (x) => {
        data10.deletedata(x.id)
    }
})

yargs.command({
    command: "read",
    describe: "the read desc",
    builder: {
        id: {
            describe: "id read",
            demandCommand: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.readdata(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data10.addlist()
    },
})

yargs.parse()

// console.log(yargs.argv)

// const person1={
//     name:"beso",
//     age:21,
//     city: "cairo"
// }
// const person1Json=JSON.stringify(person1)
// console.log(person1Json)

// const personstr=JSON.parse(person1Json)
// console.log(personstr)
// fs.writeFileSync("data10.json",person1Json)

//lec 3