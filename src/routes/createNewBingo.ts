import redisClient from "config/redis";
import { Request, Response } from "express";

async function createNewBingo(req: Request<undefined, undefined, { template?: string[] }>, res: Response) {
    if (!req.body.template) return res.status(200).send({ error: "Нет данных для бинго!" })
    const bingoTemplate = req.body.template
    const keys = await redisClient.keys('*')
    const newData = {
        id: keys.length,
        values: bingoTemplate
    }
    redisClient.set(keys.length.toString(), JSON.stringify(newData))
    res.status(200).send({ message: "Новое бинго создано!" })
}

export default createNewBingo