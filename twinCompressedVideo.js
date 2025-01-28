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
        let input = "Hi, I’m Russell Peters, this time in a compressed format! I am a comedian known for blending sharp wit with cultural humor that connects with audiences worldwide.";
        let twinId = "674558374ee39cd63efee8da";
        const resp = await _twin.twinCompressedVideo(input, twinId)
        console.log(resp);
    } catch (error) {
        console.error(error.message);
    }
  };
  
  main();