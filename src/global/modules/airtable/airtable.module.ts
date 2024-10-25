import { Module } from '@nestjs/common'
import { AirtableService } from 'src/global/modules/airtable/airtable.service'

@Module({
  imports: [],
  providers: [AirtableService],
  exports: [AirtableService],
})
export class AirtableModule {}
