const fs = require("fs");
const addperson = (id, fname, lname, city, age) => {
    const alldataa = loadInfo()
    const duplicateddata = alldataa.filter((x) => {
        return x.id === id
    })
    if (duplicateddata.length == 0) {
        alldataa.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age,
        })
        savedata(alldataa)
    } else {
        console.log("error duplicated data")
    }
}
const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}
const savedata = (alldataa) => {
    const savedatajson = JSON.stringify(alldataa)
    fs.writeFileSync("data10.json", savedatajson)
}

//////////////////////////////////////////////////////////
//delete data

const deletedata = (id) => {
    const alldata = loadInfo()
    const datatokeep = alldata.filter((x) => {
        return x.id !== id
    })
    savedata(datatokeep)

}
//////////////////////////////////////////////////////////

const readdata = (id) => {
    const alldata = loadInfo()
    const dataread = alldata.find((x) => {
        return x.id == id
    })
    if (dataread) {
        console.log(dataread)
    } else {
        console.log("not found")
    }
}

const addlist = () => {
    const alldata = loadInfo()
    alldata.forEach((x) => {
        console.log(x.fname, x.city)
    })
}

module.exports = {
    addperson,
    deletedata,
    readdata,
    addlist
}