const SibApiV3Sdk = require('sib-api-v3-sdk');

require('dotenv').config();

const createContact = (createDoiContact, apiInstance) => {
    return new Promise((resolve, reject) => {
        apiInstance.createDoiContact(createDoiContact).then(
            function () {
                resolve('API called successfully.');
            },
            function (error) {
                reject(error);
            }
        );
    });
};

exports.handler = async function (event, context) {
    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing email' })
        };
    }

    const datas = JSON.parse(event.body);

    if (!datas.email) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing email' })
        };
    }

    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

    const apiInstance = new SibApiV3Sdk.ContactsApi();

    const createDoiContact = new SibApiV3Sdk.CreateDoiContact(); // CreateDoiContact | Values to create the Double opt-in (DOI) contact

    createDoiContact.email = datas.email;
    createDoiContact.includeListIds = [12];
    createDoiContact.templateId = 37;
    createDoiContact.redirectionUrl = 'https://www.ringcp.com/';

    try {
        await createContact(createDoiContact, apiInstance);
    } catch (error) {
        console.log(error);
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Error creating contact' })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Contact created' })
    };
};

// exports.handler = (event, context, callback) => {
//     const doCallback = (code, text) => {
//         callback(null, {
//             statusCode: code,
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: text
//         });
//     };

//     if (!event.body) {
//         doCallback(400, 'Missing email');
//     }

//     const datas = JSON.parse(event.body);

//     if (!datas.email) {
//         doCallback(400, 'Missing email');
//     }

//     axios
//         .post(
//             'https://us12.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID + '/members/',
//             {
//                 // Tell Mailchimp to subscribe this email
//                 status: 'subscribed',
//                 // Note that Mailchimp takes an email_address field, not just email
//                 email_address: datas.email
//             },
//             {
//                 headers: {
//                     Authorization: 'apikey ' + process.env.MAILCHIMP_API_KEY
//                 }
//             }
//         )
//         .then(response => {
//             doCallback(200, response.data.status);
//         })
//         .catch(error => {
//             doCallback(error.response.data.status, error.response.data.title);
//         });
// };
