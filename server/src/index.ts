import 'reflect-metadata'
import { createKoaServer } from "routing-controllers"
import setupDb from './db'
import AdvController from './advertisements/controller'

const app = createKoaServer({
    cors: true,
    controllers: [AdvController]
})

// setupDb()
//   .then(_ =>
//     app.listen(4000, () => console.log('Backend srv is listening on port 4000'))
//   )
//   .catch(err => console.error(err))

const port = process.env.PORT || 4000

setupDb()
    .then(_ =>
        app.listen(port, () => console.log('Backend srv is listening on port 4000'))
    )
    .catch(err => console.error(err))