import { JsonController, Get, Param, NotFoundError, Put, Body, HttpCode, Post} from 'routing-controllers'
import Advertisement from './entity'

@JsonController()
export default class AdvController {

    @Get('/advertisements')
    async allAdv() {
        const advertisements = await Advertisement.find()
        return { advertisements }
    }

    @Get('/advertisements/:id')
    getAdv(
    @Param('id') id: number
    ) {
        return Advertisement.findOne(id)
    }

    @Put('/advertisements/:id')
    async updateAdv(
        @Param('id') id: number,
        @Body() update: Partial<Advertisement>
    ) {
        const adv = await Advertisement.findOne(id)
        if (!adv) throw new NotFoundError('Cannot find advertisement')
        return Advertisement.merge(adv, update).save()
    }

    @Post('/advertisements')
    @HttpCode(201)
    createPage(
        @Body() adv: Advertisement
    ) {
        return adv.save()
    }
}