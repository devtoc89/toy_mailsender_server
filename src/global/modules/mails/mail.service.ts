import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import appConfig from 'src/global/config/app.config'

@Injectable()
export class MailService {
  private readonly transporter: nodemailer.Transporter

  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.nodemail.auth.id,
        pass: this.config.nodemail.auth.pw,
      },
    })
  }
  async send(opt: Mail.Options): Promise<any> {
    return await this.transporter.sendMail(opt)
  }
}
