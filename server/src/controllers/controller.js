const agents = require("../data/agents.json");
const logs = require("../data/logs.json");
const resolution = require("../data/resolution.json");

module.exports.getTableCalls = (req, res) => {
    console.log(agents)
    res.send({
        status: 200,
        message: "Table calls gotten",
        data:[
            {
                phone: "",
                noOfCalls: "",
                agentName: "",
                time: ""
            }
        ]
    })
}