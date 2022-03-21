import * as sendgrid from '@sendgrid/mail';
import * as client from '@sendgrid/client';

const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY!;
sendgrid.setApiKey(SENDGRID_API_KEY);
client.setApiKey(SENDGRID_API_KEY);

const EMAIL_SENDER = 'info@mystenlabs.com';
const EMAIL_SUBJECT = 'Welcome to Mysten Labs!';
const EMAIL_TEMPLATE_ID = 'd-0ed1717276a145fc94f569c49394532e';
const CONTACT_LIST_IDS = ['c74c6c9e-8039-4993-aefb-eb78460745fb'];

// Add email to SendGrid list and send welcome email
const addEmailToList = async (email: string) => {
    try {
        const data = {
            list_ids: CONTACT_LIST_IDS,
            contacts: [
                {
                    email: email,
                },
            ],
        };
        const request = {
            url: '/v3/marketing/contacts',
            method: 'PUT' as 'PUT',
            body: data,
        };
        return client.request(request);
    } catch (err) {
        let message;
        if (err instanceof Error) message = err.message;
        throw message;
    }
};

// Send welcome email
export const sendEmail = async (email: string): Promise<any> => {
    try {
        if (!email) {
            throw new Error('No email provided');
        }
        const emailRequest = {
            templateId: EMAIL_TEMPLATE_ID,
            subject: EMAIL_SUBJECT,
            from: EMAIL_SENDER,
            to: email,
        };
        return sendgrid.send(emailRequest);
    } catch (err) {
        let message;
        if (err instanceof Error) message = err.message;
        throw message;
    }
};

export const subscribeToMysten = async (request: any, response: any) => {
    try {
        if (request.method !== 'POST') {
            throw new Error('This request is not allowed');
        }
        const email = request.body.email;
        if (!email) {
            throw new Error('No email provided');
        }

        // / add email to SendGrid Contact List
        await addEmailToList(email);
        // / send welcome email
        await sendEmail(email);
        response.status(200).send('done');
    } catch (err) {
        let message;
        if (err instanceof Error) message = err.message;
        response.status(400).send(message);
    }
};
