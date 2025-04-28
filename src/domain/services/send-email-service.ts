export interface SendEmailServiceProps {
    to: string[],
    title: string,
    body: string,
}

export default abstract class SendEmailService {
    protected to: string[]
    protected body: string
    protected title: string

    constructor(to?: string[], title?: string, body?: string) {
        this.title = title ?? ''
        this.to = to ?? []
        this.body = body ?? ''
    }

    abstract get data(): { to: string[], title: string, body: string, }
    abstract send(): Promise<boolean>

    abstract setTitle(text: string): SendEmailService
    abstract setTo(text: string[]): SendEmailService
    abstract setBody(text: string): SendEmailService

}