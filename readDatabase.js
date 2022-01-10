const fs = require("fs");

const database = JSON.parse(fs.readFileSync("./database.json"));

const all = {};
const coats = {};
const expressions = {};
const poses = {};
const hues = {};

loadMetadata();
savePatterns();

function loadMetadata(){
    for (let i = 0; i < database.length; i++) {
        let metadata = database[i];

        // Patterns
        let coat = metadata.coat;
        let expression = metadata.exp;
        let pose = metadata.pose;
        let keyAll = coat+'-'+expression+'-'+pose;
        let keyCoat = coat;
        let keyExp = coat+'-'+expression;
        let keyPose = coat+'-'+pose;
        let keyHue = metadata.hue;
        if (!all[keyAll]) {
            all[keyAll] = 0;
        }
        if (!coats[keyCoat]) {
            coats[keyCoat] = 0;
        }
        if (!expressions[keyExp]) {
            expressions[keyExp] = 0;
        }
        if (!poses[keyPose]) {
            poses[keyPose] = 0;
        }
        if (!hues[keyPose]) {
            hues[keyPose] = 0;
        }
        
        all[keyAll]++
        coats[keyCoat]++
        expressions[keyExp]++
        poses[keyPose]++
    }
    console.log('all: ',all);
    console.log('coats: ',coats);
    console.log('expressions: ',expressions);
    console.log('poses: ',poses);
}

function savePatterns(){
    let allRows = [];
    for (let i in all) {
        let v = all[i];

        allRows.push({
            score : i,
            count: v
        })
    }
    fs.writeFileSync('./src/store/data/all.json', JSON.stringify(allRows));
    console.log('All JSON file was written successfully');

    let coatRows = [];
    for (let i in coats) {
        let v = coats[i];

        coatRows.push({
            score : i,
            count: v
        })
    }
    fs.writeFileSync('./src/store/data/coats.json', JSON.stringify(coatRows));
    console.log('Coats JSON file was written successfully');

    let expRows = [];
    for (let i in expressions) {
        let v = expressions[i];

        expRows.push({
            score : i,
            count: v
        })
    }

    fs.writeFileSync('./src/store/data/expressions.json', JSON.stringify(expRows));
    console.log('Expressions JSON file was written successfully');

    let poseRows = [];
    for (let i in poses) {
        let v = poses[i];

        poseRows.push({
            score : i,
            count: v
        })
    }

    fs.writeFileSync('./src/store/data/poses.json', JSON.stringify(poseRows));
    console.log('Poses JSON file was written successfully');
}
