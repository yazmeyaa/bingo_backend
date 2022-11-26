import { createClient } from 'redis'
import { appConfig } from 'config/dotenv'

const redisClient = createClient({
    socket: {
        host: appConfig.redis.url
    },
    database: appConfig.redis.database
})

redisClient.connect()

export default redisClient