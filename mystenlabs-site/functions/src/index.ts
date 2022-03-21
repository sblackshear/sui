import * as functions from 'firebase-functions';
import { subscribeToMysten } from './sendgridAPI';

// code from https://github.com/MystenLabs/sui/blob/sui-io-site/sui_io_site/functions/src/index.ts

/**
 *  API endpoint for Email Subscription using SendGrid API
 *  @param {string} email - email address to subscribe
 */

export const emailSubscribe = functions.https.onRequest(subscribeToMysten);
