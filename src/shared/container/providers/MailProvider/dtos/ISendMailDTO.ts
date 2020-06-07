import IParseTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}
export default interface ISandMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseTemplateDTO;
}
