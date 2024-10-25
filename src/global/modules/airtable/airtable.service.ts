import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import Airtable from 'airtable'
import appConfig from 'src/global/config/app.config'

@Injectable()
export class AirtableService {
  private base: Airtable.Base

  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {
    const apiKey = this.config.airtable.apiKey
    const baseId = this.config.airtable.baseId

    Airtable.configure({
      apiKey: apiKey,
    })

    this.base = Airtable.base(baseId)
  }

  async createRecord(tableName: string, fields: any) {
    return this.base(tableName).create([{ fields }])
  }
}
