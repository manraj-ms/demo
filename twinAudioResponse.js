import dotenv from "dotenv";
dotenv.config();
import TwinProtocol from "twin-protocol-dev";

const _twin = new TwinProtocol({
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY,
    clientId: process.env.CLIENT_ID
});

const main = async () => {
    try {
        // text to be spoken by avatar
        let input = "Hi, I’m Russell Peters! I am a comedian known for blending sharp wit with cultural humor that connects with audiences worldwide.";
        // id of an avatar
        let twinId = "6790c405fb57459ffaf3a61d";
        const resp = await _twin.streamTextAndAudioResponse(input, twinId)
        console.log(resp);
    } catch (error) {
        console.error(error.message);
    }
};

main();