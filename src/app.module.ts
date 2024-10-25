import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import appConfig from 'src/global/config/app.config'
import { ReviewModule } from 'src/reviews/reviews.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    ReviewModule,
  ],
})
export class AppModule {}
