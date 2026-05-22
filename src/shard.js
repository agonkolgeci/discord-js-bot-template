/**
 * discord-js-bot-template v14 - SHARDING MODE
 *
 * discord-js-bot-template is an optimized Discord bot structure that lets you easily create your own Discord bot.
 * https://github.com/agonkolgeci/discord-js-bot-template
 */

import { ShardingManager } from "discord.js";

import logger from "./utils/Logger.js";
import dotenv from "dotenv";

await dotenv.config();

const manager = new ShardingManager("./src/index.js", {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/stable/class/ShardingManager

    totalShards: "auto",
    token: process.env["CLIENT_TOKEN"]
});

try {
    await manager.on("shardCreate", shard => logger.info(`Started shard #${shard.id}.`));
    await manager.spawn();

    logger.log("success", `Successfully started the application in SHARDING mode.`);
} catch (exception) {
    logger.log("error", `An critical error occurred while running in sharding mode >> ${exception}`);

    process.exit();
}

export default manager;