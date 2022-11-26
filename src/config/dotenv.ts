import dotenv from 'dotenv'

dotenv.config()

function getValueByName(value: string | undefined, defaultValue = '') {
    return value || defaultValue
}

const appConfig = {
    express: {
        port: getValueByName(process.env.SERVER_PORT, '3001')
    },
    redis: {
        url: getValueByName(process.env.REDIS_URL, 'localhost'),
        database: (process.env.REDIS_DATABASE, 3)
    }
}

export { appConfig }