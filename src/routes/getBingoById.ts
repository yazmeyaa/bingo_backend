import redisClient from "config/redis";
import { Request, Response } from "express";

function getBingoById(req: Request, res: Response) {
    const id = parseInt(req.query.id as string)
    redisClient.get(id.toString())
        .then(data => {
            if (!data) return res.status(400).send({ error: 'Бинго с таким ID не существует!' })
            const parsedData = JSON.parse(data)
            res.status(200).send({ ...parsedData })
        })
}

export default getBingoById