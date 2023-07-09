import Openfort from "@openfort/openfort-node";

const openfort = new Openfort(process.env.openfort_sk!);

async function main() {
    try {
        const res = await openfort.players.create({name: "John Doe"});
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

main();
